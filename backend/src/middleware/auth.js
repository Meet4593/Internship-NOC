const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
	const authHeader = req.headers.authorization || '';
	const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
	if (!token) return res.status(401).json({ message: 'Missing token' });
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.user = payload; // { id, role }
		return next();
	} catch (_err) {
		return res.status(401).json({ message: 'Invalid token' });
	}
}

function authorize(...allowedRoles) {
	return (req, res, next) => {
		if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
		if (!allowedRoles.includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' });
		return next();
	};
}

module.exports = { authenticate, authorize };

