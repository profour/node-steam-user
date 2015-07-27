var Steam = require('steam');
var SteamUser = require('../index.js');
var SteamID = require('steamid');

SteamUser.prototype.createAccount = function(accountName, password, email, question, answer, callback) {
	this._send(Steam.EMsg.ClientCreateAccountProto, {
		"account_name": accountName,
		"password": password,
		"email": email,
		"question": question,
		"answer": answer,
		"launcher": 0
	}, function(body) {
		callback(body.eresult, body.steamid ? new SteamID(body.steamid.toString()) : null);
	});
};

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientEmailAddrInfo] = function(body) {
	this.emit('emailInfo', body.email_address, body.email_is_validated);
	this.emailInfo = {
		"address": body.email_address,
		"validated": body.email_is_validated
	};
};

SteamUser.prototype._handlers[Steam.EMsg.ClientIsLimitedAccount] = function(body) {
	this.emit('accountLimitations', body.bis_limited_account, body.bis_community_banned, body.bis_locked_account, body.bis_limited_account_allowed_to_invite_friends);
	this.limitations = {
		"limited": body.bis_limited_account,
		"communityBanned": body.bis_community_banned,
		"locked": body.bis_locked_account,
		"canInviteFriends": body.bis_limited_account_allowed_to_invite_friends
	};
};

SteamUser.prototype._handlers[Steam.EMsg.ClientWalletInfoUpdate] = function(body) {
	this.emit('wallet', body.has_wallet, body.currency, body.balance / 100);
	this.wallet = {
		"hasWallet": body.has_wallet,
		"currency": body.currency,
		"balance": body.balance / 100
	};
};
