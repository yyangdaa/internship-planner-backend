const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  dateApplied: { type: Date, required: true },
  status: { type: String, enum: ['Applied', 'In Progress', 'Rejected', 'Accepted'], default: 'Applied' },
  currentRound: { type: String },
  outcome: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
  // New Fields for Interview
  interviewDate: { type: Date }, // Date for the interview
  interviewNotes: { type: String }, // Additional notes or reminders
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
