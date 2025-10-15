const jwt = require('jsonwebtoken');
const User = require('../models/User');

function signToken(user) {
	return jwt.sign({ id: user._id, role: user.role, name: user.name }, process.env.JWT_SECRET, {
		expiresIn: '7d',
	});
}

exports.register = async (req, res) => {
	try {
		const { name, email, password, role } = req.body;
		if (!name || !email || !password || !role) return res.status(400).json({ message: 'Missing fields' });
		const existing = await User.findOne({ email });
		if (existing) return res.status(409).json({ message: 'Email already registered' });
		const passwordHash = await User.hashPassword(password);
		const user = await User.create({ name, email, passwordHash, role });
		const token = signToken(user);
		return res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
	} catch (err) {
		return res.status(500).json({ message: 'Registration failed' });
	}
};

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) return res.status(401).json({ message: 'Invalid credentials' });
		const ok = await user.validatePassword(password);
		if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
		const token = signToken(user);
		return res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
	} catch (err) {
		return res.status(500).json({ message: 'Login failed' });
	}
};

// Simple login for dashboard demo with hardcoded credentials
// TODO: Replace with Google OAuth that enforces @charusat.edu.in and @charusat.ac.in domains
exports.simpleLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		
		// Hardcoded credentials for demo
		const DEMO_EMAIL = 'admin@charusat.edu.in';
		const DEMO_PASSWORD = '12345';
		
		if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
			// Generate a simple token for demo purposes
			const token = `demo-token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
			
			return res.json({
				success: true,
				email: DEMO_EMAIL,
				token: token,
				user: {
					id: 'demo-user-id',
					name: 'Admin User',
					email: DEMO_EMAIL,
					role: 'student'
				}
			});
		}
		
		return res.status(401).json({ 
			success: false,
			message: 'Invalid credentials. Use admin@charusat.edu.in / 12345' 
		});
	} catch (err) {
		return res.status(500).json({ 
			success: false,
			message: 'Login failed' 
		});
	}
};

