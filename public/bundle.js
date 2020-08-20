"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// arr: '1mYsTxnqsietFxj1OgoGbG'
// sana: '5FVBduYaeVBb6JIghza7v6'
// arivu: '7rVV9d6vc4FLT752uRuk71'
// hiphop: '7zFBW2JxM4bgTTKxCRcS8Q'
// yogib: '614RN5ndeqpLlqg1yDbjtm'
// yuvan: '6AiX12wXdXFoGJ2vk8zBjy'
// ilayaraja: '3m49WVMU4zCkaVEKb8kFW7'
var artistsIds = ['1mYsTxnqsietFxj1OgoGbG', '5FVBduYaeVBb6JIghza7v6', '7rVV9d6vc4FLT752uRuk71', '7zFBW2JxM4bgTTKxCRcS8Q', '614RN5ndeqpLlqg1yDbjtm', '6AiX12wXdXFoGJ2vk8zBjy', '3m49WVMU4zCkaVEKb8kFW7'];
var folder = document.getElementById('folder');
var arrayArtists = [];
var array = [];
function getToken() {
    return __awaiter(this, void 0, void 0, function () {
        var clientId, clientSecret, result, data, accessToken_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    clientId = '9a65f9a7001c4cdfa8a9b2bf105df65d';
                    clientSecret = '638fe2a6de504112824880ab4c2fbd1b';
                    return [4 /*yield*/, fetch('https://accounts.spotify.com/api/token', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
                            },
                            body: 'grant_type=client_credentials'
                        })];
                case 1:
                    result = _b.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    data = _b.sent();
                    accessToken_1 = data.access_token;
                    document.getElementById('artistsId').addEventListener('click', function () {
                        document.getElementById("folder").innerHTML = "";
                        getArtists(accessToken_1);
                    });
                    document.getElementById('genreId').addEventListener('click', function () {
                        document.getElementById("folder").innerHTML = "";
                        getGenres(accessToken_1);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    _a = _b.sent();
                    alert('Try loading the page once again');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getArtists(token) {
    return __awaiter(this, void 0, void 0, function () {
        var i, id, result, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < artistsIds.length)) return [3 /*break*/, 5];
                    id = artistsIds[i];
                    return [4 /*yield*/, fetch("https://api.spotify.com/v1/artists/" + id, {
                            method: 'GET',
                            headers: { 'Authorization': 'Bearer ' + token }
                        })];
                case 2:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 3:
                    data = _a.sent();
                    document.getElementById("folder").insertAdjacentHTML('beforeend', "<option id=\"f1\" value=" + i + ">" + data.name + "</option>");
                    console.log(i);
                    arrayArtists.push(data.name);
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5:
                    arrayArtists = [];
                    document.getElementById('folder').addEventListener('click', function () {
                        var value = document.getElementById('f1').id;
                        console.log(value);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function getArtistsAlbums(token, id) {
    return __awaiter(this, void 0, void 0, function () {
        var result, genreData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.spotify.com/v1/artists/" + id + "/albums", {
                        method: 'GET',
                        headers: { 'Authorization': 'Bearer ' + token }
                    })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    genreData = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getAlbumTrackList(token, id) {
    return __awaiter(this, void 0, void 0, function () {
        var result, genreData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.spotify.com/v1/albums/" + id + "/tracks", {
                        method: 'GET',
                        headers: { 'Authorization': 'Bearer ' + token }
                    })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    genreData = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getTrack(token) {
    return __awaiter(this, void 0, void 0, function () {
        var result, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks", {
                        method: 'GET',
                        headers: { 'Authorization': 'Bearer ' + token }
                    })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getGenres(token) {
    return __awaiter(this, void 0, void 0, function () {
        var result, data, genreArray, len, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
                        method: 'GET',
                        headers: { 'Authorization': 'Bearer ' + token }
                    })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    data = _a.sent();
                    genreArray = data.categories.items;
                    len = (data.categories.items).length;
                    for (i = 0; i < len; i++) {
                        document.getElementById("folder").insertAdjacentHTML('beforeend', "<option value=" + i + ">" + data.categories.items[i].name + "</option>");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getGenresPlaylist(token, genreId) {
    return __awaiter(this, void 0, void 0, function () {
        var limit, result, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    limit = 10;
                    return [4 /*yield*/, fetch("https://api.spotify.com/v1/browse/categories/" + genreId + "/playlists?limit=" + limit, {
                            method: 'GET',
                            headers: { 'Authorization': 'Bearer ' + token }
                        })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.playlists.items];
            }
        });
    });
}
