const express = require('express');
const router = express.Router();

const codingProfilesData = {
  developer: 'Prince Kumar',
  location: 'Patna, Bihar, India – 804407',
  institution: 'Indian Institute of Information Technology Bhagalpur',
  degree: 'Bachelor of Technology in Electronics and Communication Engineering',
  duration: 'Sept 2023 – Jul 2027',
  cgpa: '7.33',
  overallStats: {
    totalProblemsSolved: '550+',
    platformsCount: 3,
    activeStreakDays: 120,
    sihRank: 'Top 16 Finalist',
    tataImaginationRank: '140,000+ Shortlisted'
  },
  profiles: [
    {
      platform: 'LeetCode',
      username: 'princesharma89',
      rating: 'Active',
      badge: 'LeetCode Profile',
      solvedCount: 300,
      breakdown: { easy: 100, medium: 170, hard: 30 },
      topPercentile: 'Algorithms & Data Structures',
      profileUrl: 'https://leetcode.com/u/princesharma89/',
      color: '#FFA116'
    },
    {
      platform: 'GeeksforGeeks',
      username: 'prince323dcs8',
      rating: 'Active',
      badge: 'GFG Profile',
      solvedCount: 150,
      breakdown: { dsa: 120, core: 30 },
      topPercentile: 'Core CS & DSA Practice',
      profileUrl: 'https://www.geeksforgeeks.org/profile/prince323dcs8?tab=activity',
      color: '#2F8D46'
    },
    {
      platform: 'CodingNinjas / Code360',
      username: 'c65b8fe2-c96e-4231-ae66-7b7743d3b0b9',
      rating: 'Active',
      badge: 'CodingNinjas Profile',
      solvedCount: 100,
      breakdown: { arrays: 40, trees: 30, graphs: 30 },
      topPercentile: 'Problem Solving',
      profileUrl: 'https://www.naukri.com/code360/profile/c65b8fe2-c96e-4231-ae66-7b7743d3b0b9',
      color: '#03A9F4'
    }
  ]
};

// @route   GET /api/stats
// @desc    Get DSA & Competitive Programming statistics
// @access  Public
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: codingProfilesData
  });
});

module.exports = router;
