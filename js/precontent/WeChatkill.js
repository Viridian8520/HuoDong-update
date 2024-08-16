import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

const packs = function () {
    var WeChatkill = {
        name: 'WeChatkill',
        connect: true,
        characterSort: {
            WeChatkill: {
                wechat_standard: ['wechat_sp_wangcan', 'wechat_xushi', 'wechat_baosanniang', 'wechat_litong', 'wechat_yj_zhoubuyi', 'wechat_jsp_huangyueying', 'wechat_re_gongsunzan', 'wechat_guanyinping', 'wechat_sp_machao', 'wechat_pangdegong', 'wechat_gongsunyuan', 'wechat_xusheng', 'wechat_yufan', 'wechat_handang', 'wechat_wanglang', 'wechat_huanghao', 'wechat_caiyong', 'wechat_yj_huangzhong', 'wechat_zhangzhang', 'wechat_chendeng', 'wechat_taoqian', 'wechat_kanze', 'wechat_xuezong', 'wechat_guyong', 'wechat_guansuo', 'wechat_zumao', 'wechat_yj_jushou', 'wechat_sp_pangde', 'wechat_caojie', 'wechat_zhuling', 'wechat_caizhenji', 'wechat_guohuanghou', 'wechat_yanyan', 'wechat_liaohua', 'wechat_liuyao', 'wechat_quancong', 'wechat_xiahouba', 'wechat_sp_jiangwei', 'wechat_caoxiu', 'wechat_yuanshao', 'wechat_sundeng', 'wechat_re_xushu', 'wechat_caopi', 'wechat_caozhang', 'wechat_buzhi', 'wechat_sp_taishici', 'wechat_masu', 'wechat_caifuren', 'wechat_jianyong', 'wechat_lukang', 'wechat_caozhi', 'wechat_huangyueying', 'wechat_weiyan', 'wechat_gaoshun', 'wechat_sunliang', 'wechat_wangping', 'wechat_sp_caiwenji', 'wechat_caochong', 'wechat_huangzhong', 'wechat_xiahouyuan', 'wechat_pangde', 'wechat_sunshangxiang', 'wechat_xuzhu', 'wechat_guanyu', 'wechat_caocao', 'wechat_shenpei', 'wechat_jiaxu', 'wechat_caoren', 'wechat_liuqi', 'wechat_zhaoxiang', 'wechat_caiwenji', 'wechat_menghuo', 'wechat_re_yuanshu', 'wechat_huaxiong', 'wechat_xiahoushi', 'wechat_xushu', 'wechat_zhaoyun', 'wechat_zhangfei', 'wechat_machao', 'wechat_yangxiu', 'wechat_lvmeng', 'wechat_zhoutai', 'wechat_bianfuren', 'wechat_sunluban', 'wechat_wuguotai', 'wechat_liubiao', 'wechat_liuchen', 'wechat_luxun', 'wechat_pangtong', 'wechat_zhangxingcai', 'wechat_zuoci', 'wechat_mayunlu', 'wechat_ruanhui'],
                wechat_extra: ['wechat_shen_zhugeliang', 'wechat_shen_lvmeng', 'wechat_shen_guanyu'],
                wechat_zhiyin: ['wechat_sunce', 'wechat_xunyu', 'wechat_zhenji', 'wechat_re_xuzhu', 'wechat_re_yuanshao', 'wechat_lusu', 'wechat_guojia', 'wechat_lvbu', 'wechat_daqiao', 'wechat_xiaoqiao', 'wechat_re_caocao', 'wechat_zhugeliang', 'wechat_simayi', 'wechat_re_machao', 'wechat_re_huangyueying'],
                wechat_sb: ['wechat_sb_sunshangxiang', 'wechat_sb_zhaoyun'],
            },
        },
        character: {
            //标准异构武将
            wechat_menghuo: ['male', 'shu', 4, ['wechathuoshou', 'wechatzaiqi']],
            wechat_re_yuanshu: ['male', 'qun', 4, ['wechatwangzun', 'wechattongji']],
            wechat_huaxiong: ['male', 'qun', 6, ['wechatyaowu']],
            wechat_lvmeng: ['male', 'wu', 4, ['wechatkeji']],
            wechat_xiahoushi: ['female', 'shu', 3, ['wechatqiaoshi', 'wechatyanyu']],
            wechat_xushu: ['male', 'shu', 3, ['wechatwuyan', 'wechatjujian']],
            wechat_zhaoyun: ['male', 'shu', 4, ['wechatlongdan', 'wechatyajiao'], ['tempname:re_zhaoyun', 'die:re_zhaoyun']],
            wechat_zhangfei: ['male', 'shu', 4, ['paoxiao', 'wechatshemao']],
            wechat_machao: ['male', 'shu', 4, ['mashu', 'wechattieji']],
            wechat_yangxiu: ['male', 'wei', 3, ['wechatdanlao', 'wechatjilei']],
            wechat_zhoutai: ['male', 'wu', 4, ['wechatbuqu', 'wechatfenji']],
            wechat_bianfuren: ['female', 'wei', 3, ['wechatwanwei', 'wechatyuejian'], ['die:ol_bianfuren']],
            wechat_sunluban: ['female', 'wu', 3, ['wechatzenhui', 'wechatrejiaojin'], ['die:xin_sunluban']],
            wechat_wuguotai: ['female', 'wu', 3, ['wechatganlu', 'buyi']],
            wechat_liubiao: ['male', 'qun', 3, ['wechatrezishou', 'wechatzongshi']],
            wechat_liuchen: ['male', 'shu', 4, ['zhanjue', 'wechatqinwang']],
            wechat_luxun: ['male', 'wu', 3, ['wechatreqianxun', 'relianying'], ['die:re_luxun']],
            wechat_pangtong: ['male', 'shu', 3, ['lianhuan', 'wechatniepan', 'wechathuzhu']],
            wechat_zhangxingcai: ['female', 'shu', 3, ['wechatshenxian', 'wechatqiangwu']],
            wechat_zuoci: ['male', 'qun', 3, ['wechatyigui', 'wechatshendao']],
            wechat_mayunlu: ['female', 'shu', 4, ['wechatfengpo', 'mashu']],
            wechat_caiwenji: ['female', 'qun', 3, ['wechatbeige', 'wechatduanchang']],
            wechat_zhaoxiang: ['female', 'shu', 4, ['wechatrefanghun', 'wechatrefuhan']],
            wechat_liuqi: ['male', 'qun', 3, ['spwenji', 'wechattunjiang'], ['die:sp_liuqi']],
            wechat_caoren: ['male', 'wei', 4, ['wechatjushou']],
            wechat_jiaxu: ['male', 'qun', 3, ['wechatwansha', 'wechatluanwu', 'weimu']],
            wechat_shenpei: ['male', 'qun', '2/3', ['wechatshouye', 'wechatliezhi']],
            wechat_caocao: ['male', 'wei', 4, ['wechatjianxiong']],
            wechat_guanyu: ['male', 'shu', 4, ['new_rewusheng', 'wechatqinglong']],
            wechat_xuzhu: ['male', 'wei', 4, ['wechatluoyi']],
            wechat_sunshangxiang: ['female', 'wu', 3, ['wechatjieyin', 'xiaoji']],
            wechat_pangde: ['male', 'qun', 4, ['mashu', 'wechatmengjin']],
            wechat_xiahouyuan: ['male', 'wei', 4, ['wechatshensu']],
            wechat_huangzhong: ['male', 'shu', 4, ['wechatliegong']],
            wechat_caochong: ['male', 'wei', 3, ['chengxiang', 'wechatrenxin']],
            wechat_sp_caiwenji: ['female', 'wei', 3, ['wechatchenqing', 'wechatmozhi']],
            wechat_wangping: ['male', 'shu', 4, ['minifeijun', 'wechatbinglve']],
            wechat_sunliang: ['male', 'wu', 3, ['minikuizhu', 'wechatchezheng']],
            wechat_gaoshun: ['male', 'qun', 4, ['xianzhen', 'minijinjiu']],
            wechat_caozhi: ['male', 'wei', 3, ['wechatluoying', 'wechatjiushi']],
            wechat_huangyueying: ['female', 'shu', 3, ['wechatjizhi', 'wechatqicai']],
            wechat_weiyan: ['male', 'shu', 4, ['wechatkuanggu', 'qimou'], ['tempname:re_weiyan', 'die:re_weiyan']],
            wechat_lukang: ['male', 'wu', 4, ['drlt_qianjie', 'wechatjueyan', 'drlt_huairou']],
            wechat_jianyong: ['male', 'shu', 3, ['wechatqiaoshui', 'wechatjyzongshi']],
            wechat_caifuren: ['female', 'qun', 3, ['wechatxinqieting', 'rexianzhou']],
            wechat_masu: ['male', 'shu', 3, ['wechatsanyao', 'rezhiman']],
            wechat_sp_taishici: ['male', 'qun', 4, ['wechatjixu']],
            wechat_buzhi: ['male', 'wu', 3, ['hongde', 'wechatdingpan']],
            wechat_caozhang: ['male', 'wei', 4, ['wechatrejiangchi']],
            wechat_caopi: ['male', 'wei', 3, ['xingshang', 'wechatfangzhu']],
            wechat_sp_jiangwei: ['male', 'wei', 4, ['wechatkunfen', 'wechatfengliang'], ['tempname:sp_jiangwei']],
            wechat_caoxiu: ['male', 'wei', 4, ['qianju', 'wechatqingxi']],
            wechat_yuanshao: ['male', 'qun', 4, ['wechatluanji'], ['die:re_yuanshao']],
            wechat_sundeng: ['male', 'wu', 4, ['wechatkuangbi']],
            wechat_re_xushu: ['male', 'shu', 4, ['wechatzhuhai', 'qianxin']],
            wechat_xiahouba: ['male', 'shu', 4, ['wechatrebaobian'], ['tempname:xiahouba']],
            wechat_liuyao: ['male', 'qun', 4, ['wechatkannan']],
            wechat_quancong: ['male', 'wu', 4, ['wechatyaoming']],
            wechat_liaohua: ['male', 'shu', 4, ['wechatdangxian', 'wechatfuli']],
            wechat_yanyan: ['male', 'shu', 4, ['wechatjuzhan']],
            wechat_guohuanghou: ['female', 'wei', 3, ['wechatjiaozhao', 'wechatdanxin']],
            wechat_caizhenji: ['female', 'wei', 3, ['wechatsheyi', 'wechattianyin']],
            wechat_zhuling: ['male', 'wei', 4, ['wechatzhanyi']],
            wechat_caojie: ['female', 'qun', 3, ['wechatshouxi', 'huimin']],
            wechat_sp_pangde: ['male', 'wei', 4, ['mashu', 'wechatrejuesi']],
            wechat_yj_jushou: ['male', 'qun', 3, ['wechatjianying', 'shibei']],
            wechat_zumao: ['male', 'wu', 4, ['miniyinbing', 'wechatjuedi']],
            wechat_guansuo: ['male', 'shu', 4, ['wechatzhengnan', 'xiefang'], ['tempname:guansuo']],
            wechat_zhangzhang: ['male', 'wu', 3, ['wechatzhijian', 'guzheng']],
            wechat_chendeng: ['male', 'qun', 3, ['zhouxuan', 'wechatfengji']],
            wechat_taoqian: ['male', 'qun', 3, ['zhaohuo', 'wechatyixiang', 'yirang']],
            wechat_kanze: ['male', 'wu', 3, ['xiashu', 'wechatkuanshi']],
            wechat_xuezong: ['male', 'wu', 3, ['minifunan', 'wechatjiexun']],
            wechat_guyong: ['male', 'wu', 3, ['wechatshenxing', 'bingyi']],
            wechat_yj_huangzhong: ['male', 'qun', 4, ['wechatshidi', 'spyishi', 'spqishe']],
            wechat_caiyong: ['male', 'qun', 3, ['wechatbizhuan', 'wechattongbo']],
            wechat_xusheng: ['male', 'wu', 4, ['wechatpojun']],
            wechat_yufan: ['male', 'wu', 3, ['zongxuan', 'wechatzhiyan']],
            wechat_handang: ['male', 'wu', 3, ['gongji', 'wechatjiefan']],
            wechat_wanglang: ['male', 'wei', 3, ['gushe', 'wechatjici']],
            wechat_huanghao: ['male', 'shu', 3, ['wechatqinqing', 'wechathuisheng']],
            wechat_gongsunyuan: ['male', 'qun', 4, ['wechathuaiyi']],
            wechat_ruanhui: ['female', 'wei', 3, ['wechatmingcha', 'wechatjingzhong']],
            wechat_sp_machao: ['male', 'qun', 4, ['minizhuiji', 'wechatshichou']],
            wechat_pangdegong: ['male', 'qun', 3, ['wechatpingcai', 'xinfu_pdgyingshi']],
            wechat_guanyinping: ['female', 'shu', 3, ['wechatxuehen', 'wechathuxiao', 'wechatwuji']],
            wechat_jsp_huangyueying: ['female', 'qun', 3, ['jiqiao', 'wechatlinglong']],
            wechat_re_gongsunzan: ['male', 'qun', 4, ['yicong', 'wechatqiaomeng'], ['tempname:re_gongsunzan']],
            wechat_yj_zhoubuyi: ['male', 'wei', 3, ['mbhuiyao', 'wechatquesong']],
            wechat_litong: ['male', 'wei', 4, ['wechattuifeng']],
            wechat_baosanniang: ['female', 'shu', 3, ['wechatwuniang', 'wechatxushen', 'decadezhennan']],
            wechat_xushi: ['female', 'wu', 3, ['wengua', 'wechatfuzhu']],
            wechat_sp_wangcan: ['male', 'wei', 3, ['wechatspqiai', 'spshanxi']],
            //神武将
            wechat_shen_zhugeliang: ['male', 'shen', 3, ['wechatqixing', 'wechatjifeng', 'wechattianfa'], ['shu']],
            wechat_shen_lvmeng: ['male', 'shen', 3, ['shelie', 'wechatgongxin'], ['wu']],
            wechat_shen_guanyu: ['male', 'shen', 5, ['wechatwushen'], ['shu']],
            //只因武将
            wechat_lvbu: ['male', 'qun', 4, ['wushuang', 'wechatxiaohu'], ['die:true']],
            wechat_daqiao: ['female', 'wu', 3, ['wechatjielie', 'wechatxiangzhi'], ['die:true']],
            wechat_xiaoqiao: ['female', 'wu', 3, ['wechattongxin', 'wechatzhaoyan'], ['die:true']],
            wechat_guojia: ['male', 'wei', 3, ['wechatdingce', 'wechatsuanlve'], ['die:true']],
            wechat_re_caocao: ['male', 'wei', 4, ['wechatdelu', 'wechatzhujiu'], ['die:true']],
            wechat_zhugeliang: ['male', 'shu', 3, ['wechatsangu', 'wechatyanshi'], ['die:true']],
            wechat_simayi: ['male', 'wei', 3, ['wechatyinren', 'wechatduoquan'], ['die:true']],
            wechat_re_machao: ['male', 'qun', 4, ['wechatqipao', 'wechatzhuixi'], ['die:true', 'doublegroup:shu:qun']],
            wechat_re_huangyueying: ['female', 'shu', 3, ['wechatmiaobi', 'wechatrehuixin'], ['die:true']],
            wechat_lusu: ['male', 'wu', 3, ['wechatlvyuan', 'wechathezong'], ['die:true']],
            wechat_re_yuanshao: ['male', 'qun', 4, ['wechathongtu', 'wechatmengshou'], ['die:true']],
            wechat_re_xuzhu: ['male', 'wei', 4, ['wechathuhou', 'wechatwuwei'], ['die:true']],
            wechat_sunce: ['male', 'wu', 4, ['wechattaoni', 'wechatpingjiang', 'wechatdingye'], ['die:true', 'zhu']],
            wechat_xunyu: ['male', 'wei', 3, ['wechatwangzuo', 'wechatjuxian', 'wechatxianshi'], ['die:true']],
            wechat_zhenji: ['female', 'wei', 3, ['wechatshenfu', 'wechatsiyuan'], ['die:true']],
            //谋攻
            wechat_sb_sunshangxiang: ['female', 'shu', 3, ['wechatsbliangzhu', 'wechatsbjieyin'], ['border:wu']],
            wechat_sb_zhaoyun: ['male', 'shu', 4, ['wechatsblongdan', 'wechatsbjizhu']],
        },
        characterIntro: {
        },
        skill: {
            wechathuoshou: {
                group: 'huoshou1',
                audio: 'huoshou1',
                preHidden: 'huoshou1',
                trigger: { global: 'damageBegin2' },
                filter: function (event, player) {
                    return event.card && event.card.name == 'nanman' && player.countCards('he') > 0;
                },
                direct: true,
                locked: true,
                content: function () {
                    'step 0'
                    player.chooseToDiscard('he', get.prompt('wechathuoshou', trigger.player), '弃置一张牌并令此伤害+1').set('goon', get.damageEffect(trigger.player, player, player) > 0).set('ai', function (card) {
                        if (_status.event.goon) return 12 - get.value(card);
                        return 0;
                    }).logSkill = ['wechathuoshou', trigger.player];
                    'step 1'
                    if (result.bool) trigger.num++;
                },
                ai: {
                    expose: 0.25,
                    effect: {
                        target: function (card, player, target) {
                            if (card.name == 'nanman') return 0;
                        },
                    },
                },
            },
            wechatzaiqi: {
                audio: 'zaiqi',
                trigger: { player: 'phaseDrawBegin1' },
                filter: function (event, player) {
                    return player.getAllHistory('useSkill', function (evt) {
                        return evt.skill == 'wechatzaiqi';
                    }).length < 7 && !event.numFixed;
                },
                content: function () {
                    'step 0'
                    trigger.changeToZero();
                    event.cards = get.cards(1 + player.getAllHistory('useSkill', function (evt) {
                        return evt.skill == 'wechatzaiqi';
                    }).length);
                    event.videoId = lib.status.videoId++;
                    game.broadcastAll(function (player, id, cards) {
                        var str;
                        if (player == game.me && !_status.auto) str = '再起：选择获得一种花色的所有牌';
                        else str = '再起';
                        var dialog = ui.create.dialog(str, cards);
                        dialog.videoId = id;
                    }, player, event.videoId, event.cards);
                    event.time = get.utc();
                    game.addVideo('showCards', player, ['再起', get.cardsInfo(event.cards)]);
                    game.addVideo('delay', null, 2);
                    'step 1'
                    var suits = lib.suit.slice(0).filter(function (suit) {
                        return cards.filter(function (card) {
                            return get.suit(card) == suit;
                        }).length;
                    });
                    suits.reverse();
                    player.chooseControl(suits).set('ai', function () {
                        var map = {};
                        for (var card of _status.event.cards) {
                            var suit = get.suit(card);
                            if (!map[suit]) map[suit] = 0;
                            map[suit]++;
                        }
                        return Object.keys(map).sort(function (a, b) {
                            return map[b] - map[a];
                        })[0];
                    }).set('cards', cards);
                    'step 2'
                    event.cards = cards.filter(function (card) {
                        return get.suit(card) == result.control;
                    });
                    var time = 1000 - (get.utc() - event.time);
                    if (time > 0) game.delay(0, time);
                    'step 3'
                    game.broadcastAll('closeDialog', event.videoId);
                    player.gain(cards, 'gain2');
                },
            },
            wechatqixing: {
                audio: 'qixing',
                trigger: { player: 'dying' },
                round: 1,
                content: function () {
                    'step 0'
                    player.judge(function (card) {
                        if (get.number(card) > 7) return 2;
                        return -2;
                    }).judge2 = function (result) {
                        return result.bool ? true : false;
                    };
                    'step 1'
                    if (result.bool) player.recover();
                },
            },
            wechatjifeng: {
                init: function () {
                    lib.onwash.push(function () {
                        delete _status.wechatjifeng_notrick;
                    });
                },
                audio: 'dawu',
                audioname2: { wechat_re_huangyueying: 'wechatjifeng_wechat_re_huangyueying' },
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                check: function (card) {
                    return 5 - get.value(card);
                },
                content: function () {
                    var card = get.cardPile2(function (card) {
                        return get.type2(card) == 'trick';
                    });
                    if (card) player.gain(card, 'gain2');
                    else _status.wechatjifeng_notrick = true;
                },
                ai: {
                    order: 8,
                    player: function (player, target) {
                        if (_status.wechatjifeng_notrick) return 0;
                        return 1;
                    },
                },
                subSkill: {
                    wechat_re_huangyueying: { audio: 'ext:活动武将/audio/skill:2' },
                },
            },
            wechattianfa: {
                marktext: '罚',
                group: 'wechattianfa_damage',
                intro: { name2: '罚', content: 'mark' },
                audio: 'kuangfeng',
                trigger: { player: 'useCard' },
                filter: function (event, player) {
                    if (!player.isPhaseUsing()) return false;
                    return player.getHistory('useCard', function (evt) {
                        return get.type2(evt.card) == 'trick' && evt.getParent('phaseUse') == event.getParent('phaseUse');
                    }).indexOf(event) % 2 == 1;
                },
                forced: true,
                locked: false,
                content: function () {
                    player.addMark('wechattianfa', 1);
                },
                subSkill: {
                    damage: {
                        trigger: { player: 'phaseEnd' },
                        filter: function (event, player) {
                            return player.hasMark('wechattianfa');
                        },
                        direct: true,
                        content: function () {
                            'step 0'
                            player.chooseTarget([1, player.countMark('wechattianfa')], get.prompt('wechattianfa'), '对至多' + get.cnNumber(player.countMark('wechattianfa')) + '名其他角色造成1点伤害', lib.filter.notMe).set('ai', function (target) {
                                var player = _status.event.player;
                                return get.damageEffect(target, player, player);
                            });
                            'step 1'
                            if (result.bool) {
                                var targets = result.targets.sortBySeat();
                                player.logSkill('wechattianfa', targets);
                                for (var i of targets) i.damage();
                            }
                        },
                    },
                },
            },
            wechatwangzun: {
                audio: 'wangzun',
                trigger: { global: 'phaseZhunbeiBegin' },
                filter: function (event, player) {
                    if (event.player == player) return false;
                    return event.player.hp > player.hp || event.player.isMaxHp();
                },
                forced: true,
                logTarget: 'player',
                content: function () {
                    if (trigger.player.hp > player.hp) player.draw();
                    if (trigger.player.isMaxHp()) {
                        trigger.player.addSkill('wechatwangzun2');
                        trigger.player.addMark('wechatwangzun2', 1, false);
                    }
                },
            },
            wechatwangzun2: {
                charlotte: true,
                onremove: true,
                intro: { content: '手牌上限-#' },
                mod: {
                    maxHandcard: function (player, num) {
                        return num - player.countMark('wechatwangzun2');
                    },
                },
            },
            wechattongji: {
                audio: 'tongji',
                trigger: { global: 'useCardToTarget' },
                filter: function (event, player) {
                    return event.card.name == 'sha' && event.player != player && !event.targets.includes(player) &&
                        event.target.inRange(player) && event.target.countCards('he') > 0;
                },
                direct: true,
                content: function () {
                    'step 0'
                    trigger.target.chooseCard('he', '是否对' + get.translation(player) + '发动【同疾】？', '交给' + get.translation(player) + '一张牌，将' + get.translation(trigger.card) + '转移给' + get.translation(player)).set('ai', function (card) {
                        if (!_status.event.check) return -1;
                        return get.unuseful(card) + 9;
                    }).set('check', function () {
                        if (trigger.target.countCards('h', 'shan')) {
                            return -get.attitude(trigger.target, player);
                        }
                        if (get.attitude(trigger.target, player) < 5) {
                            return 6 - get.attitude(trigger.target, player);
                        }
                        if (trigger.target.hp == 1 && player.countCards('h', 'shan') == 0) {
                            return 10 - get.attitude(trigger.target, player);
                        }
                        if (trigger.target.hp == 2 && player.countCards('h', 'shan') == 0) {
                            return 8 - get.attitude(trigger.target, player);
                        }
                        return -1;
                    }() > 0);
                    'step 1'
                    if (result.bool) {
                        trigger.target.logSkill('wechattongji', player);
                        player.gain(result.cards, trigger.target, 'giveAuto');
                        var evt = trigger.getParent();
                        evt.triggeredTargets2.remove(trigger.target);
                        evt.targets.remove(trigger.target);
                        evt.targets.push(player);
                    }
                },
            },
            wechatyaowu: {
                audio: 'yaowu',
                trigger: { target: 'useCardToTargeted' },
                filter: function (event, player) {
                    return event.card.name == 'sha';
                },
                forced: true,
                content: function () {
                    if (get.color(trigger.card) == 'red') trigger.getParent().directHit.add(player);
                    else player.draw();
                },
            },
            wechatkeji: {
                audio: 'keji',
                trigger: { player: 'useCard' },
                filter: function (event, player) {
                    return player.isPhaseUsing() && get.type(event.card) == 'basic';
                },
                forced: true,
                locked: false,
                content: function () {
                    player.draw();
                    player.addTempSkill('wechatkeji2');
                    player.addMark('wechatkeji2', 1, false);
                },
            },
            wechatkeji2: {
                onremove: true,
                intro: { content: '手牌上限+#' },
                mod: {
                    maxHandcard: function (player, num) {
                        return num + player.countMark('wechatkeji2');
                    },
                },
            },
            wechatqiaoshi: {
                audio: 'qiaoshi',
                trigger: { global: 'phaseEnd' },
                filter: function (event, player) {
                    return !player.isMaxHandcard();
                },
                forced: true,
                locked: false,
                content: function () {
                    player.draw();
                },
            },
            wechatyanyu: {
                audio: 'yanyu',
                inherit: 'reyanyu',
                group: 'wechatyanyu2',
            },
            wechatyanyu2: {
                trigger: { player: 'phaseUseEnd' },
                filter: function (event, player) {
                    return player.getHistory('lose', function (evt) {
                        var evt2 = evt.getParent(4);
                        return evt2.name == 'useSkill' && evt2.skill == 'wechatyanyu' && evt.getParent(6) == event;
                    }).length && game.hasPlayer(function (current) {
                        return current.hasSex('male') && current != player;
                    });
                },
                direct: true,
                content: function () {
                    'step 0'
                    event.num = Math.min(player.getHistory('lose', function (evt) {
                        var evt2 = evt.getParent(4);
                        return evt2.name == 'useSkill' && evt2.skill == 'wechatyanyu' && evt.getParent(6) == trigger;
                    }).length, 2);
                    player.chooseTarget(get.prompt('wechatyanyu'), '令一名男性角色摸' + get.cnNumber(event.num) + '张牌', function (card, player, target) {
                        return target.hasSex('male') && target != player;
                    }).set('ai', function (target) {
                        return get.attitude(_status.event.player, target);
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechatyanyu', target);
                        target.draw(event.num);
                    }
                },
            },
            wechatwuyan: {
                audio: 'xinwuyan',
                trigger: { player: 'damageBegin4' },
                filter: function (event, player) {
                    return get.type2(event.card) == 'trick';
                },
                forced: true,
                content: function () {
                    trigger.cancel();
                },
                ai: {
                    notrick: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.type(card) == 'trick' && get.tag(card, 'damage')) return 'zeroplayertarget';
                        },
                    },
                },
            },
            wechatjujian: {
                audio: 'xinjujian',
                trigger: { player: 'phaseJieshuBegin' },
                filter: function (event, player) {
                    return player.countCards('he') > player.countCards('he', { type: 'basic' });
                },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseCardTarget({
                        prompt: get.prompt2('wechatjujian'),
                        filterTarget: true,
                        position: 'he',
                        filterCard: function (card, player) {
                            return get.type(card) != 'basic' && lib.filter.cardDiscardable(card, player);
                        },
                        ai1: function (card) {
                            if (get.tag(card, 'damage') && get.type(card) == 'trick') return 20;
                            return 9 - get.value(card);
                        },
                        ai2: function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (att > 0) {
                                if (target.hp == 1) att += 3;
                            }
                            return att;
                        },
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill('wechatjujian', target);
                        if (target != player) player.addExpose(0.2);
                        player.discard(result.cards);
                        if (target.hp == target.maxHp && !target.isTurnedOver() && !target.isLinked()) {
                            target.draw(2);
                            event.finish();
                        }
                        else {
                            var controls = ['draw_card'];
                            if (target.hp < target.maxHp) controls.push('recover_hp');
                            target.chooseControl(controls).ai = function () {
                                if (target.hp == 1 && target.maxHp > 2) return 'recover_hp';
                                else if (target.hp == 2 && target.maxHp > 2 && target.countCards('h') > 1) return 'recover_hp';
                                else return 'draw_card';
                            }
                        }
                    }
                    else event.finish();
                    'step 2'
                    switch (result.control) {
                        case 'recover_hp': target.recover(); break;
                        case 'draw_card': target.draw(2); break;
                    }
                },
            },
            wechatlongdan: {
                mod: {
                    cardUsable: function (card, player, num) {
                        if (card.storage && card.storage.wechatlongdan) return Infinity;
                    },
                    aiValue: function (player, card, num) {
                        if (card.name != 'sha' && card.name != 'shan') return;
                        var geti = function () {
                            var cards = player.getCards('hs', card => card.name == 'sha' || card.name == 'shan');
                            if (cards.includes(card)) return cards.indexOf(card);
                            return cards.length;
                        };
                        return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                    },
                    aiUseful: function () {
                        return lib.skill.wechatlongdan.mod.aiValue.apply(this, arguments);
                    },
                },
                locked: false,
                audio: 'longdan_sha',
                audioname: ['re_zhaoyun'],
                audioname2: { wechat_zhaoxiang: 'fanghun' },
                enable: ['chooseToUse', 'chooseToRespond'],
                position: 'hs',
                prompt: '将【杀】/【闪】当作【闪】/【杀】使用或打出',
                viewAs: function (cards, player) {
                    if (cards.length) {
                        var name = false;
                        switch (get.name(cards[0], player)) {
                            case 'sha': name = 'shan'; break;
                            case 'shan': name = 'sha'; break;
                        }
                        if (name) return { name: name, storage: { wechatlongdan: true } };
                    }
                    return null;
                },
                check: (card) => 1,
                filterCard: function (card, player, event) {
                    event = event || _status.event;
                    var filter = event._backup.filterCard;
                    var name = get.name(card, player);
                    if (name == 'sha' && filter({ name: 'shan', storage: { wechatlongdan: true }, cards: [card] }, player, event)) return true;
                    if (name == 'shan' && filter({ name: 'sha', storage: { wechatlongdan: true }, cards: [card] }, player, event)) return true;
                    return false;
                },
                filter: function (event, player) {
                    if (event.filterCard(get.autoViewAs({ name: 'sha', storage: { wechatlongdan: true } }, 'unsure'), player, event) && player.countCards('hs', 'shan')) return true;
                    if (event.filterCard(get.autoViewAs({ name: 'shan', storage: { wechatlongdan: true } }, 'unsure'), player, event) && player.countCards('hs', 'sha')) return true;
                    return false;
                },
                precontent: function () {
                    event.getParent().addCount = false;
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter: function (player, tag) {
                        var name;
                        switch (tag) {
                            case 'respondSha': name = 'shan'; break;
                            case 'respondShan': name = 'sha'; break;
                        }
                        if (!player.countCards('hs', name)) return false;
                    },
                    order: function (item, player) {
                        if (player && _status.event.type == 'phase') return get.order({ name: 'sha' }) + 0.3;
                        return 4;
                    },
                },
            },
            wechatyajiao: {
                audio: 'reyajiao',
                trigger: { player: ['useCard', 'respond'] },
                filter: function (event, player) {
                    if (_status.currentPhase == player) return false;
                    return player.hasHistory('lose', evt => {
                        if (evt.getParent() != event) return false;
                        return event.cards.some(card => evt.hs.includes(card));
                    });
                },
                frequent: true,
                content: function () {
                    player.draw();
                },
            },
            wechatqinggang: {
                derivation: 'qinggang_skill',
                mod: {
                    attackRange: function (player, num) {
                        if (player.hasEmptySlot(1)) return num + 1;
                    },
                },
                audio: 'qinggang_skill',
                inherit: 'qinggang_skill',
                filter: function (event, player) {
                    if (!player.hasEmptySlot(1)) return false;
                    return event.card.name == 'sha';
                },
            },
            wechatshemao: {
                mod: {
                    targetInRange: function (card) {
                        if (_status.event.skill == 'wechatshemao') return true;
                    },
                },
                audio: 'zhangba_skill',
                enable: 'chooseToUse',
                usable: 1,
                filterCard: true,
                selectCard: 2,
                position: 'hs',
                viewAs: { name: 'sha' },
                viewAsFilter: function (player) {
                    return player.isPhaseUsing() && player.countCards('hs') >= 2;
                },
                complexCard: true,
                filter: function (event, player) {
                    return player.isPhaseUsing() && player.countCards('hs') >= 2;
                },
                audio: true,
                prompt: '将两张手牌当作【杀】使用或打出',
                check: function (card) {
                    if (card.name == 'sha') return 0;
                    return 5 - get.value(card);
                },
                ai: {
                    respondSha: true,
                    skillTagFilter: function (player) {
                        return player.countCards('hs') >= 2;
                    },
                },
            },
            wechattieji: {
                audio: 'tieji',
                shaRelated: true,
                trigger: { player: 'useCardToPlayered' },
                filter: function (event, player) {
                    return event.card.name == 'sha';
                },
                check: function (event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
                logTarget: 'target',
                content: function () {
                    'step 0'
                    player.judge(function (card) {
                        if (get.color(card) == 'red') return 2;
                        return -0.5;
                    }).set('judge2', function (result) {
                        return result.bool;
                    }).set('callback', function () {
                        if (get.position(card, true) == 'o' && get.color(card) == 'black') player.gain(card, 'gain2');
                    });
                    'step 1'
                    if (result.bool) trigger.getParent().directHit.add(trigger.target);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter: function (player, tag, arg) {
                        if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha' || !ui.cardPile.firstChild || get.color(ui.cardPile.firstChild, player) != 'red') return false;
                    },
                },
            },
            wechatwushen: {
                mod: {
                    cardUsable: function (card, player) {
                        if (card.name == 'sha' && ['heart', 'unsure'].includes(get.suit(card))) return Infinity;
                    },
                    targetInRange: function (card, player) {
                        if (card.name == 'sha' && ['diamond', 'unsure'].includes(get.suit(card))) return true;
                    },
                },
                audio: 'wushen',
                enable: 'chooseToUse',
                filterCard: function (card, player) {
                    return get.color(card) == 'red';
                },
                position: 'hes',
                viewAs: { name: 'sha' },
                viewAsFilter: function (player) {
                    return player.countCards('hes', { color: 'red' });
                },
                prompt: '将一张红色牌当作【杀】使用',
                check: function (card) {
                    return 5 - get.value(card);
                },
                ai: {
                    respondSha: true,
                    skillTagFilter: function (player) {
                        if (!player.countCards('hes', { color: 'red' })) return false;
                    },
                },
            },
            wechatxiaohu: {
                mod: {
                    selectTarget: function (card, player, num) {
                        if (card.name == 'sha' && num[1] != -1) num[1]++;
                    },
                },
                audio: 'shenji',
                //trigger:{player:'phaseUseBegin'},
                enable: 'phaseUse',
                usable: 1,
                filter: function (event, player) {
                    return player.countCards('h');
                },
                filterCard: lib.filter.cardDiscardable,
                check: function (card) {
                    var player = _status.event.player;
                    if (card.name == 'sha') return 0;
                    if (!player.countCards('hs', { name: 'sha' })) return 7 - get.value(card);
                    return 4.5 - get.value(card);
                },
                content: function () {
                    //'step 0'
                    //player.chooseToDiscard('h',get.prompt('wechatxiaohu'),'弃置一张手牌并从牌堆中获得一张【杀】').set('ai',function(card){
                    //var player=_status.event.player;
                    //if(card.name=='sha') return 0;
                    //if(!player.countCards('hs',{name:'sha'})) return 7-get.value(card);
                    //return 4.5-get.value(card);
                    //}).logSkill='wechatxiaohu';
                    //'step 1'
                    //if(result.bool){
                    var card = get.cardPile2(card => card.name == 'sha');
                    if (card) player.gain(card, 'gain2');
                    //}
                },
                ai: {
                    order: (item, player) => get.order({ name: 'sha' }) + 0.3,
                    result: { player: 1 },
                },
                group: 'wechatxiaohu_log',
                subSkill: {
                    log: {
                        charlotte: true,
                        forceaudio: true,
                        audio: 'shenji',
                        trigger: { player: 'useCard1' },
                        filter: function (event, player) {
                            if (!player.hasSkill('wechatxiaohu')) return false;
                            return event.card.name == 'sha' && event.targets.length > 1;
                        },
                        priority: 15,
                        forced: true,
                        locked: false,
                        content: function () { },
                    },
                },
            },
            wechatdanlao: {
                audio: 'danlao',
                enable: 'phaseUse',
                usable: 1,
                delay: 0,
                content: function () {
                    'step 0'
                    event.list = [];
                    for (var i of game.players) if (i != player) event.list.push(i);
                    player.draw(game.players.length);
                    'step 1'
                    var cards = result;
                    if (get.itemtype(cards) != 'cards') {
                        event.goto(5);
                        return;
                    }
                    var hs = player.getCards('h');
                    cards = cards.filter(function (card) {
                        return hs.includes(card);
                    });
                    if (!cards.length) {
                        event.goto(5);
                        return;
                    }
                    event.cards = cards;
                    if (_status.connectMode) game.broadcastAll(function () { _status.noclearcountdown = true });
                    event.given_map = {};
                    'step 2'
                    player.chooseCardTarget({
                        filterCard: function (card) {
                            return _status.event.cards.includes(card) && !card.hasGaintag('olsujian_given');
                        },
                        cards: cards,
                        filterTarget: lib.filter.notMe,
                        selectCard: [1, cards.length],
                        prompt: '啖酪：是否将获得的牌分配给其他角色？',
                        ai1: function (card) {
                            if (!ui.selected.cards.length) return 1;
                            return 0;
                        },
                        ai2: function (target) {
                            var player = _status.event.player, card = ui.selected.cards[0];
                            var val = target.getUseValue(card);
                            if (val > 0) return val * get.attitude(player, target) * 2;
                            return get.value(card, target) * get.attitude(player, target);
                        },
                    });
                    'step 3'
                    if (result.bool) {
                        if (event.list.includes(result.targets[0])) event.list.remove(result.targets[0]);
                        var res = result.cards, target = result.targets[0].playerid;
                        player.addGaintag(res, 'olsujian_given');
                        cards.removeArray(res);
                        if (!event.given_map[target]) event.given_map[target] = [];
                        event.given_map[target].addArray(res);
                        if (cards.length) event.goto(2);
                    }
                    'step 4'
                    if (_status.connectMode) {
                        game.broadcastAll(function () {
                            delete _status.noclearcountdown;
                        });
                        game.stopCountChoose();
                    }
                    var map = [], cards = [];
                    for (var i in event.given_map) {
                        var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                        player.line(source, 'green');
                        map.push([source, event.given_map[i]]);
                        cards.addArray(event.given_map[i]);
                    }
                    if (map.length) {
                        player.addExpose(0.3);
                        game.loseAsync({
                            gain_list: map,
                            player: player,
                            cards: cards,
                            giver: player,
                            animate: 'giveAuto',
                        }).setContent('gaincardMultiple');
                    }
                    'step 5'
                    if (!event.list.length) event.finish();
                    else event.list.sortBySeat();
                    'step 6'
                    if (!player.isIn()) {
                        event.finish();
                        return;
                    }
                    var target = event.list.shift();
                    event.target = target;
                    if (!target.canUse({ name: 'sha', isCard: true }, player, false)) event.goto(8);
                    else target.chooseBool('是否视为对' + get.translation(player) + '使用一张【杀】？').set('choice', get.effect(player, { name: 'sha', isCard: true }, target, target) > 0);
                    'step 7'
                    if (result.bool) target.useCard({ name: 'sha', isCard: true }, player, false);
                    'step 8'
                    if (event.list.length) event.goto(6);
                },
                ai: {
                    order: 7,
                    result: { player: 1 },
                },
            },
            wechatjilei: {
                audio: 'jilei',
                trigger: { player: 'damageEnd' },
                filter: function (event, player) {
                    return event.source && event.source.isIn() && (!event.source.storage.wechatjilei2 || !event.source.storage.wechatjilei2.length < 4);
                },
                direct: true,
                content: function () {
                    'step 0'
                    var list = [];
                    for (var suit of lib.suit) {
                        if (!trigger.source.storage.wechatjilei2 || !trigger.source.storage.wechatjilei2.includes(suit)) list.push(suit);
                    }
                    list.reverse();
                    player.chooseControl(list, 'cancel2', function () {
                        var player = _status.event.player, source = _status.event.source;
                        if (get.attitude(player, source) > 0) return 'cancel2';
                        for (var suit of ['heart', 'diamond', 'club', 'spade']) {
                            if (list.includes(suit) && (!source.storage.wechatjilei2 || !source.storage.wechatjilei2.includes(suit)) && source.countCards('h', function (card) {
                                return get.type(card, source) == suit && source.hasValueTarget(card);
                            }) > 1) {
                                return suit;
                                break;
                            }
                        }
                        return list[0];
                    }).set('prompt', get.prompt2('wechatjilei', trigger.source)).set('source', trigger.source);
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill('wechatjilei', trigger.source);
                        player.popup(get.translation(result.control));
                        game.log(player, '选择了', '#y' + get.translation(result.control));
                        trigger.source.addTempSkill('wechatjilei2', { player: 'phaseBegin' });
                        trigger.source.storage.wechatjilei2.add(result.control);
                        trigger.source.updateMarks('wechatjilei2');
                    }
                },
                ai: {
                    maixie_defend: true,
                    threaten: 0.75,
                },
            },
            wechatjilei2: {
                charlotte: true,
                mark: true,
                onremove: true,
                intro: {
                    content: function (storage) {
                        return '不能使用、打出或弃置' + get.translation(storage) + '牌';
                    },
                },
                init: function (player, skill) {
                    if (!player.storage[skill]) player.storage[skill] = [];
                },
                mod: {
                    cardDiscardable: function (card, player) {
                        if (player.storage.wechatjilei2.includes(get.suit(card))) return false;
                    },
                    cardEnabled: function (card, player) {
                        if (player.storage.wechatjilei2.includes(get.suit(card))) return false;
                    },
                    cardRespondable: function (card, player) {
                        if (player.storage.wechatjilei2.includes(get.suit(card))) return false;
                    },
                    cardSavable: function (card, player) {
                        if (player.storage.wechatjilei2.includes(get.suit(card))) return false;
                    },
                },
            },
            wechatgongxin: {
                audio: 'gongxin',
                inherit: 'gongxin',
                content: function () {
                    'step 0'
                    var cards = target.getCards('h');
                    player.chooseButton(2, [
                        '攻心',
                        cards,
                        [['获得此牌', '置于牌堆顶'], 'tdnodes'],
                    ]).set('filterButton', function (button) {
                        var type = typeof button.link;
                        if (ui.selected.buttons.length && type == typeof ui.selected.buttons[0].link) return false;
                        return type == 'string' || get.suit(button.link, get.owner(button.link)) == 'heart';
                    });
                    'step 1'
                    if (result.bool) {
                        if (typeof result.links[0] != 'string') result.links.reverse();
                        var card = result.links[1], choice = result.links[0];
                        player.showCards(card, get.translation(player) + '对' + get.translation(target) + '发动了【攻心】');
                        if (choice == '获得此牌') player.gain([card], target, 'giveAuto');
                        else target.lose(card, ui.cardPile, 'visible', 'insert');
                    }
                },
            },
            wechatbuqu: {
                onremove: function (player) {
                    player.removeGaintag('wechatbuqux');
                },
                mod: {
                    aiOrder: function (player, card, num) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('wechatbuqux')) return num + 0.3;
                    },
                },
                group: 'wechatbuqu_gain',
                audio: 'buqu',
                trigger: { player: ['damageEnd', 'loseHpEnd'] },
                forced: true,
                locked: false,
                content: function () {
                    player.draw().gaintag = ['wechatbuqux'];
                },
                subSkill: {
                    gain: {
                        audio: 'buqu',
                        trigger: { player: ['useCard', 'respond'] },
                        filter: function (event, player) {
                            return player.getHistory('lose', function (evt) {
                                if (evt.getParent() != event) return false;
                                for (var i in evt.gaintag_map) {
                                    if (evt.gaintag_map[i].includes('wechatbuqux')) return true;
                                }
                                return false;
                            }).length;
                        },
                        forced: true,
                        locked: false,
                        content: function () {
                            var type = get.type2(trigger.card);
                            var card = get.cardPile2(function (card) {
                                return get.type(card) == type;
                            });
                            if (card) player.gain(card, 'gain2');
                            else {
                                player.chat('无牌可得？！');
                                game.log('但是牌堆中已经没有' + get.translation(type) + '牌了！');
                            }
                        },
                    },
                },
            },
            wechatbuqux: {},
            wechatfenji: {
                audio: 'fenji',
                inherit: 'new_fenji',
                check: function (event, player) {
                    return get.attitude(player, event.player) > 2 && player.hp + player.countCards('hs', { name: ['tao', 'jiu'] }) > 2;
                },
            },
            wechatwanwei: {
                audio: 'wanwei',
                inherit: 'jujian',
                position: 'h',
                content: function () {
                    var list = [];
                    target.draw(cards.length);
                    for (var card of cards) if (!list.includes(get.type2(card))) list.push(get.type2(card));
                    if (list.length == cards.length) player.recover();
                },
            },
            wechatyuejian: {
                audio: 'yuejian',
                inherit: 'spshude',
            },
            wechatganlu: {
                audio: 'ganlu',
                enable: 'phaseUse',
                filter: function (event, player) {
                    if (!player.countCards('h')) return false;
                    if (player.canMoveCard(null, true)) return true;
                    for (var i = 1; i < 6; i++) {
                        if (!player.getEquips(i).length) {
                            return true;
                            break;
                        }
                    }
                    return false;
                },
                usable: 1,
                filterCard: true,
                check: function (card) {
                    return 7 - get.value(card);
                },
                content: function () {
                    'step 0'
                    var list = [], str = '';
                    if (player.canMoveCard(null, true)) list.push('移动装备牌');
                    for (var i = 1; i < 6; i++) {
                        if (!player.getEquips(i).length) {
                            list.push('置入装备牌');
                            break;
                        }
                    }
                    if (list.includes('移动装备牌')) {
                        str += '移动场上的一张装备牌';
                        if (list.length > 1) str + '，或';
                    }
                    if (list.length > 1) str += '往装备区中随机置入一张装备牌';
                    player.chooseControl(list).set('prompt', '甘露：请选择一项').set('prompt2', str).set('ai', function (card) {
                        if (player.canMoveCard(true, true) && list.includes('移动装备牌')) return '移动装备牌';
                        if (list.includes('置入装备牌')) return '置入装备牌';
                        return list[0];
                    });
                    'step 1'
                    switch (result.control) {
                        case '移动装备牌': player.moveCard().nojudge = true; break;
                        case '置入装备牌':
                            var list = [];
                            for (var i = 1; i < 6; i++) if (!player.getEquips(i).length) list.push('equip' + i);
                            list.randomSort();
                            var card = get.cardPile2(function (card) {
                                return get.type(card) == 'equip' && list.includes(get.subtype(card));
                            });
                            if (card) player.chooseUseTarget(card, 'nopopup', 'noanimate', true);
                            break;
                    }
                },
                ai: {
                    order: 8,
                    result: { player: 1 },
                },
            },
            wechatbuyi: {
                audio: 'buyi',
                trigger: { global: 'phaseBefore', player: 'enterGame' },
                filter: function (event, player) {
                    if (game.countPlayer() < 2) return false;
                    return game.phaseNumber == 0 || event.name != 'phase';
                },
                forced: true,
                locked: false,
                content: function () {
                    'step 0'
                    player.chooseTarget('请选择【补益】的目标', lib.translate.wechatbuyi_info, true).set('ai', function (target) {
                        var player = _status.event.player;
                        return Math.max(0.001, get.threaten(target)) * get.attitude(player, target) * (target == player ? 0.001 : 1);
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.line(target);
                        game.log(player, '选择了', target);
                        player.addSkill('wechatbuyi2');
                        if (target != player) target.addSkill('wechatbuyi2');
                    }
                },
            },
            wechatbuyi2: {
                charlotte: true,
                mark: true,
                intro: { content: '当你于每轮第一次受到伤害后，你可以弃置一张非基本牌，然后回复1点体力。' },
                audio: 'buyi',
                trigger: { player: 'damageEnd' },
                filter: function (event, player) {
                    return player.getRoundHistory('damage').indexOf(event) == 0;
                },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseToDiscard('he', get.prompt('wechatbuyi2'), '弃置一张非基本牌并回复1点体力', function (card) {
                        return get.type(card) != 'basic';
                    }).set('ai', lib.skill.zhiheng.check).logSkill = 'wechatbuyi2';
                    'step 1'
                    if (result.bool) player.recover();
                },
            },
            wechatzishou: {
                audio: 'zishou',
                trigger: { player: 'phaseUseEnd' },
                filter: function (event, player) {
                    return !player.getHistory('useCard', function (evt) {
                        if (evt.targets && evt.targets.length && evt.isPhaseUsing()) {
                            var targets = evt.targets.slice(0);
                            while (targets.includes(player)) targets.remove(player);
                            return targets.length > 0;
                        }
                        return false;
                    }).length;
                },
                frequent: true,
                content: function () {
                    player.draw(game.players.length - 1);
                },
            },
            wechatrezishou: {
                audio: 'zishou',
                inherit: 'zishou',
                content: function () {
                    trigger.num += 3;
                    player.addTempSkill('zishou2');
                },
            },
            wechatzongshi: {
                audio: 'zongshi',
                mod: {
                    maxHandcard: function (player, num) {
                        return num + game.players.length - 1;
                    },
                },
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                filter: function (event, player) {
                    return player.countCards('h') > player.hp;
                },
                content: function () {
                    player.addTempSkill('wechatzongshi_paoxiao');
                    player.addMark('wechatzongshi_paoxiao', game.players.length - 1, false);
                },
                subSkill: {
                    paoxiao: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        marktext: '咆',
                        intro: { content: '出杀次数+#' },
                        mod: {
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return num + player.countMark('wechatzongshi_paoxiao');
                            },
                        },
                    },
                },
            },
            wechatqinwang: {
                audio: 'qinwang1',
                group: 'wechatqinwang1',
                enable: 'chooseToRespond',
                filter: function (event, player) {
                    return !event.wechatqinwang && !player.hasSkill('wechatqinwang3');
                },
                viewAs: { name: 'sha' },
                filterCard: () => false,
                selectCard: -1,
                ai: {
                    order: function () {
                        return get.order({ name: 'sha' }) + 0.3;
                    },
                    respondSha: true,
                    skillTagFilter: function (player, tag, arg) {
                        if (arg != 'respond') return false;
                    },
                },
            },
            wechatqinwang1: {
                charlotte: true,
                trigger: { player: 'respondBefore' },
                filter: function (event, player) {
                    return event.skill == 'wechatqinwang';
                },
                direct: true,
                priority: 15,
                content: function () {
                    'step 0'
                    player.addTempSkill('wechatqinwang3');
                    trigger.getParent().set('wechatqinwang', true);
                    player.chooseTarget('请选择【勤王】的目标', '令其选择是否替你打出一张【杀】', lib.filter.notMe, true).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.attitude(player, target);
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill('wechatqinwang', target);
                        var next = target.chooseToRespond('是否替' + get.translation(player) + '打出一张【杀】？', { name: 'sha' });
                        next.set('ai', function () {
                            var event = _status.event;
                            return get.attitude(event.player, event.source);
                        });
                        next.set('source', player);
                        next.set('wechatqinwang', true);
                        next.set('skillwarn', '替' + get.translation(player) + '打出一张【杀】');
                        next.noOrdering = true;
                        next.autochoose = lib.filter.autoRespondSha;
                    }
                    else {
                        event.finish();
                        trigger.cancel();
                        trigger.getParent().goto(0);
                    }
                    'step 2'
                    if (result.bool) {
                        trigger.card = result.card;
                        trigger.cards = result.cards;
                        trigger.throw = false;
                        target.addExpose(0.2);
                    }
                    else {
                        trigger.cancel();
                        trigger.getParent().goto(0);
                    }
                },
            },
            wechatqinwang3: {
                trigger: { global: ['useCardAfter', 'respondAfter', 'useSkillAfter', 'phaseAfter'] },
                silent: true,
                charlotte: true,
                filter: function (event, player) {
                    return !event.skill || event.skill != 'wechatqinwang';
                },
                content: function () {
                    player.removeSkill('wechatqinwang3');
                },
            },
            //孙鲁班
            wechatzenhui: {
                audio: 'xinzenhui',
                trigger: { player: 'useCardToPlayer' },
                filter: function (event, player) {
                    if (!player.isPhaseUsing()) return false;
                    if (player.hasSkill('wechatzenhui2')) return false;
                    if (event.targets.length > 1) return false;
                    var card = event.card;
                    return card.name == 'sha' || get.type(card) == 'trick';
                },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatzenhui'), function (card, player, target) {
                        if (player == target) return false;
                        var evt = _status.event.getTrigger();
                        return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                    }).set('ai', function (target) {
                        var trigger = _status.event.getTrigger();
                        var player = _status.event.player;
                        return get.effect(target, trigger.card, player, player) + 0.01;
                    });
                    'step 1'
                    if (result.bool) event.target = result.targets[0];
                    else event.finish();
                    'step 2'
                    player.addTempSkill('wechatzenhui2');
                    player.logSkill('wechatzenhui', event.target);
                    event.target.chooseCard('交给' + get.translation(player) + '一张手牌，或成为' +
                        get.translation(trigger.card) + '的额外目标').set('ai', function (card) {
                            return 5 - get.value(card);
                        });
                    'step 3'
                    if (result.bool) {
                        target.give(result.cards, player);
                        trigger.untrigger();
                        trigger.getParent().player = event.target;
                        game.log(event.target, '成为了', trigger.card, '的使用者');
                    }
                    else {
                        game.log(event.target, '成为了', trigger.card, '的额外目标');
                        trigger.getParent().targets.push(event.target);
                    }
                }
            },
            wechatzenhui2: { charlotte: true },
            wechatjiaojin: {
                audio: 'xinjiaojin',
                inherit: 'xinjiaojin',
                filter(event, player) {
                    return event.source && event.source != player && player.countCards('he', { type: 'equip' }) || (player.countCards('he') && _status.connectMode);
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseToDiscard('he', '骄矜：是否弃置一张装备牌防止伤害？', (card, player) => {
                        return get.type(card) == 'equip';
                    }).set('ai', card => {
                        var player = _status.event.player;
                        if (player.hp == 1 || _status.event.getTrigger().num > 1) return 9 - get.value(card);
                        if (player.hp == 2) return 8 - get.value(card);
                        return 7 - get.value(card);
                    }).set('logSkill', 'wechatjiaojin').forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    trigger.cancel();
                },
            },
            //界大虎
            wechatrejiaojin: {
                audio: 'xinjiaojin',
                trigger: { player: 'damageBegin4', },
                filter(event, player) {
                    return event.source && event.source != player && player.countCards('he', { type: 'equip' }) || (player.countCards('he') && _status.connectMode);
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseToDiscard('he', '骄矜：是否弃置一张装备牌防止伤害并获得造成伤害的牌？', (card, player) => {
                        return get.type(card) == 'equip';
                    }).set('ai', card => {
                        var player = _status.event.player;
                        if (player.hp == 1 || _status.event.getTrigger().num > 1) return 9 - get.value(card);
                        if (player.hp == 2) return 8 - get.value(card);
                        return 7 - get.value(card);
                    }).set('logSkill', event.name.slice(0, -5)).forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    trigger.cancel();
                    const cards = trigger.cards?.filterInD();
                    if (cards.length) await player.gain(cards, 'gain2', 'log');
                },
            },
            wechatqianxun: {
                audio: 'reqianxun',
                hiddenCard: function (player, name) {
                    var card = { name: name, isCard: true };
                    var info = get.info(card, false);
                    return get.type(name) == 'trick' && player.countCards('h') == 1 && (!info.notarget && (info.toself || info.singleCard || !info.selectTarget || info.selectTarget == 1));
                },
                enable: 'chooseToUse',
                filter: function (event, player) {
                    if (event.type == 'wuxie') return false;
                    var cards = player.getCards('h');
                    if (cards.length != 1) return false;
                    var mod2 = game.checkMod(cards[0], player, 'unchanged', 'cardEnabled2', player);
                    if (mod2 === false) return false;
                    for (var i of lib.inpile) {
                        var card = { name: i, isCard: true };
                        var info = get.info(card, false);
                        if ((!info.notarget && (info.toself || info.singleCard || !info.selectTarget || info.selectTarget == 1)) && get.type(i) == 'trick' && event.filterCard(get.autoViewAs({ name: i }, cards), player, event)) return true;
                    }
                    return false;
                },
                usable: 1,
                chooseButton: {
                    dialog: function (event, player) {
                        var cards = player.getCards('h');
                        var list = [];
                        for (var i of lib.inpile) {
                            var card = { name: i, isCard: true };
                            var info = get.info(card, false);
                            if ((!info.notarget && (info.toself || info.singleCard || !info.selectTarget || info.selectTarget == 1)) && get.type(i) == 'trick' && event.filterCard(get.autoViewAs({ name: i }, cards), player, event)) {
                                list.push(['锦囊', '', i]);
                            }
                        }
                        return ui.create.dialog('谦逊', [list, 'vcard'], 'hidden');
                    },
                    check: function (button) {
                        var player = _status.event.player;
                        return player.getUseValue({ name: button.link[2] }) + 1;
                    },
                    backup: function (links, player) {
                        return {
                            audio: 'reqianxun',
                            popname: true,
                            filterCard: true,
                            selectCard: -1,
                            position: 'h',
                            viewAs: {
                                name: links[0][2],
                            },
                        }
                    },
                    prompt: function (links, player) {
                        return '将' + get.translation(player.getCards('h')[0]) + '当作' + get.translation(links[0][2]) + '使用';
                    },
                },
                subSkill: {
                    backup: { audio: 'reqianxun' },
                },
                ai: {
                    order: 12,
                    result: {
                        player: 1,
                    },
                },
            },
            wechatreqianxun: {
                audio: 'reqianxun',
                inherit: 'reqianxun',
                async cost(event, trigger, player) {
                    event.result = await player.chooseCard(get.prompt(event.name.slice(0, -5)), '将任意张手牌置于武将牌上', [1, Infinity]).set('ai', card => 1 / (get.value(card) || 0.5)).forResult();
                },
                async content(event, trigger, player) {
                    player.addToExpansion(event.cards, 'giveAuto', player).gaintag.add(event.name + '2');
                    player.addSkill(event.name + '2');
                },
            },
            wechatreqianxun2: {
                charlotte: true,
                audio: 'reqianxun',
                trigger: { global: 'phaseEnd' },
                forced: true,
                content: function () {
                    var cards = player.getExpansions('wechatreqianxun2');
                    if (cards.length) player.gain(cards, 'draw');
                    player.removeSkill('wechatreqianxun2');
                },
                intro: {
                    mark: function (dialog, storage, player) {
                        var cards = player.getExpansions('wechatreqianxun2');
                        if (player.isUnderControl(true)) dialog.addAuto(cards);
                        else return '共有' + get.cnNumber(cards.length) + '张牌';
                    },
                    markcount: 'expansion',
                },
            },
            wechatniepan: {
                audio: 'niepan',
                unique: true,
                enable: 'chooseToUse',
                mark: true,
                skillAnimation: true,
                limited: true,
                animationColor: 'orange',
                filter: function (event, player) {
                    if (event.type == 'dying') {
                        if (player != event.dying) return false;
                        return true;
                    }
                    return false;
                },
                content: function () {
                    'step 0'
                    player.awakenSkill('wechatniepan');
                    player.discard(player.getCards('hej'));
                    'step 1'
                    player.link(false);
                    player.turnOver(false);
                    'step 2'
                    player.draw(3);
                    if (player.hp < 3) player.recover(3 - player.hp);
                    'step 3'
                    player.addSkill('wechatniepan_fireAttack');
                },
                ai: {
                    order: 1,
                    skillTagFilter: function (player, arg, target) {
                        if (player != target || player.storage.wechatniepan) return false;
                    },
                    save: true,
                    result: {
                        player: function (player) {
                            if (player.hp <= 0) return 10;
                            if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                            return 0;
                        }
                    },
                    threaten: 0.6,
                },
                subSkill: {
                    fireAttack: {
                        charlotte: true,
                        mark: true,
                        marktext: '<span class=\'texiaotext\' style=\'color:#FF0000\'>火</span>',
                        intro: { content: '造成的伤害均视为火属性' },
                        trigger: { source: 'damageBegin1' },
                        forced: true,
                        content: function () {
                            game.setNature(trigger, 'fire');
                        },
                        ai: { fireDamage: true },
                    },
                },
            },
            wechathuzhu: {
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechathuzhu')).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.attitude(player, target) * Math.max(1, player.hp - target.hp);
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechathuzhu', target);
                        player.addSkill('wechathuzhu2');
                        player.storage.wechathuzhu2 = target;
                    }
                },
            },
            wechathuzhu2: {
                charlotte: true,
                onremove: true,
                mark: true,
                intro: { content: '保护$ing...' },
                trigger: { global: 'damageBegin4' },
                filter: function (event, player) {
                    return event.num > 0 && event.player == player.storage.wechathuzhu2;
                },
                check: function (event, player) {
                    if (event.player == player) return true;
                    if (player.hp >= Math.max(event.player.hp, 1)) return true;
                    if (player.hp > 1 && event.num > 1) return true;
                    return false;
                },
                logTarget: 'player',
                prompt: '是否发动【护主】？',
                prompt2: '失去1点体力，防止此伤害，然后摸一张牌',
                content: function () {
                    player.loseHp();
                    trigger.cancel();
                    player.draw();
                },
            },
            wechatshenxian: {
                audio: 'shenxian',
                trigger: { global: 'loseAfter' },
                filter: function (event, player) {
                    if (event.type != 'discard') return false;
                    for (var i = 0; i < event.cards2.length; i++) {
                        if (get.type(event.cards2[i], null, event.hs.includes(event.cards2[i]) ? event.player : false) == 'basic') {
                            return true;
                        }
                    }
                    return false;
                },
                frequent: true,
                content: function () {
                    'step 0'
                    if (trigger.delay == false) game.delay();
                    'step 1'
                    player.draw();
                },
            },
            wechatqiangwu: {
                audio: 'qiangwu',
                enable: 'phaseUse',
                filter: function (event, player) {
                    return player.countCards('h');
                },
                usable: 1,
                filterCard: true,
                check: function (card) {
                    var player = _status.event.player;
                    var num = player.countCards('hs', { name: 'sha' });
                    if (num == 0) return 0;
                    if (num == 1) {
                        if (game.hasPlayer(function (current) {
                            return get.effect(current, { name: 'sha' }, player, player) > 0;
                        }) && !game.hasPlayer(function (current) {
                            return get.effect(current, { name: 'sha' }, player, player) > 0 && player.canUse({ name: 'sha' }, current);
                        })) return 7 - get.value(card) * (14 - get.number(card));
                        return 0;
                    }
                    if (num > 1 && game.hasPlayer(function (current) {
                        return get.effect(current, { name: 'sha' }, player, player) > 0 && player.canUse({ name: 'sha' }, current);
                    })) return 7 - get.value(card) * (14 - get.number(card));
                    return 0;
                },
                content: function () {
                    player.storage.wechatqiangwu2 = get.number(cards[0]);
                    player.addTempSkill('wechatqiangwu2');
                },
                ai: {
                    order: 7,
                    result: { player: 1 },
                },
            },
            wechatqiangwu2: {
                charlotte: true,
                onremove: true,
                mod: {
                    targetInRange: function (card, player) {
                        if (card.name == 'sha' && get.number(card) > player.storage.wechatqiangwu2) return true;
                    },
                    cardUsable: function (card, player) {
                        if (card.name == 'sha' && get.number(card) > player.storage.wechatqiangwu2) return Infinity;
                    },
                },
                trigger: { player: 'useCard1' },
                filter: function (event, player) {
                    if (_status.currentPhase == player && event.card.name == 'sha' &&
                        get.number(event.card) > player.storage.wechatqiangwu2 && event.addCount !== false) return true;
                    return false;
                },
                forced: true,
                popup: false,
                firstDo: true,
                content: function () {
                    trigger.addCount = false;
                    if (player.stat[player.stat.length - 1].card.sha > 0) {
                        player.stat[player.stat.length - 1].card.sha--;
                    }
                },
            },
            wechatyigui: {
                audio: 'huashen2',
                trigger: { player: 'useCard2' },
                filter: function (event, player) {
                    if (!player.countCards('he') || !player.isPhaseUsing() || get.type(event.card) != 'trick') return false;
                    if (event.targets && event.targets.length > 0) return true;
                    var info = get.info(event.card);
                    if (info.allowMultiple == false) return false;
                    if (event.targets && !info.multitarget) {
                        if (game.hasPlayer(function (current) {
                            return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                        })) return true;
                    }
                    return false;
                },
                usable: 1,
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseCardTarget({
                        prompt: get.prompt2('wechatyigui'),
                        filterTarget: function (card, player, target) {
                            var trigger = _status.event.getTrigger();
                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                        },
                        filterCard: lib.filter.cardDiscardable,
                        position: 'he',
                        ai1: function (card) {
                            return 6 - get.value(card);
                        },
                        ai2: function (target) {
                            var player = _status.event.player;
                            var trigger = _status.event.getTrigger();
                            return get.effect(target, trigger.card, player, player);
                        },
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0]
                        player.logSkill('wechatyigui', target);
                        player.discard(result.cards);
                        trigger.targets.push(target);
                    }
                    else player.storage.counttrigger.wechatyigui--;
                },
            },
            wechatshendao: {
                audio: 'xinsheng',
                trigger: { player: 'useCardAfter' },
                filter: function (event, player) {
                    return player.isPhaseUsing() && event.targets && event.targets.length && game.hasPlayer(function (current) {
                        return event.targets.includes(current) && !player.getStorage('wechatshendao_mark').includes(current);
                    });
                },
                forced: true,
                locked: false,
                logTarget: function (event, player) {
                    return game.filterPlayer(function (current) {
                        return event.targets.includes(current) && !player.getStorage('wechatshendao_mark').includes(current);
                    }).sortBySeat();
                },
                content: function* (event, map) {
                    var player = map.player;
                    player.addTempSkill('wechatshendao_mark', { player: 'phaseUseAfter' });
                    player.markAuto('wechatshendao_mark', lib.skill.wechatshendao.logTarget(map.trigger, player));
                    player.storage.wechatshendao_mark.sortBySeat();
                    switch (player.getStorage('wechatshendao_mark').length) {
                        case 1:
                            var list = lib.inpile.reduce((list, name) => list.add(get.type2(name)), []);
                            if (list.length) {
                                var result = yield player.chooseControl(list, 'cancel2').set('prompt', '神道：是否选择获得一种类型的牌？').set('ai', function () {
                                    var player = _status.event.player;
                                    var types = _status.event.controls.filter(i => i != 'cancel2');
                                    if (player.hp < 2 && !player.countCards('h', { name: ['shan', 'tao'] }) && types.includes('basic')) return 'basic';
                                    if (player.countCards('he', { type: 'equip' }) < 2 && types.includes('equip')) return 'equip';
                                    if (types.includes('trick')) return 'trick';
                                    return types.randomGet();
                                });
                                if (result.control != 'cancel2') {
                                    player.popup(result.control);
                                    game.log(player, '声明了', '#y' + get.translation(result.control) + '牌');
                                    var card = get.cardPile(card => get.type2(card) == result.control);
                                    if (card) player.gain(card, 'gain2');
                                }
                            }
                            break;
                        case 2:
                            var result = yield player.chooseTarget('神道：是否视为对一名角色使用一张普通锦囊牌？', function (card, player, target) {
                                return lib.inpile.some(name => get.type(name) == 'trick' && player.canUse({ name: name, isCard: true }, target));
                            }).set('ai', target => {
                                var player = _status.event.player;
                                var list = lib.inpile.filter(name => get.type(name) == 'trick' && player.canUse({ name: name, isCard: true }, target));
                                list = list.map(name => get.effect(target, { name: name }, player, player)).sort((a, b) => b - a);
                                return list[0];
                            }).set('animate', false);
                            if (result.bool) {
                                var target = result.targets[0];
                                player.line(target);
                                var list = lib.inpile.filter(name => get.type(name) == 'trick' && player.canUse({ name: name, isCard: true }, target));
                                var result2 = yield player.chooseButton(['神道：视为对' + get.translation(target) + '使用一张普通锦囊牌', [list, 'vcard']], true).set('ai', button => {
                                    var player = _status.event.player, target = _status.event.target;
                                    return get.effect(target, { name: button.link[2] }, player, player);
                                }).set('target', target);
                                if (result2.bool) player.useCard({ name: result2.links[0][2], isCard: true }, target, false);
                            }
                            break;
                        case 3:
                            var targets = player.getStorage('wechatshendao_mark').filter(target => target.isIn()).sortBySeat();
                            if (targets.length) {
                                var result = yield player.chooseBool('神道：是否对' + get.translation(targets) + '各造成1点伤害？').set('choice', targets.reduce((num, target) => num + get.damageEffect(target, player, player), 0) > 0);
                                if (result.bool) {
                                    player.line(targets);
                                    targets.forEach(target => target.damage());
                                }
                            }
                            break;
                        default: break;
                    }
                },
                subSkill: {
                    mark: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '已记录$' },
                    },
                },
            },
            wechatfengpo: {
                shaRelated: true,
                audio: 'fengpo',
                trigger: { player: 'useCardToPlayered' },
                filter: function (event, player) {
                    if (event.targets.length != 1 || !['sha', 'juedou'].includes(event.card.name)) return false;
                    if (!['sha', 'juedou'].includes(event.card.name)) return false;
                    if (player != _status.currentPhase) return false;
                    return player.getHistory('useCard', function (evt) {
                        return ['sha', 'juedou'].includes(evt.card.name);
                    }).indexOf(event.getParent()) == 0;
                },
                logTarget: 'target',
                content: function () {
                    'step 0'
                    player.viewHandcards(trigger.target);
                    player.chooseControl('摸牌', '加伤').set('prompt', '请选择一项');
                    'step 1'
                    var num = Math.max(1, trigger.target.countCards('h', { suit: 'diamond' }));
                    if (result.control == '摸牌') player.draw(num);
                    else {
                        var trigger2 = trigger.getParent();
                        if (typeof trigger2.baseDamage != 'number') trigger2.baseDamage = 1;
                        trigger2.baseDamage += num;
                    }
                },
            },
            wechatjielie: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                usable: 1,
                filterTarget: lib.filter.notMe,
                content: function () {
                    'step 0'
                    player.chooseControl().set('choiceList', [
                        '令' + get.translation(target) + '选择是否使用一张牌',
                        '下次发动【相知】的时候令' + get.translation(target) + '获得同样的效果'
                    ]).set('ai', function () {
                        if (target.hasCard(function (card) {
                            return target.getUseValue(card) > 0 && game.hasPlayer(function (current) {
                                return get.effect(current, card, target, player) > 0;
                            });
                        })) return 0;
                        return 1;
                    });
                    'step 1'
                    if (result.index == 1) {
                        player.addTempSkill('wechatjielie_targets', { player: 'wechatxiangzhiAfter' });
                        player.markAuto('wechatjielie_targets', [target]);
                        event.finish();
                    }
                    else target.chooseToUse({ prompt: '节烈：是否使用一张牌？' });
                    'step 2'
                    if (result.bool) {
                        var card = result.cards[0];
                        if (card.name == 'sha' && get.color(card, target) == 'red') {
                            player.loseHp();
                            delete player.getStat('skill').wechatjielie;
                        }
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target: function (player, target) {
                            if (player.hp + player.countCards('hs', { name: 'tao' }) < 2) return 0;
                            if (target.hasCard(function (card) {
                                return target.getUseValue(card) > 0 && game.hasPlayer(function (current) {
                                    return get.effect(current, card, target, player) > 0;
                                });
                            })) return 2;
                            return 1;
                        },
                    },
                },
                subSkill: {
                    targets: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        intro: { content: '下次发动【相知】时，令$也获得相同的效果' },
                    },
                },
            },
            wechatxiangzhi: {
                mark: true,
                marktext: '🎶',
                intro: {
                    content: function (storage, player) {
                        var str = (storage ? '出牌阶段限一次，你可以回复1点体力。' : '出牌阶段限一次，你可以摸一张牌。');
                        return '<li>当前韵律：' + (storage ? '仄' : '平') + '<br><li>' + str;
                    },
                },
                group: 'wechatxiangzhi_zhuanyun',
                audio: 'ext:活动武将/audio/skill:2',
                yunlvSkill: true,
                enable: 'phaseUse',
                usable: 1,
                content: function () {
                    'step 0'
                    player[player.storage.wechatxiangzhi ? 'recover' : 'draw']();
                    'step 1'
                    var targets = player.getStorage('wechatjielie_targets').filter(i => i.isIn()).sortBySeat();
                    if (targets.length) {
                        targets.forEach(target => {
                            player.line(target);
                            target[player.storage.wechatxiangzhi ? 'recover' : 'draw']();
                        });
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player: function (player, target) {
                            if (player.storage.wechatxiangzhi && player.isHealthy()) return 0;
                            return 1;
                        },
                    },
                },
                subSkill: {
                    zhuanyun: {
                        audio: 'wechatxiangzhi',
                        trigger: { player: 'useSkillAfter' },
                        filter: function (event, player) {
                            return event.skill == 'wechatjielie';
                        },
                        forced: true,
                        locked: false,
                        content: function () {
                            player.changeZhuanhuanji('wechatxiangzhi');
                            if (player.getStat('skill').wechatxiangzhi) delete player.getStat('skill').wechatxiangzhi;
                            game.log(player, '转换了了', '#g【相知】', '的韵律');
                        },
                    },
                },
            },
            wechattongxin: {
                mark: true,
                marktext: '🎶',
                intro: {
                    content: function (storage, player) {
                        var str = '出牌阶段限一次，你可以令一名其他角色交给你一张手牌，然后若其手牌数不大于你，其摸一张牌。';
                        if (storage) str = '出牌阶段限一次，你可以交给一名其他角色一张手牌，然后若其手牌数不小于你，你对其造成1点伤害。';
                        return '<li>当前韵律：' + (storage ? '仄' : '平') + '<br><li>' + str;
                    },
                },
                group: 'wechattongxin_zhuanyun',
                audio: 'ext:活动武将/audio/skill:2',
                yunlvSkill: true,
                enable: 'phaseUse',
                filter: function (event, player) {
                    var yunlv = player.storage.wechattongxin;
                    if (!yunlv && !game.hasPlayer(function (current) {
                        if (current == player) return false;
                        return current.countCards('h');
                    })) return false;
                    if (yunlv && !player.countCards('h')) return false;
                    return true;
                },
                filterTarget: function (card, player, target) {
                    var yunlv = player.storage.wechattongxin;
                    if (target == player) return false;
                    return yunlv || target.countCards('h');
                },
                filterCard: function (card, player) {
                    return player.storage.wechattongxin;
                },
                selectCard: function () {
                    var player = _status.event.player;
                    return player.storage.wechattongxin ? 1 : -1;
                },
                check: function (card) {
                    return 7 - get.value(card);
                },
                discard: false,
                lose: false,
                delay: false,
                usable: 1,
                content: function () {
                    'step 0'
                    if (cards.length) {
                        target.gain(cards, player, 'giveAuto');
                        event.goto(3);
                    }
                    'step 1'
                    target.chooseCard('h', '同心：将一张手牌交给' + get.translation(player), true);
                    'step 2'
                    if (result.bool) player.gain(result.cards, target, 'giveAuto');
                    'step 3'
                    if (player.storage.wechattongxin) {
                        if (target.countCards('h') >= player.countCards('h')) {
                            player.line(target);
                            target.damage();
                        }
                    }
                    else if (target.countCards('h') <= player.countCards('h')) target.draw();
                },
                ai: {
                    order: 7,
                    result: {
                        target: function (player, target) {
                            var yunlv = player.storage.wechattongxin;
                            if (yunlv) {
                                if (player.countCards('h') - target.countCards('h') <= 2) return -1;
                                return 0;
                            }
                            else {
                                if (target.countCards('h') - player.countCards('h') > 2) return -3;
                                return get.sgn(get.attitude(player, target)) * (get.attitude(player, target) > 0 ? 2 : 1);
                            }
                        },
                    },
                },
                subSkill: {
                    zhuanyun: {
                        audio: 'wechattongxin',
                        trigger: { player: 'useCard' },
                        filter: function (event, player) {
                            return player.isPhaseUsing() && !player.hasHistory('useCard', function (evt) {
                                return evt.card != event.card && get.type2(evt.card) == get.type2(event.card);
                            });
                        },
                        forced: true,
                        locked: false,
                        content: function () {
                            player.changeZhuanhuanji('wechattongxin');
                            if (player.getStat('skill').wechattongxin) delete player.getStat('skill').wechattongxin;
                            game.log(player, '转换了了', '#g【同心】', '的韵律');
                        },
                    },
                },
            },
            wechatzhaoyan: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { target: 'useCardToTargeted' },
                filter: function (event, player) {
                    return event.player.countCards('h') > player.countCards('h');
                },
                forced: true,
                locked: false,
                usable: 1,
                content: function () {
                    player.draw();
                },
            },
            wechatbeige: {
                audio: 'beige',
                trigger: { global: 'damageEnd' },
                filter: function (event, player) {
                    return event.card && event.card.name == 'sha' && event.player.isIn() && player.countCards('he');
                },
                usable: 1,
                direct: true,
                preHidden: true,
                content: function () {
                    'step 0'
                    player.chooseToDiscard('he', get.prompt2('wechatbeige', trigger.player)).set('ai', function (card) {
                        var player = _status.event.player;
                        var target = _status.event.target;
                        var att = get.attitude(player, target);
                        switch (get.color(card, player)) {
                            case 'red':
                                if (att > 0) return 7 - get.value(card);
                                return 0;
                                break;
                            case 'black':
                                if (att < 0 && player.canUse('sha', target, false)) return 7 - get.value(card);
                                return 0;
                                break;
                        }
                    }).setHiddenSkill('wechatbeige').set('target', trigger.player).logSkill = ['wechatbeige', trigger.player];
                    'step 1'
                    if (result.bool) {
                        switch (get.color(result.cards[0], player)) {
                            case 'red': trigger.player.draw(2); break;
                            case 'black': if (player.canUse('sha', trigger.player, false)) player.useCard({ name: 'sha', isCard: true }, trigger.player, false); break;
                        }
                    }
                    else player.storage.counttrigger.wechatbeige--;
                },
                ai: { expose: 0.25 },
            },
            wechatduanchang: {
                audio: 'duanchang',
                trigger: { player: 'die' },
                filter: function (event, player) {
                    return event.source && event.source.isIn();
                },
                forced: true,
                forceDie: true,
                logTarget: 'source',
                skillAnimation: true,
                animationColor: 'gray',
                content: function () {
                    trigger.source.addSkill('wechatduanchang_tao');
                },
                subSkill: {
                    tao: {
                        charlotte: true,
                        mark: true,
                        marktext: '<span style="text-decoration: line-through;">桃</span>',
                        intro: { content: '不能使用【桃】' },
                        mod: {
                            cardEnabled2: function (card) {
                                if (card.name == 'tao') return false;
                            },
                            aiValue: function (player, card, num) {
                                if (card.name == 'tao') return 0;
                            },
                        },
                    },
                },
            },
            //赵襄
            //父魂、母魂、蜀魂
            //三魂聚顶武将[doge]
            wechatfanghun: {
                audio: 'fanghun',
                trigger: { global: 'phaseBefore', player: 'enterGame' },
                filter: function (event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                forced: true,
                locked: false,
                content: function () {
                    player.addSkills('wechatlongdan');
                },
                intro: { name: '梅影', content: 'mark' },
                derivation: ['wechatlongdan', 'wechatfengpo'],
                group: ['wechatfanghun_longdan', 'wechatfanghun_fengpo'],
                subSkill: {
                    longdan: {
                        audio: 'fanghun',
                        trigger: { player: 'logSkill' },
                        filter: function (event, player) {
                            return event.skill == 'wechatlongdan' && !player.hasMark('wechatfanghun');
                        },
                        forced: true,
                        locked: false,
                        content: function () {
                            player.addMark('wechatfanghun', 1);
                            player.when('logSkill').filter(event => event.skill == 'wechatfanghun_fengpo').then(() => player.removeMark('wechatfanghun', 1));
                        },
                    },
                    fengpo: {
                        audio: 'fanghun',
                        inherit: 'wechatfengpo',
                        filter: function (event, player) {
                            if (!player.hasMark('wechatfanghun')) return false;
                            return lib.skill.wechatfengpo.filter(event, player);
                        },
                        prompt: function (event, player) {
                            return get.prompt('wechatfengpo', event.target) + '（发动后失去“梅影”标记）';
                        },
                        prompt2: () => lib.translate.wechatfengpo_info,
                    },
                },
            },
            wechatfuhan: {
                derivation: ['new_yijue', 'new_repaoxiao', 'retieji', 'xinliegong'],
                unique: true,
                audio: 'fuhan',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter: function (event, player) {
                    return player.getAllHistory('useSkill', evt => evt.skill == 'wechatfanghun_fengpo').length;
                },
                skillAnimation: true,
                animationColor: 'fire',
                forced: true,
                juexingji: true,
                content: function () {
                    'step 0'
                    player.awakenSkill('wechatfuhan');
                    'step 1'
                    player.loseMaxHp();
                    'step 2'
                    var list = lib.skill.wechatfuhan.derivation.filter(skill => !player.hasSkill(skill));
                    if (list.length) player.chooseControl(list).set('prompt', '扶汉：选择获得一项技能');
                    else event.finish();
                    'step 3'
                    player.addSkills(result.control);
                },
            },
            wechatrefanghun: {
                get mod() {
                    return get.info('refanghun').mod || {};
                },
                locked: false,
                audio: 'fanghun',
                inherit: 'fanghun',
                trigger: { player: 'useCardToPlayered' },
            },
            wechatrefuhan: {
                unique: true,
                audio: 'fuhan',
                trigger: { player: 'phaseBegin' },
                filter: function (event, player) {
                    return player.countMark('fanghun') > 0;
                },
                limited: true,
                skillAnimation: true,
                animationColor: 'orange',
                content: function () {
                    'step 0'
                    player.awakenSkill('wechatrefuhan');
                    var num = player.storage.fanghun;
                    player.removeMark('fanghun', num);
                    player.draw(Math.min(5, num));
                    'step 1'
                    if (!_status.characterlist) lib.skill.pingjian.initList();
                    let list = _status.characterlist.filter(name => get.character(name, 1) == 'shu' || (get.is.double(name, true) || []).includes('shu'));
                    const players = game.players.slice().concat(game.dead);
                    for (let i = 0; i < players.length; i++) {
                        list.remove(players[i].name);
                        list.remove(players[i].name1);
                        list.remove(players[i].name2);
                    }
                    list.remove('wechat_zhaoxiang');
                    if (list.length) player.chooseButton(['扶汉：选择获得一张武将牌上的所有技能', [list.randomGets(5), 'character']], true);
                    else event.goto(3);
                    'step 2'
                    if (result.bool) {
                        var name = result.links[0];
                        player.flashAvatar('wechatrefuhan', name);
                        game.log(player, '获得了', '#y' + get.translation(name), '的所有技能');
                        player.addSkills(lib.character[name][3]);
                    }
                    'step 3'
                    if (player.isMinHp() && player.isDamaged()) player.recover();
                },
            },
            wechattunjiang: {
                audio: 'sptunjiang',
                inherit: 'sptunjiang',
                content: function () {
                    player.draw(game.countPlayer() - 1);
                },
            },
            wechatjushou: {
                audio: 'xinjushou',
                inherit: 'reshengxi',
                content: function () {
                    player.draw(3);
                },
            },
            wechatwansha: {
                group: 'wansha',
                audio: 'wansha',
                trigger: { player: 'phaseUseBegin' },
                filter: function (event, player) {
                    return game.hasPlayer(function (current) {
                        return current != player && current.hp > 1;
                    });
                },
                forced: true,
                content: function () {
                    'step 0'
                    player.chooseTarget(get.prompt('wechatwansha'), '令一名体力值大于1的其他角色失去1点体力，本阶段结束时其回复1点体力', true, function (card, player, target) {
                        return target != player && target.hp > 1;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return -(target.hp <= 2 ? 5 : 1) / target.hp;
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.line(target);
                        target.loseHp();
                        player.when('phaseUseEnd').then(() => {
                            if (target.isIn()) target.recover();
                        }).vars({ target: target });
                    }
                },
            },
            wechatluanwu: {
                audio: 'luanwu',
                inherit: 'luanwu',
                content: function () {
                    'step 0'
                    player.awakenSkill('wechatluanwu');
                    var card = get.cardPile2(card => card.name == 'sha');
                    if (card) player.gain(card, 'gain2');
                    event.current = player;
                    event.currented = [];
                    'step 1'
                    event.currented.push(event.current);
                    event.current.animate('target');
                    event.current.chooseToUse('乱武：使用一张杀或失去1点体力', function (card) {
                        if (get.name(card) != 'sha') return false;
                        return lib.filter.cardEnabled.apply(this, arguments);
                    }, function (card, player, target) {
                        if (target == player || target == _status.event.source) return false;
                        var dist = get.distance(player, target);
                        if (dist > 1) {
                            if (game.hasPlayer(function (current) {
                                return current != player && get.distance(player, current) < dist;
                            })) return false;
                        }
                        return lib.filter.filterTarget.apply(this, arguments);
                    }).set('ai2', function () {
                        return get.effect_use.apply(this, arguments) + 0.01;
                    }).set('addCount', false).set('source', player);
                    'step 2'
                    if (!result.bool) event.current.loseHp();
                    event.current = event.current.next;
                    if (!event.currented.includes(event.current)) {
                        game.delay(0.5);
                        event.goto(1);
                    }
                },
            },
            //审配
            wechatshouye: {
                audio: 'shouye',
                inherit: 'shouye',
                content: function () {
                    'step 0'
                    player.line(trigger.player, 'green');
                    player.chooseToPSS(trigger.player);
                    'step 1'
                    if (result.bool) {
                        trigger.targets.remove(player);
                        trigger.getParent().triggeredTargets2.remove(player);
                        trigger.getParent().shouyeer = player;
                    }
                },
            },
            wechatliezhi: {
                audio: 'liezhi',
                trigger: { player: 'phaseZhunbeiBegin' },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseTarget(get.prompt('wechatliezhi'), '弃置至多两名其他角色区域内的各一张牌', [1, 2], function (card, player, target) {
                        return target != player && target.countDiscardableCards(player, 'hej') > 0;
                    }).ai = function (target) {
                        var player = _status.event.player;
                        return get.effect(target, { name: 'guohe' }, player, player);
                    };
                    'step 1'
                    if (result.bool) {
                        result.targets.sortBySeat();
                        event.targets = result.targets;
                        player.line(result.targets, 'green');
                        player.logSkill('wechatliezhi', result.targets);
                    }
                    else event.finish();
                    'step 2'
                    var target = targets.shift();
                    player.discardPlayerCard(target, 'hej', true)
                    if (targets.length) event.redo();
                },
            },
            //曹操
            wechatjianxiong: {
                audio: 'jianxiong',
                trigger: { source: 'damageSource' },
                filter: function (event, player) {
                    var target = _status.currentPhase;
                    if (!event.card || !target || target != player) return false;
                    var list = [];
                    player.getHistory('gain', function (evt) {
                        if (evt.getParent().name != 'wechatjianxiong') return false;
                        for (var card of evt.cards) list.push(card.name);
                    });
                    return event.cards.filterInD().filter(function (card) {
                        return !list.includes(card.name);
                    }).length;
                },
                frequent: true,
                prompt2: function (event, player) {
                    var list = [];
                    player.getHistory('gain', function (evt) {
                        if (evt.getParent().name != 'wechatjianxiong') return false;
                        for (var card of evt.cards) list.push(card.name);
                    });
                    return '获得' + get.translation(event.cards.filterInD().filter(function (card) {
                        return !list.includes(card.name);
                    }));
                },
                content: function () {
                    var list = [];
                    player.getHistory('gain', function (evt) {
                        if (evt.getParent().name != 'wechatjianxiong') return false;
                        for (var card of evt.cards) list.push(card.name);
                    });
                    player.gain(trigger.cards.filterInD().filter(function (card) {
                        return !list.includes(card.name);
                    }), 'gain2');
                },
            },
            //谋略值
            wechatmoulvenum: {
                changeNum: function (num, player) {
                    if (typeof num != 'number' || num == 0) return;
                    var numx = player.countMark('wechatmoulvenum');
                    if (num > 0 && numx >= 5) return;
                    if (num < 0 && !numx) return;
                    game.addGlobalSkill('wechatmiaoji');
                    num = Math[num > 0 ? 'min' : 'max'](num, (num > 0 ? 5 : 0) - numx);
                    player[num > 0 ? 'addMark' : 'removeMark']('wechatmoulvenum', Math.abs(num), false);
                    game.log(player, (num > 0 ? '获得了' : '失去了'), (num > 0 ? ('#g' + num) : ('#y' + (-num))), '点', '谋略值');
                },
                marktext: '谋',
                intro: {
                    name: '谋略值',
                    content: '当前拥有#点谋略值',
                },
                getMax: 5,
            },
            //极郭嘉
            wechatdingce: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: ['phaseBefore', 'phaseEnd'], player: ['enterGame'] },
                filter: function (event, player, name) {
                    if (player.countMark('wechatmoulvenum') >= lib.skill.wechatmoulvenum.getMax) return false;
                    switch (name) {
                        case 'phaseBefore': case 'enterGame':
                            return name != 'phaseBefore' || game.phaseNumber == 0;
                            break;
                            break;
                        case 'phaseEnd':
                            return player.getHistory('useCard').length;
                            break;
                    }
                    return false;
                },
                forced: true,
                locked: false,
                content: function () {
                    lib.skill.wechatmoulvenum.changeNum(event.triggername != 'phaseEnd' ? 3 : player.getHistory('useCard').reduce((list, evt) => list.add(get.type2(evt.card)), []).length, player);
                },
            },
            wechatsuanlve: {
                init: function (player) {
                    if (player.getHistory('useCard').length) {
                        var history = player.getHistory('useCard')[player.getHistory('useCard').length - 1];
                        player.storage.wechatsuanlve_mark2 = history.card.name;
                        player.storage.wechatsuanlve_mark3 = history.card.nature;
                    }
                },
                hiddenCard: function (player, name) {
                    if (!player.storage.wechatsuanlve_mark2) return false;
                    return name == player.storage.wechatsuanlve_mark2 && player.countCards('hes') && !player.hasSkill('wechatsuanlve_used') && player.countMark('wechatmoulvenum') > player.countMark('wechatsuanlve_count');
                },
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'chooseToUse',
                filter: function (event, player) {
                    if (!player.storage.wechatsuanlve_mark2 || player.hasSkill('wechatsuanlve_used') || !player.countCards('hes') || player.countMark('wechatmoulvenum') <= player.countMark('wechatsuanlve_count')) return false;
                    return event.filterCard(get.autoViewAs({ name: player.storage.wechatsuanlve_mark2, nature: player.storage.wechatsuanlve_mark3 }, 'unsure'), player, event);
                },
                chooseButton: {
                    dialog: function (event, player) {
                        var name = player.storage.wechatsuanlve_mark2;
                        var nature = player.storage.wechatsuanlve_mark3;
                        return ui.create.dialog('算略', [[[get.translation(get.type2(name)), '', name, nature]], 'vcard']);
                    },
                    check: function (button) {
                        var player = _status.event.player, card = { name: button.link[2], nature: button.link[3] };
                        return _status.event.getParent().type == 'phase' ? player.getUseValue(card) : 1;
                    },
                    backup: function (links, player) {
                        return {
                            filterCard: true,
                            position: 'hes',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            ai1: function (card) {
                                return 7 - get.value(card);
                            },
                            precontent: function () {
                                delete event.result.skill;
                                player.logSkill('wechatsuanlve');
                                player.addTempSkill('wechatsuanlve_used');
                                player.addTempSkill('wechatsuanlve_count', 'roundStart');
                                player.addMark('wechatsuanlve_count', 1, false);
                                lib.skill.wechatmoulvenum.changeNum(-player.countMark('wechatsuanlve_count'), player);
                            },
                        }
                    },
                    prompt: function (links, player) {
                        return '失去' + (1 + player.countMark('wechatsuanlve_count')) + '点谋略值，将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                ai: {
                    order: 8,
                    result: { player: 1 },
                    save: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter: function (player, tag, target) {
                        var name = player.storage.wechatsuanlve_mark2;
                        if (target == 'respond') return false;
                        if (!name || player.hasSkill('wechatsuanlve_used') || !player.countCards('hes') || player.countMark('wechatmoulvenum') <= player.countMark('wechatsuanlve_count')) return false;
                        if (tag == 'save') {
                            if (name == 'tao' || target == player) return true;
                            return false;
                        }
                        if (tag == 'respondSha' && name != 'sha') return false;
                        if (tag == 'respondShan' && name != 'shan') return false;
                    },
                },
                group: 'wechatsuanlve_mark',
                subSkill: {
                    used: { charlotte: true },
                    count: {
                        charlotte: true,
                        onremove: true,
                    },
                    mark: {
                        charlotte: true,
                        trigger: {
                            player: ['useCard1', 'respond'],
                            global: ['phaseBefore', 'phaseAfter'],
                        },
                        filter: function (event, player) {
                            if (event.name == 'phaseBegin') return true;
                            return get.type(event.card) == 'basic' || get.type(event.card) == 'trick';
                        },
                        forced: true,
                        popup: false,
                        priority: 11 + 45 + 14,
                        firstDo: true,
                        content: function () {
                            if (event.triggername == 'phaseBeginStart') {
                                delete player.storage.wechatsuanlve_mark2;
                                delete player.storage.wechatsuanlve_mark3;
                            }
                            else {
                                player.storage.wechatsuanlve_mark2 = trigger.card.name;
                                player.storage.wechatsuanlve_mark3 = trigger.card.nature;
                            }
                        },
                    },
                },
            },
            wechatmiaoji: {
                audio: 'ext:活动武将/audio/skill:2',
                audioname2: {
                    wechat_guojia: 'wechatmiaoji_wechat_guojia',
                    wechat_zhugeliang: 'wechatmiaoji_wechat_zhugeliang',
                },
                list: {
                    'guohe': 1,
                    'wuxie': 3,
                    'wuzhong': 3,
                },
                subSkill: {
                    used: { charlotte: true },
                    wechat_guojia: { audio: 'ext:活动武将/audio/skill:2' },
                    wechat_zhugeliang: { audio: 'ext:活动武将/audio/skill:2' },
                },
                enable: 'chooseToUse',
                hiddenCard: function (player, name) {
                    if (player.hasSkill('wechatmiaoji_used')) return false;
                    const list = lib.skill.wechatmiaoji.list;
                    return list[name] && player.countMark('wechatmoulvenum') >= list[name];
                },
                filter: function (event, player) {
                    if (player.hasSkill('wechatmiaoji_used')) return false;
                    var num = player.countMark('wechatmoulvenum');
                    if (!num) return false;
                    const list = lib.skill.wechatmiaoji.list;
                    for (var namex in list) {
                        if (num < list[namex]) continue;
                        if (event.filterCard({ name: namex, isCard: true }, player, event)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog: function (event, player) {
                        var list = [], num = player.countMark('wechatmoulvenum');
                        const listx = lib.skill.wechatmiaoji.list;
                        for (var namex in listx) {
                            if (num < listx[namex]) continue;
                            if (event.filterCard({ name: namex, isCard: true }, player, event)) list.push(['锦囊', '', namex]);
                        }
                        return ui.create.dialog('妙计', [list, 'vcard'], 'hidden')
                    },
                    check: function (button) {
                        var player = _status.event.player;
                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    backup: function (links, player) {
                        return {
                            selectCard: -1,
                            filterCard: () => false,
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                                isCard: true,
                            },
                            precontent: function () {
                                player.logSkill('wechatmiaoji');
                                player.addTempSkill('wechatmiaoji_used');
                                delete event.result.skill;
                                var num = lib.skill.wechatmiaoji.list[event.result.card.name];
                                lib.skill.wechatmoulvenum.changeNum(-num, player);
                            },
                        }
                    },
                    prompt: function (links, player) {
                        var name = links[0][2];
                        var num = lib.skill.wechatmiaoji.list[name];
                        return '失去' + num + '点谋略值，视为使用' + get.translation(name);
                    },
                },
                ai: {
                    order: 1,
                    result: { player: 1 },
                },
            },
            //关羽
            wechatqinglong: {
                derivation: 'qinglong_skill',
                mod: {
                    attackRange: function (player, num) {
                        if (player.hasEmptySlot(1)) return num + 2;
                    },
                },
                audio: 'qinglong_skill',
                trigger: { player: ['shaMiss', 'eventNeutralized'] },
                filter: function (event, player) {
                    if (!player.hasEmptySlot(1) || !event.card || event.card.name != 'sha') return false;
                    return event.target.isIn() && player.canUse('sha', event.target, false) && (player.hasSha() || _status.connectMode && player.countCards('h'));
                },
                direct: true,
                locked: true,
                content: function () {
                    player.chooseToUse(get.prompt('qinglong', trigger.target), function (card, player, event) {
                        if (get.name(card) != 'sha') return false;
                        return lib.filter.filterCard.apply(this, arguments);
                    }, trigger.target, -1).set('addCount', false).logSkill = 'wechatqinglong';
                },
            },
            //许褚
            wechatluoyi: {
                audio: 'luoyi',
                trigger: { source: 'damageBegin2' },
                filter: function (event, player) {
                    return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && player.countCards('he');
                },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseToDiscard('he', get.prompt('wechatluoyi', trigger.player), '弃置一张牌并令此伤害+1').set('goon', get.damageEffect(trigger.player, player, player) > 0).set('ai', function (card) {
                        if (_status.event.goon) return 12 - get.value(card);
                        return 0;
                    }).logSkill = ['wechatluoyi', trigger.player];
                    'step 1'
                    if (result.bool) trigger.num++;
                },
                ai: { expose: 0.25 },
            },
            //孙尚香
            wechatjieyin: {
                audio: 'jieyin',
                enable: 'phaseUse',
                filter: function (event, player) {
                    return game.hasPlayer(function (target) {
                        return target.hasSex('male');
                    }) && player.countCards('he');
                },
                filterTarget: function (card, player, target) {
                    return target.hasSex('male');
                },
                filterCard: true,
                check: function (card) {
                    var player = _status.event.player;
                    if (player.hasSkill('xiaoji') && get.position(card) == 'e') return 8 - get.value(card);
                    return 5 - get.value(card);
                },
                position: 'he',
                usable: 1,
                content: function () {
                    player.draw('nodelay');
                    target.draw();
                },
                ai: {
                    order: 7,
                    result: { target: 1 },
                },
            },
            //庞德
            wechatmengjin: {
                audio: 'jianchu',
                trigger: { player: 'useCardToPlayered' },
                filter: function (event, player) {
                    return event.card.name == 'sha' && event.target.countCards('he');
                },
                check: function (event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
                logTarget: 'target',
                content: function () {
                    'step 0'
                    player.discardPlayerCard('he', trigger.target, true);
                    'step 1'
                    if (result.bool) {
                        if (get.type(result.cards[0]) == 'equip') trigger.getParent().directHit.push(trigger.target);
                        else player.gain(result.cards.filterInD(), 'gain2');
                    }
                },
                ai: {
                    unequip_ai: true,
                    skillTagFilter: function (player, tag, arg) {
                        if (arg && arg.name == 'sha' && arg.target && get.attitude(player, arg.target) <= 0 && arg.target.countCards('he')) return true;
                        return false;
                    },
                },
            },
            //夏侯渊
            wechatshensu: {
                audio: 'shensu1',
                audioname: ['xiahouba'],
                trigger: { player: ['phaseJudgeBefore', 'phaseUseBefore', 'phaseDiscardBefore'] },
                direct: true,
                content: function () {
                    'step 0'
                    var check;
                    switch (trigger.name) {
                        case 'phaseJudge': check = player.countCards('h') > 2; break;
                        case 'phaseUse': check = player.needsToDiscard(); break;
                        case 'phaseDiscard': check = player.needsToDiscard(); break;
                    }
                    var str = ['判定阶段和摸牌', '出牌', '弃牌'][lib.skill.wechatshensu.trigger.player.indexOf(event.triggername)];
                    player.chooseTarget(get.prompt('wechatshensu'), (trigger.name == 'phaseDiscard' ? '失去1点体力并' : '') + '跳过' + str + '阶段并视为对一名其他角色使用一张无视距离和防具的【杀】', function (card, player, target) {
                        if (player == target) return false;
                        return player.canUse({ name: 'sha' }, target, false);
                    }).set('check', check).set('ai', target => {
                        if (!_status.event.check || (_status.event.getTrigger().name == 'phaseDiscard' && player.hp <= target.hp)) return 0;
                        return get.effect(target, { name: 'sha' }, _status.event.player);
                    }).setHiddenSkill('wechatshensu');
                    'step 1'
                    if (result.bool) {
                        trigger.cancel();
                        if (event.triggername == 'phaseJudgeBefore') player.skip('phaseDraw');
                        player.logSkill('wechatshensu', result.targets);
                        if (trigger.name == 'phaseDiscard') player.loseHp();
                        player.useCard({ name: 'sha', isCard: true }, result.targets[0], false).set('audio', false).card.wechatshensu = true;
                    }
                },
                ai: {
                    unequip: true,
                    skillTagFilter: function (player, tag, arg) {
                        if (!arg || !arg.card || arg.card.wechatshensu != true) return false;
                    },
                },
            },
            //黄忠
            wechatliegong: {
                shaRelated: true,
                mod: {
                    targetInRange: function (card, player, target) {
                        if (card.name == 'sha') return true;
                    },
                },
                audio: 'liegong',
                trigger: { player: 'useCardToTargeted' },
                filter: function (event, player) {
                    if (event.card.name != 'sha') return false;
                    return player.countCards('h') >= event.target.countCards('h');
                },
                forced: true,
                locked: false,
                logTarget: 'target',
                content: function () {
                    trigger.getParent().directHit.push(trigger.target);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter: function (player, tag, arg) {
                        if (arg.card.name == 'sha' && player.countCards('h', function (card) {
                            return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card));
                        }) >= arg.target.countCards('h')) return true;
                        return false;
                    },
                },
            },
            //曹冲
            wechatrenxin: {
                audio: 'renxin',
                trigger: { global: 'damageBegin4' },
                filter: function (event, player) {
                    if (player.hasSkill('wechatrenxin_used')) return false;
                    return event.player != player && event.player.hp <= event.num && player.countCards('he');
                },
                checkx: function (event, player) {
                    if (get.attitude(player, event.player) < 0) return false;
                    var num = player.countCards('h', function (card) {
                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                        if (mod2 != 'unchanged') return mod2;
                        var mod = game.checkMod(card, player, event.player, 'unchanged', 'cardSavable', player);
                        if (mod != 'unchanged') return mod;
                        var savable = get.info(card).savable;
                        if (typeof savable == 'function') savable = savable(card, player, event.player);
                        return savable;
                    });
                    if (num >= 1 + event.num - event.player.hp) return false;
                    return player.hp + num - event.num > 0;
                },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseToDiscard('he', get.prompt2('wechatrenxin', trigger.player)).set('ai', function (card) {
                        if (_status.event.goon) return 7 - get.value(card);
                        return -1;
                    }).set('goon', lib.skill.wechatrenxin.checkx(trigger, player)).logSkill = ['wechatrenxin', trigger.player];
                    'step 1'
                    if (result.bool) {
                        player.addTempSkill('wechatrenxin_used', 'roundStart');
                        trigger.player = player;
                    }
                },
                subSkill: { used: { charlotte: true } },
            },
            //蔡文姬
            wechatchenqing: {
                audio: 'chenqing',
                trigger: { global: 'dying' },
                filter: function (event, player) {
                    return !player.getRoundHistory('useSkill', evt => evt.skill == 'wechatchenqing').length && event.player.hp <= 0;
                },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatchenqing'), function (card, player, target) {
                        return target != _status.event.getTrigger().player;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        var trigger = _status.event.getTrigger();
                        if (get.attitude(player, trigger.player) > 0) {
                            var att1 = get.attitude(target, player);
                            var att2 = get.attitude(target, trigger.player);
                            var att3 = get.attitude(player, target);
                            if (att3 < 0) return 0;
                            return att1 / 2 + att2 + att3;
                        }
                        else return 0;
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0]
                        event.target = target;
                        player.logSkill('wechatchenqing', target);
                        target.draw(4);
                    }
                    else event.finish();
                    'step 2'
                    var target = event.target;
                    var tosave = trigger.player;
                    var att = get.attitude(target, tosave);
                    var hastao = target.countCards('h', 'tao');
                    target.chooseToDiscard(4, true, 'he').set('ai', function (card) {
                        var hastao = _status.event.hastao;
                        var att = _status.event.att;
                        if (!hastao && att > 0) {
                            var suit = get.suit(card);
                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                if (get.suit(ui.selected.cards[i]) == suit) {
                                    return -4 - get.value(card);
                                }
                            }
                        }
                        if (att < 0 && ui.selected.cards.length == 3) {
                            var suit = get.suit(card);
                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                if (get.suit(ui.selected.cards[i]) == suit) {
                                    return -get.value(card);
                                }
                            }
                            return -10 - get.value(card);
                        }
                        return -get.value(card);
                    }).set('hastao', hastao).set('att', att);
                    'step 3'
                    if (result.cards && result.cards.length == 4) {
                        var suits = [];
                        for (var i = 0; i < result.cards.length; i++) suits.add(get.suit(result.cards[i]));
                        if (suits.length == 4 && game.checkMod({ name: 'tao', isCard: true }, player, trigger.player, 'unchanged', 'cardSavable', player)) target.useCard({ name: 'tao', isCard: true }, trigger.player);
                    }
                },
                ai: { expose: 0.3 },
            },
            wechatmozhi: {
                audio: 'mozhi',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.getHistory('useCard', evt => {
                        return evt.isPhaseUsing() && ['basic', 'trick'].includes(get.type(evt.card));
                    }).length > 0 && player.countCards('hes') > 0;
                },
                direct: true,
                content() {
                    'step 0'
                    event.count = 2;
                    event.history = player.getHistory('useCard', evt => {
                        return evt.isPhaseUsing() && ['basic', 'trick'].includes(get.type(evt.card));
                    })
                    'step 1'
                    event._result = {};
                    if (event.count && event.history.length && player.countCards('hs')) {
                        event.count--;
                        var card = event.history.shift().card;
                        card = { name: card.name, nature: card.nature };
                        if (card.name != 'jiu' && lib.filter.cardEnabled(card)) {
                            if (game.hasPlayer(function (current) {
                                return player.canUse(card, current);
                            })) {
                                lib.skill.wechatmozhix.viewAs = card;
                                var next = player.chooseToUse();
                                if (next.isOnline()) {
                                    player.send(function (card) {
                                        lib.skill.wechatmozhix.viewAs = card;
                                    }, card)
                                }
                                next.logSkill = 'wechatmozhi';
                                next.set('openskilldialog', '默识：将一张牌当' + get.translation(card) + '使用');
                                next.set('norestore', true);
                                next.set('_backupevent', 'wechatmozhix');
                                next.set('custom', {
                                    add: {},
                                    replace: { window: function () { } }
                                });
                                next.backup('wechatmozhix');
                            }
                        }
                    }
                    'step 2'
                    if (result && result.bool) event.goto(1);
                },
            },
            wechatmozhix: {
                filterCard: function (card) {
                    return get.itemtype(card) == 'card';
                },
                position: 'hes',
                popname: true,
            },
            //王平
            wechatbinglve: {
                audio: 'nzry_binglve',
                trigger: { player: 'useSkillAfter' },
                filter: function (event, player) {
                    return event.skill == 'minifeijun_backup';
                },
                forced: true,
                content: function () {
                    player.draw(player.getAllHistory('useSkill', function (evt) {
                        return evt.skill == 'minifeijun_backup' && evt.targets[0] == trigger.targets[0];
                    }).length == 1 ? 2 : 1)
                },
                ai: { combo: 'minifeijun' },
            },
            //孙亮
            wechatchezheng: {
                mod: {
                    playerEnabled: function (card, player, target) {
                        var info = get.info(card);
                        if (target != player && (!info || !info.singleCard || !ui.selected.targets.length) && player.isPhaseUsing() && !target.inRange(player)) return false;
                    },
                },
                audio: 'nzry_zhizheng',
                trigger: { player: 'phaseUseEnd' },
                filter: function (event, player) {
                    return game.hasPlayer(function (target) {
                        return target != player && !target.inRange(player);
                    });
                },
                forced: true,
                content: function () {
                    'step 0'
                    player.draw(game.countPlayer(function (target) {
                        return target != player && !target.inRange(player);
                    }));
                    'step 1'
                    if (!game.hasPlayer(function (target) {
                        return target != player && !target.inRange(player) && target.countDiscardableCards(player, 'he');
                    })) { event.finish(); return; }
                    player.chooseTarget('请选择〖掣政〗的目标', '弃置一名攻击范围内不包含你的角色的一张牌', true, function (card, player, target) {
                        return target != player && !target.inRange(player) && target.countDiscardableCards(player, 'he');
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return -get.attitude(player, target);
                    });
                    'step 2'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.line(target);
                        player.discardPlayerCard(target, 'he', true);
                    }
                },
            },
            //曹植
            wechatluoying: {
                mod: {
                    ignoredHandcard: function (card, player) {
                        if (card.hasGaintag('wechatluoying')) return true;
                    },
                    cardDiscardable: function (card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('wechatluoying')) return false;
                    },
                },
                onremove: function (player) {
                    player.removeGaintag('wechatluoying');
                },
                audio: 'luoying_discard',
                trigger: { global: ['loseAfter', 'cardsDiscardAfter'] },
                filter: function (event, player) {
                    switch (event.name) {
                        case 'lose':
                            if (event.type != 'discard') return false;
                            if (event.player == player) return false;
                            for (var i = 0; i < event.cards2.length; i++) {
                                if (get.suit(event.cards2[i], event.player) == 'club' && get.position(event.cards2[i], true) == 'd') return true;
                            }
                            return false;
                            break;
                        case 'cardsDiscard':
                            var evt = event.getParent().relatedEvent;
                            if (!evt || evt.name != 'judge') return;
                            if (evt.player == player) return false;
                            if (get.position(event.cards[0], true) != 'd') return false;
                            return (get.suit(event.cards[0]) == 'club');
                            break;
                    }
                },
                frequent: true,
                content: function () {
                    var cards = (trigger.name == 'lose' ? trigger.cards2 : trigger.cards);
                    cards = cards.filter(function (card) {
                        return get.suit(card) == 'club' && get.position(card, true) == 'd';
                    });
                    player.gain(cards, 'gain2').gaintag.add('wechatluoying');
                },
            },
            wechatjiushi: {
                group: 'wechatjiushi2',
                audio: 'jiushi1',
                enable: 'chooseToUse',
                filter: function (event, player) {
                    return player.countCards('h', { suit: 'club' }) && !event.wechatjiushi;
                },
                filterCard: () => false,
                selectCard: -1,
                viewAs: { name: 'jiu' },
                prompt: '弃置一张梅花手牌，视为使用【酒】',
            },
            wechatjiushi2: {
                charlotte: true,
                trigger: { player: 'useCardBefore' },
                filter: function (event, player) {
                    return event.skill == 'wechatjiushi';
                },
                firstDo: true,
                direct: true,
                content: function () {
                    'step 0'
                    delete trigger.skill;
                    player.chooseToDiscard({ suit: 'club' }).logSkill = 'wechatjiushi';
                    'step 1'
                    if (result.bool) game.delay(0.5);
                    else {
                        trigger.cancel();
                        trigger.getParent().wechatjiushi = true;
                        trigger.getParent().goto(0);
                    }
                },
            },
            //魏延
            wechatkuanggu: {
                audio: 'kuanggu_re_weiyan',
                audioname: ['re_weiyan'],
                trigger: { source: 'damageSource' },
                filter: function (event, player) {
                    return get.distance(player, event.player) <= 1;
                },
                forced: true,
                content: function () {
                    player.recover(trigger.num);
                    player.draw(trigger.num);
                },
            },
            //黄月英
            wechatjizhi: {
                audio: 'jizhi',
                audioname2: { wechat_re_huangyueying: 'wechatjizhi_wechat_re_huangyueying' },
                trigger: { player: 'useCard' },
                filter: function (event) {
                    return get.type2(event.card) == 'trick';
                },
                frequent: true,
                preHidden: true,
                content: function () {
                    player.draw().gaintag = ['wechatjizhi'];
                    player.addTempSkill('wechatjizhi2');
                },
                ai: { noautowuxie: true },
                subSkill: {
                    wechat_re_huangyueying: { audio: 'ext:活动武将/audio/skill:2' },
                },
            },
            wechatjizhi2: {
                charlotte: true,
                onremove: function (player) {
                    player.removeGaintag('wechatjizhi');
                },
                mod: {
                    ignoredHandcard: function (card, player) {
                        if (card.hasGaintag('wechatjizhi')) return true;
                    },
                    cardDiscardable: function (card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('wechatjizhi')) return false;
                    },
                },
            },
            wechatqicai: {
                mod: {
                    targetInRange: function (card, player, target, now) {
                        if (get.type2(card) == 'trick') return true;
                    },
                },
                trigger: { player: 'useCard' },
                filter: function (event, player) {
                    return _status.currentPhase && _status.currentPhase == player && player.getHistory('useCard', function (evt) {
                        return get.type2(evt.card) == 'trick';
                    }).indexOf(event) == 0;
                },
                forced: true,
                content: function () {
                    trigger.directHit.addArray(game.players);
                },
            },
            //陆抗
            wechatjueyan: {
                derivation: 'relianying',
                audio: 'drlt_jueyan',
                enable: 'phaseUse',
                filter: function (event, player) {
                    return player.hasEnabledSlot(1) || player.hasEnabledSlot(2) || player.hasEnabledSlot('horse');
                },
                usable: 1,
                content: function () {
                    'step 0'
                    var list = [];
                    for (var i = 1; i <= 4; i++) {
                        if (player.hasEnabledSlot(i)) list.push('equip' + i);
                    }
                    if (list.includes('equip3') && list.includes('equip4')) list.push('equip3_4');
                    list.remove('equip3');
                    list.remove('equip4');
                    if (!list.length) event.finish();
                    else if (list.length == 1) event._result = { control: list[0] };
                    else {
                        player.chooseControl(list).set('prompt', '决堰：请选择废除一个装备栏').set('ai', function () {
                            var player = _status.event.player;
                            var list = _status.event.list;
                            if (list.includes('equip2')) return 'equip2';
                            if (list.includes('equip1') && (player.countCards('h', function (card) {
                                return get.name(card, player) == 'sha' && player.hasUseTarget(card);
                            }) - player.getCardUsable('sha')) > 1) return 'equip1';
                            return list.randomGet();
                        }).set('list', list);
                    }
                    'step 1'
                    if (result.control == 'equip3_4') player.disableEquip(3, 4);
                    else player.disableEquip(result.control);
                    player.addTempSkill('drlt_jueyan' + ['1', '3', '2'][['equip1', 'equip2', 'equip3_4'].indexOf(result.control)]);
                    if (result.control == 'equip2') player.draw(3);
                    if (result.control == 'equip3_4') player.addTempSkills('relianying');
                },
                ai: {
                    order: 13,
                    result: {
                        player: function (player) {
                            if (!player.isDisabled('equip2') || (!player.isDisabled('equip1') && (player.countCards('h', function (card) {
                                return get.name(card, player) == 'sha' && player.hasValueTarget(card);
                            }) - player.getCardUsable('sha')) > 1)) return 1;
                            return 0;
                        },
                    },
                },
            },
            wechatposhi: {
                unique: true,
                derivation: 'drlt_huairou',
                audio: 'drlt_poshi',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter: function (event, player) {
                    return !player.hasEnabledSlot() || player.hp == 1;
                },
                forced: true,
                juexingji: true,
                skillAnimation: true,
                animationColor: 'wood',
                content: function () {
                    'step 0'
                    player.awakenSkill('wechatposhi');
                    player.loseMaxHp();
                    'step 1'
                    var num = player.maxHp - player.countCards('h');
                    if (num > 0) player.draw(num);
                    player.changeSkills(['drlt_huairou'], ['wechatjueyan']);
                },
            },
            //简雍
            wechatqiaoshui: {
                audio: 'qiaoshui',
                inherit: 'xinqiaoshui',
            },
            wechatjyzongshi: {
                audio: 'jyzongshi',
                trigger: { player: ['chooseToCompareAfter', 'compareMultipleAfter'], target: ['chooseToCompareAfter', 'compareMultipleAfter'] },
                filter: function (event, player) {
                    if (event.preserve) return false;
                    if (player == event.player) {
                        if (event.num1 > event.num2) return true;
                        return !get.owner(event.card1);
                    }
                    else {
                        if (event.num1 < event.num2) return true;
                        return !get.owner(event.card2);
                    }
                },
                check: function (event, player) {
                    if (player == event.player) {
                        if (event.num1 > event.num2) return true;
                        return event.card1.name != 'du';
                    }
                    else {
                        if (event.num1 < event.num2) return true;
                        return event.card2.name != 'du';
                    }
                },
                frequent: 'check',
                content: function () {
                    var bool = false;
                    if (player == trigger.player) {
                        if (trigger.num1 > trigger.num2) bool = true;
                        else player.gain(trigger.card1, 'gain2');
                    }
                    else {
                        if (trigger.num1 < trigger.num2) bool = true;
                        else player.gain(trigger.card2, 'gain2');
                    }
                    if (bool) {
                        var card = get.cardPile2(function (card) {
                            return get.type2(card) == 'trick';
                        });
                        if (card) player.gain(card, 'gain2');
                    }
                },
            },
            //CXK
            wechatqieting: {
                audio: 'qieting',
                trigger: { global: 'phaseEnd' },
                filter: function (event, player) {
                    return player != event.player && !event.player.getHistory('sourceDamage', function (evt) {
                        return evt.player != event.player;
                    }).length;
                },
                direct: true,
                content: function () {
                    'step 0'
                    var list = ['摸一张牌'], target = trigger.player, str = get.translation(target);
                    event.target = target;
                    event.addIndex = 0;
                    if (target.countGainableCards(player, 'h')) list.push('随机获得' + str + '的一张手牌');
                    else event.addIndex++;
                    if (target.countCards('e', function (card) {
                        return player.canEquip(card);
                    }) > 0) list.push('将' + str + '装备区内的一张牌移动至自己的装备区');
                    player.chooseControl('cancel2').set('choiceList', list).set('prompt', get.prompt('wechatqieting', target)).set('ai', function () {
                        var evt = _status.event.getParent();
                        if (get.attitude(evt.player, evt.target) > 0) return 0;
                        var val = evt.target.hasSkillTag('noe') ? 6 : 0;
                        if (evt.target.countCards('e', function (card) {
                            return evt.player.canEquip(card) && get.value(card, evt.target) > val && get.effect(evt.player, card, evt.player, evt.player) > 0;
                        }) > 0) return 2 - evt.addIndex;
                        if (evt.target.countGainableCards(evt.player, 'h') > 0) return 1;
                        return 0;
                    });
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill('wechatqieting', target);
                        if (result.index == 0) {
                            player.draw();
                            event.finish();
                        }
                        else if (result.index + event.addIndex == 1) {
                            player.gain(target.getGainableCards(player, 'h').randomGets(1), target, 'giveAuto');
                            event.finish();
                        }
                        else {
                            player.addExpose(0.1);
                            player.choosePlayerCard(target, 'e', true).set('filterButton', function (button) {
                                return _status.event.player.canEquip(button.link);
                            }).set('ai', function (button) {
                                var player = _status.event.player;
                                return get.effect(player, button.link, player, player);
                            });
                        }
                    }
                    else event.finish();
                    'step 2'
                    if (result.bool) {
                        var card = result.cards[0];
                        target.$give(card, player, false);
                        game.delay(0.5);
                        player.equip(card);
                    }
                },
            },
            //马谡
            wechatsanyao: {
                audio: 'sanyao',
                enable: 'phaseUse',
                filter: function (event, player) {
                    return player.countCards('he');
                },
                filterCard: true,
                filterTarget: lib.filter.notMe,
                check: function (card) {
                    return 7 - get.value(card);
                },
                position: 'he',
                usable: 1,
                content: function () {
                    target.damage('nocard');
                },
                ai: {
                    order: 7,
                    result: {
                        target: function (player, target) {
                            if (player.hasSkill('rezhiman') && target.countCards('j') && get.attitude(player, target) > 0) return 1;
                            if (player.hasSkill('rezhiman') && target.countCards('e')) return -1;
                            return get.damageEffect(target, player);
                        },
                    },
                },
            },
            //SP太史慈
            wechatjixu: {
                audio: 'xinfu_jixu',
                enable: 'phaseUse',
                filter: function (event, player) {
                    return game.hasPlayer(function (target) {
                        return lib.skill.wechatjixu.filterTarget(null, player, target);
                    });
                },
                filterTarget: function (card, player, target) {
                    if (player == target) return false;
                    return target.hp <= player.hp;
                },
                selectTarget: -1,
                usable: 1,
                multitarget: true,
                multiline: true,
                content: function () {
                    'step 0'
                    targets.sortBySeat();
                    event.num = 0;
                    'step 1'
                    if (!event.caicuolist) event.caicuolist = [];
                    targets[event.num].chooseBool('是否押杀？').ai = function (event, player) {
                        var evt = _status.event.getParent();
                        if (get.attitude(targets[event.num], evt.player) > 0) return evt.player.countCards('h', 'sha') ? false : true;
                        if (!evt.player.countCards('h')) return false;
                        return Math.random() < 0.5;
                    };
                    'step 2'
                    var target = targets[event.num];
                    var num1 = result.bool ? 1 : -1;
                    var num2 = player.countCards('h', 'sha') ? 1 : -1;
                    if (num1 != num2) {
                        event.caicuolist.push(target);
                        target.chat('猜错');
                        game.log(target, '猜', '#y错', '了');
                    }
                    else {
                        target.chat('猜对');
                        game.log(target, '猜', '#g对', '了');
                    }
                    event.num++;
                    game.delay();
                    if (event.num < targets.length) event.goto(1);
                    'step 3'
                    if (event.caicuolist.length) {
                        for (var i of event.caicuolist) {
                            player.discardPlayerCard(i, 'he', true);
                            player.useCard({ name: 'sha', isCard: true }, i, false);
                        }
                        player.draw(event.caicuolist.length);
                    }
                    else {
                        var evt = _status.event.getParent('phaseUse');
                        if (evt && evt.name == 'phaseUse') evt.skipped = true;
                    }
                },
                ai: {
                    expose: 0.25,
                    order: function () {
                        return get.order({ name: 'sha' }) - 0.01;
                    },
                    result: { player: 1 },
                },
            },
            //步骘
            wechatdingpan: {
                audio: 'dingpan',
                inherit: 'dingpan',
                filter: function (event, player) {
                    return (player.getStat().skill.wechatdingpan || 0) < 2;
                },
                content: function () {
                    'step 0'
                    target.draw();
                    'step 1'
                    var bool = (target == player && (player.getEquip('baiyin') || player.getEquip('rewrite_baiyin')));
                    player.chooseControl('选项一', '选项二').set('ai', function () {
                        return _status.event.goon ? '选项一' : '选项二';
                    }).set('prompt', '定叛').set('choiceList', [
                        '弃置' + get.translation(target) + '装备区里的一张牌',
                        '令' + get.translation(target) + '获得其装备区内的所有牌并受到1点伤害'
                    ]).set('goon', !bool && (get.damageEffect(target, player, player) < 0 || target.countCards('e', card => get.equipValue(card, target) >= 7)));
                    'step 2'
                    if (result.control == '选项一') {
                        player.discardPlayerCard(target, true, 'e');
                        event.finish();
                    }
                    else target.gain(target.getCards('e'), 'gain2');
                    'step 3'
                    game.delay(0.5);
                    target.damage();
                },
                ai: {
                    order: 7,
                    result: {
                        target: function (player, target) {
                            if (target == player && (player.getEquip('baiyin') || player.getEquip('rewrite_baiyin'))) return 10;
                            var att = get.attitude(player, target);
                            if (att > 0 && target.countCards('e', card => get.equipValue(card, target) <= 4)) return 2;
                            if (get.damageEffect(target, player, player) >= 0) return 1;
                            if (att < 0 && target.countCards('e', card => get.equipValue(card, target) >= 7)) return 1;
                            return 0;
                        },
                    },
                },
            },
            //曹彰
            wechatjiangchi: {
                audio: 'jiangchi',
                trigger: { player: 'phaseUseBegin' },
                direct: true,
                content: function () {
                    'step 0'
                    var list = [
                        '摸两张牌，本阶段内不能使用【杀】',
                        '本阶段使用【杀】且无距离限制且可以多使用一张【杀】',
                    ];
                    player.chooseControl('cancel2').set('prompt', get.prompt('wechatjiangchi')).set('choiceList', list).set('ai', function () {
                        var player = _status.event.player;
                        if (player.countCards('hs', function (card) {
                            return get.name(card) == 'sha' && player.hasValueTarget(card, false);
                        })) return 1;
                        return 0;
                    });
                    'step 1'
                    if (result.control != 'cancel2') {
                        player.logSkill('wechatjiangchi');
                        if (result.index == 0) {
                            player.draw(2);
                            player.addTempSkill('wechatjiangchi_less', 'phaseUseAfter');
                        }
                        else player.addTempSkill('xinjiangchi_more', 'phaseUseAfter');
                    }
                },
                subSkill: {
                    less: {
                        charlotte: true,
                        mod: {
                            cardEnabled: function (card) {
                                if (card.name == 'sha') return false;
                            },
                        },
                    },
                },
            },
            wechatrejiangchi: {
                audio: 'jiangchi',
                trigger: {
                    player: 'phaseUseBegin',
                },
                async cost(event, trigger, player) {
                    const list = [
                        '摸三张牌，本回合不能使用【杀】',
                        '摸一张牌，然后你本阶段造成伤害后，摸一张牌',
                        '本阶段使用【杀】无距离限制，且可以多使用一张【杀】',
                    ];
                    const { result } = await player.chooseControl('cancel2').set('prompt', get.prompt(event.name.slice(0, -5))).set('choiceList', list).set('ai', () => {
                        const player = get.player();
                        const num = player.countCards('hs', function (card) {
                            return get.name(card) == 'sha' && player.hasValueTarget(card, false);
                        });
                        if (num == 0) return 1;
                        if (num > 1) return 2;
                        return 0;
                    });
                    event.result = {
                        bool: result.control != 'cancel2',
                        cost_data: result.index,
                    }
                },
                async content(event, trigger, player) {
                    switch (event.cost_data) {
                        case 0: {
                            await player.draw(3);
                            player.addTempSkill('wechatjiangchi_less', 'phaseUseAfter');
                            break;
                        }
                        case 1: {
                            player.draw();
                            player.addTempSkill(event.name + '_draw', 'phaseUseAfter');
                            break;
                        }
                        case 2: {
                            player.addTempSkill('xinjiangchi_more', 'phaseUseAfter');
                            break;
                        }
                    }
                },
                subSkill: {
                    draw: {
                        inherit: 'minijiangchi_draw',
                        trigger: {
                            source: 'damageSource',
                        },
                    }
                }
            },
            //曹丕
            wechatfangzhu: {
                audio: 'fangzhu',
                trigger: { player: 'damageEnd' },
                filter: function (event, player) {
                    return game.hasPlayer(function (target) {
                        return player != target && target.countCards('h');
                    });
                },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatfangzhu'), function (card, player, target) {
                        return player != target && target.countCards('h');
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return -get.sgn(get.attitude(player, target)) * target.countCards('h');
                    });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechatfangzhu', target);
                        target.addToExpansion(target.getCards('h'), 'giveAuto', target).gaintag.add('wechatfangzhu2');
                        target.addTempSkill('wechatfangzhu2', { player: 'wechatfangzhu2After' });
                    }
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        target: function (card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (target.hp <= 1) return;
                                if (!target.hasFriend()) return;
                                var hastarget = false;
                                for (var i of game.filterPlayer()) {
                                    if (get.attitude(target, i) < 0 && i.countCards('h') > 3) {
                                        hastarget = true;
                                        break;
                                    }
                                }
                                if (get.attitude(player, target) > 0 && !hastarget) return;
                                if (target.hp == target.maxHp) return [0.5, 1];
                                if (target.hp > 1) return [1, 0.5];
                            }
                        },
                    },
                },
            },
            wechatfangzhu2: {
                charlotte: true,
                trigger: { player: ['phaseEnd', 'damageEnd'] },
                direct: true,
                content: function () {
                    var cards = player.getExpansions('wechatfangzhu2');
                    if (cards.length) player.gain(cards, 'draw');
                },
                marktext: '逐',
                intro: {
                    markcount: 'expansion',
                    mark: function (dialog, storage, player) {
                        var cards = player.getExpansions('wechatfangzhu2');
                        if (player.isUnderControl(true)) dialog.addAuto(cards);
                        else return '共扣置' + get.cnNumber(cards.length) + '张“放逐”牌';
                    },
                },
                onremove: function (player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            //SP姜维
            wechatkunfen: {
                audio: 'kunfen',
                trigger: { player: 'phaseJieshuBegin' },
                check: function (event, player) {
                    if (player.hp > 3) return true;
                    if (player.hp == 3 && player.countCards('h') < 3) return true;
                    if (player.hp == 2 && player.countCards('h') == 0) return true;
                    return false;
                },
                content: function () {
                    player.loseHp();
                    player.draw(2);
                },
            },
            wechatfengliang: {
                unique: true,
                audio: 'fengliang',
                derivation: 'retiaoxin',
                trigger: { player: 'dying' },
                forced: true,
                juexingji: true,
                skillAnimation: true,
                animationColor: 'thunder',
                content: function () {
                    'step 0'
                    player.awakenSkill('wechatfengliang');
                    player.loseMaxHp();
                    'step 1'
                    if (player.hp < 3) player.recover(3 - player.hp);
                    'step 2'
                    player.addSkills('retiaoxin');
                },
            },
            //曹休
            wechatqingxi: {
                audio: 'qingxi',
                trigger: { source: 'damageBegin2' },
                filter: function (event, player) {
                    return event.player != player;
                },
                check: function (event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: 'player',
                content: function () {
                    'step 0'
                    var num = player.getAttackRange();
                    trigger.player.chooseToDiscard(num, '弃置' + get.cnNumber(num) + '张手牌，或令即将对你造成的伤害+1').set('ai', function (card) {
                        var player = _status.event.player;
                        if (player.hp == 1) {
                            if (get.type(card) == 'basic') return 8 - get.value(card);
                            else return 10 - get.value(card);
                        }
                        else {
                            if (num > 2) return 0;
                            return 8 - get.value(card);
                        }
                    });
                    'step 1'
                    if (result.bool) {
                        var cards = player.getEquips(1);
                        if (cards.length) player.discard(cards);
                    }
                    else trigger.num++;
                },
            },
            //袁绍
            //袁神，启动
            wechatluanji: {
                audio: 'luanji',
                enable: 'phaseUse',
                viewAs: { name: 'wanjian' },
                filterCard: function (card, player) {
                    return !player.getStorage('wechatluanji_count').includes(get.suit(card));
                },
                position: 'hs',
                selectCard: 2,
                check: function (card) {
                    var player = _status.event.player;
                    var targets = game.filterPlayer(function (current) {
                        return player.canUse('wanjian', current);
                    });
                    var num = 0;
                    for (var i = 0; i < targets.length; i++) {
                        var eff = get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
                        if (targets[i].hp == 1) {
                            eff *= 1.5;
                        }
                        num += eff;
                    }
                    if (!player.needsToDiscard(-1)) {
                        if (targets.length >= 7) {
                            if (num < 2) return 0;
                        }
                        else if (targets.length >= 5) {
                            if (num < 1.5) return 0;
                        }
                    }
                    return 6 - get.value(card);
                },
                ai: {
                    basic: {
                        order: 8.9
                    },
                },
                group: ['wechatluanji_mark', 'wechatluanji_respond'],
                subSkill: {
                    mark: {
                        charlotte: true,
                        trigger: { player: 'useCard1' },
                        filter: function (event) {
                            return event.skill == 'wechatluanji';
                        },
                        direct: true,
                        firstDo: true,
                        content: function () {
                            player.addTempSkill('wechatluanji_count', { player: 'phaseUseAfter' });
                            for (var card of trigger.cards) player.markAuto('wechatluanji_count', [get.suit(card, player)]);
                        },
                    },
                    count: {
                        charlotte: true,
                        onremove: true,
                    },
                    respond: {
                        audio: 'luanji',
                        trigger: { global: 'respond' },
                        filter: function (event, player) {
                            var evt = event.getParent(2);
                            return evt && evt.name == 'wanjian' && evt.getParent().player == player && event.player != player;
                        },
                        forced: true,
                        locked: false,
                        logTarget: 'player',
                        content: function () {
                            player.draw('nodelay');
                            trigger.player.draw();
                        },
                    },
                },
            },
            //孙登
            wechatkuangbi: {
                audio: 'kuangbi',
                enable: 'phaseUse',
                filterTarget: function (card, player, target) {
                    return target != player && target.countCards('he');
                },
                usable: 1,
                content: function () {
                    'step 0'
                    target.chooseCard('he', [1, 3], '匡弼：将至多三张牌置于' + get.translation(player) + '的武将牌上', true).set('ai', function (card) {
                        var player = _status.event.player;
                        var target = _status.event.getParent().player;
                        if (get.attitude(player, target) > 0) return 7 - get.value(card);
                        return -get.value(card);
                    });
                    'step 1'
                    if (result.bool) {
                        player.addTempSkill('wechatkuangbi_draw', { player: 'wechatkuangbi_drawAfter' });
                        player.addToExpansion(result.cards, target, 'give').gaintag.add('wechatkuangbi_draw');
                        player.storage.wechatkuangbi_draw[0].push(target);
                        player.storage.wechatkuangbi_draw[1].push(result.cards.length);
                    }
                    else event.finish();
                    'step 2'
                    target.draw();
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                        target: function (player, target) {
                            var att = get.attitude(player, target);
                            if (att > 0) return Math.sqrt(target.countCards('he'));
                            return 1 + get.sgn(att);
                        },
                    },
                },
                subSkill: {
                    draw: {
                        init: function (player) {
                            if (!player.storage.wechatkuangbi_draw) player.storage.wechatkuangbi_draw = [[], []];
                        },
                        charlotte: true,
                        onremove: true,
                        audio: 'kuangbi',
                        trigger: { player: 'phaseZhunbeiBegin' },
                        filter: function (event, player) {
                            return player.getExpansions('wechatkuangbi_draw').length;
                        },
                        forced: true,
                        content: function () {
                            player.gain(player.getExpansions('wechatkuangbi_draw'), 'gain2');
                            var storage = player.storage.wechatkuangbi_draw;
                            if (storage.length) {
                                for (var i = 0; i < storage[0].length; i++) {
                                    var target = storage[0][i], num = storage[1][i];
                                    if (target && target.isIn()) {
                                        player.line(target);
                                        target.draw(num);
                                    }
                                }
                            }
                        },
                        intro: {
                            content: 'expansion',
                            markcount: 'expansion',
                        },
                        onremove: function (player, skill) {
                            var cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                            delete player.storage[skill];
                        },
                    },
                },
            },
            //徐庶
            wechatzhuhai: {
                audio: 'zhuhai',
                trigger: { global: 'phaseJieshuBegin' },
                filter: function (event, player) {
                    return event.player.isIn() && event.player.getStat('damage') && player.canUse({ name: 'sha', isCard: true }, event.player, false) && player.countCards('he');
                },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseToDiscard(get.prompt('wechatzhuhai', trigger.player), '弃置一张牌，视为对' + get.translation(trigger.player) + '使用一张【杀】').set('ai', function (card) {
                        var player = _status.event.player;
                        var trigger = _status.event.getTrigger();
                        if (get.effect(trigger.player, { name: 'sha', isCard: true }, player, player) > 0) return 7 - get.value(card);
                        return -1;
                    }).logSkill = ['wechatzhuhai', trigger.player];
                    'step 1'
                    if (result.bool) player.useCard({ name: 'sha', isCard: true }, trigger.player, false);
                },
            },
            //夏侯霸
            wechatbaobian: {
                audio: 'rebaobian',
                trigger: { player: ['phaseBefore', 'changeHp', 'phaseBegin'] },
                init: function (player) {
                    if (game.online) return;
                    var list = lib.skill.wechatbaobian.derivation.slice(0);
                    player.addAdditionalSkills('wechatbaobian', list.slice(0, Math.max(0, 4 - player.hp)));
                },
                direct: true,
                locked: true,
                derivation: ['retiaoxin', 'new_repaoxiao', 'wechatshensu'],
                content: function () {
                    if (event.triggername == 'phaseBegin') {
                        player.logSkill('wechatbaobian');
                        player.loseHp();
                        var card = get.cardPile(function (card) {
                            return card.name == 'sha';
                        });
                        if (card) player.gain(card, 'gain2');
                    }
                    else {
                        var list = lib.skill.wechatbaobian.derivation.slice(0);
                        player.addAdditionalSkills('wechatbaobian', list.slice(0, Math.max(0, 4 - player.hp)));
                    }
                },
            },
            wechatrebaobian: {
                audio: 'rebaobian',
                trigger: {
                    global: ['gameStart', 'phaseBefore'],
                    player: ['changeHp'],
                },
                init: function (player) {
                    if (!_status.gameStarted) return;
                    var list = lib.skill.wechatrebaobian.derivation.slice(1);
                    player.addAdditionalSkills('wechatrebaobian', player.getHp() == 4 ? ['wechatkunfen'] : list.slice(0, Math.max(0, 4 - player.hp)));
                },
                direct: true,
                locked: true,
                derivation: ['wechatkunfen', 'retiaoxin', 'new_repaoxiao', 'wechatshensu'],
                content: function () {
                    var list = lib.skill.wechatrebaobian.derivation.slice(1);
                    player.addAdditionalSkills('wechatrebaobian', player.getHp() == 4 ? ['wechatkunfen'] : list.slice(0, Math.max(0, 4 - player.hp)));
                },
            },
            //刘繇
            wechatkannan: {
                audio: 'xinfu_kannan',
                enable: "phaseUse",
                filter: function (event, player) {
                    return game.hasPlayer(target => player.canCompare(target));
                },
                filterTarget: function (card, player, target) {
                    return player.canCompare(target);
                },
                content: function () {
                    'step 0'
                    player.chooseToCompare(target);
                    'step 1'
                    if (!result.tie) {
                        var current = result.bool ? player : target;
                        current.addTempSkill('wechatkannan_damage', { player: 'wechatkannan_damageAfter' });
                        if (current.countMark('wechatkannan_damage') < 5) current.addMark('wechatkannan_damage', 1, false);
                    }
                },
                ai: {
                    order: function () {
                        return get.order({ name: 'sha' }) + 0.4;
                    },
                    result: {
                        target: function (player, target) {
                            if (player.hasCard(function (card) {
                                if (get.position(card) != "h") return false;
                                var val = get.value(card);
                                if (val < 0) return true;
                                if (val <= 5) {
                                    return card.number >= 12;
                                }
                                if (val <= 6) {
                                    return card.number >= 13;
                                }
                                return false;
                            })) return -1;
                            return 0;
                        },
                    },
                },
                subSkill: {
                    phase: { charlotte: true },
                    damage: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '下一张杀的伤害基数+#' },
                        trigger: { player: 'useCard1' },
                        filter: function (event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        direct: true,
                        firstDo: true,
                        content: function () {
                            if (!trigger.baseDamage) trigger.baseDamage = 1;
                            trigger.baseDamage += player.countMark('wechatkannan_damage');
                        },
                    },
                },
            },
            //全琮
            wechatyaoming: {
                audio: 'yaoming',
                trigger: { player: 'damageEnd', source: 'damageSource' },
                direct: true,
                content: function () {
                    'step 0'
                    var nh = player.countCards('h');
                    player.chooseTarget(get.prompt2('wechatyaoming')).set('ai', function (target) {
                        var att = get.attitude(_status.event.player, target);
                        switch (get.sgn(target.countCards('h') - _status.event.nh)) {
                            case 1: return att; break;
                            case 0:
                                if (nh == 0) return att;
                                return Math.abs(att);
                                break;
                            case -1: return -att; break;
                        }
                    }).set('nh', nh);
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        if (player === target || target.countCards('h') < player.countCards('h') || !target.countCards('h')) event._result = { control: '摸牌' };
                        else if (target.countCards('h') > player.countCards('h')) event._result = { control: '弃牌' };
                        else player.chooseControl('摸牌', '弃牌').set('prompt', '邀名：令' + get.translation(target) + '摸一张牌或弃置其一张手牌').set('ai', function () {
                            var player = _status.event.player;
                            var target = _status.event.target;
                            return get.attitude(player, target) > 0 ? '摸牌' : '弃牌';
                        }).set('target', target);
                    }
                    else event.finish();
                    'step 2'
                    player.logSkill('wechatyaoming', target);
                    if (result.control == '摸牌') target.draw();
                    else player.discardPlayerCard(target, 'h', true);
                },
                ai: { expose: 0.2 },
            },
            //廖化
            wechatdangxian: {
                audio: 'dangxian',
                inherit: 'redangxian',
            },
            wechatfuli: {
                unique: true,
                audio: 'fuli',
                limited: true,
                enable: 'chooseToUse',
                mark: true,
                filter: function (event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    return true;
                },
                skillAnimation: true,
                animationColor: 'soil',
                content: function () {
                    'step 0'
                    player.awakenSkill('wechatfuli');
                    var num = game.countPlayer() - 1;
                    if (num > player.hp) player.recover(num - player.hp);
                    'step 1'
                    if (player.isMaxHp(true)) player.addTempSkill('wechatfuli_block', { player: 'phaseEnd' });
                },
                ai: {
                    save: true,
                    skillTagFilter: function (player, arg, target) {
                        return player == target;
                    },
                    result: { player: 10 },
                    threaten: function (player, target) {
                        if (!target.storage.wechatfuli) return 0.9;
                    },
                },
                subSkill: {
                    block: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '不能使用或打出手牌' },
                        mod: {
                            cardEnabled2: function (card) {
                                if (get.position(card) == 'h') return false;
                            },
                        },
                    },
                },
            },
            //严颜
            wechatjuzhan: {
                group: 'wechatjuzhan_gain',
                audio: 'nzry_juzhan_1',
                trigger: { target: 'useCardToTargeted' },
                prompt2: '当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。',
                filter: function (event, player) {
                    return event.card.name == 'sha';
                },
                logTarget: 'player',
                content: function () {
                    'step 0'
                    game.asyncDraw([player, trigger.player]);
                    trigger.player.addTempSkill('wechatjuzhan_use1');
                    trigger.player.markAuto('wechatjuzhan_use1', [player]);
                    'step 1'
                    game.delayx();
                },
                subSkill: {
                    gain: {
                        audio: 'nzry_juzhan_1',
                        trigger: { player: 'useCardToPlayered' },
                        prompt2: '当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌',
                        filter: function (event, player) {
                            return event.card.name == 'sha' && event.target.countGainableCards(player, 'he');
                        },
                        check: function (event, player) {
                            return get.effect(event.target, { name: 'guohe_copy2' }, player, player) > 0;
                        },
                        logTarget: 'target',
                        content: function () {
                            'step 0'
                            player.gainPlayerCard(trigger.target, 'he', true);
                            'step 1'
                            player.addTempSkill('wechatjuzhan_use1');
                            player.markAuto('wechatjuzhan_use1', [trigger.target]);
                        },
                    },
                    use1: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '不能对$使用牌' },
                        mod: {
                            playerEnabled: function (card, player, target) {
                                if (player.getStorage('wechatjuzhan_use1').includes(target)) return false;
                            },
                        },
                    },
                },
            },
            //郭皇后
            wechatjiaozhao: {
                onChooseToUse: function (event) {
                    if (!game.online && !event.wechatjiaozhao_list) {
                        var player = event.player;
                        var list = [];
                        for (var name of lib.inpile) {
                            var card = { name: name };
                            if (get.type(card) != 'basic' && get.type(card) != 'trick') continue;
                            list.push([get.type(card), '', name]);
                            if (name == 'sha') {
                                for (var nature of lib.inpile_nature) list.push([get.type(card), '', name, nature]);
                            }
                        }
                        event.set('wechatjiaozhao_list', list);
                    }
                },
                audio: 'jiaozhao',
                enable: 'phaseUse',
                filter: function (event, player) {
                    if (!event.wechatjiaozhao_list || !event.wechatjiaozhao_list.length) return false;
                    return player.countCards('h', function (card) {
                        return lib.skill.wechatjiaozhao.filterCard(card, player);
                    });
                },
                filterCard: function (card, player) {
                    if (!player.hasSkill('wechatjiaozhao2')) return true;
                    return !player.storage.wechatjiaozhao2[0].includes(card);
                },
                discard: false,
                lose: false,
                delay: false,
                check: function (card) {
                    return 7 - get.value(card);
                },
                usable: 1,
                content: function () {
                    'step 0'
                    player.addTempSkill('wechatjiaozhao2', { player: 'phaseBegin' });
                    player.showCards(cards, get.translation(player) + '发动了【矫诏】');
                    'step 1'
                    var list = event.getParent(2).wechatjiaozhao_list;
                    var str = '###矫诏###请选择并声明' + get.translation(cards[0]) + '视为的牌，且此牌不能指定你为目标';
                    player.chooseButton([str, [list, 'vcard']], true).set('ai', function (button) {
                        var player = _status.event.player;
                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    });
                    'step 2'
                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                    player.storage.wechatjiaozhao2[0].push(cards[0]);
                    player.storage.wechatjiaozhao2[1].push(card);
                    var chosen = result.links[0][2];
                    var nature = result.links[0][3];
                    player.addGaintag(cards, 'wechatjiaozhao2');
                    player.showCards(game.createCard({
                        name: chosen,
                        nature: nature,
                        suit: cards[0].suit,
                        number: cards[0].number,
                    }), get.translation(player) + '声明了' + (get.translation(nature) || '') + get.translation(chosen));
                },
                ai: {
                    order: 8,
                    result: { player: 1 },
                },
            },
            wechatjiaozhao2: {
                init: function (player) {
                    if (!player.storage.wechatjiaozhao2) player.storage.wechatjiaozhao2 = [[], []];
                },
                onremove: function (player) {
                    player.removeGaintag('wechatjiaozhao2');
                    delete player.storage.wechatjiaozhao2;
                },
                getOriginalCard: function (player, card) {
                    var storage = player.storage.wechatjiaozhao2;
                    return storage[0][storage[1].indexOf(storage[1].filter(function (cardx) {
                        return get.name(cardx) == get.name(card) && (!get.nature(cardx) || get.nature(cardx) == get.nature(card));
                    })[0])];
                },
                mod: {
                    playerEnabled: function (card, player, target) {
                        if (target == player && card.storage && card.storage.wechatjiaozhao2) return false;
                    },
                },
                charlotte: true,
                enable: 'phaseUse',
                filter: function (event, player) {
                    return player.countCards('h', function (card) {
                        return player.storage.wechatjiaozhao2[0].includes(card);
                    });
                },
                chooseButton: {
                    dialog: function (event, player) {
                        var storage = player.storage.wechatjiaozhao2;
                        var cards = player.getCards('h').slice(0).filter(function (card) {
                            return storage[0].includes(card);
                        }), list = [];
                        for (var card of cards) {
                            var cardx = storage[1][storage[0].indexOf(card)];
                            list.push([get.translation(get.type2(cardx)), '', get.name(cardx), get.nature(cardx)]);
                        }
                        return ui.create.dialog('矫诏', [list, 'vcard'], 'hidden');
                    },
                    filter: function (button, player) {
                        return lib.filter.filterCard({ name: button.link[2], nature: button.link[3], storage: { wechatjiaozhao2: true } }, player, _status.event.getParent());
                    },
                    check: function (button) {
                        return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    backup: function (links, player) {
                        return {
                            audio: 'jiaozhao',
                            filterCard: lib.skill.wechatjiaozhao2.getOriginalCard(player, { name: links[0][2], nature: links[0][3] }),
                            selectCard: -1,
                            popname: true,
                            viewAs: { name: links[0][2], nature: links[0][3], storage: { wechatjiaozhao2: true } },
                        }
                    },
                    prompt: function (links, player) {
                        var name = links[0][2], nature = links[0][3];
                        var card = lib.skill.wechatjiaozhao2.getOriginalCard(player, { name: links[0][2], nature: links[0][3] });
                        return '将' + get.translation(card) + '当作' + (get.translation(nature) || '') + get.translation(name) + '使用';
                    }
                },
                ai: {
                    order: 7.9,
                    result: { player: 1 },
                },
                subSkill: { backup: {} },
            },
            wechatdanxin: {
                audio: 'danxin',
                trigger: { player: 'damageEnd' },
                frequent: true,
                prompt2: '摸一张牌',
                content: function () {
                    'step 0'
                    event.count = trigger.num;
                    'step 1'
                    event.count--;
                    player.draw();
                    'step 2'
                    if (event.count > 0 && player.hasSkill('wechatdanxin')) player.chooseBool(get.prompt('wechatdanxin'), '摸一张牌').set('frequentSkill', 'wechatdanxin');
                    else event.finish();
                    'step 3'
                    if (result.bool) {
                        player.logSkill('wechatdanxin');
                        event.goto(1);
                    }
                },
            },
            //蔡贞姬
            wechatsheyi: {
                audio: 'sheyi',
                trigger: { global: 'damageBegin4' },
                direct: true,
                filter: function (event, player) {
                    return !player.hasSkill('wechatsheyi_used') && player != event.player && event.player.hp <= player.hp && player.countCards('he') >= Math.max(1, player.hp);
                },
                content: function () {
                    'step 0'
                    var num = Math.max(1, player.hp), target = trigger.player;
                    player.chooseCard('he', get.prompt('wechatsheyi', target), '交给其' + get.cnNumber(num) + '张牌，防止即将受到的伤害（' + trigger.num + '点）', num).set('goon', function () {
                        if (get.attitude(player, target) < 0) return false;
                        if (trigger.num < target.hp && get.damageEffect(target, trigger.source, player, trigger.nature) >= 0) return false;
                        if (trigger.num < 2 && target.hp > trigger.num) return 6 / Math.sqrt(num);
                        if (target == get.zhu(player)) return 9;
                        return 8 / Math.sqrt(num);
                    }()).set('ai', function (card) {
                        if (ui.selected.cards.length >= Math.max(1, _status.event.player.hp)) return 0;
                        if (typeof _status.event.goon == 'number') return _status.event.goon - get.value(card);
                        return 0;
                    });
                    'step 1'
                    if (result.bool) {
                        var target = trigger.player;
                        player.logSkill('wechatsheyi', target);
                        player.addTempSkill('wechatsheyi_used', 'roundStart');
                        player.give(result.cards, target);
                        trigger.cancel();
                    }
                },
                subSkill: { used: { charlotte: true } },
            },
            wechattianyin: {
                audio: 'tianyin',
                trigger: { player: 'phaseJieshuBegin' },
                forced: true,
                locked: false,
                content: function () {
                    'step 0'
                    var list = [], cards = [];
                    player.getHistory('useCard', function (evt) {
                        list.add(get.type2(evt.card, false));
                    });
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        var type = get.type2(ui.cardPile.childNodes[i], false);
                        if (!list.includes(type)) {
                            list.push(type);
                            cards.push(ui.cardPile.childNodes[i])
                        };
                    }
                    if (cards.length) {
                        player.gain(cards, 'gain2');
                        event.finish();
                    }
                    'step 1'
                    player.chooseTarget('天音：是否弃置一名其他角色的一张牌？', function (card, player, target) {
                        return target != player && target.countDiscardableCards(player, 'he');
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.effect(target, { name: 'guohe_copy2' }, player, player);
                    });
                    'step 2'
                    if (result.bool) {
                        player.line(result.targets);
                        player.discardPlayerCard(result.targets[0], 'he', true);
                    }
                },
            },
            //朱灵
            wechatzhanyi: {
                inherit: 'xinzhanyi',
                content: function () {
                    player.loseHp();
                    switch (get.type(cards[0], 'trick', cards[0].original == 'h' ? player : false)) {
                        case 'basic':
                            player.addTempSkill('wechatzhanyi_basic');
                            break;
                        case 'trick':
                            player.draw(3);
                            player.addTempSkill('wechatzhanyi_trick');
                            break;
                        case 'equip':
                            player.addTempSkill('wechatzhanyi_equip');
                            break;
                    }
                },
                subSkill: {
                    basic: {
                        inherit: 'xinzhanyi_basic',
                        group: ['wechatzhanyi_basic1'],
                    },
                    basic1: {
                        trigger: {
                            player: "useCard",
                        },
                        filter: function (event, player) {
                            return get.type(event.card, false) == "basic" && event.skill == 'xinzhanyi_basic_backup';
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        content: function () {
                            if (!trigger.baseDamage) trigger.baseDamage = 1;
                            trigger.baseDamage++;
                            game.log(trigger.card, "的伤害值/回复值", "#y+1");
                        },
                    },
                    trick: {
                        mod: {
                            targetInRange: function (card, player, target, now) {
                                var type = get.type(card);
                                if (type == "trick" || type == "delay") return true;
                            },
                        },
                        audio: "zhanyi",
                        trigger: {
                            player: "useCard",
                        },
                        forced: true,
                        filter: function (event) {
                            return get.type(event.card) == "trick";
                        },
                        content: function () {
                            trigger.directHit.addArray(game.players);
                        },
                    },
                    equip: {
                        inherit: 'xinzhanyi_equip',
                        filter: function (event, player) {
                            return event.card.name == "sha" && event.target.countCards("he") > 0;
                        },
                        content: function () {
                            'step 0'
                            player.discardPlayerCard(trigger.target, 'he', 2, true);
                            'step 1'
                            if (result.bool && result.cards && result.cards.length) {
                                if (result.cards.length == 1) event._result = { bool: true, links: result.cards.slice(0) };
                                else player.chooseButton(['选择获得其中的一张牌', result.cards.slice(0)], true).set('ai', function (button) {
                                    return get.value(button.link);
                                });
                            }
                            else event.finish();
                            'step 2'
                            if (result.links) player.gain(result.links, 'gain2');
                        },
                    },
                },
            },
            wechatshouxi: {
                audio: 'shouxi',
                trigger: { target: 'useCardToTargeted' },
                filter: function (event, player) {
                    return event.card.name == 'sha' && event.player.isIn();
                },
                direct: true,
                content: function* (event, map) {
                    var player = map.player, trigger = map.trigger;
                    var result = yield player.chooseButton([get.prompt2('wechatshouxi'), [['basic', 'trick', 'equip'], 'vcard']]).set('ai', function (button) {
                        var trigger = _status.event.getTrigger();
                        var name = button.link[2], target = trigger.player;
                        if (get.effect(player, trigger.card, target, player) > 0) return 0;
                        if (!target.getDiscardableCards(target, 'he').some(card => get.type2(card) == get.type2(trigger.card))) return 1.1 + Math.random();
                        return 0.1 + Math.random();
                    });
                    if (result.bool) {
                        player.logSkill('wechatshouxi');
                        var name = result.links[0][2];
                        player.popup(name);
                        game.log(player, '声明了', '#y' + get.translation(name) + '牌');
                        var result2 = yield trigger.player.chooseToDiscard('守玺：弃置一张' + get.translation(name) + '牌，或令【杀】对' + get.translation(player) + '无效', function (card) {
                            return get.type2(card) == _status.event.namex;
                        }, 'he').set('ai', function (card) {
                            if (_status.event.eff > 0) return 10 - get.value(card);
                            return 0;
                        }).set('eff', get.effect(player, trigger.card, trigger.player, trigger.player)).set('namex', name);
                        if (!result2.bool) trigger.getParent().excluded.add(player);
                    }
                },
                ai: {
                    effect: {
                        target: function (card, player, target, current) {
                            if (card.name == 'sha' && get.attitude(player, target) < 0) {
                                if (_status.event.name == 'wechatshouxi') return;
                                var bs = player.getCards('he');
                                for (var type of ['basic', 'trick', 'equip']) {
                                    if (!player.getCards('he').some(card => get.type2(card) == type)) return 0;
                                }
                                if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                                if (bs.length <= 3 && player.countCards('h', 'sha') <= 1) {
                                    for (var i = 0; i < bs.length; i++) {
                                        if (bs[i].name != 'sha' && get.value(bs[i]) < 7) {
                                            return [1, 0, 1, -0.5];
                                        }
                                    }
                                    return 0;
                                }
                                return [1, 0, 1, -0.5];
                            }
                        },
                    },
                },
            },
            //极曹操
            wechatdelu: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter: function (event, player) {
                    if (player.hasSkillTag('noCompareSource')) return false;
                    return game.hasPlayer(target => lib.skill.wechatdelu.filterTarget(null, player, target));
                },
                filterTarget: function (card, player, target) {
                    return player.canCompare(target) && target.getHp() <= player.getHp();
                },
                usable: 1,
                selectTarget: [1, Infinity],
                multitarget: true,
                multiline: true,
                content: function () {
                    'step 0'
                    //player.draw();
                    player.addTempSkill('wechatdelu_compare');
                    'step 1'
                    player.chooseToCompare(targets, function (card) {
                        return get.number(card);
                    }).setContent('chooseToCompareMeanwhile');
                    'step 2'
                    if (result.winner) {
                        var targetx = [player].addArray(targets).sortBySeat(player);
                        targetx.remove(result.winner);
                        for (var target of targetx) {
                            const cards = target.getGainableCards(result.winner, 'hej');
                            if (cards.length) result.winner.gain(cards.randomGet(), target, 'giveAuto');
                        }
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target: function (player, target) {
                            if (target.countCards('he') > 1) return -3;
                            return -1;
                        },
                    },
                },
                subSkill: {
                    compare: {
                        charlotte: true,
                        trigger: { player: 'compare' },
                        filter: function (event, player) {
                            return event.getParent().name == 'wechatdelu' && !event.iwhile;
                        },
                        forced: true,
                        popup: false,
                        content: function () {
                            var num = trigger.lose_list.length;
                            trigger.num1 += num;
                            if (trigger.num1 > 13) trigger.num1 = 13;
                            game.log(player, '的拼点牌点数+', num);
                        },
                    },
                },
            },
            wechatzhujiu: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter: function (event, player) {
                    if (!player.countCards('h')) return false;
                    return game.hasPlayer(target => lib.skill.wechatzhujiu.filterTarget(null, player, target));
                },
                filterTarget: function (card, player, target) {
                    return target != player && target.countCards('h');
                },
                usable: 1,
                content: function () {
                    'step 0'
                    var next = player.chooseCardOL([player, target], '煮酒：请选择要交换的牌', true).set('ai', card => -get.value(card)).set('source', player);
                    next.aiCard = function (target) {
                        var hs = target.getCards('h');
                        return { bool: true, cards: [hs.randomGet()] };
                    };
                    next._args.remove('glow_result');
                    'step 1'
                    var cards = [result[0].cards, result[1].cards];
                    event.cards = cards;
                    game.loseAsync({
                        player: player,
                        target: target,
                        cards1: result[0].cards,
                        cards2: result[1].cards,
                    }).setContent('swapHandcardsx');
                    'step 2'
                    game.loseAsync({
                        gain_list: [
                            [player, cards[1].filterInD()],
                            [target, cards[0].filterInD()]
                        ],
                    }).setContent('gaincardMultiple');
                    'step 3'
                    game.delayx();
                    'step 4'
                    var card1 = cards[0][0];
                    var card2 = cards[1][0];
                    if (get.color(card1, player) == get.color(card2, target)) player.recover();
                    else {
                        player.line(target);
                        target.damage();
                    }
                },
                ai: {
                    order: 9,
                    result: { target: -1 },
                },
            },
            //极诸葛亮
            wechatsangu: {
                init: function (player) {
                    player.storage.wechatsangu_count = game.getAllGlobalHistory('useCard', evt => evt.targets && evt.targets.includes(player)).length;
                    player.markSkill('wechatsangu_count');
                    player.addSkill('wechatsangu_count');
                },
                onremove: function (player) {
                    delete player.storage.wechatsangu_count;
                    player.unmarkSkill('wechatsangu_count');
                    player.removeSkill('wechatsangu_count');
                },
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { target: 'useCardToTargeted' },
                filter: function (event, player) {
                    //if(player.countMark('wechatmoulvenum')>=lib.skill.wechatmoulvenum.getMax) return false;
                    return game.getAllGlobalHistory('useCard', evt => evt.targets && evt.targets.includes(player)).indexOf(event.getParent()) % 3 == 2;
                },
                forced: true,
                content: function () {
                    'step 0'
                    lib.skill.wechatmoulvenum.changeNum(3, player);
                    'step 1'
                    player.chooseToGuanxing(3);
                },
                subSkill: {
                    count: {
                        charlotte: true,
                        trigger: { target: 'useCardToTargeted' },
                        forced: true,
                        popup: false,
                        priority: 114514,
                        content: function () {
                            player.storage.wechatsangu_count = game.getAllGlobalHistory('useCard', evt => evt.targets && evt.targets.includes(player)).length;
                            player.markSkill('wechatsangu_count');
                        },
                        intro: {
                            markcount: function (storage, player) {
                                return ((storage || 0) % 3).toString();
                            },
                            content: function (storage, player) {
                                return '获得谋略值进度：' + ((storage || 0) % 3) + '/3';
                            },
                        },
                    },
                },
            },
            wechatyanshi: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter: function (event, player) {
                    return event.wechatyanshi;
                },
                onChooseToUse: function (event) {
                    if (!game.online && !event.wechatyanshi) event.set('wechatyanshi', ui.cardPile.childNodes.length);
                },
                usable: 1,
                chooseButton: {
                    dialog: function (event, player) {
                        return ui.create.dialog('###演势###' + lib.translate.wechatyanshi_info);
                    },
                    chooseControl: () => ['牌堆顶', '牌堆底', 'cancel2'],
                    check: function (event, player) {
                        var card1 = get.cards(1, true)[0];
                        var card2 = get.bottomCards(1, true)[0];
                        if (player.hasValueTarget(card1) && player.getCardUsable(card1) > 0) return '牌堆顶';
                        if (player.hasValueTarget(card2) && player.getCardUsable(card2) > 0) return '牌堆底';
                        return get.value(card1) >= get.value(card2) ? '牌堆顶' : '牌堆底';
                    },
                    backup: function (result) {
                        var next = get.copy(lib.skill.wechatyanshi.subSkill.draw);
                        next.position = result.control;
                        return next;
                    },
                },
                ai: {
                    order: 10,
                    result: { player: 1 },
                },
                subSkill: {
                    draw: {
                        audio: 'wechatyanshi',
                        content: function () {
                            var position = lib.skill.wechatyanshi_backup.position;
                            player.addTempSkill('wechatyanshi_effect', 'phaseUseAfter');
                            player.storage.wechatyanshi_effect = position;
                            player.popup(position);
                            var next = player.draw();
                            if (position == '牌堆底') next.bottom = true;
                            next.gaintag = ['wechatyanshi_effect'];
                        },
                    },
                    effect: {
                        charlotte: true,
                        onremove: function (player) {
                            delete player.storage.wechatyanshi_effect;
                            player.removeGaintag('wechatyanshi_effect');
                        },
                        trigger: { player: 'useCard' },
                        filter: function (event, player) {
                            if (!player.hasSkill('wechatyanshi') || get.is.blocked('wechatyanshi', player)) return false;
                            return player.getHistory('lose', function (evt) {
                                if (evt.getParent() != event) return false;
                                for (var i in evt.gaintag_map) {
                                    if (evt.gaintag_map[i].includes('wechatyanshi_effect')) return true;
                                }
                                return false;
                            }).length;
                        },
                        direct: true,
                        content: function () {
                            'step 0'
                            var position = player.storage.wechatyanshi_effect == '牌堆顶' ? '牌堆底' : '牌堆顶';
                            event.position = position;
                            player.chooseToDiscard(get.prompt('wechatyanshi'), '弃置一张牌并发动【演势】（从' + position + '摸牌）', 'he').set('ai', card => 7 - get.value(card)).logSkill = 'wechatyanshi';
                            'step 1'
                            if (result.bool) {
                                var position = event.position;
                                player.storage.wechatyanshi_effect = position;
                                player.popup(position);
                                var next = player.draw();
                                if (position == '牌堆底') next.bottom = true;
                                next.gaintag = ['wechatyanshi_effect'];
                            }
                        },
                    },
                },
            },
            //SP庞德
            wechatjuesi: {
                audio: 'juesi',
                inherit: 'juesi',
                filterTarget: function (card, player, target) {
                    return target != player && target.countCards('he') > 0;
                },
            },
            wechatrejuesi: {
                audio: 'juesi',
                inherit: 'juesi',
                async content(event, trigger, player) {
                    const target = event.target;
                    const cards = await target.chooseToDiscard('he', true).forResultCards();
                    if (cards && cards.length && cards[0].name != 'sha') {
                        await player.gain(cards, 'gain2');
                        await player.useCard({ name: 'juedou', isCard: true }, target);
                    }
                },
            },
            //极司马懿
            wechatyinren: {
                derivation: ['new_rejianxiong', 'xingshang', 'mingjian'],
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseBegin' },
                filter: function (event, player) {
                    return lib.skill.wechatyinren.derivation.some(skill => !player.hasSkill('wechatyinren_' + skill));
                },
                prompt2: function (event, player) {
                    return '跳过出牌阶段和弃牌阶段并获得技能【' + get.translation(lib.skill.wechatyinren.derivation.filter(skill => !player.hasSkill('wechatyinren_' + skill))[0]) + '】';
                },
                /*
                check:function(event,player){
                if(lib.skill.wechatyinren.derivation.filter(skill=>!player.hasSkill('wechatyinren_'+skill))[0]!='jianxiong'){
                if(!player.hasFriend()) return false;
                }
                return player.countCards('h')<=player.getHandcardLimit()+1;
                },
                */
                content: function () {
                    player.skip('phaseUse');
                    player.skip('phaseDiscard');
                    player.addSkills('wechatyinren_' + lib.skill.wechatyinren.derivation.filter(skill => !player.hasSkill('wechatyinren_' + skill))[0]);
                },
                subSkill: {
                    new_rejianxiong: { inherit: 'new_rejianxiong' },
                    xingshang: { inherit: 'xingshang' },
                    mingjian: { inherit: 'mingjian' },
                },
            },
            wechatduoquan: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatduoquan'), lib.filter.notMe).set('ai', target => {
                        var player = _status.event.player;
                        return -get.attitude(player, target) / Math.pow(target.countCards('hs') + 1);
                    }).animate = false;
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        var list = lib.inpile.reduce((list, name) => {
                            return list.add(get.type2(name));
                        }, []);
                        if (!list.length) { event.finish(); return; }
                        var next = player.chooseControl(list);
                        var str = '夺权：请选择一种牌的类别';
                        var str2 = get.translation(target) + '于其下个出牌阶段使用第一张牌时，若此牌与你选择的类型相同，则你令此牌无效，且此牌对应的实体牌进入弃牌堆后，你可以使用之';
                        if (target.countCards('h')) next.set('dialog', ['###' + str + '###' + str2, [target.getCards('h'), 'vcard']]);
                        else {
                            next.set('prompt', str);
                            next.set('prompt2', str2);
                        }
                        next.set('ai', function () {
                            var player = _status.event.player;
                            var target = _status.event.target;
                            var cards = target.getCards('h', function (card) {
                                return target.hasUseTarget(card);
                            }), map = {};
                            for (var i = 0; i < cards.length; i++) {
                                map[get.type(cards[i], 'trick')] = true;
                            }
                            if (map.equip) return 'equip';
                            if (map.trick) return 'trick';
                            return 0;
                        });
                        next.set('target', target);
                    }
                    else event.finish();
                    'step 2'
                    player.logSkill('wechatduoquan', target);
                    //player.popup(result.control);
                    //game.log(player,'选择了','#g'+get.translation(result.control)+'牌');
                    target.addSkill('wechatduoquan_effect', { player: 'phaseUseAfter' });
                    if (!target.storage.wechatduoquan_effect) target.storage.wechatduoquan_effect = {};
                    if (!target.storage.wechatduoquan_effect[player.playerid]) target.storage.wechatduoquan_effect[player.playerid] = [];
                    target.storage.wechatduoquan_effect[player.playerid].add(result.control);
                    target.markSkill('wechatduoquan_effect');
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        audio: 'wechatduoquan',
                        trigger: { player: 'useCard' },
                        filter: function (event, player) {
                            return player.isPhaseUsing();
                        },
                        direct: true,
                        content: function () {
                            var target = game.findPlayer(target => player.storage.wechatduoquan_effect[target.playerid] && player.storage.wechatduoquan_effect[target.playerid].includes(get.type2(trigger.card)));
                            if (target) {
                                target.logSkill('wechatduoquan_effect', player);
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                                target.addTempSkill('wechatduoquan_gain');
                                trigger.wechatduoquan_effect = target;
                            }
                            player.removeSkill('wechatduoquan_effect');
                        },
                        mod: {
                            aiOrder: function (player, card, num) {
                                if (player.isPhaseUsing() && game.hasPlayer(target => {
                                    return player.storage.wechatduoquan_effect[target.playerid] && player.storage.wechatduoquan_effect[target.playerid].includes(get.type2(card));
                                })) return num / 10;
                            },
                        },
                        intro: {
                            content: function (storage, player) {
                                var str = '';
                                for (var i in storage) {
                                    var target = game.findPlayer2(target => target.playerid == i);
                                    if (!target) continue;
                                    str += get.translation(target) + '→' + get.translation(storage[i]) + '牌<br>';
                                }
                                str = str.slice(0, -4);
                                return str;
                            },
                        },
                    },
                    gain: {
                        charlotte: true,
                        trigger: { global: 'cardsDiscardAfter' },
                        filter: function (event, player) {
                            if (!event.cards.filterInD('d').length) return false;
                            var evt = event.getParent();
                            if (evt.name != 'orderingDiscard') return false;
                            var evtx = (evt.relatedEvent || evt.getParent());
                            return evtx.player.getHistory('useCard', evtxx => {
                                return evtx.getParent() == (evtxx.relatedEvent || evtxx.getParent()) && evtxx.wechatduoquan_effect && evtxx.wechatduoquan_effect == player;
                            }).length;
                        },
                        forced: true,
                        popup: false,
                        content: function* (event, map) {
                            var player = map.player, cards = map.trigger.cards.filterInD('d').slice();
                            while (cards.length) {
                                var result = yield player.chooseButton(['是否使用其中的牌？', cards]).set('ai', button => _status.event.player.getUseValue(button.link));
                                if (result.bool) {
                                    cards.removeArray(result.links);
                                    player.$gain2(result.links[0], false);
                                    game.delayx();
                                    player.chooseUseTarget(true, result.links[0], false);
                                }
                                else break;
                            }
                        },
                    },
                },
            },
            //极马超
            wechatqipao: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'useCardToPlayered' },
                filter: function (event, player) {
                    return event.card.name == 'sha';
                },
                check: function (event, player) {
                    return get.attitude(player, event.target) < 0;
                },
                logTarget: 'target',
                content: function () {
                    'step 0'
                    if (!trigger.target.countDiscardableCards(trigger.player, 'e')) event._result = { index: 1 };
                    else {
                        trigger.target.chooseControl().set('choiceList', [
                            '弃置装备区的所有牌',
                            '本回合非锁定技失效，且不能响应' + get.translation(trigger.card),
                        ]);
                    }
                    'step 1'
                    if (result.index == 0) trigger.target.discard(trigger.target.getCards('e'));
                    else {
                        trigger.target.addTempSkill('fengyin');
                        trigger.getParent().directHit.add(trigger.target);
                    }
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter: function (player, tag, arg) {
                        if (!arg || !arg.card || arg.card.name != 'sha' || !arg.target || arg.target.countDiscardableCards(arg.target, 'e')) return false;
                    },
                },
            },
            wechatzhuixi: {
                mod: {
                    globalFrom: function (from, to) {
                        if (!to.countCards('e', card => get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4')) return -Infinity;
                    },
                },
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                filter: function (event, player) {
                    return player.hasUseTarget({ name: 'sha' }, false) && !game.hasPlayer(target => target != player && !player.inRange(target));
                },
                direct: true,
                locked: false,
                content: function () {
                    player.chooseUseTarget({ name: 'sha' }, get.prompt('wechatzhuixi'), '视为使用一张【杀】', false).logSkill = 'wechatzhuixi';
                },
            },
            //界沮授
            //两服合体
            wechatjianying: {
                audio: 'jianying',
                enable: 'phaseUse',
                filter: function (event, player) {
                    if (!player.countCards('he')) return false;
                    for (var i of lib.inpile) {
                        if (i != 'du' && get.type(i, false) == 'basic') {
                            if (event.filterCard(get.autoViewAs({ name: i }, 'unsure'), player, event)) return true;
                            if (i == 'sha') {
                                for (var j of lib.inpile_nature) {
                                    if (event.filterCard(get.autoViewAs({ name: i, nature: j }, 'unsure'), player, event)) return true;
                                }
                            }
                        }
                    }
                    return false;
                },
                onChooseToUse: function (event) {
                    if (event.type == 'phase' && !game.online) {
                        var last = event.player.getLastUsed();
                        if (last && last.getParent('phaseUse') == event.getParent()) {
                            var suit = get.suit(last.card, false);
                            if (suit != 'none') event.set('wechatjianying_suit', suit);
                        }
                    }
                },
                usable: 1,
                chooseButton: {
                    dialog: function (event, player) {
                        var list = [];
                        var suit = event.wechatjianying_suit || '', str = get.translation(suit);
                        for (var i of lib.inpile) {
                            if (i != 'du' && get.type(i, false) == 'basic') {
                                if (event.filterCard(get.autoViewAs({ name: i }, 'unsure'), player, event)) list.push(['基本', str, i]);
                                if (i == 'sha') {
                                    for (var j of lib.inpile_nature) {
                                        if (event.filterCard(get.autoViewAs({ name: i, nature: j }, 'unsure'), player, event)) list.push(['基本', str, i, j]);
                                    }
                                }
                            }
                        }
                        return ui.create.dialog('渐营', [list, 'vcard']);
                    },
                    check: function (button) {
                        if (button.link[2] == 'jiu') return 0;
                        return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    backup: function (links, player) {
                        var next = {
                            audio: 'jianying',
                            filterCard: true,
                            popname: true,
                            position: 'he',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            ai1: function (card) {
                                return 7 - _status.event.player.getUseValue(card, null, true);
                            },
                        };
                        if (_status.event.wechatjianying_suit) next.viewAs.suit = _status.event.wechatjianying_suit;
                        return next;
                    },
                    prompt: function (links) {
                        return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + (_status.event.wechatjianying_suit ? ('(' + get.translation(_status.event.wechatjianying_suit) + ')') : '') + '使用';
                    },
                },
                ai: {
                    order: function (item, player) {
                        if (_status.event.wechatjianying_suit) return 16;
                        return 3;
                    },
                    result: { player: 1 },
                },
                group: ['dcjianying_mark', 'wechatjianying_draw'],
                init: function (player) {
                    var history = player.getAllHistory('useCard');
                    if (history.length) {
                        var trigger = history[history.length - 1];
                        if (get.suit(trigger.card, player) == 'none' || typeof get.number(trigger.card, player) != 'number') return;
                        player.storage.dcjianying_mark = trigger.card;
                        player.markSkill('dcjianying_mark');
                        game.broadcastAll(function (player, suit) {
                            if (player.marks.dcjianying_mark) player.marks.dcjianying_mark.firstChild.innerHTML = get.translation(suit);
                        }, player, get.suit(trigger.card, player));
                    }
                },
                onremove: function (player) {
                    player.unmarkSkill('dcjianying_mark');
                    delete player.storage.dcjianying_mark;
                },
                subSkill: {
                    draw: {
                        audio: 'jianying',
                        inherit: 'dcjianying',
                    },
                },
            },
            //祖茂
            wechatjuedi: { inherit: 'minijuedi' },
            //关索
            wechatzhengnan: {
                audio: 'zhengnan',
                inherit: 'zhengnan',
                trigger: { global: 'dying' },
                filter: function (event, player) {
                    //if(player==event.player) return false;
                    return !player.getAllHistory('useSkill', evt => evt.skill == 'wechatzhengnan' && evt.targets[0] == event.player).length;
                },
                logTarget: 'player',
            },
            //极黄月英
            wechatmiaobi: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'useCardAfter' },
                filter: function (event, player) {
                    if (player.getHistory('custom', evt => evt.wechatmiaobi_name == event.card.name).length) return false;
                    if (!player.isPhaseUsing() || get.type(event.card) != 'trick' || !event.targets || !event.targets.length) return false;
                    var cards = event.cards.filterInD();
                    return cards.length && event.targets.some(target => target.isIn());
                },
                direct: true,
                content: function () {
                    'step 0'
                    var targets = trigger.targets.filter(target => target.isIn());
                    var cards = trigger.cards.filterInD();
                    event.cards = cards;
                    if (targets.length == 1) {
                        var target = targets[0];
                        event.target = target;
                        player.chooseBool(get.prompt('wechatmiaobi', target), '将' + get.translation(cards) + '至于' + get.translation(target) + '的武将牌上').set('choice', cards.some(card => player.canUse(card, target, false) && get.effect(target, card, player, player) > 0));
                    }
                    else {
                        player.chooseTarget(get.prompt('wechatmiaobi'), '将' + get.translation(cards) + '至于一名目标角色的武将牌上', function (card, player, target) {
                            return _status.event.getTrigger().targets.includes(target) && _status.event.cards.some(card => player.canUse(card, target, false));
                        }).set('ai', function (target) {
                            var cards = _status.event.cards.filter(card => player.canUse(card, target, false));
                            return cards.reduce((num, card) => num + get.effect(target, card, player, player), 0);
                        }).set('cards', cards);
                    }
                    'step 1'
                    if (result.bool) {
                        var target = event.target || result.targets[0];
                        player.logSkill('wechatmiaobi', target);
                        target.addSkill('wechatmiaobi_effect');
                        target.addToExpansion(cards, player, 'give').gaintag.add('wechatmiaobi_effect');
                        var list = target.getStorage('wechatmiaobi_effect').find(list => list[0] == player);
                        if (!list) target.markAuto('wechatmiaobi_effect', [[player, cards]]);
                        else target.storage.wechatmiaobi_effect[target.getStorage('wechatmiaobi_effect').indexOf(list)] = [player, list[1].concat(cards)];
                        player.getHistory('custom').push({ wechatmiaobi_name: trigger.card.name });
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: { player: 'phaseZhunbeiBegin' },
                        forced: true,
                        popup: false,
                        content: function* (event, map) {
                            var player = map.player, storage = player.getStorage('wechatmiaobi_effect').slice();
                            var targets = storage.map(list => list[0]).sortBySeat();
                            while (targets.length) {
                                var target = targets.shift();
                                var list = player.getStorage('wechatmiaobi_effect').find(list => list[0] == target);
                                player.unmarkAuto('wechatmiaobi_effect', [list]);
                                var cards = list[1], result;
                                if (target.isIn()) target.line(player);
                                if (!target.isIn() || !player.countCards('he', card => get.type2(card) == 'trick')) result = { index: 1 };
                                else result = yield player.chooseControl().set('choiceList', [
                                    '交给' + get.translation(target) + '一张锦囊牌，然后移去' + get.translation(cards),
                                    '令' + get.translation(target) + (cards.length > 1 ? '依次' : '') + '对你使用' + get.translation(cards),
                                ]).set('ai', () => {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    var cards = _status.event.cards.filter(card => target.canUse(card, player, false));
                                    if (cards.reduce((num, card) => num + get.effect(target, card, player, player), 0) <= 0) return 1;
                                    return 0;
                                }).set('target', target).set('cards', cards);
                                if (result.index == 0) {
                                    var result2 = yield player.chooseCard('妙笔：交给' + get.translation(target) + '一张锦囊牌', (card, player) => get.type2(card) == 'trick', 'he', true);
                                    if (result2.bool) player.give(result2.cards, target);
                                    player.loseToDiscardpile(cards);
                                }
                                else {
                                    while (cards.length) {
                                        var card = cards.shift();
                                        if (target.canUse(card, player, false)) target.useCard(card, player, false);
                                        else player.loseToDiscardpile([card]);
                                    }
                                }
                            }
                        },
                        intro: {
                            content: 'expansion',
                            markcount: 'expansion',
                        },
                        onremove: function (player, skill) {
                            delete player.storage[skill];
                            var cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                    },
                },
            },
            wechathuixin: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: ['useCard', 'useCardAfter'] },
                filter: function (event, player, name) {
                    if (get.type2(event.card) != 'trick') return false;
                    if (name == 'useCardAfter' && player.hasSkill('wechathuixin_effect')) return false;
                    return (_status.currentPhase == player) == (name == 'useCardAfter');
                },
                forced: true,
                locked: false,
                content: function () {
                    if (event.triggername == 'useCard') player.draw();
                    else player.addTempSkill('wechathuixin_effect');
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '使用牌无距离限制' },
                        mod: { targetInRange: () => true },
                    },
                },
            },
            wechatrehuixin: {
                audio: 'wechathuixin',
                trigger: { player: 'phaseBegin' },
                forced: true,
                locked: false,
                content: function () {
                    player.addTempSkills(lib.skill.wechatrehuixin.derivation[(player.countCards('e') + 1) % 2]);
                },
                derivation: ['wechatjifeng', 'wechatjizhi'],
            },
            //二张
            wechatzhijian: {
                audio: 'zhijian',
                inherit: 'zhijian',
                async content(event, trigger, player) {
                    event.target.equip(event.cards[0]);
                    player.draw(2);
                },
            },
            //陈登
            wechatfengji: {
                audio: 'fengji',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter: function (event, player) {
                    return typeof player.storage.wechatfengji == 'number' && player.countCards('h') >= player.storage.wechatfengji;
                },
                forced: true,
                content: function () {
                    player.draw(2);
                    player.addTempSkill('wechatfengji3');
                },
                group: 'wechatfengji2',
                intro: { content: '上回合结束时的手牌数：#' },
            },
            wechatfengji2: {
                charlotte: true,
                trigger: { player: 'phaseAfter' },
                silent: true,
                content: function () {
                    player.storage.wechatfengji = player.countCards('h');
                    if (player.hasSkill('wechatfengji')) player.markSkill('wechatfengji');
                },
            },
            wechatfengji3: {
                charlotte: true,
                mod: { maxHandcard: (player, num) => num + 2 },
            },
            //陶谦
            wechatyixiang: {
                audio: 'yixiang',
                inherit: 'yixiang',
                filter: function (event, player) {
                    if (event.player.hp < player.hp) return false;
                    var hs = player.getCards('h');
                    var names = ['sha', 'shan', 'tao', 'jiu', 'du'];
                    for (var i = 0; i < hs.length; i++) {
                        names.remove(hs[i].name);
                    }
                    if (!names.length) return false;
                    for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                        if (names.includes(ui.cardPile.childNodes[i].name)) {
                            return true;
                        }
                    }
                    return false;
                },
            },
            //阚泽
            wechatkuanshi: {
                audio: 'kuanshi',
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatkuanshi')).set('ai', target => {
                        var player = _status.event.player;
                        if (get.attitude(player, target) > 0) return 1 / Math.sqrt(target.getHp() + 1);
                    }).animate = false;
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechatkuanshi');
                        target.addSkill('wechatkuanshi_effect');
                        target.markAuto('wechatkuanshi_effect', [player]);
                        player.when('phaseBegin').then(() => target.unmarkAuto('wechatkuanshi_effect', [player])).then(() => {
                            if (!target.getStorage('wechatkuanshi_effect').length) target.removeSkill('wechatkuanshi_effect');
                        }).vars({ target: target });
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        audio: 'kuanshi',
                        trigger: { player: 'damageBegin4' },
                        filter: function (event, player) {
                            return player.getHistory('damage').length;
                        },
                        forced: true,
                        content: function () {
                            trigger.cancel();
                            player.removeSkill('wechatkuanshi_effect');
                        },
                        mark: true,
                        intro: {
                            markcount: () => 0,
                            content: '下次受到本回合非本次受到伤害时防止此伤害',
                        },
                    },
                },
            },
            //薛综
            wechatjiexun: {
                audio: 'jiexun',
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                content: function* (event, map) {
                    var player = map.player;
                    var num1 = game.countPlayer(current => current.countCards('ej', { suit: 'diamond' }));
                    var num2 = player.countMark('wechatjiexun');
                    var str = '令目标摸' + get.cnNumber(num1) + '张牌';
                    if (num2) {
                        str += '，然后弃置' + get.cnNumber(num2) + '张牌；若目标因此法弃置了所有牌，则你失去1点体力';
                    }
                    var result = yield player.chooseTarget(get.prompt('wechatjiexun'), lib.filter.notMe).set('ai', ftarget => {
                        var player = _status.event.player;
                        if (!_status.event.coeff) return 1 + Math.random();
                        return get.sgn(_status.event.coeff) * get.attitude(player, target);
                    }).set('coeff', num1 - num2).set('prompt2', str);
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('wechatjiexun', target);
                        player.addMark('wechatjiexun', 1, false);
                        if (num1) yield target.draw(num1);
                        if (num2) {
                            target.chooseToDiscard(num2, true, 'he', '诫训：请弃置' + get.cnNumber(num2) + '张牌');
                        }
                    }
                },
            },
            //顾雍
            wechatshenxing: {
                audio: 'shenxing',
                enable: 'phaseUse',
                filter: function (event, player) {
                    return player.countCards('he') >= (player.getStat('skill').wechatshenxing || 0);
                },
                selectCard: () => _status.event.player.getStat('skill').wechatshenxing || 0,
                prompt: () => '弃置' + get.cnNumber(_status.event.player.getStat('skill').wevhatshenxing || 0) + '张牌并摸一张牌',
                check: function (card) {
                    var num = _status.event.player.countCards('h', { color: get.color(card) });
                    if (get.position(card) == 'e') num++;
                    return (Math.max(4, 7.1 - num) - get.value(card)) / num;
                },
                filterCard: true,
                position: 'he',
                content: function () {
                    player.draw();
                },
                ai: {
                    order: function (item, player) {
                        if (!player.getStat('skill').wechatshenxing) return 10;
                        return 1;
                    },
                    result: { player: 1 },
                },
            },
            //星黄忠
            wechatshidi: {
                audio: 'spshidi',
                trigger: {
                    player: 'useCard',
                    target: 'useCardToTargeted',
                },
                filter: function (event, player) {
                    if (event.card.name != 'sha') return false;
                    var color = get.color(event.card), target = _status.currentPhase;
                    return (event.name == 'useCard' && target == player && color == 'black') || (event.name != 'useCard' && (!target || target != player) && color == 'red');
                },
                forced: true,
                content: function () {
                    trigger.directHit.addArray(trigger.name == 'useCard' ? game.players : [player]);
                },
                mod: {
                    globalFrom: function (from, to, distance) {
                        if (_status.currentPhase && _status.currentPhase == from) return distance - 1;
                    },
                    globalTo: function (from, to, distance) {
                        if (!_status.currentPhase || _status.currentPhase != to) return distance + 1;
                    },
                    aiOrder: function (player, card, num) {
                        if (_status.currentPhase && _status.currentPhase == player && card.name == 'sha' && get.color(card) == 'black') return num + 0.1;
                    },
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter: function (player, tag, arg) {
                        if (!arg || !arg.card || !arg.target || arg.card.name != 'sha') return false;
                        return _status.currentPhase && _status.currentPhase == player && get.color(arg.card) == 'black';
                    },
                },
                global: 'wechatshidi_ai',
                subSkill: {
                    ai: {
                        ai: {
                            directHit_ai: true,
                            skillTagFilter: function (player, tag, arg) {
                                if (!arg || !arg.card || !arg.target || arg.card.name != 'sha') return false;
                                return (!_status.currentPhase || _status.currentPhase != arg.target) && arg.target.hasSkill('wechatshidi') && get.color(arg.card) == 'red';
                            },
                        },
                    },
                },
            },
            //蔡邕
            wechatbizhuan: {
                audio: 'bizhuan',
                trigger: {
                    player: 'useCard',
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    if (event.name != 'useCard' && event.player == event.target) return false;
                    if (player.getExpansions('wechatbizhuan').length >= 4) return false;
                    return get.color(event.card) == 'black';
                },
                marktext: '书',
                intro: {
                    name: '辟撰(书)',
                    name2: '书',
                    content: 'expansion',
                    markcount: 'expansion',
                },
                frequent: true,
                locked: false,
                content() {
                    player.addToExpansion(get.cards(), 'gain2').gaintag.add('wechatbizhuan');
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + player.getExpansions('wechatbizhuan').length;
                    },
                },
            },
            wechattongbo: {
                audio: 'tongbo',
                trigger: { player: 'phaseDrawEnd' },
                filter: function (event, player) {
                    return player.getExpansions('wechatbizhuan').length > 0 && player.countCards('he') > 0;
                },
                direct: true,
                content: function () {
                    'step 0'
                    var four = false;
                    var nofour = !player.hasFriend();
                    var expansions = player.getExpansions('wechatbizhuan');
                    if (expansions.length == 4) {
                        var suits = ['club', 'spade', 'heart', 'diamond'];
                        var list = player.getCards('he').concat(expansions);
                        for (var i = 0; i < list.length; i++) {
                            suits.remove(get.suit(list[i]));
                            if (suits.length == 0) {
                                four = true;
                                break;
                            }
                        }
                    }
                    var next = player.chooseToMove('通博：是否交换“书”和手牌？').set('four', four).set('nofour', nofour);
                    next.set('list', [
                        [get.translation(player) + '（你）的“书”', expansions],
                        ['你的牌', player.getCards('he')],
                    ]);
                    next.set('filterMove', (from, to) => to != 'number');
                    next.set('processAI', list => {
                        var player = _status.event.player, cards = list[0][1].concat(list[1][1]), cards2 = [];
                        if (_status.event.four) {
                            var sorted = [[], [], [], []];
                            for (var i of cards) {
                                var index = lib.suit.indexOf(get.suit(i, false));
                                if (sorted[index]) sorted[index].push(i);
                            }
                            if (_status.event.nofour) {
                                sorted.sort((a, b) => a.length - b.length);
                                var cards3 = cards.slice().sort((a, b) => get.useful(a) - get.useful(b));
                                cards3.removeArray(sorted[0]);
                                cards2 = cards3.slice(0, 4);
                                cards.removeArray(cards2);
                            }
                            else {
                                for (var i of sorted) {
                                    cards2.push(i.randomGet());
                                    cards.remove(cards2);
                                }
                            }
                        }
                        else {
                            cards.sort((a, b) => get.useful(a) - get.useful(b));
                            cards2 = cards.splice(0, player.getExpansions('wechatbizhuan').length);
                        }
                        return [cards2, cards];
                    });
                    'step 1'
                    if (result.bool) {
                        var pushs = result.moved[0], gains = result.moved[1];
                        pushs.removeArray(player.getExpansions('wechatbizhuan'));
                        gains.removeArray(player.getCards('he'));
                        if (!pushs.length || pushs.length != gains.length) {
                            event.finish();
                            return;
                        }
                        player.logSkill('wechattongbo');
                        player.addToExpansion(pushs, 'give', player).gaintag.add('wechatbizhuan');
                        player.gain(gains, 'gain2');
                    }
                    'step 2'
                    if (lib.suit.some(suit => !player.getExpansions('wechatbizhuan').some(card => get.suit(card) == suit))) event.finish();
                    'step 3'
                    event.cards = player.getExpansions('wechatbizhuan').slice();
                    if (event.cards.length > 1) player.chooseCardButton('将所有“书”交给任意名角色', true, event.cards, [1, event.cards.length]).set('ai', () => ui.selected.buttons.length ? 0 : 1);
                    else if (event.cards.length == 1) event._result = { links: event.cards.slice(0), bool: true };
                    else event.finish();
                    'step 4'
                    if (result.bool) {
                        event.cards.removeArray(result.links);
                        event.togive = result.links.slice(0);
                        player.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true).set('ai', target => {
                            var att = get.attitude(_status.event.player, target);
                            if (_status.event.enemy) return -att;
                            else if (att > 0) return att / (1 + target.countCards('h'));
                            else return att / 100;
                        }).set('enemy', get.value(event.togive[0], player, 'raw') < 0);
                    }
                    else event.finish();
                    'step 5'
                    if (result.targets.length) {
                        result.targets[0].gain(event.togive, 'draw').giver = player;
                        player.line(result.targets[0], 'green');
                        game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张', '#g“书”');
                        if (event.cards.length) event.goto(3);
                    }
                },
                ai: { combo: 'wechatbizhuan' },
            },
            //小宝
            wechatpojun: {
                audio: 'xinpojun',
                inherit: 'xinpojun',
                filter(event, player) {
                    return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.target;
                    const { result: { bool, cards } } = await player.choosePlayerCard(target, 'he', [1, Math.min(target.countCards('he'), target.hp)], get.prompt('wechatpojun', target)).set('forceAuto', true);
                    if (bool) {
                        player.logSkill('wechatpojun', target);
                        target.addToExpansion(cards, 'giveAuto', target).gaintag.add('xinpojun2');
                        target.addSkill('xinpojun2');
                    }
                },
            },
            //虞翻
            wechatzhiyan: {
                audio: 'zhiyan',
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatzhiyan')).set('ai', target => {
                        return get.attitude(_status.event.player, target) * (target.isDamaged() ? 2 : 1);
                    });
                    'step 1'
                    if (result.bool) {
                        event.target = result.targets[0];
                        player.logSkill('wechatzhiyan', result.targets);
                        event.target.draw('visible');
                    }
                    else event.finish();
                    'step 2'
                    var card = result[0];
                    if (get.type(card) != 'equip') {
                        player.draw();
                        event.finish();
                    }
                    else if (target.getCards('h').includes(card) && target.hasUseTarget(card)) {
                        event.target.chooseUseTarget(card, true, 'nopopup');
                        game.delay();
                    }
                    'step 3'
                    target.recover();
                },
                ai: { expose: 0.2 },
            },
            //韩当
            wechatjiefan: {
                audio: 'jiefan',
                inherit: 'jiefan',
                init() { },
                filter: () => true,
                content() {
                    'step 0'
                    player.awakenSkill('wechatjiefan');
                    event.players = game.filterPlayer().sortBySeat(target);
                    'step 1'
                    if (event.players.length) {
                        event.current = event.players.shift();
                        event.current.addTempClass('target');
                        player.line(event.current, 'green');
                        if (event.current.countCards('he') && target.isIn()) {
                            event.current.chooseToDiscard({ subtype: 'equip1' }, 'he', '弃置一张武器牌或令' + get.translation(target) + '摸一张牌').set('ai', function (card) {
                                if (get.attitude(_status.event.player, _status.event.target) < 0) return 7 - get.value(card);
                                return -1;
                            }).set('target', target);
                            event.tempbool = false;
                        }
                        else event.tempbool = true;
                    }
                    else event.finish();
                    "step 2"
                    if (event.tempbool || !result.bool) target.draw();
                    event.goto(1);
                },
                ai: {
                    order: 5,
                    result: {
                        target(player, target) {
                            if (player.hp > 2 && game.phaseNumber < game.players.length * 2) return 0;
                            return 1;
                        },
                    },
                },
            },
            //王朗
            wechatjici: {
                audio: 'jici',
                trigger: { player: 'compare' },
                filter(event, player) {
                    return event.getParent().name == 'gushe' && !event.iwhile && player.countMark('gushe');
                },
                forced: true,
                locked: false,
                content() {
                    const num = player.countMark('gushe');
                    if (trigger.num1 == num) player.getStat().skill.gushe--;
                    trigger.num1 = Math.min(13, trigger.num1 + num);
                    game.log(player, '的拼点牌点数+' + num);
                },
            },
            //黄皓
            wechatqinqing: {
                audio: 'qinqing',
                trigger: { player: 'phaseJieshuBegin' },
                filter: function (event, player) {
                    return game.hasPlayer(current => {
                        return current != player && current.inRange(player);
                    });
                },
                direct: true,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt2('wechatqinqing'), [1, Infinity], (card, player, target) => {
                        if (target == player) return false;
                        return target.inRange(player);
                    }).set('ai', target => {
                        var he = target.countCards('he')
                        if (get.attitude(_status.event.player, target) > 0) {
                            if (he == 0) return 1;
                            if (target.countCards('h') > player.countCards('h')) return 1;
                        }
                        else if (he > 0) return 1;
                        return 0;
                    });
                    'step 1'
                    if (result.bool) {
                        event.targets = result.targets.slice(0).sortBySeat();
                        event.list = event.targets.slice(0);
                        player.logSkill('wechatqinqing', event.targets);
                    }
                    else event.finish();
                    'step 2'
                    if (event.targets.length) {
                        var target = event.targets.shift();
                        if (target.countCards('he')) player.discardPlayerCard(target, 'he', true);
                        target.draw();
                        event.redo();
                    }
                    'step 3'
                    var num = 0, nh = player.countCards('h');
                    for (var i = 0; i < event.list.length; i++) {
                        if (event.list[i].countCards('h') > nh) num++;
                    }
                    if (num) player.draw(num);
                },
            },
            wechathuisheng: {
                audio: 'huisheng',
                trigger: { player: 'damageBegin4' },
                filter(event, player) {
                    if (!player.countCards('he')) return false;
                    if (!event.source || event.source == player || !event.source.isIn()) return false;
                    if (player.getStorage('wechathuisheng_buff').includes(event.source)) return false;
                    return true;
                },
                direct: true,
                content() {
                    'step 0'
                    var att = (get.attitude(player, trigger.source) > 0);
                    var goon = false;
                    if (player.hp == 1) goon = true;
                    else {
                        var he = player.getCards('he');
                        var num = 0;
                        for (var i = 0; i < he.length; i++) {
                            if (get.value(he[i]) < 8) {
                                num++;
                                if (num >= 2) {
                                    goon = true;
                                    break;
                                }
                            }
                        }
                    }
                    player.chooseCard('he', [1, player.countCards('he')], get.prompt2('wechathuisheng', trigger.source)).set('ai', card => {
                        if (_status.event.att) return 10 - get.value(card);
                        if (_status.event.goon) return 8 - get.value(card);
                        if (!ui.selected.cards.length) return 7 - get.value(card);
                        return 0;
                    }).set('goon', goon).set('att', att);
                    'step 1'
                    if (result.bool) {
                        player.logSkill('wechathuisheng', trigger.source);
                        game.delay();
                        event.num = result.cards.length;
                        var goon = false;
                        if (event.num > 2 || get.attitude(trigger.source, player) >= 0) goon = true;
                        var forced = false;
                        var str = '获得其中一张牌并防止伤害';
                        if (trigger.source.countCards('he') < event.num) forced = true;
                        else str += '，或取消并弃置' + get.cnNumber(result.cards.length) + '张牌';
                        trigger.source.chooseButton([str, result.cards], forced).set('ai', function (button) {
                            if (_status.event.goon) return get.value(button.link);
                            return get.value(button.link) - 8;
                        }).set('goon', goon);
                    }
                    else event.finish();
                    'step 2'
                    if (result.bool) {
                        trigger.source.gain(result.links, player, 'giveAuto', 'bySelf');
                        trigger.cancel();
                        player.addTempSkill('wechathuisheng_buff', 'roundStart');
                        player.markAuto('wechathuisheng_buff', [trigger.source]);
                    }
                    else trigger.source.chooseToDiscard(event.num, true, 'he');
                },
                subSkill: { buff: { charlotte: true } },
            },
            //公孙渊
            wechathuaiyi: {
                audio: 'huaiyi',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h');
                },
                usable: 1,
                delay: false,
                async content(event, trigger, player) {
                    await player.showHandcards();
                    if (!player.countDiscardableCards(player, 'h')) return;
                    const colors = ['red', 'black', 'none'].filter(color => player.hasCard(card => {
                        return lib.filter.cardDiscardable(card, player) && get.color(card) == color;
                    }, 'h')).map(color => color == 'none' ? 'none2' : color);
                    const { result: { control } } = await player.chooseControl(colors).set('prompt', '怀异：选择弃置一种颜色的牌').set('ai', () => {
                        const player = get.event('player');
                        const num = game.filterPlayer(target => get.effect(target, { name: 'shunshou_copy2' }, player, player) > 0);
                        let colors = get.event('controls').slice();
                        return colors.sort((a, b) => {
                            return Math.min(num, player.countCards('h', card => {
                                return lib.filter.cardDiscardable(card, player) && get.color(card) == (b == 'none2' ? 'none' : b);
                            })) - Math.min(num, player.countCards('h', card => {
                                return lib.filter.cardDiscardable(card, player) && get.color(card) == (a == 'none2' ? 'none' : a);
                            }));
                        })[0];
                    });
                    if (control) {
                        const cards = player.getCards('h', card => lib.filter.cardDiscardable(card, player) && get.color(card) == (control == 'none2' ? 'none' : control));
                        await player.discard(cards);
                        const { result: { bool, targets } } = await player.chooseTarget([1, cards.length], (card, player, target) => {
                            return target != player && target.countCards('he');
                        }).set('prompt', '怀异：获得至多' + get.cnNumber(cards.length) + '名其他角色的各一张牌').set('ai', target => {
                            const player = get.event('player');
                            return get.effect(target, { name: 'shunshou_copy2' }, player, player);
                        });
                        if (bool) {
                            for (const target of targets.slice().sortBySeat()) {
                                await player.gainPlayerCard(target, 'he', true);
                            }
                        }
                    }
                },
                ai: {
                    order(item, player) {
                        if (!player.countDiscardableCards(player, 'h')) return 0;
                        const num = game.filterPlayer(target => get.effect(target, { name: 'shunshou_copy2' }, player, player) > 0);
                        if (!num) return 0;
                        let color = ['red', 'black', 'none'].filter(color => player.hasCard(card => {
                            return lib.filter.cardDiscardable(card, player) && get.color(card) == color;
                        }, 'h')).sort((a, b) => {
                            return Math.min(num, player.countCards('h', card => {
                                return lib.filter.cardDiscardable(card, player) && get.color(card) == b;
                            })) - Math.min(num, player.countCards('h', card => {
                                return lib.filter.cardDiscardable(card, player) && get.color(card) == a;
                            }));
                        })[0];
                        const cards = player.getCards('h', card => lib.filter.cardDiscardable(card, player) && get.color(card) == color);
                        return cards.length + (cards.length ? 0.1 : 0);
                    },
                    result: { player: 1 },
                },
            },
            //极鲁肃
            wechatlvyuan: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.hasCard(card => _status.connectMode || lib.filter.cardDiscardable(card, player), 'he');
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseToDiscard('he', [1, Infinity]).set('ai', card => {
                        const player = get.player();
                        if (!ui.selected.cards.length) return 5 - get.value(card);
                        const list = ui.selected.cards.map(i => get.color(i, player));
                        if (list.includes(get.color(card, player))) return 7 - get.value(card);
                        return -get.value(card);
                    }).set('prompt', get.prompt2('wechatlvyuan')).set('logSkill', 'wechatlvyuan').forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const cards = event.cards, colors = cards.map(card => get.color(card, player)).toUniqued();
                    await player.draw(cards.length);
                    if (colors.length != 1 || cards.length <= 1) return;
                    player.addTempSkill('wechatlvyuan_effect', { player: 'phaseBegin' });
                    player.markAuto('wechatlvyuan_effect', [colors[0]]);
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        intro: {
                            markcount: () => 0,
                            content(storage) {
                                if (storage.length == 1) return '失去一张非' + get.translation(storage) + '牌时，摸一张牌';
                                return '失去一张牌时，摸一张牌';
                            },
                        },
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        filter(event, player) {
                            const evt = event.getl(player), storage = player.getStorage('wechatlvyuan_effect');
                            return evt && evt.player == player && evt.cards2 && evt.cards2.some(card => storage.length != 1 || get.color(card, player) != storage[0]);
                        },
                        forced: true,
                        content() {
                            const evt = trigger.getl(player), storage = player.getStorage('wechatlvyuan_effect');
                            player.draw(evt.cards2.filter(card => storage.length != 1 || get.color(card, player) != storage[0]).length);
                        },
                    }
                }
            },
            wechathezong: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return game.countPlayer() > 1;
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2('wechathezong'), 2).set('ai', target => {
                        const player = get.event('player'), att = get.attitude(player, target);
                        return get.sgn(att) * (target.countCards('h') + 1);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    for (let i = 0; i < targets.length; i++) {
                        const target = targets[i], friend = targets[1 - i];
                        const skill = 'wechathezong_mark_' + friend.playerid;
                        if (!lib.skill[skill]) {
                            game.broadcastAll(skill => {
                                lib.skill[skill] = { charlotte: true };
                                lib.translate[skill] = '合纵';
                            }, skill);
                        }
                        target.addSkill(skill);
                        target.markSkillCharacter(skill, friend, '合纵', '已与' + get.translation(friend) + '组成合纵关系');
                        targets[0].addTempSkill('wechathezong_effect', 'roundStart');
                        targets[0].markAuto('wechathezong_effect', [targets[1]]);
                    }
                },
                subSkill: {
                    mark: { charlotte: true, intro: { onunmark: true } },
                    effect: {
                        charlotte: true,
                        onremove(player, skill) {
                            const targets = [player].concat(player.getStorage(skill));
                            delete player.storage[skill];
                            for (const i of targets) {
                                const skills = i.skills.slice().filter(hezong => hezong.startsWith('wechathezong_mark_'));
                                if (skills.length) i.removeSkill(skills);
                            }
                        },
                        audio: 'wechathezong',
                        trigger: { global: ['useCardAfter', 'useCardToTarget'] },
                        filter(event, player, name) {
                            if (event.card.name != 'sha' || !event.targets || event.targets.length != 1) return false;
                            const list = [player].concat(player.getStorage('wechathezong_effect'));
                            if (name == 'useCardAfter') return event.getParent(2).name != 'wechathezong_effect' && list.includes(event.player) && !list.includes(event.targets[0]) && event.targets.length == 1 && event.targets[0].isIn();
                            return list.includes(event.target) && !list.includes(event.player);
                        },
                        getTarget(event, player, name) {
                            const list = [player].concat(player.getStorage('wechathezong_effect'));
                            return (name == 'useCardAfter' ? event.player : event.target) == player ? list.filter(i => i != player) : [player];
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            const name = event.triggername, aim = (name == 'useCardAfter' ? trigger.targets[0] : trigger.target);
                            const targets = get.info('wechathezong').subSkill.effect.getTarget(trigger, player, name).sortBySeat();
                            trigger[name == 'useCardAfter' ? 'player' : 'target'].logSkill('wechathezong_effect', targets);
                            for (const target of targets) {
                                if (name == 'useCardAfter') {
                                    let { result: { bool } } = await target.chooseToUse(function (card, player, event) {
                                        if (get.name(card) != 'sha') return false;
                                        return lib.filter.filterCard.apply(this, arguments);
                                    }, '合纵：对' + get.translation(aim) + '使用一张【杀】，或交给' + get.translation(trigger.player) + '一张牌').set('filterTarget', function (card, player, target) {
                                        if (target != get.event('sourcex') && !ui.selected.targets.includes(get.event('sourcex'))) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    }).set('sourcex', aim).set('targetRequired', true).set('complexSelect', true);
                                    if (!bool && target.countCards('he')) await target.chooseToGive('he', true, trigger.player);
                                }
                                else {
                                    let { result: { bool, cards } } = await target.chooseCard('合纵：交给' + get.translation(aim) + '一张【闪】，或成为' + get.translation(trigger.card) + '的额外目标', (card, player) => {
                                        return get.name(card) == 'shan';
                                    }).set('ai', card => {
                                        const player = get.event('player'), aim = get.event('aim'), trigger = get.event().getTrigger();
                                        if (get.attitude(player, aim) <= 0 || get.effect(aim, trigger.card, trigger.player, player) > 0) return -1;
                                        return 1 + Math.random();
                                    }).set('aim', aim);
                                    if (bool) await target.give(cards, aim);
                                    else {
                                        trigger.getParent().targets.add(target);
                                        trigger.getParent().triggeredTargets2.push(target);
                                        game.log(target, '成为了', trigger.card, '的额外目标');
                                    }
                                }
                            }
                        }
                    }
                }
            },
            //极袁绍
            wechathongtu: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return !game.hasPlayer(target => target != player && !player.canCompare(target));
                },
                filterTarget: lib.filter.notMe,
                selectTarget: -1,
                usable: 1,
                multitarget: true,
                multiline: true,
                async content(event, trigger, player) {
                    const { result: { winner } } = await player.chooseToCompare(event.targets, card => get.number(card)).setContent('chooseToCompareMeanwhile');
                    if (winner) {
                        const card = new lib.element.VCard({ name: 'wanjian' });
                        if (winner.hasUseTarget(card)) {
                            player.when({ global: 'useCardAfter' })
                                .filter(evt => evt.card.name == 'wanjian' && evt.getParent(2) == event)
                                .then(() => {
                                    const num = game.countPlayer2(target => target.getHistory('damage', evt => evt.card && evt.card == trigger.card).length);
                                    if (num) player.draw(num);
                                });
                            await winner.chooseUseTarget(true, card, false);
                        }
                    }
                    else delete player.getStat('skill').wechathongtu;
                },
                ai: {
                    order: 9,
                    result: { player: 1 },
                },
            },
            wechatmengshou: {
                getNum(player) {
                    return player.getRoundHistory('sourceDamage').reduce((sum, evt) => sum + evt.num, 0);
                },
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'damageBegin4' },
                filter(event, player) {
                    const getNum = get.info('wechatmengshou').getNum;
                    return event.source && event.source != player && getNum(player) >= getNum(event.source);
                },
                check(event, player) {
                    return get.damageEffect(player, event.source, player) <= 0;
                },
                logTarget: 'source',
                content() {
                    player.tempBanSkill('wechatmengshou', 'roundStart', false);
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (!player || !target || player == target) return;
                            const getNum = get.info('wechatmengshou').getNum;
                            if (player.isTempBanned('wechatmengshou') || player.hasSkillTag('jueqing') || getNum(target) < getNum(player)) return;
                            if (player._wechatmengshou_temp) return;
                            if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
                            if (get.tag(card, 'damage')) {
                                if (target.getHistory('damage').length > 0) return [1, -2];
                                else {
                                    if (get.attitude(player, target) > 0 && target.hp > 1) return 0;
                                    if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus')) {
                                        if (card.name == 'sha') return;
                                        var sha = false;
                                        player._wechatmengshou_temp = true;
                                        var num = player.countCards('h', function (card) {
                                            if (card.name == 'sha') {
                                                if (sha) return false;
                                                else sha = true;
                                            }
                                            return get.tag(card, 'damage') && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
                                        });
                                        delete player._wechatmengshou_temp;
                                        if (player.hasSkillTag('damage')) num++;
                                        if (num < 2) {
                                            var enemies = player.getEnemies();
                                            if (enemies.length == 1 && enemies[0] == target && player.needsToDiscard()) return;
                                            return 0;
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
            },
            //极许褚
            wechathuhou: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'juedouBegin', target: 'juedouBegin' },
                logTarget(event, player) {
                    return event.target == player ? event.player : event.target;
                },
                forced: true,
                locked: false,
                content() {
                    const target = get.info('wechathuhou').logTarget(trigger, player);
                    target.addTempSkill('wechathuhou_debuff');
                    target.markAuto('wechathuhou_debuff', [trigger]);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || !arg.card || !arg.target || arg.card.name != 'juedou' || game.hasPlayer(target => {
                            return get.attitude(target, arg.target) > 0 && target.countCards('hs', { name: 'wuxie' });
                        })) return false;
                    },
                    effect: {
                        target(card, player, target) {
                            if (player._wechathuhou_temp || card.name != 'juedou') return;
                            player._wechathuhou_temp = true;
                            const bool = (get.attitude(player, target) > 0 && get.effect(target, card, player, player) > 0);
                            delete player._wechathuhou_temp;
                            if (bool) return 0;
                        },
                    },
                },
                group: ['wechathuhou_wusheng', 'wechathuhou_damage'],
                subSkill: {
                    debuff: {
                        charlotte: true,
                        onremove: true,
                        mod: {
                            cardRespondable(card, player) {
                                const evt = _status.event, storage = player.getStorage('wechathuhou_debuff');
                                if (evt.name == 'chooseToRespond' && storage.includes(evt.getParent())) return false;
                            },
                        },
                    },
                    wusheng: {
                        audio: 'wechathuhou',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filterCard(card, player) {
                            return get.type(card) == 'equip';
                        },
                        position: 'hes',
                        viewAs: { name: 'sha' },
                        viewAsFilter(player) {
                            if (!player.countCards('hes', { type: 'equip' })) return false;
                        },
                        check(card) {
                            if (ui.selected.cards.length) return 0;
                            const val = get.value(card);
                            if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                            return 7.5 - val;
                        },
                        complexCard: true,
                        selectCard: [1, Infinity],
                        prompt: '将任意张装备牌当作【杀】使用或打出',
                        ai: {
                            respondSha: true,
                            skillTagFilter(player) {
                                if (!player.countCards('hes', { type: 'equip' })) return false;
                            },
                        },
                    },
                    damage: {
                        audio: 'wechathuhou',
                        trigger: { source: 'damageBegin1' },
                        filter(event, player) {
                            const evt = event.getParent(), evtx = event.getParent(2);
                            if (evtx.name != 'useCard' || !['sha', 'juedou'].includes(evtx.card.name)) return false;
                            if (evtx.skill == 'wechathuhou_wusheng' && (evtx.cards || []).some(i => get.type(i, false) == 'equip')) return true;
                            if (evt && evt.name == 'juedou' && player.getHistory('respond', evtxx => {
                                return evtxx.getParent(2) == evt && evtxx.skill == 'wechathuhou_wusheng' && (evtxx.cards || []).length;
                            }).reduce((list, evtxx) => {
                                list.addArray(evtxx.cards || []); return list;
                            }, []).some(i => get.type(i, false) == 'equip')) return true;
                            return false;
                        },
                        forced: true,
                        locked: false,
                        logTarget: 'player',
                        content() {
                            const evt = trigger.getParent(), evtx = trigger.getParent(2);
                            if (evtx.skill == 'wechathuhou_wusheng' && (evtx.cards || []).length) trigger.num += evtx.cards.filter(i => get.type(i, false) == 'equip').length;
                            if (evt && evt.name == 'juedou') trigger.num += player.getHistory('respond', evtxx => {
                                return evtxx.getParent(2) == evt && evtxx.skill == 'wechathuhou_wusheng' && (evtxx.cards || []).length;
                            }).reduce((list, evtxx) => {
                                list.addArray(evtxx.cards || []); return list;
                            }, []).filter(i => get.type(i, false) == 'equip').length;
                        },
                    },
                },
            },
            wechatwuwei: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                direct: true,
                async content(event, trigger, player) {
                    const { result: { bool, targets } } = await player.chooseTarget(get.prompt2('wechatwuwei')).set('ai', target => {
                        const player = get.event('player');
                        return get.effect(target, { name: 'tao' }, player, player) + 0.1;
                    });
                    if (bool) {
                        const target = targets[0];
                        player.logSkill('wechatwuwei', target);
                        player.addTempSkill('wechatwuwei_effect', { player: 'phaseBegin' });
                        player.markAuto('wechatwuwei_effect', [target]);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '保卫$中...' },
                        trigger: { global: 'useCardToTargeted' },
                        filter(event, player) {
                            if (event.card.storage && event.card.storage.wechatwuwei_effect && event.card.storage.wechatwuwei_effect.includes(player)) return false;
                            return get.tag(event.card, 'damage') && event.target.getHp() <= player.getHp() && player.getStorage('wechatwuwei_effect').includes(event.target);
                        },
                        forced: true,
                        logTarget: 'player',
                        content() {
                            trigger.getParent().excluded.add(trigger.target);
                            game.log(trigger.card, '对', trigger.target, '无效');
                            trigger.player.when('useCardAfter').filter(evt => evt == trigger.getParent()).then(() => {
                                const card = new lib.element.VCard({ name: 'juedou', storage: { wechatwuwei_effect: [target] } });
                                if (player.canUse(card, target, false)) player.useCard(card, target, false);
                            }).vars({ target: player });
                        },
                    },
                },
            },
            //极孙笨
            wechattaoni: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'phaseUseBegin',
                },
                filter(event, player) {
                    return player.getHp() > 0;
                },
                async cost(event, trigger, player) {
                    const choices = Array.from({ length: player.getHp() }).map((_, i) => get.cnNumber(i + 1, true));
                    const { result } = await player.chooseControl(choices, 'cancel2').set('prompt', '讨逆：选择失去任意点体力').set('ai', () => {
                        const player = get.player();
                        if (player.getHp() < 2 || !game.hasPlayer(current => current != player && !current.hasMark('wechattaoni') && get.attitude(player, current) < 0)) return 'cancel2';
                        const num = Math.min(player.getHp() - 1, game.countPlayer(current => current != player && !current.hasMark('wechattaoni') && get.attitude(player, current) < 0));
                        return Math.min(choices.length - 1, num - 1);
                    });
                    event.result = {
                        bool: result.control != 'cancel2',
                        cost_data: result.index + 1,
                    }
                },
                async content(event, trigger, player) {
                    const num = event.cost_data;
                    await player.loseHp(num);
                    await player.draw(num);
                    player.addTempSkill(event.name + '_hand');
                    if (!game.hasPlayer(current => current != player)) return;
                    const targets = await player.chooseTarget(`令至多${get.cnNumber(num)}名其他角色获得1枚“讨逆”标记`, lib.filter.notMe, [1, num]).set('ai', target => {
                        const player = get.player(), att = get.attitude(player, target);
                        if (att >= 0) return 0;
                        if (att < 0 && target.hasMark('wechattaoni')) return 0;
                        return -att;
                    }).forResultTargets();
                    if (!targets || !targets.length) return;
                    for (const target of targets) target.addMark(event.name, 1, false);
                },
                marktext: '逆',
                intro: {
                    name: '讨逆',
                    content: 'mark',
                    onunmark: true,
                },
                subSkill: {
                    hand: {
                        charlotte: true,
                        mod: {
                            maxHandcardBase(player, num) {
                                return player.maxHp;
                            },
                        },
                    }
                }
            },
            wechatpingjiang: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer(current => get.info('wechatpingjiang').filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    return target.hasMark('wechattaoni') && player.canUse({ name: 'juedou' }, target, false);
                },
                async content(event, trigger, player) {
                    const juedou = get.autoViewAs({ name: 'juedou', isCard: true, storage: { wechatpingjiang: true } });
                    player.useCard(juedou, event.targets[0], false);
                },
                ai: {
                    order: 4,
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'juedou' }, player, player);
                        }
                    },
                    combo: 'wechattaoni',
                },
                group: 'wechatpingjiang_buff',
                subSkill: {
                    buff: {
                        trigger: {
                            player: 'juedouAfter',
                        },
                        filter(event, player) {
                            return event.card.storage && event.card.storage.wechatpingjiang;
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            if (trigger.turn == player) player.tempBanSkill('wechatpingjiang');
                            else {
                                if (trigger.target.isIn() && trigger.target.hasMark('wechattaoni')) trigger.target.clearMark('wechattaoni');
                                player.addTempSkill('wechatpingjiang_wushuang');
                            }
                        },
                    },
                    wushuang: {
                        trigger: {
                            player: 'useCardToPlayered',
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'juedou';
                        },
                        charlotte: true,
                        forced: true,
                        logTarget(event, player) {
                            return event.name == 'useCardToPlayered' ? event.target : event.player;
                        },
                        async content(event, trigger, player) {
                            if (trigger.name == 'useCardToPlayered') {
                                const id = trigger.target.playerid;
                                const idt = trigger.target.playerid;
                                const map = trigger.getParent().customArgs;
                                if (!map[idt]) map[idt] = {};
                                if (!map[idt].shaReq) map[idt].shaReq = {};
                                if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                map[idt].shaReq[id]++;
                            }
                            else trigger.num++;
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (arg.card.name != 'juedou' || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
                            },
                        },
                    }
                }
            },
            wechatdingye: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return player.isDamaged() && game.hasPlayer2(current => current.hasHistory('damage'));
                },
                forced: true,
                async content(event, trigger, player) {
                    player.recover(game.countPlayer2(current => current.hasHistory('damage')));
                }
            },
            //极荀彧
            wechatshangjie: {
                audio: 'ext:活动武将/audio/skill:2',
                enable: 'chooseToUse',
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    const evt = get.event().getParent('_save');
                    return evt && evt.dying && evt.dying.isIn();
                },
                round: 1,
                async content(event, trigger, player) {
                    const target = event.getParent('_save').dying;
                    await target.recoverTo(1);
                    const num = player.getHp() - target.getHp();
                    if (num > 0) {
                        await player.loseMaxHp(num);
                        const cards = [];
                        while (cards.length < num) {
                            const card = get.cardPile2(card => !cards.includes(card) && get.type2(card) == 'trick');
                            if (card) cards.push(card);
                            else break;
                        }
                        if (cards.length) await player.gain(cards, 'draw');
                    }
                },
                ai: {
                    order: 1,
                    save: true,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying) * (player.getHp() - 1);
                        },
                    },
                },
            },
            wechattunlang: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    global: 'roundStart',
                },
                filter(event, player) {
                    return game.countPlayer() > 1;
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)), 2).set('ai', target => {
                        const player = get.event('player'), att = get.attitude(player, target);
                        return -att * (target.countCards('h') + 1);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    for (let i = 0; i < targets.length; i++) {
                        const target = targets[i], friend = targets[1 - i];
                        const skill = 'wechattunlang_mark_' + friend.playerid;
                        if (!lib.skill[skill]) {
                            game.broadcastAll(skill => {
                                lib.skill[skill] = { charlotte: true };
                                lib.translate[skill] = '吞狼';
                            }, skill);
                        }
                        target.addSkill(skill);
                        target.markSkillCharacter(skill, friend, '吞狼', '与' + get.translation(friend) + '虎狼相斗');
                        targets[0].addTempSkill('wechattunlang_effect', 'roundStart');
                        targets[0].markAuto('wechattunlang_effect', [targets[1]]);
                    }
                },
                subSkill: {
                    mark: {
                        charlotte: true,
                        intro: {
                            onunmark: true,
                        },
                    },
                    effect: {
                        charlotte: true,
                        onremove(player, skill) {
                            const targets = [player].concat(player.getStorage(skill));
                            delete player.storage[skill];
                            for (const i of targets) {
                                const skills = i.skills.slice().filter(tunlang => tunlang.startsWith('wechattunlang_mark_'));
                                if (skills.length) i.removeSkill(skills);
                            }
                        },
                        trigger: {
                            global: ['useCardToPlayer', 'useCardToTarget'],
                        },
                        filter(event, player, name) {
                            if (event.card.name != 'sha' || !event.targets || event.targets.length != 1) return false;
                            const list = [player].concat(player.getStorage('wechattunlang_effect'));
                            if (name == 'useCardToPlayer') return list.includes(event.player) && !list.includes(event.targets[0]) && event.targets.length == 1 && event.targets[0].isIn();
                            return list.includes(event.target) && !list.includes(event.player);
                        },
                        getTarget(event, player, name) {
                            const list = [player].concat(player.getStorage('wechattunlang_effect'));
                            return (name == 'useCardToPlayer' ? event.player : event.target) == player ? list.filter(i => i != player) : [player];
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            const name = event.triggername;
                            const targets = get.info(event.name).getTarget(trigger, player, name).sortBySeat();
                            trigger[name == 'useCardToPlayer' ? 'player' : 'target'].logSkill(event.name, targets);
                            for (const target of targets) {
                                if (name == 'useCardToPlayer') {
                                    trigger.getParent().targets.add(target);
                                    trigger.getParent().triggeredTargets1.push(target);
                                    game.log(target, '成为了', trigger.card, '的额外目标');
                                }
                                else {
                                    if (target.isIn() && target.countCards('h')) await target.chooseToDiscard(true, '吞狼：请弃置一张手牌')
                                }
                            }
                        },
                    }
                }
            },
            wechatwangzuo: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { player: ['phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore'] },
                filter(event, player) {
                    return game.hasPlayer(target => target != player);
                },
                usable: 1,
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt('wechatwangzuo'), '跳过' + { 'phaseDraw': '摸牌', 'phaseUse': '出牌', 'phaseDiscard': '弃牌' }[trigger.name] + '阶段，令一名其他角色执行之', lib.filter.notMe).set('ai', target => {
                        const player = get.event().player, name = get.event().getTrigger().name, num = target.countCards('h');
                        if (name == 'phaseDraw' || name == 'phaseUse') return get.attitude(player, target) * (name == 'phaseUse' ? (num + 1) : (1 / (num + 1)));
                        if (target.needsToDiscard()) return -target.needsToDiscard();
                        if (target.getSkills(null, null, false).some(i => {
                            const info = lib.translate[i + 'info'];
                            return info && get.plainText(info).indexOf('弃牌阶段') != -1;
                        })) return get.attitude(player, target);
                        return 0;
                    }).forResult();
                },
                async content(event, trigger, player) {
                    trigger.cancel(null, null, 'notrigger');
                    const next = event.targets[0][trigger.name]();
                    event.next.remove(next);
                    trigger.getParent().next.unshift(next);
                },
            },
            wechatjuxian: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'] },
                filter(event, player) {
                    if (player !== _status.currentPhase) return false;
                    if (event.name.indexOf('lose') == 0) {
                        if (event.type != 'discard') return false;
                        let players = game.players.slice().concat(game.dead);
                        players.remove(player);
                        return players.reduce((list, target) => {
                            const evt = event.getl(target);
                            if (evt && evt.cards2 && evt.cards2.length) {
                                return list.addArray(evt.cards2);
                            }
                            return list;
                        }, []).someInD('d');
                    }
                    if (!event.cards.someInD('d')) return false;
                    const evt = event.getParent();
                    if (evt.name != 'orderingDiscard') return false;
                    const evtx = (evt.relatedEvent || evt.getParent());
                    if (evtx.player == player) return false;
                    const history = evtx.player.getHistory('useCard').concat(evtx.player.getHistory('respond'));
                    return history.some(evtxx => evtx.getParent() == (evtxx.relatedEvent || evtxx.getParent()));
                },
                forced: true,
                locked: false,
                content() {
                    let cards;
                    if (trigger.name == 'cardsDiscard') cards = trigger.cards.filterInD('d');
                    else {
                        let players = game.players.slice().concat(game.dead);
                        players.remove(player);
                        cards = players.reduce((list, target) => {
                            const evt = trigger.getl(target);
                            if (evt && evt.cards2 && evt.cards2.length) {
                                return list.addArray(evt.cards2);
                            }
                            return list;
                        }, []).filterInD('d');
                    }
                    player.gain(cards, 'gain2');
                },
            },
            wechatxianshi: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: { global: 'phaseDrawBegin' },
                filter(event, player) {
                    return player.countCards('h');
                },
                logTarget: 'player',
                frequent: true,
                async content(event, trigger, player) {
                    const cards = get.cards(3);
                    await game.cardsGotoOrdering(cards);
                    const next = player.chooseToMove('先识：替换其中任意张牌');
                    next.set('list', [['牌堆顶', cards], ['你的手牌', player.getCards('h')]]);
                    next.set('filterMove', (from, to) => typeof to != 'number');
                    next.set('filterOk', moved => moved[1].some(i => !get.event().player.getCards('h').includes(i)));
                    next.set('processAI', list => {
                        const player = get.event().player;
                        let allcards = list[0][1].slice(0), cards = [];
                        if (list.length > 1) allcards = allcards.concat(list[1][1]);
                        let canchoose = allcards.slice();
                        const getv = button => {
                            if (button.name == 'sha' && allcards.filter(card => {
                                return card.name == 'sha' && !cards.filter(() => button == card).length;
                            }).length > player.getCardUsable({ name: 'sha' })) return 10;
                            return -player.getUseValue(button, player);
                        };
                        while (cards.length < 3) {
                            canchoose.sort((a, b) => getv(b) - getv(a));
                            cards.push(canchoose.shift());
                        }
                        return [cards, canchoose];
                    });
                    const result = await next.forResult();
                    if (result.bool) {
                        event.forceDie = true;
                        const moved = result.moved[0];
                        const hs = player.getCards('h');
                        let lose = [], gain = cards.slice();
                        for (const i of moved) {
                            if (hs.includes(i)) lose.push(i);
                            else gain.remove(i);
                        }
                        if (lose.length) await player.lose(lose.slice().reverse(), ui.cardPile, 'insert');
                        if (gain.length) await player.gain(gain, 'draw');
                        for (const i of moved.slice().reverse()) {
                            if (!(('hejsdx').includes(get.position(i, true)))) {
                                i.fix();
                                ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                            }
                        }
                        game.updateRoundNumber();
                    }
                },
            },
            //极甄宓
            wechatshenfu: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                filter(event, player) {
                    return player.hasMark('wechatshenfu');
                },
                check(event, player) {
                    return player.countMark('wechatshenfu') > 2;
                },
                async content(event, trigger, player) {
                    const num = player.countMark(event.name);
                    player.clearMark(event.name);
                    const cards = get.cards(num);
                    await player.showCards(cards, get.translation(player) + '发动了【神赋】');
                    const black = cards.filter(card => get.color(card) == 'black' && player.hasUseTarget(card));
                    if (!black.length) return;
                    while (black.length) {
                        const card = black.shift();
                        if (!player.hasUseTarget(card)) continue;
                        const bool = await player.chooseUseTarget(card, true, false).forResultBool();
                        if (!bool) break;
                    }
                },
                group: 'wechatshenfu_mark',
                subSkill: {
                    mark: {
                        trigger: {
                            global: 'damageEnd',
                        },
                        firstDo: true,
                        forced: true,
                        async content(event, trigger, player) {
                            player.addMark('wechatshenfu', 1);
                        }
                    },
                },
                marktext: '赋',
                intro: {
                    name: '神赋',
                    content: 'mark',
                    onunmark: true,
                },
            },
            wechatsiyuan: {
                audio: 'ext:活动武将/audio/skill:2',
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return event.source && event.source.isIn() && game.hasPlayer(current => current != player && current != event.source);
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)), (card, player, target) => {
                        return target != player && target != trigger.source;
                    }).set('ai', target => {
                        //不会，奖励你写
                    }).forResult();
                },
                async content(event, trigger, player) {
                    event.targets[0].damage(trigger.source, 'unreal');
                },
            },
            //157的阮惠
            wechatmingcha: {
                audio: 'mingcha',
                trigger: { player: 'phaseDrawBegin1' },
                filter: (event) => !event.numFixed,
                forced: true,
                locked: false,
                content() {
                    'step 0'
                    var cards = game.cardsGotoOrdering(get.cards(2)).cards, cards2 = cards.slice(0);
                    event.cards = cards.filter(function (i) {
                        return get.number(i) <= 8;
                    });
                    player.showCards(cards, get.translation(player) + '发动了【明察】');
                    'step 1'
                    player.chooseBool('是否放弃摸牌' + (cards.length ? '并获得' + get.translation(cards) : '') + '？').set('goon', function () {
                        let num = trigger.num;
                        if (game.hasPlayer(cur => cur.countGainableCards(player, 'he') && get.attitude(_status.event.player, cur) < 0)) num -= 2;
                        return num >= 0;
                    }()).set('ai', () => _status.event.goon);
                    'step 2'
                    if (result.bool) {
                        trigger.changeToZero();
                        player.gain(cards, 'gain2');
                    }
                    else event.finish();
                    'step 3'
                    player.chooseTarget('是否随机获得其他角色的一张牌？', function (card, player, target) {
                        return target != player && target.countCards('he') > 0;
                    }).set('ai', function (target) {
                        if (!target.getGainableCards(player, 'he')) return 0.99;
                        return 1 - get.attitude(player, target);
                    });
                    'step 4'
                    if (result.bool) {
                        var target = result.targets[0], cards = target.getGainableCards(player, 'he');
                        player.line(target, 'green');
                        if (cards.length) player.gain(cards.randomGet(), target, 'giveAuto', 'bySelf');
                    }
                },
            },
            wechatjingzhong: {
                audio: 'jingzhong',
                mod: {
                    aiOrder(player, card, num) {
                        if (num <= 0 || !player.isPhaseUsing() || !player.hasCard(i => {
                            return lib.filter.cardDiscardable(i, player) && get.color(i, player) === 'black';
                        }, 'h')) return num;
                        let dis = player.needsToDiscard(null, false, true);
                        if (dis > 2 || dis <= 0) return num;
                        if (dis === 1) return 0;
                        if (get.color(card, player) === 'black') return num / 10;
                    }
                },
                trigger: { player: 'phaseDiscardAfter' },
                filter(event, player) {
                    return player.hasHistory('lose', function (evt) {
                        if (evt.type === 'discard' && evt.getParent('phaseDiscard') === event) {
                            for (let i of evt.cards2) {
                                if (get.color(i, player) === 'black') return true;
                            }
                        }
                    });
                },
                direct: true,
                locked: false,
                content() {
                    'step 0'
                    player.chooseTarget(get.prompt('wechatjingzhong'), '获得一名其他角色下回合出牌阶段内使用的牌（每阶段限三次）', lib.filter.notMe).set('ai', target => {
                        return Math.sqrt(target.countCards('h')) * get.threaten(target);
                    });
                    'step 1'
                    if (result.bool) {
                        let target = result.targets[0];
                        player.logSkill('wechatjingzhong', target);
                        player.addSkill('wechatjingzhong_effect');
                        player.markAuto('wechatjingzhong_effect', [target]);
                        game.delayx();
                    }
                },
                subSkill: {
                    effect: {
                        mark: true,
                        intro: { content: '已指定$为目标' },
                        trigger: { global: 'useCardAfter' },
                        filter(event, player) {
                            if (!player.getStorage('wechatjingzhong_effect').includes(event.player) || !event.cards.filterInD().length) return false;
                            let evt = event.getParent('phaseUse');
                            if (!evt || evt.player != event.player) return false;
                            return player.getHistory('useSkill', function (evtx) {
                                return evtx.skill == 'wechatjingzhong_effect' && evtx.event.getParent('phaseUse') === evt;
                            }).length < 3;
                        },
                        forced: true,
                        charlotte: true,
                        logTarget: 'player',
                        content: function () {
                            player.gain(trigger.cards.filterInD(), 'gain2');
                        },
                        group: 'wechatjingzhong_remove',
                    },
                    remove: {
                        trigger: { global: 'phaseAfter' },
                        filter(event, player) {
                            return player.getStorage('wechatjingzhong_effect').includes(event.player);
                        },
                        forced: true,
                        charlotte: true,
                        popup: false,
                        firstDo: true,
                        content() {
                            var storage = player.getStorage('wechatjingzhong_effect');
                            storage.remove(trigger.player);
                            if (!storage.length) player.removeSkill('wechatjingzhong_effect');
                        },
                    },
                },
            },
            //SP马超
            wechatshichou: {
                audio: 'ol_shichou',
                trigger: { player: 'useCard2' },
                filter(event, player) {
                    if (player.isHealthy() || event.card.name != 'sha') return false;
                    return game.hasPlayer(target => {
                        return target != player && !event.targets.includes(target) && lib.filter.targetEnabled2(event.card, player, target) && lib.filter.targetInRange(event.card, player, target);
                    });
                },
                async cost(event, trigger, player) {
                    var num = player.getDamagedHp();
                    event.result = await player.chooseTarget(get.prompt('wechatshichou'), '为' + get.translation(trigger.card) + '添加至多' + get.cnNumber(num) + '个目标', [1, num], (card, player, target) => {
                        var evt = _status.event.getTrigger();
                        return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                    }).set('ai', target => get.effect(target, _status.event.getTrigger().card, _status.event.player)).forResult();
                },
                content() {
                    trigger.targets.addArray(event.targets);
                },
                group: 'wechatshichou_gain',
                subSkill: {
                    gain: {
                        audio: 'ol_shichou',
                        trigger: { player: 'useCardAfter' },
                        filter(event, player) {
                            return event.card.name == 'sha' && event.cards && event.cards.someInD() && !player.getHistory('sourceDamage', evt => evt.card && evt.card == event.card).length;
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.gain(trigger.cards.filterInD(), 'gain2');
                        },
                    },
                },
            },
            //庞德公
            wechatpingcai: {
                audio: 'xinfu_pingcai',
                enable: 'phaseUse',
                usable: 1,
                chooseButton: {
                    dialog(event, player) {
                        var dialog = ui.create.dialog('评才：请选择一项', 'hidden');
                        const list = get.info('wechatpingcai').list;
                        dialog.add([list.map(control => [control, control[1]]), 'textbutton']);
                        return dialog;
                    },
                    filter(button, player) {
                        const name = button.link[0].slice(0, -'_card'.length);
                        return !((name == 'fengchu' && !game.hasPlayer(target => !target.isLinked())) || (name == 'shuijing' && !player.canMoveCard(null, true)));
                    },
                    check(button) {
                        const player = get.event('player'), name = button.link[0].slice(0, -'_card'.length);
                        if (name == 'xuanjian') {
                            if (game.hasPlayer(current => {
                                return current.isDamaged() && current.hp < 3 && get.attitude(player, current) > 1;
                            })) return 1 + Math.random();
                            return 1;
                        }
                        if (name == 'wolong') {
                            if (game.hasPlayer(current => {
                                return get.damageEffect(current, player, player, 'fire') > 0;
                            })) return 1.2 + Math.random();
                            return 0.5;
                        }
                        return 0.6;
                    },
                    backup: (links) => get.copy(lib.skill['wechatpingcai_' + (links[0][0].slice(0, -'_card'.length))]),
                    prompt: (links) => '###评才 - ' + get.translation(links[0][0]) + '###' + links[0][1],
                },
                get ai() {
                    return get.info('xinfu_pingcai').ai;
                },
                list: [
                    ['wolong_card', '对一名角色造成1点火属性伤害'],
                    ['fengchu_card', '横置至多四名角色'],
                    ['shuijing_card', '移动场上的一张装备牌'],
                    ['xuanjian_card', '令一名角色摸一张牌并回复1点体力，然后你摸一张牌'],
                ],
                subSkill: {
                    backup: {},
                    wolong: {
                        audio: 'pcaudio_wolong_card',
                        filterTarget: true,
                        async content(event, trigger, player) {
                            await event.target.damage(1, 'fire');
                        },
                        ai: {
                            result: {
                                target(player, target) {
                                    return get.damageEffect(target, player, player, 'fire') * (get.sgn(get.sgn(get.attitude(player, target)) - 0.5));
                                },
                            },
                        },
                    },
                    fengchu: {
                        audio: 'pcaudio_fengchu_card',
                        filterTarget(card, player, target) {
                            return !target.isLinked();
                        },
                        selectTarget: [1, 4],
                        async content(event, trigger, player) {
                            await event.target.link(true);
                        },
                        ai: {
                            result: {
                                target(player, target) {
                                    return get.effect(target, { name: 'tiesuo' }, player, player) * (get.sgn(get.sgn(get.attitude(player, target)) - 0.5));
                                },
                            },
                        },
                    },
                    shuijing: {
                        audio: 'pcaudio_shuijing_card',
                        async content(event, trigger, player) {
                            await player.moveCard().set('nojudge', true);
                        },
                    },
                    xuanjian: {
                        audio: 'pcaudio_xuanjian_card',
                        filterTarget: true,
                        async content(event, trigger, player) {
                            await event.target.draw();
                            await event.target.recover();
                            await player.draw();
                        },
                        ai: {
                            result: {
                                target(player, target) {
                                    return (get.recoverEffect(target, player, player) + get.effect(target, { name: 'draw' }, player, player)) * (get.sgn(get.sgn(get.attitude(player, target)) - 0.5));
                                },
                            },
                        },
                    },
                },
            },
            //五元妹
            wechatxuehen: {
                audio: 'xueji',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer(target => player.inRange(target)) && player.hasCard(card => lib.skill.wechatxuehen.filterCard(card, player), 'he');
                },
                filterCard(card, player) {
                    return lib.filter.cardDiscardable(card, player) && get.color(card) == 'red';
                },
                position: 'he',
                check(card) {
                    return 8 - get.value(card);
                },
                filterTarget(card, player, target) {
                    return player.inRange(target);
                },
                usable: 1,
                selectTarget: [1, 2],
                multitarget: true,
                multiline: true,
                line: 'fire',
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    for (const i of targets) await i.damage();
                    for (let j = 0; j < targets.length; j++) {
                        await targets[j].draw(j == targets.length - 1 ? '' : 'nodelay');
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            return get.damageEffect(target, player, player) * get.sgn(get.sgn(get.attitude(player, target)) - 0.5);
                        },
                    },
                },
            },
            wechathuxiao: {
                inherit: 'oldhuxiao',
                content() {
                    if (player.stat[player.stat.length - 1].card.sha > 0) player.stat[player.stat.length - 1].card.sha--;
                    game.log(trigger.card, '不计入次数');
                    player.draw();
                },
            },
            wechatwuji: {
                inherit: 'oldwuji',
                filter(event, player) {
                    return player.getHistory('sourceDamage').reduce((sum, evt) => sum + evt.num, 0) >= 3;
                },
                content() {
                    'step 0'
                    player.awakenSkill('wechatwuji');
                    'step 1'
                    player.gainMaxHp();
                    player.recover();
                    player.changeSkills(['new_rewusheng'], ['wechatxuehen']);
                },
                derivation: 'new_rewusheng',
            },
            //黄月英
            wechatlinglong: {
                mod: {
                    maxHandcard(player, num) {
                        if (!player.hasEmptySlot(3) || !player.hasEmptySlot(4)) return;
                        return num + 2;
                    },
                },
                audio: 'linglong',
                inherit: 'twsaotao',
                filter(event, player) {
                    return lib.skill.twsaotao.filter(event, player) && !player.countCards('e');
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player) {
                        return !player.countCards('e');
                    },
                },
                group: 'linglong_bagua',
            },
            //公孙瓒
            wechatqiaomeng: {
                audio: 'qiaomeng',
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return event.card.name == 'sha' && get.color(event.card) == 'black' && event.target.countCards('he');
                },
                async cost(event, trigger, player) {
                    const target = trigger.target;
                    let result = await player.discardPlayerCard(target, 'he', get.prompt2('wechatqiaomeng')).set('logSkill', ['wechatqiaomeng', target]).forResult();
                    event.result = result;
                },
                popup: false,
                async content(event, trigger, player) {
                    const cards = event.cards.filter(card => get.type(card, false) == 'equip' && get.position(card, true) == 'd');
                    if (cards.length) await player.gain(cards, 'gain2');
                },
            },
            //肘不疑
            wechatquesong: {
                audio: 'mbquesong',
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return player.getHistory('damage').length;
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5))).set('ai', target => {
                        const player = get.player();
                        if (get.attitude(player, target) <= 0) return 0;
                        const len = 2, hp = target.getHp();
                        return len + target.isTurnedOver() * 2 + (1.5 * Math.min(4, target.getDamagedHp())) / (hp + 1);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    let result;
                    const target = event.targets[0], goon = target.isDamaged();
                    if (goon) result = await target.chooseControl().set('choiceList', ['摸三张牌并复原武将牌', '回复1点体力']).set('prompt', '雀颂：请选择一项').set('ai', () => {
                        const player = get.player();
                        return get.effect(player, { name: 'draw' }, player, player) * 2 >= get.recoverEffect(player, player, player) ? 0 : 1;
                    }).forResult();
                    else result = { index: !goon ? 0 : 1 };
                    if (result.index == 0) {
                        await target.draw(3);
                        await target.link(false);
                        await target.turnOver(false);
                    }
                    else await target.recover();
                },
                ai: {
                    expose: 0.2,
                    maixie: true,
                    skillTagFilter(player, tag) {
                        if (player.getStat().damaged) return false;
                    },
                },
            },
            //李通
            wechattuifeng: {
                audio: 'cuifeng',
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return get.itemtype(event.cards) == 'cards' && event.cards.filterInD().length;
                },
                async cost(event, trigger, player) {
                    const cards = trigger.cards.filterInD();
                    if (cards.length == 1) {
                        const bool = await player.chooseBool(`推锋：是否将${get.translation(cards)}置于武将牌上？`).forResultBool();
                        event.result = {
                            bool: bool,
                            cost_data: cards,
                        }
                    }
                    else {
                        const { result: { bool, links } } = await player.chooseButton(['推锋：是否将其中一张牌置于武将牌上？', cards]).set('ai', button => {
                            const player = get.player();
                            return player.getUseValue(button.link);
                        });
                        event.result = {
                            bool: bool,
                            cost_data: links,
                        }
                    }
                },
                async content(event, trigger, player) {
                    const next = player.addToExpansion(event.cost_data, 'gain2');
                    next.gaintag.add(event.name);
                    await next;
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                marktext: '锋',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                group: 'wechattuifeng_buff',
                ai: {
                    threaten: 0.8,
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        target: function (card, player, target) {
                            if (player.hasSkillTag("jueqing", false, target)) return [1, -1];
                            if (get.tag(card, "damage") && player != target) {
                                var cards = card.cards,
                                    evt = _status.event;
                                if (evt.player == target && card.name == "damage" && evt.getParent().type == "card") cards = evt.getParent().cards.filterInD();
                                if (target.hp <= 1) return;
                                if (get.itemtype(cards) != "cards") return;
                                for (var i of cards) {
                                    if (get.name(i, target) == "tao") return [1, 5];
                                }
                                if (get.value(cards, target) >= 7 + target.getDamagedHp()) return [1, 3];
                                return [1, 0.6];
                            }
                        },
                    },
                },
                subSkill: {
                    buff: {
                        audio: 'tuifeng',
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        filter(event, player) {
                            return player.getExpansions('wechattuifeng').length > 0;
                        },
                        prompt: '获得武将牌上的所有牌并摸等量的牌',
                        async content(event, trigger, player) {
                            const cards = player.getExpansions('wechattuifeng');
                            await player.gain(cards, 'gain2');
                            await player.draw(cards.length);
                            player.addTempSkill('tuifeng3');
                            player.addMark('tuifeng3', cards.length, false);
                        },
                    }
                }
            },
            //鲍三娘
            wechatwuniang: {
                audio: 'xinfu_wuniang',
                trigger: {
                    player: ['useCard', 'respond'],
                },
                filter(event, player) {
                    return event.card.name == 'sha' && game.hasPlayer(current => current != player && current.countGainableCards(player, 'hej'));
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)), (card, player, target) => {
                        return target != player && target.countGainableCards(player, 'hej') > 0;
                    }).set('ai', target => {
                        const player = get.player();
                        return get.effect(target, { name: 'shunshou_copy2' }, player, player);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.line(target, 'fire');
                    await player.gainPlayerCard(target, 'he', true);
                    await target.draw();
                    const list = game.filterPlayer(current => {
                        return get.rawName(current.name) == '关索' || get.rawName(current.name2) == '关索';
                    });
                    if (list.length) await game.asyncDraw(list);
                },
            },
            wechatxushen: {
                audio: 'xinfu_xushen',
                trigger: {
                    player: 'dyingAfter',
                },
                limited: true,
                skillAnimation: true,
                animationColor: 'orange',
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    await player.recover();
                    if (!game.hasPlayer(current => {
                        return get.rawName(current.name) == '关索' || get.rawName(current.name2) == '关索';
                    })) {
                        const targets = await player.chooseTarget('许身：你可令一名其他角色选择是否用关索代替其武将并令其摸三张牌', lib.filter.notMe).set('ai', target => {
                            return get.attitude(player, target);
                        }).forResultTargets();
                        if (!targets || !targets.length) return;
                        const target = targets[0];
                        const bool = await target.chooseBool('许身：是否将自己的一张武将牌替换为“关索”？').forResultBool();
                        if (!bool) return;
                        const control = target.name2 != undefined ? await target.chooseControl(target.name1, target.name2).set('prompt', '请选择要更换的武将牌').forResultControl() : target.name1;
                        await target.reinitCharacter(control, 'wechat_guansuo');
                        await target.draw(3);
                    }
                },
            },
            //徐氏
            wechatfuzhu: {
                audio: 'fuzhu',
                inherit: 'fuzhu',
                filter(event, player) {
                    return event.player != player && event.player.hasSex('male') && ui.cardPile.childElementCount <= 10 * player.countMark('wechatfuzhu_mark');
                },
                content() {
                    "step 0";
                    event.washed = false;
                    lib.onwash.push(lib.skill.fuzhu.onWash);
                    event.total = game.players.length + game.dead.length;
                    "step 1";
                    event.total--;
                    var card = get.cardPile2(function (card) {
                        return card.name == "sha" && player.canUse(card, trigger.player, false);
                    });
                    if (card) {
                        player.useCard(card, trigger.player, false);
                    }
                    "step 2";
                    if (event.total > 0 && !event.washed && ui.cardPile.childElementCount <= player.countMark('wechatfuzhu_mark') * 10 && trigger.player.isIn()) event.goto(1);
                    "step 3";
                    player.clearMark('wechatfuzhu_mark');
                    lib.onwash.remove(lib.skill.fuzhu.onWash);
                    game.washCard();
                },
                ai: {
                    combo: 'wengua',
                },
                group: 'wechatfuzhu_mark',
                subSkill: {
                    mark: {
                        trigger: {
                            player: 'logSkillBegin',
                        },
                        filter(event, player) {
                            return event.skill == 'wengua';
                        },
                        charlotte: true,
                        forced: true,
                        silent: true,
                        popup: false,
                        async content(event, trigger, player) {
                            player.addMark(event.name, 1, false);
                        },
                        intro: {
                            content: '本局游戏已发动过#次【问卦】',
                        },
                    }
                }
            },
            //谋香香
            wechatsbliangzhu: {
                audio: 'sbliangzhu',
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.hasGaintag('wechatsbliangzhu')) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('wechatsbliangzhu')) return false;
                    },
                },
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer(current => current != player && current.countGainableCards(player, 'h'));
                },
                filterTarget(card, player, target) {
                    return target != player && target.countGainableCards(player, 'h');
                },
                locked: false,
                async content(event, trigger, player) {
                    const cards = await player.choosePlayerCard(event.targets[0], 'h', true).forResultCards();
                    if (!cards || !cards.length) return;
                    const next = player.gain(cards, 'gain2');
                    next.gaintag.add(event.name);
                    await next;
                    const evts = game.getGlobalHistory('everything', evt => evt.name == 'wechatsbjieyin' && evt.player == player && evt.getParent('phaseUse') == event.getParent(3));
                    const target = evts?.lastItem?.targets[0];
                    if (!target || !target.isIn()) return; 21
                    let result;
                    if (target.canMoveCard(null, true)) result = await target.chooseControl().set('choiceList', [
                        '移动场上一张装备牌',
                        '摸两张牌',
                    ]).set('ai', () => {
                        const player = get.player();
                        return game.hasPlayer(current => get.attitude(player, current) < 0 && current.getCards('e').some(card => game.hasPlayer(currentx => get.attitude(player, currentx) > 0 && currentx.canEquip(card)) && get.value(card) > get.effect(player, { name: 'draw' }, player, player))) ? 0 : 1;
                    }).forResult();
                    else result = { index: 1 };
                    if (result.index == 0) await target.moveCard(true).set('nojudge', true);
                    else await target.draw(2);
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'shunshou_copy2' }, player, player);
                        },
                    },
                },
                onremove(player) {
                    player.removeGaintag('wechatsbliangzhu');
                },
            },
            wechatsbjieyin: {
                audio: 'sbjieyin',
                trigger: {
                    player: 'phaseUseBegin',
                },
                locked: false,
                dutySkill: true,
                filter(event, player) {
                    return game.hasPlayer(current => current != player && current.hasSex('male'));
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)), (card, player, target) => {
                        return target != player && target.hasSex('male');
                    }, true).set('ai', target => {
                        const player = get.player();
                        return get.attitude(player, target)
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const str = `是否交给${get.translation(player)}两张牌，然后回复1点体力？或者点击“取消”，令其失去〖良助〗，然后视为其对你使用一张【顺手牵羊】。`;
                    const hs = target.countCards('he') < 2;
                    const bool = hs ? false : await target.chooseToGive(player, 'he', 2, str).set('ai', card => {
                        const goon = get.event('goon');
                        if (goon) return 0;
                        return 7.5 - get.value(card);

                    }).set('goon', get.attitude(target, player) <= 0).forResultBool();
                    if (bool) await target.recover();
                    else {
                        await player.removeSkills('wechatsbliangzhu');
                        const shunshou = get.autoViewAs({ name: 'shunshou', isCard: true });
                        if (player.canUse(shunshou, target)) await player.useCard(shunshou, target);
                    }
                },
                derivation: 'wechatsbxiaoji',
                group: 'wechatsbjieyin_fail',
                subSkill: {
                    fail: {
                        audio: 'sbjieyin',
                        trigger: {
                            player: 'changeSkillsAfter',
                        },
                        filter(event, player) {
                            return event.removeSkill.includes('wechatsbliangzhu');
                        },
                        dutySkill: true,
                        forced: true,
                        locked: false,
                        async content(event, trigger, player) {
                            player.awakenSkill('wechatsbjieyin');
                            game.log(player, '使命失败');
                            await player.recover();
                            await player.loseMaxHp();
                            await player.addSkills('wechatsbxiaoji');
                        },
                    }
                }
            },
            wechatsbxiaoji: {
                audio: 'sbxiaoji',
                inherit: 'xiaoji',
                async content(event, trigger, player) {
                    await player.draw(2);
                    if (!game.hasPlayer(current => current.countDiscardableCards(player, 'ej'))) return;
                    const { result: { bool, targets } } = await player.chooseTarget('是否弃置场上的一张牌？', (card, player, target) => {
                        return target.countDiscardableCards(player, 'ej');
                    }).set('ai', target => {
                        var player = _status.event.player;
                        var att = get.attitude(player, target);
                        if (
                            att > 0 &&
                            (target.countCards('j') > 0 ||
                                target.countCards('e', function (card) {
                                    return get.value(card, target) < 0;
                                }))
                        )
                            return 2;
                        if (att < 0 && target.countCards('e') > 0 && !target.hasSkillTag('noe')) return -1;
                        return 0;
                    });
                    if (bool) {
                        await player.discardPlayerCard(targets[0], 'ej', true);
                    }
                },
            },
            //谋赵云
            wechatsblongdan: {
                audio: 'sblongdan',
                getUsed: player => player.getHistory('useCard', evt => evt.skill == 'wechatsblongdan_backup').map(evt => get.name(evt.card)).toUniqued(),
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (event.type == 'wuxie') return false;
                    const marked = player.storage.wechatsblongdan;
                    for (var name of lib.inpile) {
                        if (!marked && name != 'sha' && name != 'shan') continue;
                        if (get.type(name) != 'basic') continue;
                        if (marked && (event.wechatsblongdan || []).includes(name)) continue;
                        if (player.hasCard(lib.skill.wechatsblongdan.getFilter(name, player), 'hs')) {
                            if (event.filterCard(get.autoViewAs({ name }, 'unsure'), player, event)) return true;
                            if (marked && name == 'sha') {
                                for (var nature of lib.inpile_nature) {
                                    if (event.filterCard(get.autoViewAs({ name, nature }, 'unsure'), player, event)) return true;
                                }
                            }
                        }
                    }
                    return false;
                },
                onChooseToUse(event) {
                    if (!game.online && !event.wechatsblongdan) {
                        const player = event.player;
                        event.set('wechatsblongdan', get.info('wechatsblongdan').getUsed(player));
                    }
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = [];
                        const marked = player.storage.wechatsblongdan;
                        for (var name of lib.inpile) {
                            if (!marked && name != 'sha' && name != 'shan') continue;
                            if (get.type(name) != 'basic') continue;
                            if (marked && (event.wechatsblongdan || []).includes(name)) continue;
                            if (player.hasCard(lib.skill.wechatsblongdan.getFilter(name, player), 'hs')) {
                                if (event.filterCard(get.autoViewAs({ name }, 'unsure'), player, event)) list.push(['基本', '', name]);
                                if (marked && name == 'sha') {
                                    for (var nature of lib.inpile_nature) {
                                        if (event.filterCard(get.autoViewAs({ name, nature }, 'unsure'), player, event)) list.push(['基本', '', name, nature]);
                                    }
                                }
                            }
                        }
                        return ui.create.dialog('龙胆', [list, 'vcard'], 'hidden');
                    },
                    check(button) {
                        if (_status.event.getParent().type != 'phase') return 1;
                        var player = _status.event.player,
                            card = { name: button.link[2], nature: button.link[3] };
                        if (card.name == 'jiu' && player.countCards('hs', { type: 'basic' }) < 2) return 0;
                        return player.getUseValue(card, null, true);
                    },
                    backup(links, player) {
                        return {
                            audio: 'sblongdan',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            filterCard: lib.skill.wechatsblongdan.getFilter(links[0][2], player),
                            position: "he",
                            popname: true,
                            check(card) {
                                return 6 / Math.max(1, get.value(card));
                            },
                            async precontent(event, trigger, player) {
                                const bool = player.storage.wechatsblongdan ? true : !player.hasHistory('sourceDamage');
                                if (bool) player.when(['useCard', 'respond']).filter(evt => evt.skill == 'wechatsblongdan_backup').then(() => {
                                    player.draw();
                                });
                            },
                        };
                    },
                    prompt(links, player) {
                        const marked = player.storage.wechatsblongdan;
                        const card = {
                            name: links[0][2],
                            nature: links[0][3],
                            isCard: true,
                        };
                        if (marked) return '将一张基本牌当做' + get.translation(card) + '使用';
                        return '将一张' + (card.name == 'sha' ? '闪' : '杀') + '当做' + get.translation(card) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (get.type(name) != 'basic') return false;
                    const marked = player.storage.wechatsblongdan;
                    if (!marked && name != 'sha' && name != 'shan') return false;
                    if (marked && get.info('wechatsblongdan').getUsed(player).includes(name)) return false;
                    return player.hasCard(lib.skill.wechatsblongdan.getFilter(name, player), 'hs');
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag) {
                        return lib.skill.wechatsblongdan.hiddenCard(player, tag == 'respondSha' ? 'sha' : 'shan');
                    },
                    order: 9,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
                getFilter(name, player) {
                    if (!player.storage.wechatsblongdan) {
                        if (name == 'sha') return { name: 'shan' };
                        if (name == 'shan') return { name: 'sha' };
                        return () => false;
                    }
                    return { type: 'basic' };
                },
            },
            wechatsbjizhu: {
                audio: 'sbjizhu',
                forced: true,
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                unique: true,
                forced: true,
                juexingji: true,
                skillAnimation: true,
                animationColor: 'orange',
                filter(event, player) {
                    const num = player.getHistory('sourceDamage').reduce((sum, evt) => sum + evt.num, 0);
                    return num > 1 || game.getAllGlobalHistory('everything', evt => evt.name == 'dying').length;
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.storage.wechatsblongdan = true;
                },
                derivation: 'wechatsblongdan_rewrite',
                ai: {
                    combo: 'wechatsblongdan',
                },
            },
            //王粲
            wechatspqiai: {
                audio: 'spqiai',
                inherit: 'spqiai',
                async content(event, trigger, player) {
                    const target = event.targets[0], cards = event.cards;
                    await player.give(cards, target, true);
                    let result;
                    if (player.isHealthy()) result = { index: 1 };
                    else {
                        result = await player.chooseControl().set('choiceList', ['回复1点体力', '摸两张牌']).forResult();
                    }
                    if (result.index == 0) {
                        await player.recover();
                        const bool = await player.chooseBool('是否令' + get.translation(target) + '摸两张牌？').set('choice', get.effect(target, { name: 'draw' }, player, player) > 0).forResultBool();
                        if (bool) await target.draw(2);
                    }
                    else {
                        await player.draw(2);
                        if (target.isHealthy()) return;
                        const bool = await player.chooseBool('是否令' + get.translation(target) + '回复1点体力？').set('choice', get.recoverEffect(target, player, player) > 0 || (target.hasMark('spshanxi') && target.countCards('he'))).forResultBool();
                        if (bool) await target.recover();
                    }
                },
            },
            //蔡夫人
            wechatxinqieting: {
                audio: 'xinqieting',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return player != event.player && !event.player.hasHistory('sourceDamage', evt => evt.player != event.player);
                },
                async cost(event, trigger, player) {
                    const target = trigger.player, str = get.translation(target), choices = [], choiceList = ['摸一张牌', '观看' + str + '的手牌并获得其中一张', '将' + str + '装备区内的一张牌移动至自己的装备区'];
                    choices.push('选项一');
                    if (target.countCards('h') > 0) choices.push('选项二');
                    else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                    if (target.countCards('e', card => player.canEquip(card)) > 0) choices.push('选项三');
                    else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                    const { result } = await player.chooseControl(choices, 'cancel2').set('choiceList', choiceList).set('prompt', get.prompt(event.name.slice(0, -5), target)).set('ai', () => {
                        const player = get.player(), target = get.event().getTrigger().player;
                        if (get.attitude(player, target) > 0) return 0;
                        const val = target.hasSkillTag('noe') ? 6 : 0;
                        if (target.countCards('e', card => player.canEquip(card) && get.value(card, target) > val && get.effect(player, card, player, player) > 0) > 0) return 2;
                        if (target.countCards('h') > 0) return 1;
                        return 0;
                    });
                    event.result = {
                        bool: result.control != 'cancel2',
                        cost_data: result.index,
                    }
                },
                async content(event, trigger, player) {
                    const target = trigger.player, index = event.cost_data;
                    if (index == 0) {
                        await player.draw();
                    } else if (index == 1) {
                        await player.gainPlayerCard(target, 'h', true).set('visible', true);
                        player.addExpose(0.2);
                    } else {
                        player.addExpose(0.1);
                        const cards = await player.choosePlayerCard(target, 'e', true).set('filterButton', button => {
                            return get.player().canEquip(button.link);
                        }).set('ai', button => {
                            const player = get.player();
                            return get.effect(player, button.link, player, player);
                        }).forResultCards();
                        const card = cards[0];
                        target.$give(card, player, false);
                        await game.delay(0.5);
                        await player.equip(card);
                    }
                }
            },
        },
        dynamicTranslate: {
            wechatxiangzhi(player) {
                if (player.storage.wechatxiangzhi) return get.YunLvInform() + '，出牌阶段限一次，<br>平：你可以摸一张牌。<br><span class="bluetext">仄：你可以回复1点体力。</span><br>转韵：你发动〖节烈〗结算完成后。';
                return get.YunLvInform() + '，出牌阶段限一次，<br><span class="bluetext">平：你可以摸一张牌。</span><br>仄：你可以回复1点体力。<br>转韵：你发动〖节烈〗结算完成后。';
            },
            wechattongxin(player) {
                if (player.storage.wechattongxin) return get.YunLvInform() + '，出牌阶段限一次，<br>平：出牌阶段限一次，你可以令一名其他角色交给你一张手牌，然后若其手牌数不大于你，其摸一张牌。<br><span class="bluetext">仄：出牌阶段限一次，你可以交给一名其他角色一张手牌，然后若其手牌数不小于你，你对其造成1点伤害。</span><br>转韵：你于出牌阶段使用本回合未使用过的类型的牌。';
                return get.YunLvInform() + '，出牌阶段限一次，<br><span class="bluetext">平：出牌阶段限一次，你可以令一名其他角色交给你一张手牌，然后若其手牌数不大于你，其摸一张牌。</span><br>仄：出牌阶段限一次，你可以交给一名其他角色一张手牌，然后若其手牌数不小于你，你对其造成1点伤害。<br>转韵：你于出牌阶段使用本回合未使用过的类型的牌。';
            },
            wechatsblongdan(player) {
                if (player.storage.wechatsblongdan) return '你可以将一张基本牌当本回合未以此法使用的基本牌使用或打出并摸一张牌。';
                return '你可以将【杀】当【闪】、【闪】当【杀】使用或打出，若你本回合未造成过伤害，你摸一张牌。';
            },
        },
        translate: {
            //武将分包
            wechat_standard: '微服异构·标准',
            wechat_extra: '微服异构·神武将',
            wechat_zhiyin: '微服专属·<span style="text-decoration: line-through;">只因</span>极武将',
            wechat_sb: '微服异构·谋攻',
            //武将
            wechat_menghuo: '微信孟获',
            wechathuoshou: '祸首',
            wechathuoshou_info: '锁定技，【南蛮入侵】对你无效；一名角色受到【南蛮入侵】造成的伤害时，你可以弃置一张牌并令此伤害+1。',
            wechatzaiqi: '再起',
            wechatzaiqi_info: '每局游戏限七次。摸牌阶段，你可以放弃摸牌，改为亮出牌堆顶的1+X张牌（X为你本局游戏发动〖再起〗的次数），然后获得其中一种花色的所有牌。',
            wechat_shen_zhugeliang: '微信神诸葛亮',
            wechatqixing: '七星',
            wechatqixing_info: '每轮限一次，当你进入濒死状态时，你可以进行一次判定，若判定结果大于7，你回复1点体力。',
            wechatjifeng: '祭风',
            wechatjifeng_info: '出牌阶段限一次，你可以弃置一张手牌，然后从牌堆中随机获得一张锦囊牌。',
            wechattianfa: '天罚',
            wechattianfa_info: '出牌阶段，你每使用两张锦囊牌，你获得1枚“罚”标记；回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你拥有的“罚”标记数）。',
            wechat_re_yuanshu: '微信袁术',
            wechatwangzun: '妄尊',
            wechatwangzun2: '妄尊',
            wechatwangzun_info: '锁定技，其他角色的准备阶段：若其体力值大于你，你摸一张牌；若其体力值为全场最高，其手牌上限-1。',
            wechattongji: '同疾',
            wechattongji_info: '攻击范围内包含你的角色成为【杀】的目标时，若你不是此【杀】的使用者或目标，其可交给你一张牌，然后将此【杀】转移给你。',
            wechat_huaxiong: '微信华雄',
            wechatyaowu: '耀武',
            wechatyaowu_info: '锁定技，当你成为【杀】的目标后，若此【杀】为红色，你不可响应此牌；否则你摸一张牌。',
            wechat_lvmeng: '微信吕蒙',
            wechatkeji: '克己',
            wechatkeji2: '克己',
            wechatkeji_info: '出牌阶段，当你使用一张基本牌时，你摸一张牌，且你本回合的手牌上限+1。',
            wechat_xiahoushi: '微信夏侯氏',
            wechatqiaoshi: '樵拾',
            wechatqiaoshi_info: '一名角色的回合结束时，若你的手牌数不为全场最多，你摸一张牌。',
            wechatyanyu: '燕语',
            wechatyanyu2: '燕语',
            wechatyanyu_info: '出牌阶段，你可以重铸【杀】。出牌阶段结束时，你可以令一名其他男性角色摸X张牌（X为你本阶段内发动过〖燕语〗的次数且至多为2）。',
            wechat_xushu: '微信徐庶',
            wechatwuyan: '无言',
            wechatwuyan_info: '锁定技，当你受到锦囊牌对你造成的伤害时，防止此伤害。',
            wechatjujian: '举荐',
            wechatjujian_info: '结束阶段开始时，你可以弃置一张非基本牌并令一名角色选择一项：1.摸两张牌；2.回复1点体力。',
            wechat_zhaoyun: '微信赵云',
            wechatlongdan: '龙胆',
            wechatlongdan_info: '你可以将一张【杀】/【闪】当作【闪】/【杀】使用或打出，以此法使用的牌无任何次数限制。',
            wechatyajiao: '涯角',
            wechatyajiao_info: '当你于回合外使用或打出手牌时，你可以摸一张牌。',
            wechatqinggang: '青釭',
            wechatqinggang_info: '锁定技，若你有空置的且未被废除的武器栏，你视为装备【青釭剑】。',
            wechat_zhangfei: '微信张飞',
            wechatshemao: '蛇矛',
            wechatshemao_info: '出牌阶段限一次，你可以将两张手牌当作【杀】使用，且此【杀】无距离限制。',
            wechat_machao: '微信马超',
            wechattieji: '铁骑',
            wechattieji_info: '当你使用【杀】指定目标后，你可以进行判定。若结果为红色，则此【杀】不可被闪避；若结果为黑色，你获得此判定牌。',
            wechat_shen_guanyu: '微信神关羽',
            wechatwushen: '武神',
            wechatwushen_info: '你可以将一张红色牌当作【杀】使用。你使用方块【杀】无距离限制，使用红桃【杀】无次数限制。',
            wechat_lvbu: '极吕布',
            wechatxiaohu: '虓虎',
            wechatxiaohu_info: '你使用【杀】可以额外指定一个目标；出牌阶段限一次，你可以弃置一张手牌并从牌堆中获得一张【杀】。',
            wechat_yangxiu: '微信杨修',
            wechatdanlao: '啖酪',
            wechatdanlao_info: '出牌阶段限一次，你可以摸X张牌（X为场上存活角色数），然后你可以将这些牌任意分配给其他角色。结算完成后，本次未以此法获得牌的角色可以视为对你使用一张【杀】（无距离限制，且使用须合法）。',
            wechatjilei: '鸡肋',
            wechatjilei2: '鸡肋',
            wechatjilei2_bg: '肋',
            wechatjilei_info: '当你受到有来源的伤害后，你可以声明一种花色。若如此做，你令伤害来源不能使用、打出或弃置此花色的手牌直到其下个回合开始。',
            wechat_shen_lvmeng: '微信神吕蒙',
            wechatgongxin: '攻心',
            wechatgongxin_info: '出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以展示其中的一张红桃牌并选择一项：1.获得此牌；2.将此牌置于牌堆顶。',
            wechat_zhoutai: '微信周泰',
            wechatbuqu: '不屈',
            wechatbuqux: '创',
            wechatbuqu_info: '当你受到伤害或失去体力后，你摸一张牌，称为“创”。当你使用或打出“创”时，你从牌堆中获得一张与此“创”类型相同的牌。',
            wechatfenji: '奋激',
            wechat_bianfuren: '微信卞夫人',
            wechatwanwei: '挽危',
            wechatwanwei_info: '出牌阶段限一次，你可以弃置至多三张手牌，然后令一名角色摸等量的牌。若你弃置的牌的类型均不同，你回复1点体力。',
            wechatyuejian: '约俭',
            wechat_sunluban: '微信孙鲁班',
            wechatzenhui: '谮毁',
            wechatzenhui_info: '出牌阶段限一次，当你使用【杀】或普通锦囊牌指定唯一目标时，你可令可以成为此牌目标的另一名其他角色选择一项：交给你一张牌并成为此牌的使用者；或成为此牌的额外目标。',
            wechatjiaojin: '骄矜',
            wechatjiaojin_info: '当你受到其他角色对你造成的伤害时，你可以弃置一张装备牌并防止此伤害。',
            wechatrejiaojin: '骄矜',
            wechatrejiaojin_info: '当你受到其他角色对你造成的伤害时，你可以弃置一张装备牌防止此伤害并获得造成此伤害的所有实体牌。',
            wechat_wuguotai: '微信吴国太',
            wechatganlu: '甘露',
            wechatganlu_info: '出牌阶段限一次，你可以弃置一张手牌并选择一项：①移动场上的一张装备牌；②将牌堆中的随机一张装备牌置入你的空置装备栏中。',
            wechatbuyi: '补益',
            wechatbuyi2: '补益',
            wechatbuyi_info: '游戏开始时，你选择一名角色。你或其于每轮第一次受到伤害后，可以弃置一张非基本牌并回复1点体力。',
            wechat_liubiao: '微信刘表',
            wechatzishou: '自守',
            wechatzishou_info: '出牌阶段结束时，若你本阶段未对其他角色使用过牌。则你可以摸X张牌（X为场上的其他角色数）。',
            wechatrezishou: '自守',
            wechatrezishou_info: '摸牌阶段，你可以额外摸三张牌。然后本回合你使用牌不能指定其他角色为目标。',
            wechatzongshi: '宗室',
            wechatzongshi_info: '锁定技，你的手牌上限+X。准备阶段，若你的手牌数大于你的体力值，你本回合可以额外使用X张【杀】（X为场上的其他角色数）。',
            wechat_liuchen: '微信刘谌',
            wechatqinwang: '勤王',
            wechatqinwang1: '勤王',
            wechatqinwang_info: '当你需要打出【杀】时，你可以选择一名其他角色，其可以替你打出一张【杀】。',
            wechat_luxun: '微信陆逊',
            wechatqianxun: '谦逊',
            wechatqianxun_info: '每名角色的回合限一次，若你的手牌数为1，你可以将所有手牌当作一张单体非延时锦囊牌使用。',
            wechatreqianxun: '谦逊',
            wechatreqianxun_info: '每当一张延时类锦囊牌或其他角色使用的普通锦囊牌生效时，若你是此牌的唯一目标，你可以将任意张手牌置于你的武将牌上，若如此做，此回合结束时，你获得你武将牌上的所有牌。',
            wechat_pangtong: '微信庞统',
            wechatniepan: '涅槃',
            wechatniepan_info: '限定技，当你处于濒死状态时，你可以弃置区域内的所有牌，复原武将牌，摸三张牌并将体力值回复至3，然后本局游戏你造成的伤害均视为火属性。',
            wechathuzhu: '护主',
            wechathuzhu2: '护主',
            wechathuzhu_info: '回合结束时，你可以选择一名角色。当其受到伤害时，你可以失去1点体力并防止之，然后你摸一张牌。',
            wechat_zhangxingcai: '微信张星彩',
            wechatshenxian: '甚贤',
            wechatshenxian_info: '当有角色因弃置而失去基本牌时，你可以摸一张牌。',
            wechatqiangwu: '枪舞',
            wechatqiangwu_info: '出牌阶段限一次，你可以弃置一张手牌，然后本回合你使用大于此牌点数的【杀】无距离和次数限制。',
            wechat_zuoci: '微信左慈',
            wechatyigui: '役鬼',
            wechatyigui_info: '出牌阶段限一次，当你使用普通锦囊牌时，你可以弃置一张牌并为此牌额外指定一个目标（无距离限制）。',
            wechatshendao: '神道',
            wechatshendao_info: '当你于出牌阶段使用牌结算结束后，若此牌的目标角色中存在本阶段你未记录的角色，则你记录这些角色，然后根据记录的角色数，你可以执行对应的效果：记录1名，从牌堆或弃牌堆中获得一张指定类型的牌；记录2名，视为对一名角色使用一张普通锦囊牌；记录3名，对所有记录的角色造成1点伤害。',
            wechat_mayunlu: '微信马云禄',
            wechatfengpo: '凤魄',
            wechatfengpo_info: '当你于回合内使用的第一张【杀】或【决斗】指定唯一目标后，你可以观看其手牌并选择一项：1.摸X张牌；2.令此牌的伤害值基数+X。（X为其手牌中♦牌的数量且X至少为1）',
            wechat_daqiao: '极大乔',
            wechatjielie: '节烈',
            wechatjielie_info: '出牌阶段限一次，你可以选择一名其他角色，然后你选择一项：①令其选择是否使用一张牌，若其使用了红色的【杀】，你失去1点体力且本回合可以继续发动〖节烈〗；②你下次发动〖相知〗时，令该角色获得相同的效果。',
            wechatxiangzhi: '相知',
            wechatxiangzhi_info: get.YunLvInform() + '，出牌阶段限一次，<br>平：你可以摸一张牌。<br>仄：你可以回复1点体力。<br>转韵：你发动〖节烈〗结算完成后。',
            wechat_xiaoqiao: '极小乔',
            wechattongxin: '同心',
            wechattongxin_info: get.YunLvInform() + '，出牌阶段限一次，<br>平：出牌阶段限一次，你可以令一名其他角色交给你一张手牌，然后若其手牌数不大于你，其摸一张牌。<br>仄：出牌阶段限一次，你可以交给一名其他角色一张手牌，然后若其手牌数不小于你，你对其造成1点伤害。<br>转韵：你于出牌阶段使用本回合未使用过的类型的牌。',
            wechatzhaoyan: '昭颜',
            wechatzhaoyan_info: '每回合限一次，当你成为其他角色使用牌的目标后，若其手牌数大于你，你摸一张牌。',
            wechat_caiwenji: '微信蔡琰',
            wechatbeige: '悲歌',
            wechatbeige_info: '每回合限一次，当一名角色受到【杀】造成的伤害后，你可以弃置一张牌，然后若此牌为：红色，其摸两张牌；黑色，你视为对其使用一张【杀】。',
            wechatduanchang: '断肠',
            wechatduanchang_info: '锁定技，杀死你的角色于本局游戏不能使用【桃】。',
            wechat_zhaoxiang: '微信赵襄',
            wechatfanghun: '芳魂',
            wechatfanghun_fengpo: '凤魄',
            wechatfanghun_info: '游戏开始时，你获得技能〖龙胆〗。当你发动〖龙胆〗后，你获得“梅影”标记。若你有“梅影”标记，你可以发动〖凤魄〗，然后失去“梅影”标记。',
            wechatfuhan: '扶汉',
            wechatfuhan_info: '觉醒技，准备阶段，若你已发动过〖凤魄〗，则你减1点体力上限，然后从〖义绝〗、〖咆哮〗、〖铁骑〗、〖烈弓〗中选择一个技能获得。',
            wechatrefanghun: '芳魂',
            wechatrefanghun_info: '当你使用【杀】指定目标后，你获得1个“梅影”标记；你可以移去1个“梅影”标记来发动〖龙胆〗并摸一张牌。',
            wechatrefuhan: '扶汉',
            wechatrefuhan_info: '限定技，回合开始时，你可以移去所有"梅影"标记并摸等量的牌（至多摸五张），然后从五张未登场的蜀势力武将牌中选择一名获得其所有技能，然后若你的体力值为全场最低，你回复1点体力。',
            wechat_liuqi: '微信刘琦',
            wechattunjiang: '屯江',
            wechattunjiang_info: '结束阶段，若你未于本回合的出牌阶段内使用牌指定过其他角色为目标，则你可以摸X张牌（X为场上的存活角色数-1）。',
            wechat_caoren: '微信曹仁',
            wechatjushou: '据守',
            wechatjushou_info: '结束阶段，若你未于本回合造成过伤害，则你可以摸三张牌。',
            wechat_jiaxu: '微信贾诩',
            wechatwansha: '完杀',
            wechatwansha_info: '锁定技。①你的回合内，不处于濒死状态的其他角色不能使用【桃】。②出牌阶段开始时，你令一名体力值大于1的其他角色失去1点体力，本阶段结束时，其回复1点体力。',
            wechatluanwu: '乱武',
            wechatluanwu_info: '限定技，出牌阶段，你可以从牌堆中获得一张【杀】，然后令所有角色依次选择一项：①对除你以外与其距离最近的另一名角色使用一张【杀】；②失去1点体力。',
            wechat_shenpei: '微信审配',
            wechatshouye: '守邺',
            wechatshouye_info: '每回合限一次，当其他角色使用牌指定你为唯一目标时，你可以与其进行猜拳。若你赢，则你取消此牌的目标，且你于此牌结算完成后获得其对应的所有实体牌。',
            wechatliezhi: '烈直',
            wechatliezhi_info: '准备阶段，你可以弃置至多两名其他角色区域内的各一张牌。',
            wechat_caocao: '微信曹操',
            wechatjianxiong: '奸雄',
            wechatjianxiong_info: '你的回合内，当你使用牌造成伤害后，你可以获得此牌对应的所有你本回合未因〖奸雄〗获得过的牌名的实体牌。',
            wechatmoulvenum: '谋略值',
            wechat_guojia: '极郭嘉',
            wechatdingce: '定策',
            wechatdingce_info: '①游戏开始时，你获得3点' + get.MouLveInform() + '。②一名角色的回合结束时，你获得X点' + get.MouLveInform() + '（X为你本回合使用的牌的类型数）。',
            wechatsuanlve: '算略',
            wechatsuanlve_info: '每回合限一次，你可以失去1+X点' + get.MouLveInform() + '，将一张牌当作你本回合使用的上一张基本牌或普通锦囊牌使用（X为你本轮发动〖算略〗的次数）。',
            wechatmiaoji: '妙计',
            wechatmiaoji_info: '每回合限一次，你可以：①失去1点谋略值，视为使用【过河拆桥】；②失去3点谋略值，视为使用【无懈可击】；③失去3点谋略值，视为使用【无中生有】。',
            wechat_guanyu: '微信关羽',
            wechatqinglong: '青龙',
            wechatqinglong_info: '锁定技，若你有空置的且未被废除的武器栏，则你视为装备【青龙偃月刀】。',
            wechat_xuzhu: '微信许褚',
            wechatluoyi: '裸衣',
            wechatluoyi_info: '当你使用【杀】或【决斗】造成伤害时，你可以弃置一张牌并令此伤害+1。',
            wechat_sunshangxiang: '微信孙尚香',
            wechatjieyin: '结姻',
            wechatjieyin_info: '出牌阶段限一次，你可以弃置一张牌并与一名男性角色各摸一张牌。',
            wechat_pangde: '微信庞德',
            wechatmengjin: '猛进',
            wechatmengjin_info: '当你使用【杀】指定目标后，你可以弃置目标角色的一张牌。若此牌为装备牌，则其无法响应此【杀】，否则你获得此牌。',
            wechat_xiahouyuan: '微信夏侯渊',
            wechatshensu: '神速',
            wechatshensu_info: '你可以选择一至两项：①跳过判定阶段和摸牌阶段；②跳过出牌阶段；③跳过弃牌阶段并失去1点体力。你每选择一项，视为你对一名其他角色使用一张无视距离和防具的【杀】。',
            wechat_huangzhong: '微信黄忠',
            wechatliegong: '烈弓',
            wechatliegong_info: '你使用【杀】无距离限制。当你使用【杀】指定目标后，若目标角色的手牌数小于等于你的手牌数，则此【杀】不可被【闪】响应。',
            wechat_caochong: '微信曹冲',
            wechatrenxin: '仁心',
            wechatrenxin_info: '每轮限一次，当一名其他角色受到不小于体力值的伤害时，你可以弃置一张牌并将此伤害转移给自己。',
            wechat_sp_caiwenji: 'SP微信蔡琰',
            wechatchenqing: '陈情',
            wechatchenqing_info: '每轮限一次，当一名角色处于濒死状态时，你可以令另一名角色摸四张牌，然后其弃置四张牌。若其以此法弃置的四张牌花色各不相同，则视为该角色对濒死的角色使用一张【桃】。',
            wechatmozhi: '默识',
            wechatmozhi_info: '结束阶段，你可以将一张牌当作你本回合出牌阶段内使用的第一张基本或普通锦囊牌使用，然后你可以将一张牌当做你本回合出牌阶段内使用的第二张基本或普通锦囊牌使用。（你不能通过此技能使用【酒】）',
            wechat_wangping: '微信王平',
            wechatbinglve: '兵略',
            wechatbinglve_info: '锁定技，当你发动〖飞军〗后，你摸一张牌。若目标角色与你之前发动〖飞军〗指定的目标角色均不相同，则改为摸两张牌。',
            wechat_sunliang: '微信孙亮',
            wechatchezheng: '掣政',
            wechatchezheng_info: '锁定技。出牌阶段，你使用牌无法指定攻击范围内不包含你的其他角色为目标。出牌阶段结束时，你摸等同于这些角色的数量，然后弃置其中一名角色的一张牌。',
            wechat_gaoshun: '微信高顺',
            wechat_caozhi: '微信曹植',
            wechatluoying: '落英',
            wechatluoying_info: '其他角色弃置的梅花牌或梅花判定牌进入弃牌堆后，你可以获得之，且这些牌不计入你的手牌上限。',
            wechatjiushi: '酒诗',
            wechatjiushi_info: '当你需要使用【酒】时，你可以弃置一张梅花手牌，视为使用之。',
            wechat_huangyueying: '微信黄月英',
            wechatjizhi: '集智',
            wechatjizhi_info: '当你使用锦囊牌时，你可以摸一张牌，且此牌不计入本回合的手牌上限。',
            wechatqicai: '奇才',
            wechatqicai_info: '锁定技。①你使用锦囊牌无距离限制。②你于回合内使用的第一张锦囊牌不可被响应。',
            wechat_weiyan: '微信魏延',
            wechatkuanggu: '狂骨',
            wechatkuanggu_info: '锁定技，当你对距离为1以内的角色造成1点伤害后，你回复1点体力并摸一张牌。',
            wechat_lukang: '微信陆抗',
            wechatjueyan: '决堰',
            wechatjueyan_info: '出牌阶段限一次，你可以废除一种装备栏，然后根据你废除的装备栏执行对应项：武器栏，本回合内使用【杀】的次数上限+3；防具栏，摸三张牌，且本回合手牌上限+3；坐骑栏，本回合获得技能〖连营〗，且使用牌无距离限制。',
            wechatposhi: '破势',
            wechatposhi_info: '觉醒技，准备阶段，若你的装备栏均已被废除或体力值为1，则你减1点体力上限，将手牌摸至体力上限，失去〖决堰〗并获得〖怀柔〗。',
            wechat_jianyong: '微信简雍',
            wechatqiaoshui: '巧说',
            wechatjyzongshi: '纵适',
            wechatjyzongshi_info: '当你拼点赢时，你可以从牌堆中获得一张锦囊牌；当你拼点没赢时，你可以收回你此次拼点的牌。',
            wechat_caifuren: '微信蔡夫人',
            wechatqieting: '窃听',
            wechatqieting_info: '其他角色的回合结束时，若其本回合内未对另一名角色造成过伤害，则你可选择一项：①摸一张牌。②随机获得其一张手牌。③将其装备区内的一张牌移动至你的装备区。',
            wechat_masu: '微信马谡',
            wechatsanyao: '散谣',
            wechatsanyao_info: '出牌阶段限一次，你可以弃置一张牌并对一名其他角色造成1点伤害。',
            wechat_sp_taishici: '微信太史慈',
            wechatjixu: '击虚',
            wechatjixu_info: '出牌阶段限一次，你可以令所有体力值不大于你的其他角色猜测你的手牌中是否有【杀】。所有角色猜测结束后，你依次弃置所有猜错的角色的一张牌并视为对其使用一张【杀】，然后你摸X张牌（X为猜错的角色数），若没有角色猜错，你结束此阶段。',
            wechat_buzhi: '微信步骘',
            wechatdingpan: '定叛',
            wechatdingpan_info: '出牌阶段限两次，你可以令一名装备区里有牌的角色摸一张牌，然后你选择一项：1.弃置其装备区里的一张牌；2.令其获得其装备区里的所有牌，然后你对其造成1点伤害。',
            wechat_caozhang: '微信曹彰',
            wechatjiangchi: '将驰',
            wechatjiangchi_info: '出牌阶段开始时，你可以选择一项：①摸两张牌，本阶段不能使用【杀】；②本阶段使用【杀】无距离限制且可以多使用一张【杀】。',
            wechatrejiangchi: '将驰',
            wechatrejiangchi_info: '出牌阶段开始时，你可以选择一项：1：摸三张牌，本回合不能使用【杀】；2：摸一张牌，然后你本阶段造成伤害后，摸一张牌；3：本阶段使用【杀】无距离限制，且可以多使用一张【杀】。',
            wechat_caopi: '微信曹丕',
            wechatfangzhu: '放逐',
            wechatfangzhu2: '放逐',
            wechatfangzhu_info: '当你受到伤害后，你可以令一名有手牌的其他角色将所有手牌扣置于其武将牌上。该角色的回合结束时或受到伤害后，其收回武将牌上扣置的牌。',
            wechat_sp_jiangwei: 'SP微信姜维',
            wechatkunfen: '困奋',
            wechatkunfen_info: '结束阶段，你可以失去1点体力，然后摸两张牌。',
            wechatfengliang: '逢亮',
            wechatfengliang_info: '觉醒技，当你进入濒死状态时，你减1点体力上限，将体力值回复至3点，然后获得技能〖挑衅〗。',
            wechat_caoxiu: '微信曹休',
            wechatqingxi: '倾袭',
            wechatqingxi_info: '当你对其他角色造成伤害时，你可以令其选择一项：①弃置等同于你攻击范围数的牌，然后弃置你装备区里的武器牌；②令此伤害+1。',
            wechat_yuanshao: '微信袁绍',
            wechatluanji: '乱击',
            wechatluanji_info: '出牌阶段，你可以将两张手牌当作【万箭齐发】使用（不可选择本阶段已经转化过的花色的牌）。其他角色使用【闪】响应你的【万箭齐发】时，你与其各摸一张牌。',
            wechat_sundeng: '微信孙登',
            wechatkuangbi: '匡弼',
            wechatkuangbi_info: '出牌阶段限一次，你可以选择一名有牌的其他角色，该角色将其的一至三张牌置于你的武将牌上，然后其摸一张牌。若如此做，你的下个准备阶段，你获得武将牌上的所有牌，然后其摸等量的牌。',
            wechat_re_xushu: '微信徐庶',
            wechatzhuhai: '诛害',
            wechatzhuhai_info: '一名其他角色的结束阶段开始时，若该角色本回合造成过伤害，你可以弃置一张牌并视为对其使用一张【杀】。',
            wechat_xiahouba: '微信夏侯霸',
            wechatbaobian: '豹变',
            wechatbaobian_info: '锁定技。①若你的体力值：不小于3，你视为拥有技能〖挑衅〗；不小于2，你视为拥有技能〖咆哮〗；不小于1，你视为拥有技能〖神速〗。②回合开始时，你失去1点体力，然后从牌堆或弃牌堆中获得一张【杀】。',
            wechatrebaobian: '豹变',
            wechatrebaobian_info: '锁定技。若你的体力值：为4；你视为拥有技能〖困奋〗；不小于3，你视为拥有技能〖挑衅〗；不小于2，你视为拥有技能〖咆哮〗；不小于1，你视为拥有技能〖神速〗。',
            wechat_liuyao: '微信刘繇',
            wechatkannan: '戡难',
            wechatkannan_info: '出牌阶段，你可以与一名本阶段内未成为过你发动〖戡难〗目标的角色拼点，赢的角色使用的下一张【杀】造成的伤害+1（至多+5）。',
            wechat_quancong: '微信全琮',
            wechatyaoming: '邀名',
            wechatyaoming_info: '当你造成或受到伤害后，你可以选择一项：①弃置手牌数大于等于你的一名其他角色的一张手牌；②令手牌数小于等于你的一名角色摸一张牌。',
            wechat_liaohua: '微信廖化',
            wechatdangxian: '当先',
            wechatdangxian_info: '锁定技，回合开始时，你从弃牌堆中获得一张【杀】并进行一个额外的出牌阶段。',
            wechatfuli: '伏枥',
            wechatfuli_info: '限定技，当你处于濒死状态时，你可以将体力值回复至X点（X为场上存活的其他角色数）。然后若你的体力值为全场唯一最多，你不能使用或打出手牌直到你的下个回合结束。',
            wechat_yanyan: '微信严颜',
            wechatjuzhan: '拒战',
            wechatjuzhan_info: '当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌。',
            wechat_guohuanghou: '微信郭皇后',
            wechatjiaozhao: '矫诏',
            wechatjiaozhao2: '矫诏',
            wechatjiaozhao_info: '出牌阶段限一次，你可以展示一张牌，然后声明一个基本牌或普通锦囊牌。你可以将此牌当作你声明的牌使用直到你的下个回合开始（自己不是此牌的合法目标）。',
            wechatdanxin: '殚心',
            wechatdanxin_info: '当你受到1点伤害后，你可以摸一张牌。',
            wechat_caizhenji: '微信蔡贞姬',
            wechatsheyi: '舍裔',
            wechatsheyi_info: '每轮限一次，体力值小于等于你的其他角色受到伤害时，你可以交给其X张牌并防止此伤害（X为你的体力值）。',
            wechattianyin: '天音',
            wechattianyin_info: '结束阶段，你从牌堆中随机获得你本回合未使用过类型的牌各一张。然后若你未获得牌，你可以弃置一名其他角色的一张牌。',
            wechat_zhuling: '微信朱灵',
            wechatzhanyi: '战意',
            wechatzhanyi_info: '出牌阶段限一次，你可以弃置一张牌并失去1点体力，然后根据你弃置的牌获得以下效果直到回合结束：基本牌，你可以将一张基本牌当作【杀】、【酒】或【桃】使用，且你本回合以此法使用的牌的回复值/伤害值+1；锦囊牌，摸三张牌且你使用的锦囊牌无距离限制且不能被响应；装备牌，当你使用【杀】指定目标后，你弃置其两张牌，然后你获得其中的一张牌。',
            wechat_caojie: '微信曹节',
            wechatshouxi: '守玺',
            wechatshouxi_info: '当你成为【杀】的目标后，你可声明一种牌的类别，使用者须选择一项：①弃置一张你声明的类别的牌；②令此【杀】对你无效。',
            wechat_re_caocao: '极曹操',
            wechatdelu: '得鹿',
            wechatdelu_info: '出牌阶段限一次，你可以与任意名体力值不大于你的角色进行同时拼点，且你的拼点点数+X（X为此次参与拼点的角色数）。拼点赢的角色依次随机获得所有拼点没赢的角色区域内的一张牌。',
            wechatzhujiu: '煮酒',
            wechatzhujiu_info: '出牌阶段限一次，你可以与一名其他角色交换一张手牌，若这两张手牌的颜色：相同，你回复1点体力；不相同，你对其造成1点伤害。',
            wechat_zhugeliang: '极诸葛亮',
            wechatsangu: '三顾',
            wechatsangu_info: '锁定技，当你每三次成为牌的目标后，你获得3点' + get.MouLveInform() + '，然后你占卜3。',
            wechatyanshi: '演势',
            wechatyanshi_backup: '演势',
            wechatyanshi_info: '出牌阶段限一次，你可以从牌堆顶或牌堆底摸一张牌，且当你于本阶段使用此牌时，你可以弃置一张牌并发动从另一端摸牌的〖演势〗。',
            wechat_sp_pangde: 'SP微信庞德',
            wechatjuesi: '决死',
            wechatjuesi_info: '出牌阶段，你可以弃置一张【杀】并令一名其他角色弃置一张牌，若弃置的牌不是【杀】且你的体力值不大于该角色，你视为对其使用【决斗】。',
            wechatrejuesi: '决死',
            wechatrejuesi_info: '出牌阶段，你可以弃置一张【杀】并选择一名其他角色，然后该角色弃置一张牌。若其弃置的牌不是【杀】，则你获得此牌然后视为对其使用一张【决斗】。',
            wechat_simayi: '极司马懿',
            wechatyinren: '隐忍',
            wechatyinren_info: '回合开始时，你可以跳过出牌阶段和弃牌阶段，然后获得以下第一个你未拥有的技能：〖奸雄〗、〖行殇〗、〖明鉴〗。',
            wechatyinren_jianxiong: '奸雄',
            wechatyinren_xingshang: '行殇',
            wechatyinren_mingjian: '明鉴',
            wechatduoquan: '夺权',
            wechatduoquan_info: '结束阶段，你可以选择一名其他角色，观看其手牌并并选择一个牌的类型（不公开），其于其下个出牌阶段使用第一张牌时，若此牌与你选择的类型相同，则你令此牌无效，且此牌对应的实体牌进入弃牌堆后，你可以使用之。',
            wechat_re_machao: '极马超',
            wechatqipao: '弃袍',
            wechatqipao_info: '当你使用【杀】指定目标后，你可以令其选择一项：①弃置其装备区所有牌（至少一张）；②本回合非锁定技失效且不能响应此牌。',
            wechatzhuixi: '追袭',
            wechatzhuixi_info: '①结束阶段，若场上所有其他角色均在你的攻击范围内，你可以视为使用一张【杀】。②你与装备区没有坐骑牌的角色的距离视为1。',
            wechat_yj_jushou: '微信沮授',
            wechatjianying: '渐营',
            wechatjianying_info: '当你使用与你使用的上一张牌点数或花色相同的牌时，你可以摸一张牌。出牌阶段限一次，你可以将一张牌当做任意基本牌使用（若你于此阶段内使用的上一张牌有花色，则此牌的花色视为上一张牌的花色）。',
            wechat_zumao: '微信祖茂',
            wechatjuedi: '绝地',
            wechatjuedi_info: '锁定技，准备阶段，若你的武将牌上有「引兵」牌，你选择一项：1.移去「引兵」牌，将手牌补至体力上限；2.将「引兵」牌交给一名体力值不大于你的其他角色，其回复1点体力并摸等量的牌。',
            wechat_guansuo: '微信关索',
            wechatzhengnan: '征南',
            wechatzhengnan_info: '每名角色限一次，当一名角色进入濒死状态时，你可以摸三张牌并获得下列技能中的任意一个：〖武圣〗、〖当先〗和〖制蛮〗。',
            wechat_re_huangyueying: '极黄月英',
            wechatmiaobi: '妙笔',
            wechatmiaobi_info: '当你于出牌阶段使用普通锦囊牌结算完毕后，你可以将此牌对应的所有实体牌置于一名目标角色的武将牌上（每回合每种牌名限一次）。其下个回合开始时，其选择一项：①交给你一张锦囊牌，然后将你置于其武将牌上的“妙笔”牌置入弃牌堆；②你依次对其使用所有你置于其武将牌上的“妙笔”牌（无距离限制，不能使用的“妙笔”牌置入弃牌堆）。',
            wechathuixin: '慧心',
            wechathuixin_info: '①当你于回合内使用锦囊牌结算完毕后，你于本回合使用牌无距离限制。②当你于回合外使用锦囊牌时，你摸一张牌。',
            wechatrehuixin: '慧心',
            wechatrehuixin_info: '回合开始时，若你装备区里的牌数为奇数/偶数，你获得〖祭风〗/〖集智〗直到回合结束。',
            wechat_zhangzhang: '微信张昭张纮',
            wechatzhijian: '直谏',
            wechatzhijian_info: '出牌阶段，你可以将手牌中的一张装备牌置于一名其他角色装备区里，然后摸两张牌。',
            wechat_chendeng: '微信陈登',
            wechatfengji: '丰积',
            wechatfengji_info: '锁定技，准备阶段，若你的手牌数不小于你上个回合结束后的手牌数，则你摸两张牌且本回合手牌上限+2。',
            wechat_taoqian: '微信陶谦',
            wechatyixiang: '义襄',
            wechatyixiang_info: '每名角色的回合限一次，当你成为一名角色使用牌的目标后，若该角色的体力值大于等于你的体力值，则你可以从牌堆随机获得一张你没有的基本牌。',
            wechat_kanze: '微信阚泽',
            wechatkuanshi: '宽释',
            wechatkuanshi_info: '结束阶段，你可以选择一名角色。直到你的下回合开始，该角色于一个回合内非第一次受到伤害时，防止此伤害。',
            wechat_xuezong: '微信薛综',
            wechatjiexun: '诫训',
            wechatjiexun_info: '结束阶段，你可令一名其他角色摸等同于场上方块牌数的牌，然后弃置X张牌（X为此前该技能发动过的次数）。',
            wechat_guyong: '微信顾雍',
            wechatshenxing: '慎行',
            wechatshenxing_info: '出牌阶段，你可以弃置X张牌，然后摸一张牌（X为你本阶段发动过〖慎行〗的次数）。',
            wechat_yj_huangzhong: '微信☆黄忠',
            wechatshidi: '势敌',
            wechatshidi_info: '锁定技。①你的回合内，你至其他角色的距离-1，且你使用的黑色【杀】不可被响应。②你的回合外，其他角色至你的距离+1，且你不可响应红色【杀】。',
            wechat_caiyong: '微信蔡邕',
            wechatbizhuan: '辟撰',
            wechatbizhuan_bg: '书',
            wechatbizhuan_info: '①当你使用黑色牌时，或成为其他角色使用黑色牌的目标后，你可以将牌堆顶的一张牌置于武将牌上，称为“书”（你至多拥有四张“书”）。②你的手牌上限+X（X为“书”数）。',
            wechattongbo: '通博',
            wechattongbo_info: '摸牌阶段摸牌后，你可以用任意张牌替换等量的“书”，然后若你的“书”包含四种花色，你将所有“书”任意分配给任意角色。',
            wechat_xusheng: '微信徐盛',
            wechat_yufan: '微信虞翻',
            wechat_handang: '微信韩当',
            wechat_wanglang: '微信王朗',
            wechat_huanghao: '微信黄皓',
            wechatpojun: '破军',
            wechatpojun_info: '当你使用【杀】指定一个目标后，你可以将其至多X张牌扣置于该角色的武将牌旁（X为其体力值）。若如此做，当前回合结束后，该角色获得其武将牌旁的所有牌。',
            wechatzhiyan: '直言',
            wechatzhiyan_info: '结束阶段，你可以令一名角色摸一张牌并展示之，若此牌为：装备牌，其使用此牌并回复1点体力；非装备牌，你摸一张牌。',
            wechatjiefan: '解烦',
            wechatjiefan_info: '限定技，出牌阶段，你可以选择一名角色，然后令所有角色依次选择一项：1.弃置一张武器牌；2.令其摸一张牌。',
            wechatjici: '激词',
            wechatjici_info: '当你因发动〖鼓舌〗而扣置的拼点牌亮出后，若此牌点数等于X，你本回合发动〖鼓舌〗的次数上限+1；然后你令此牌点数+X。（X为你“饶舌”标记的数量）',
            wechatqinqing: '寝情',
            wechatqinqing_info: '结束阶段，你可以选择任意名攻击范围内含有你的角色，然后弃置这些角色各一张牌并令其摸一张牌（无牌则不弃）。若如此做，你摸X张牌（X为其中手牌比你多的角色数）。',
            wechathuisheng: '贿生',
            wechathuisheng_info: '当你受到其他角色对你造成的伤害时，你可以令其观看你任意数量的牌并令其选择一项：1.获得这些牌中的一张，防止此伤害，然后你本轮不能再对其发动〖贿生〗；2.弃置等量的牌。',
            wechat_gongsunyuan: '微信公孙渊',
            wechathuaiyi: '怀异',
            wechathuaiyi_info: '出牌阶段限一次，你可以展示所有手牌并弃置一种颜色的所有手牌，然后你可以获得至多等同于你弃置牌数的角色的各一张牌。',
            wechat_lusu: '极鲁肃',
            wechatlvyuan: '虑远',
            wechatlvyuan_info: '结束阶段，你可以弃置任意张牌并摸等量的牌。若你弃置的牌数大于1，且颜色相同，则直到你的下个回合开始，当你失去与弃置牌颜色不同的牌时，你摸一张牌。',
            wechathezong: '合纵',
            wechathezong_info: '一轮游戏开始时，你可以选择两名角色。若如此做，直到下一轮游戏开始：①当这些角色使用指定除对方外的唯一目标的【杀】结算完毕后，除非另一名角色对相同目标使用一张【杀】，否则交给其一张牌；②当这些角色成为使用者不为对方的唯一目标的【杀】时，除非另一名角色交给其一张【闪】，否则其也成为此牌的额外目标。',
            wechat_re_yuanshao: '极袁绍',
            wechathongtu: '尊北',
            wechathongtu_info: '出牌阶段限一次，你可以与所有其他角色进行共同拼点。赢的角色视为使用一张【万箭齐发】，且此牌结算完毕后，你摸受到过此牌造成的伤害的角色数的牌；若不存在赢的角色，则此技能视为未发动过。',
            wechatmengshou: '盟首',
            wechatmengshou_info: '每轮限一次，当你受到其他角色造成的伤害时，若其本轮造成的伤害值不大于你，则你可以防止此伤害。',
            wechat_re_xuzhu: '极许褚',
            wechathuhou: '虎侯',
            wechathuhou_info: '①与你进行【决斗】的角色不能打出【杀】。②你可以将任意张装备牌当作【杀】使用或打出。③以你为伤害来源的【杀】或【决斗】造成的伤害+X（X为此牌对应的实体牌与你使用【决斗】打出的牌中因〖虎侯②〗转化的装备牌数之和）。',
            wechatwuwei: '武卫',
            wechatwuwei_info: '结束阶段，你可以选择一名角色，若如此做，直到你的下个回合开始，其成为伤害类卡牌的目标后，若其体力值不大于你，则你令此牌对其无效，然后使用者于此牌结算完毕后视为对你使用【决斗】（你无法因此【决斗】触发〖武卫〗）。',
            wechat_sunce: '极孙策',
            wechattaoni: '讨逆',
            wechattaoni_info: '出牌阶段开始时，你可以失去任意点体力并摸等量张牌，然后令至多X名其他角色获得1枚“讨逆”标记（X为你以此法失去的体力值）。若如此做，本回合你的手牌上限等于你的体力上限。',
            wechatpingjiang: '平江',
            wechatpingjiang_info: '出牌阶段，你可以视为对一名有“讨逆”标记的角色使用一张【决斗】。若你胜，其弃置所有“讨逆”标记且本回合你使用的【决斗】获得〖无双〗效果且造成的伤害+1。',
            wechatdingye: '鼎业',
            wechatdingye_info: '锁定技，结束阶段，你回复X点体力（X为本回合受到过伤害的角色数）。',
            wechat_xunyu: '极荀彧',
            wechat_xunyu_prefix: '极',
            wechatshangjie: '尚节',
            wechatshangjie_info: '每轮限一次。当一名角色处于濒死状态时，你可以令其将体力值回复至1点，然后你减少X点体力上限并获得X张锦囊牌（X为你的体力值与该角色的体力值的差值）。',
            wechattunlang: '吞狼',
            wechattunlang_info: '每轮开始时，你可以令两名角色获得以下效果直到本轮结束：①当这些角色使用【杀】指定除对方外的唯一目标时，另一名角色也成为此【杀】的额外目标；②当这些角色成为使用者不为对方的【杀】的唯一目标时，另一名角色须弃置一张手牌。',
            wechatwangzuo: '王佐',
            wechatwangzuo_info: '每回合限一次，你的摸牌/出牌/判定阶段开始前，你可以跳过此阶段并令一名其他角色执行之。',
            wechatjuxian: '举贤',
            wechatjuxian_info: '你的回合内，其他角色使用/打出/弃置的牌进入弃牌堆后，你获得之。',
            wechatxianshi: '先识',
            wechatxianshi_info: '一名角色的摸牌阶段开始时，你可以观看牌堆顶三张牌并用任意张手牌替换其中等量的牌。',
            wechat_zhenji: '极甄宓',
            wechatshenfu: '神赋',
            wechatshenfu_info: '①一名角色受到伤害后，你获得1枚“神赋”标记。②准备阶段，你可以弃置所有“神赋”标记并亮出牌堆顶等量的牌，然后你可以依次使用其中的黑色牌。',
            wechatsiyuan: '思怨',
            wechatsiyuan_info: '当你受到伤害后，你可以选择一名其他角色，令伤害来源视为对其造成过1点伤害。',
            wechat_ruanhui: '微信阮慧',
            wechatmingcha: '明察',
            wechatmingcha_info: '摸牌阶段开始时，你亮出牌堆顶两张牌，然后你可以放弃摸牌并获得其中点数不大于8的牌。若你以此法获得了牌，你可以获得一名其他角色的随机一张牌。',
            wechatjingzhong: '敬重',
            wechatjingzhong_info: '弃牌阶段结束时，若你于此阶段内弃置过黑色牌，则你可以选择一名其他角色并获得如下效果直到其回合结束：每阶段限三次，其于出牌阶段内使用的牌结算结束后，你获得此牌对应的实体牌。',
            wechat_sp_machao: 'SP微信马超',
            wechatshichou: '誓仇',
            wechatshichou_info: '①你使用【杀】可以额外选择X名角色成为此【杀】的额外目标（X为你已损失的体力值）。②当你使用【杀】结算完毕后，若你未因此牌造成过伤害，则你获得此牌对应的实体牌。',
            wechat_pangdegong: '微信庞德公',
            wechatpingcai: '评才',
            wechatpingcai_info: '出牌阶段限一次，你可以选择一项：①对一名角色造成1点火属性伤害；②横置至多四名角色；③移动场上的一张装备牌；④令一名角色摸一张牌并回复1点体力，然后你摸一张牌。',
            wechat_guanyinping: '微信关银屏',
            wechatxuehen: '雪恨',
            wechatxuehen_info: '出牌阶段限一次，你可以弃置一张红色牌并对攻击范围内至多两名角色各造成1点伤害，然后这些角色各摸一张牌。',
            wechathuxiao: '虎哮',
            wechathuxiao_info: '当你使用的【杀】被【闪】响应后，你令此【杀】不计入次数限制并摸一张牌。',
            wechatwuji: '武继',
            wechatwuji_info: '觉醒技，结束阶段，若你本回合至少造成了3点伤害，则你加1点体力上限并回复1点体力，失去技能〖雪恨〗并获得技能〖武圣〗。',
            wechat_jsp_huangyueying: 'SP微信黄月英',
            wechatlinglong: '玲珑',
            wechatlinglong_info: '锁定技。若你的装备区没有：防具牌，你视为装备【八卦阵】；坐骑牌，你的手牌上限+2；牌，你使用【杀】或普通锦囊牌不可被响应。',
            wechat_re_gongsunzan: '微信公孙瓒',
            wechatqiaomeng: '趫猛',
            wechatqiaomeng_info: '当你使用黑色【杀】指定目标后，你可以弃置该角色的一张牌，然后若你弃置了装备牌，则你获得之。',
            wechat_yj_zhoubuyi: '微信周不疑',
            wechatquesong: '雀颂',
            wechatquesong_info: '一名角色的结束阶段，若你于回合内受到过伤害，则你可以令一名角色选择一项：1.摸三张牌并复原武将牌；2.回复1点体力。',
            wechat_litong: '微信李通',
            wechattuifeng: '推锋',
            wechattuifeng_info: '当你受到伤害后，你可以将对你造成伤害的其中一张牌置于武将牌上，称为“锋”。准备阶段，你可以获得武将牌上的所有“锋”并摸等量张牌，本回合可以多使用X张【杀】（X为你本回合获得“锋”的数量）。',
            wechat_baosanniang: '微信鲍三娘',
            wechatwuniang: '武娘',
            wechatwuniang_info: '当你使用或打出【杀】时，你可以获得一名其他角色区域内的一张牌。若如此做，其摸一张牌，姓名为“关索”的角色摸一张牌。',
            wechatxushen: '许身',
            wechatxushen_info: '限定技，当你脱离濒死状态后，你可以回复1点体力，然后若关索不在场，你可令一名其他角色选择是否用关索代替其武将并令其摸三张牌。',
            wechat_xushi: '微信徐氏',
            wechatfuzhu: '伏诛',
            wechatfuzhu_info: '一名男性角色的结束阶段，若牌堆剩余牌数不大于【问卦】发动次数的十倍，则你可以依次对其使用牌堆中的所有【杀】（不超过游戏人数），然后你重新记录【问卦】的发动次数并洗牌。',
            wechat_sb_sunshangxiang: '微信谋孙尚香',
            wechatsbliangzhu: '良助',
            wechatsbliangzhu_info: '出牌阶段限一次，你可以获得一名其他角色的一张手牌（此法获得的牌不计入手牌上限），然后你令本阶段成为你〖结姻〗的目标角色选择一项：1：移动场上一张装备牌；2：摸两张牌。',
            wechatsbjieyin: '结姻',
            wechatsbjieyin_info: '使命技。①出牌阶段开始时，你令一名男性角色选择一项：1.交给你两张牌，然后其回复1点体力；2.你失去〖良助〗，然后视为你对其使用一张【顺手牵羊】。②失败：当你失去〖良助〗后，你回复1体力并减少1点体力上限，然后获得〖枭姬〗。',
            wechatsbxiaoji: '枭姬',
            wechatsbxiaoji_info: '当你失去装备区内的一张牌时，你摸两张牌，然后可以弃置场上的一张牌。',
            wechat_sb_zhaoyun: '微信谋赵云',
            wechatsblongdan: '龙胆',
            wechatsblongdan_info: '你可以将【杀】当【闪】、【闪】当【杀】使用或打出，若你本回合未造成过伤害，你摸一张牌。',
            wechatsbjizhu: '积著',
            wechatsbjizhu_info: '觉醒技，结束阶段，若你本回合至少造成过2点伤害或本局游戏有其他角色进入过濒死状态，你修改〖龙胆〗。',
            wechatsblongdan_rewrite: '龙胆·改',
            wechatsblongdan_rewrite_info: '你可以将一张基本牌当本回合未以此法使用的基本牌使用或打出并摸一张牌。',
            wechat_sp_wangcan: '微信王粲',
            wechatspqiai: '七哀',
            wechatspqiai_info: '出牌阶段限一次，你可以将一张非基本牌交给一名其他角色并选择一项：①回复1点体力；②摸两张牌。然后你可以令其执行另一项。',
            wechatxinqieting: '窃听',
            wechatxinqieting_info: '其他角色的回合结束时，若其本回合内未对其他角色造成过伤害，则你可选择一项：①摸一张牌。②观看其所有手牌并获得其中的一张。③将其装备区内的一张牌移动至你的装备区。',
        },
    };
    for (var i in WeChatkill.character) {
        if (!WeChatkill.character[i][4]) WeChatkill.character[i][4] = [];
        if (WeChatkill.translate[i]) {
            if (WeChatkill.translate[i].indexOf('微信神') == 0) WeChatkill.translate[i + '_prefix'] = '微信神';
            else if (WeChatkill.translate[i].indexOf('SP微信神') == 0) WeChatkill.translate[i + '_prefix'] = 'SP微信神';
            else if (WeChatkill.translate[i].indexOf('微信☆') == 0) WeChatkill.translate[i + '_prefix'] = '微信☆';
            else if (WeChatkill.translate[i].indexOf('微信') == 0) WeChatkill.translate[i + '_prefix'] = '微信';
            else if (WeChatkill.translate[i].indexOf('SP微信') == 0) WeChatkill.translate[i + '_prefix'] = 'SP微信';
            else if (WeChatkill.translate[i].indexOf('极') == 0) WeChatkill.translate[i + '_prefix'] = '极';
            else if (WeChatkill.translate[i].indexOf('微信谋') == 0) WeChatkill.translate[i + '_prefix'] = '微信谋';
        }
        if (i.startsWith('wechat_') && !WeChatkill.character[i][4].some(tag => typeof tag == 'string' && tag.startsWith('die:'))) WeChatkill.character[i][4].push('die:' + i.slice(7));
        WeChatkill.character[i][4].push(((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '活动武将/image/character/' + i + '.jpg');
    }
    return WeChatkill;
};

export default packs;