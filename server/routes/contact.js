const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { ContactModel, inMemoryContacts } = require('../models/Contact');
const { getDBStatus } = require('../config/db');

// @route   POST /api/contact
// @desc    Submit a contact form message
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Message).'
      });
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : 'Portfolio Inquiry',
      message: message.trim(),
      createdAt: new Date()
    };

    const dbStatus = getDBStatus();

    if (dbStatus.connected) {
      const newContact = new ContactModel(contactData);
      await newContact.save();
      console.log(`[Contact API] Saved message from ${contactData.name} (${contactData.email}) to MongoDB.`);
    } else {
      inMemoryContacts.push({
        id: Date.now().toString(),
        ...contactData
      });
      console.log(`[Contact API] Stored message from ${contactData.name} (${contactData.email}) in In-Memory storage.`);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out, Prince has received your message and will respond shortly!',
      data: {
        name: contactData.name,
        email: contactData.email,
        timestamp: contactData.createdAt
      }
    });
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error processing contact request. Please try again or email directly.'
    });
  }
});

// @route   GET /api/contact (Protected or Dev endpoint)
// @desc    Get all submitted contact messages
// @access  Public (for demo inspection)
router.get('/', async (req, res) => {
  try {
    const dbStatus = getDBStatus();
    let messages = [];

    if (dbStatus.connected) {
      messages = await ContactModel.find().sort({ createdAt: -1 });
    } else {
      messages = inMemoryContacts.slice().reverse();
    }

    return res.json({
      success: true,
      count: messages.length,
      storageMode: dbStatus.mode,
      data: messages
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
