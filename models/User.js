const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  showsAttended: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Show'
    }
  ],
  showsListened: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Show'
    }
  ],
  showsPlaylist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Show'
    }
  ]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
