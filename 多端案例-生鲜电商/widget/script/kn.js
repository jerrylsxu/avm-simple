/*
 * APICloud JavaScript Library
 * Copyright (c) 2014 apicloud.com
 */
var $kn = (function(){
    var u = {};

    u.byId = function(id) {
        return document.getElementById(id);
    }

    u.ajax = function(p, callback) {
        var param = p;
        if (!param.headers) {
            param.headers = {};
        }
        param.headers['x-apicloud-mcm-key'] = 'cZKzX7DabDmYyfez';
        if (param.data && param.data.body) {
            param.headers['Content-Type'] = 'application/json; charset=utf-8';
        }
        if (param.url) {
            var baseUrl = 'https://a8888888888888-pd.apicloud-saas.com/api/';
            param.url = baseUrl + param.url;
        }
        api.ajax(param, function(ret, err) {
            if (callback) callback(ret, err);
            if (ret) {
                var status =  ret.status;
                if (status && status == 4001) {
                    var didShowLogoutAlert = api.getGlobalData({
                        key: 'didShowLogoutAlert'
                    });
                    if (!didShowLogoutAlert) {
                        api.setGlobalData({
                            key: 'didShowLogoutAlert',
                            value: true
                        });

                        u.setUserInfo('');
                        api.alert({
                            msg: '登录已失效，请重新登录'
                        }, function() {
                            api.setGlobalData({
                                key: 'didShowLogoutAlert',
                                value: false
                            });
                            api.closeToWin({
                                name: 'root'
                            });
                        });
                    }
                }
            }
        });
    }

    u.getUserInfo = function() {
        var value = api.getPrefs({
            key: 'userInfo',
            sync: true
        });
        return value?JSON.parse(value):'';
    }

    u.setUserInfo = function(userInfo) {
        api.setPrefs({
            key: 'userInfo',
            value: userInfo
        });
    }

    u.getCurrentCityInfo = function() {
        var value = api.getPrefs({
            key: 'currentCity',
            sync: true
        });
        return value?JSON.parse(value):'';
    }

    u.setCurrentCityInfo = function(cityInfo) {
        api.setPrefs({
            key: 'currentCity',
            value: cityInfo
        });
    }

    u.getWareTypeList = function() {
        var value = api.readFile({
            sync: true,
            path: 'fs://WareTypeList'
        });
        return value?JSON.parse(value):'';
    }

    u.setWareTypeList = function(list) {
        api.writeFile({
            path: 'fs://WareTypeList',
            data: JSON.stringify(list)
        });
    }
    
    window.$kn = u;
	return u;
})();

export default $kn;