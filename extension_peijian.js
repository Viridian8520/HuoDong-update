'use strict';
//活动配件
var HDPJ=function(lib,game,ui,get,ai,_status){
//快捷添加/删除武将
game.HDdeleteCharacter=function(name){
if(lib.character[name]) delete lib.character[name];
var packs=Object.keys(lib.characterPack).filter(pack=>lib.characterPack[pack][name]);
if(packs.length){
for(var pack of packs) delete lib.characterPack[pack][name];
}
};
game.HDaddCharacter=function(name,character,packss){
game.HDdeleteCharacter(name);
if(!packss) lib.character[name]=character;//未定义武将包或武将包为空则直接添加武将
var packs=packss.split(':');
if(!packs.length) lib.character[name]=character;
else{
for(var pack of packs) lib.characterPack[pack][name]=character;
if(packs.some(p=>lib.config.characters.contains(p))) lib.character[name]=character;
}
};
//配件武将暂时用不上这个函数
game.HDmoveCharacter=function(name,packss){
var nameinfo=undefined;
if(lib.character[name]) nameinfo=lib.character[name];
else{
var pack=Object.keys(lib.characterPack).find(pack=>lib.characterPack[pack][name]);
if(pack) nameinfo=lib.characterPack[pack][name];
}
if(nameinfo) game.HDaddCharacter(name,nameinfo,packss);
};
//设置稀有度
if(lib.rank){
//平凡升阶
lib.rank.rarity.junk.remove('caiyong');
lib.rank.rarity.junk.remove('sunshao');
lib.rank.rarity.junk.remove('re_chenqun');
//鄙人用脚设置的稀有度，只图博君一笑
var rank={
rarity:{
//传说
legend:[
//SSS传说武将评级
//DDDD
'sunce',
're_sunce',
'machao',
'dingyuan',
//正经补充
'sp_ol_zhanghe',
'zhangxuan',
'zhouyi',
'tengfanglan',
'caoxiancaohua',
//----------------分界线----------------
'old_ol_xiaoqiao',
'old_zhangzhongjing',
'oldx_zhangzhongjing',
'old_shen_caopi',
'old_shen_simayi',
'old_shen_sunquan',
'old_shen_xunyu',
'old_shen_ganning',
'old_shen_taishici',
'old_shen_sunce'
],
//史诗
epic:[
'bol_zhangzhongjing',
'ol_maliang',
'old_jiakui',
'old_qiaozhou',
'old_zu_xunshu',
'old_zu_xunchen',
'old_zu_xuncai',
'oldx_zu_xuncai',
'old_zu_xuncan',
'old_sb_ganning',
'old_shen_caocao',
'old_shen_guojia',
'old_yj_ganning',
'old_dengai',
'junk_simayi',
'old_zhangyì',
'old_yanghuiyu',
'old_zhangqiying',
'old_baosanniang',
'bfake_yangfu',
'bfake_zuoci',
'old_sp_maojie',
'old_zhanghe',
'bfake_sundeng',
'bfake_chengpu',
'old_zhugejin'
],
//稀有
rare:[
'bol_sp_huaxin',
'old_yuanji',
'junk_duanwei',
'junk_xuyou',
'old_yj_zhanghe',
'old_zhoufei',
'old_sunluyu',
'zhaoxiang',
'old_zhouchu',
'old_liuzhang',
'old_wangling',
'junk_zhangrang',
'old_zhaoxiang',
'ol_manchong',
'ol_yujin',
'old_xushao'
],
//普通
common:[
],
//平凡
junk:[
'old_sb_liubei'
],
},
//出场率
s:[
],
ap:[
],
a:[
],
am:[
],
bp:[
],
b:[
],
bm:[
],
c:[
],
d:[
],
};
for(var name of Object.keys(lib.characterPack['extra'])){
if(!Object.keys(rank.rarity).some(rarity=>rank.rarity[rarity].contains(name))){
rank.rarity.legend.add(name);
}
}
for(var name of Object.keys(lib.characterPack['sb'])){
if(!Object.keys(rank.rarity).some(rarity=>rank.rarity[rarity].contains(name))){
rank.rarity.legend.add(name);
}
}
for(var name of Object.keys(lib.characterPack['sp'])){
if(!Object.keys(rank.rarity).some(rarity=>rank.rarity[rarity].contains(name))){
if(lib.characterSort.sp.sp_qifu.contains(name)) rank.rarity.legend.add(name);
}
}
for(var name of Object.keys(lib.characterPack['yingbian'])){
if(!Object.keys(rank.rarity).some(rarity=>rank.rarity[rarity].contains(name))){
rank.rarity.rare.add(name);
}
}
var addRank=function(rank){
if(!lib.rank)return;
for(var i in rank){
if(i=='rarity') continue;
lib.rank[i].addArray(rank[i]);
}
if(rank.rarity&&lib.rank.rarity){
for(var i in rank.rarity){
if(lib.rank.rarity[i]===undefined){
lib.rank.rarity[i]=[];
}
lib.rank.rarity[i].addArray(rank.rarity[i]);
}
}
};
addRank(rank);
}
//----------------孙笨の专属正名区·始----------------
lib.characterIntro.re_sunben='孙策（175年—200年5月5日），字伯符，吴郡富春（今浙江省杭州市富阳区）人。破虏将军孙坚长子、吴大帝孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，孙吴政权的奠基者之一。《三国演义》称其武勇犹如霸王项羽，绰号“小霸王”。孙策为继承父亲孙坚的遗业而屈事袁术。兴平二年（195年），孙策征得袁术许可，东渡长江，进攻樊能、于糜，又在当利口袭击张英。并以曲阿为据点，与扬州刺史刘繇进行决战，大败刘繇。建安元年（196年），率兵进攻会稽王朗和吴郡严白虎。建安二年（197年），袁术僭越称帝后，孙策与袁术决裂；同年夏，被朝廷任命为骑都尉，袭父爵乌程侯，兼任会稽太守。建安三年（198年），朝廷任命孙策为讨逆将军，并封为吴侯。建安四年（199年），孙策击败庐江太守刘勋及刘表部将黄祖。建安五年（200年）初，在夺取豫章郡后统一江东；同年4月，正当孙策准备发兵北上之时，在丹徒狩猎时为许贡三门客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。';
lib.characterIntro.sunce='孙策（175年—200年5月5日），字伯符，吴郡富春（今浙江省杭州市富阳区）人。破虏将军孙坚长子、吴大帝孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，孙吴政权的奠基者之一。《三国演义》称其武勇犹如霸王项羽，绰号“小霸王”。孙策为继承父亲孙坚的遗业而屈事袁术。兴平二年（195年），孙策征得袁术许可，东渡长江，进攻樊能、于糜，又在当利口袭击张英。并以曲阿为据点，与扬州刺史刘繇进行决战，大败刘繇。建安元年（196年），率兵进攻会稽王朗和吴郡严白虎。建安二年（197年），袁术僭越称帝后，孙策与袁术决裂；同年夏，被朝廷任命为骑都尉，袭父爵乌程侯，兼任会稽太守。建安三年（198年），朝廷任命孙策为讨逆将军，并封为吴侯。建安四年（199年），孙策击败庐江太守刘勋及刘表部将黄祖。建安五年（200年）初，在夺取豫章郡后统一江东；同年4月，正当孙策准备发兵北上之时，在丹徒狩猎时为许贡三门客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。';
//----------------孙笨の专属正名区·末----------------


//官方遗漏武将介绍补充
lib.characterIntro.wolongfengchu=lib.characterIntro.zhugeliang+'<br>'+lib.characterIntro.pangtong;

//同名武将替换
lib.characterReplace.xuyou.add('bilibili_sp_xuyou');
lib.characterReplace.zhangzhongjing=['zhangzhongjing','bol_zhangzhongjing','old_zhangzhongjing','oldx_zhangzhongjing'];
lib.characterReplace.zhoufei=['zhoufei','old_zhoufei'];
lib.characterReplace.dengai.add('old_dengai');
lib.characterReplace.jin_yanghuiyu.add('old_yanghuiyu');
lib.characterReplace.shen_caopi=['shen_caopi','old_shen_caopi'];
lib.characterReplace.shen_xunyu=['shen_xunyu','old_shen_xunyu'];
lib.characterReplace.shen_simayi=['shen_simayi','old_shen_simayi'];
lib.characterReplace.shen_guojia=['shen_guojia','old_shen_guojia'];
lib.characterReplace.shen_taishici=['shen_taishici','old_shen_taishici'];
lib.characterReplace.shen_sunce=['shen_sunce','old_shen_sunce'];
lib.characterReplace.shen_caocao=['shen_caocao','old_shen_caocao'];
lib.characterReplace.baosanniang.add('old_baosanniang');
lib.characterReplace.gaolan.add('old_gaolan');
lib.characterReplace.zhangqiying=['zhangqiying','old_zhangqiying'];
lib.characterReplace.sunluyu.add('old_sunluyu');
lib.characterReplace.zhaoxiang.add('old_zhaoxiang');
lib.characterReplace.zhangyì.add('old_zhangyì');
lib.characterReplace.manchong.add('ol_manchong');
lib.characterReplace.yj_ganning.add('old_yj_ganning');
lib.characterReplace.sp_ol_zhanghe.add('old_yj_zhanghe');
lib.characterReplace.ol_lusu.add('lusu');
lib.characterReplace.re_yuanshao.add('yuanshao');
lib.characterReplace.xushao=['xushao','old_xushao'];
lib.characterReplace.old_yuanji=['yuanji','old_yuanji'];
lib.characterReplace.huaman.add('old_huaman');
lib.characterReplace.zhanghe.add('old_zhanghe');
lib.characterReplace.zhugejin=['zhugejin','old_zhugejin'];
lib.characterReplace.xiaoqiao.add('old_ol_xiaoqiao');
lib.characterReplace.xunchen.add('old_xunchen');
lib.characterReplace.sunshao.add('old_sp_sunshao');
lib.characterReplace.huaxin.addArray(['bol_sp_huaxin','old_sp_huaxin']);
lib.characterReplace.sp_kongrong=['sp_kongrong','old_sp_kongrong'];
lib.characterReplace.dc_mifuren.add('old_sp_mifuren');
lib.characterReplace.liuzhang.add('old_liuzhang');
lib.characterReplace.zhouchu.add('old_zhouchu');
lib.characterReplace.ol_bianfuren=['ol_bianfuren','sp_bianfuren'];
lib.characterReplace.qiaozhou.add('old_qiaozhou');
lib.characterReplace.sb_ganning=['sb_ganning','old_sb_ganning'];
lib.characterReplace.sb_liubei=['sb_liubei','old_sb_liubei'];
lib.characterReplace.zhangbao.add('old_zhangbao');
lib.characterReplace.sp_maojie=['sp_maojie','old_sp_maojie'];
lib.characterReplace.jsp_guanyu.addArray(['bol_jsp_guanyu','bolx_jsp_guanyu']);
lib.characterReplace.lingju.add('decade_lingju');
lib.characterReplace.buzhi=['decade_buzhi','buzhi'];
lib.characterReplace.fuhuanghou.add('bol_fuhuanghou');

//筛选武将同名替换
Object.keys(lib.characterReplace).forEach(name=>{
if(!lib.character[name]) delete lib.characterReplace[name];
else lib.characterReplace[name]=lib.characterReplace[name].filter(namex=>lib.character[namex]);
});

//神将
if(!game.HasExtension('OLUI')) game.HDaddCharacter('shen_sunquan',['male','shen',4,['bolyuheng','boldili'],['wu']],'extra');
game.HDaddCharacter('tw_shen_lvmeng',['male','shen',3,['bolshelie','bolgongxin'],['wu']],'extra');

//界限突破
game.HDaddCharacter('re_zhenji',['female','wei',3,['reluoshen','qingguo'],[]],'refresh');
game.HDaddCharacter('re_zhangchunhua',['female','wei',3,['rejueqing','shangshi'],[]],'refresh');
game.HDaddCharacter('re_caorui',['male','wei',3,['huituo','remingjian','xingshuai'],['zhu']],'refresh');

//一将成名
game.HDaddCharacter('guohuai',['male','wei',3,['rejingce'],[]],'yijiang');

//璀璨星河
game.HDaddCharacter('zhugejin',['male','wu',3,['huanshi','olhongyuan','olmingzhe'],[]],'sp');
game.HDaddCharacter('maliang',['male','shu',3,['zishu','xinyingyuan'],[]],'sp');
game.HDaddCharacter('sp_zhaoyun',['male','qun',3,['longdan','chongzhen'],[]],'sp');
lib.translate.chongzhen_info='当你发动〖龙胆〗时，你可以获得对方的一张手牌。';

//系列专属包
lib.characterSort.sp2.sp_decade.addArray(['decade_buzhi','decade_lingju','junk_zhangrang']);
game.HDaddCharacter('junk_zhangrang',['male','qun',3,['junktaoluan'],[]],'sp2');
game.HDaddCharacter('licaiwei',['female','qun',3,['yijiao','qibie'],[]],'sp2');
game.HDaddCharacter('duanwei',['male','qun',4,['junklangmie'],[]],'sp2');

//限定专属
game.HDaddCharacter('luyi',['female','qun',3,['dcyaoyi','dcshoutan','dcfuxue'],[]],'xianding');

//文德武备
game.HDaddCharacter('ol_huaxin',['male','wei',3,['caozhao','olxibing'],['ext:活动武将/image/character/ol_huaxin.jpg']],'yingbian');
game.HDaddCharacter('chengjichengcui',['male','wei',6,['oltousui','olchuming'],[]],'yingbian');//初生势力改动

//移动服
lib.characterSort.mobile.bilibili_buchong_mobile=['old_zhangqiying','old_zhaoxiang','junk_xuyou'];
game.HDaddCharacter('old_zhangqiying',['female','qun',3,['xinfu_falu','olddianhua','oldzhenyi'],['ext:活动武将/image/character/old_zhangqiying.jpg']],'mobile');
game.HDaddCharacter('old_zhaoxiang',['female','shu',4,['xinfanghun','xinfuhan'],['ext:活动武将/image/character/old_zhaoxiang.jpg']],'mobile');
game.HDaddCharacter('jiakui',['male','wei',4,['tongqu','xinwanlan'],[]],'mobile');
game.HDaddCharacter('yangfu',['male','wei',3,['jiebing','bolhannan'],[]],'mobile');
game.HDaddCharacter('yj_weiyan',['male','qun','4/4/1',['mbguli','mbaosi'],[]],'mobile');
game.HDaddCharacter('sp_maojie',['male','wei',3,['bingqing'],[]],'mobile');
game.HDaddCharacter('xin_caozhen',['male','wei',4,['bolsidi'],[]],'mobile');
game.HDaddCharacter('junk_xuyou',['male','qun',3,['nzry_chenglve','junkshicai','nzry_cunmu'],[]],'mobile');

//线下
lib.characterSort.offline.offline_star.add('bolx_jsp_guanyu');
lib.characterSort.offline.offline_yongjian.add('bol_sunluban');
if(lib.config.extension_活动武将_XvXiang){
for(var i of lib.characterSort.offline.offline_vtuber) lib.characterPack.offline[i][3].add('bilibili_xuxiang');
}
game.HDaddCharacter('bolx_jsp_guanyu',['male','wei',4,['wusheng','wzdanji'],['ext:活动武将/image/character/bolx_jsp_guanyu.jpg']],'offline');
game.HDaddCharacter('bol_sunluban',['female','wu',3,['boljiaozong','bolchouyou'],['ext:活动武将/image/character/bol_sunluban.jpg','die_audio']],'offline');

//海外
lib.characterSort.tw.bilibili_buchong_tw=['bol_xin_sunluban','bol_mazhong','bol_jsp_guanyu','bol_fuhuanghou'];
delete lib.skill.twchongqi.derivation;
game.HDaddCharacter('tw_caozhao',['male','wei',4,['twfuzuan','twchongqi','twfeifu'],[]],'tw');
game.HDaddCharacter('bol_xin_sunluban',['female','wu',3,['bolzenhui','xinjiaojin'],['ext:活动武将/image/character/bol_xin_sunluban.jpg']],'tw');
game.HDaddCharacter('bol_mazhong',['male','shu',4,['bolfuman'],['ext:活动武将/image/character/bol_mazhong.jpg']],'tw');
game.HDaddCharacter('bol_jsp_guanyu',['male','wei',4,['wusheng','boldanji'],['ext:活动武将/image/character/bol_jsp_guanyu.jpg']],'tw');
game.HDaddCharacter('bol_fuhuanghou',['female','qun',3,['rezhuikong','xinqiuyuan'],['ext:活动武将/image/character/bol_fuhuanghou.jpg']],'tw');

//联动卡
game.HDaddCharacter('nezha',['male','qun',2,['dcsantou','dcfaqi'],[]],'collab');
game.HDaddCharacter('sunwukong',['male','qun',3,['dcjinjing','dccibei','dcruyi'],[]],'collab');
game.HDaddCharacter('longwang',['male','qun',3,['dclonggong','dcsitian'],[]],'collab');
game.HDaddCharacter('taoshen',['male','qun',3,['dcnutao'],[]],'collab');

//怀旧包
lib.characterSort.old.bilibili_buchong_fre=['old_zhugejin','old_zhanghe','old_ol_xiaoqiao'];
lib.characterSort.old.bilibili_buchong_shenhua=['old_zhoufei','lusu','yuanshao','old_dengai'];
lib.characterSort.old.bilibili_buchong_yijiang=['old_yj_jushou','ol_manchong'];
lib.characterSort.old.bilibili_buchong_refresh=['oldx_zhangfei','oldx_guanyu','oldx_zhaoyun','oldx_yujin'];
lib.characterSort.old.bilibili_buchong_sp=['old_zhangbao','ol_maliang','old_sunluyu','old_baosanniang','old_pangtong','old_gaolan'];
lib.characterSort.old.bilibili_buchong_szn2=['old_yuanji','old_xushao','old_huaman','junk_duanwei'];
lib.characterSort.old.bilibili_buchong_mobile2=['old_bulianshi','old_sb_ganning','old_sb_liubei','old_sp_maojie','old_zhouchu','old_xunchen','old_sp_kongrong','old_zhangzhongjing','oldx_zhangzhongjing','old_zhangyì','old_yj_ganning','old_jiakui','old_qiaozhou','old_yj_zhanghe','old_yanghuiyu','old_liuzhang','old_sp_sunshao','old_zhaoxiang','old_wangling','old_sp_huaxin','old_sp_mifuren'];
lib.characterSort.old.bilibili_buchong_menfashizu=['old_zu_xunshu','old_zu_xunchen','old_zu_xuncai','old_zu_xuncan','oldx_zu_xuncai'];
lib.characterSort.old.bilibili_buchong_extra=['old_shen_sunce','old_shen_taishici','old_shen_simayi','old_shen_xunyu','old_shen_caocao','old_shen_caopi','old_shen_guojia'];
game.HDaddCharacter('old_zu_xunshu',['male','qun',3,['old_shenjun','old_balong','clandaojie'],['clan:颍川荀氏','ext:活动武将/image/character/old_zu_xunshu.jpg']],'old');
game.HDaddCharacter('old_zu_xunchen',['male','qun',3,['old_sankuang','old_beishi','clandaojie'],['clan:颍川荀氏','ext:活动武将/image/character/old_zu_xunchen.jpg']],'old');
game.HDaddCharacter('old_zu_xuncai',['female','qun',3,['old_lieshi','old_dianzhan','old_huanyin','clandaojie'],['clan:颍川荀氏','ext:活动武将/image/character/old_zu_xuncai.jpg']],'old');
game.HDaddCharacter('old_zu_xuncan',['male','wei',3,['old_yunshen','old_shangshen','old_fenchai','clandaojie'],['clan:颍川荀氏']],'old');
game.HDaddCharacter('oldx_zu_xuncai',['female','qun',3,['oldx_lieshi','oldx_dianzhan','clanhuanyin','clandaojie'],['clan:颍川荀氏']],'old');
game.HDaddCharacter('lusu',['male','wu',3,['haoshi','redimeng'],['ext:活动武将/image/character/lusu.jpg']],'old');
game.HDaddCharacter('yuanshao',['male','qun',4,['oldluanji','xueyi'],['ext:活动武将/image/character/yuanshao.jpg','zhu']],'old');
game.HDaddCharacter('old_yj_jushou',['male','qun',3,['jianying','oldshibei'],['unseen','ext:活动武将/image/character/old_yj_jushou.jpg']],'old');
game.HDaddCharacter('old_shen_caopi',['male','shen',6,['bilibili_chuyuan','bilibili_dengji'],['wei','ext:活动武将/image/character/old_shen_caopi.jpg']],'old');
game.HDaddCharacter('old_shen_xunyu',['male','shen',3,['old_tianzuo','old_lingce','old_dinghan'],['wei','ext:活动武将/image/character/old_shen_xunyu.jpg']],'old');
game.HDaddCharacter('old_shen_simayi',['male','shen',3,['reguicai','fangzhu','rewansha','rezhiheng','rejizhi'],['wei','ext:活动武将/image/character/old_shen_simayi.jpg']],'old');
game.HDaddCharacter('old_shen_guojia',['male','shen',3,['shuishi','old_tianyi','sghuishi'],['wei','ext:活动武将/image/character/old_shen_guojia.jpg']],'old');
game.HDaddCharacter('old_shen_taishici',['male','shen',4,['olddulie','oldpowei','dangmo'],['wu','ext:活动武将/image/character/old_shen_taishici.jpg']],'old');
game.HDaddCharacter('old_shen_sunce',['male','shen','1/6',['old_yingba','old_fuhai','old_pinghe'],['wu','ext:活动武将/image/character/old_shen_sunce.jpg']],'old');
game.HDaddCharacter('old_shen_caocao',['male','shen',3,['guixin','feiying'],['wei','ext:活动武将/image/character/old_shen_caocao.jpg']],'old');
game.HDaddCharacter('old_zhangyì',['male','shu',4,['zhiyi'],['ext:活动武将/image/character/old_zhangyi.jpg']],'old');
game.HDaddCharacter('old_xunchen',['male','qun',3,['jianzhan','reduoji'],['die_audio','ext:活动武将/image/character/old_xunchen.jpg']],'old');
game.HDaddCharacter('old_zhangzhongjing',['male','qun',3,['old_jishi','liaoyi','binglun'],['ext:活动武将/image/character/old_zhangzhongjing.jpg']],'old');
game.HDaddCharacter('oldx_zhangzhongjing',['male','qun',3,['jishi','old_liaoyi','binglun'],['ext:活动武将/image/character/oldx_zhangzhongjing.jpg']],'old');
game.HDaddCharacter('old_yanghuiyu',['female','wei',3,['oldhongyi','quanfeng'],['ext:活动武将/image/character/old_yanghuiyu.jpg']],'old');
game.HDaddCharacter('old_zhoufei',['female','wu',3,['liangyin','kongsheng'],['ext:活动武将/image/character/old_zhoufei.jpg']],'old');
game.HDaddCharacter('old_dengai',['male','wei',3,['bilibili_zhenggong','bilibili_toudu'],['die_audio','ext:活动武将/image/character/old_dengai.jpg']],'old');
game.HDaddCharacter('old_yj_ganning',['male','qun',4,['bilibili_jinfan','bilibili_sheque'],['ext:活动武将/image/character/old_yj_ganning.jpg']],'old');
game.HDaddCharacter('old_jiakui',['male','wei',3,['zhongzuo','wanlan'],[]],'old');
game.HDaddCharacter('old_qiaozhou',['male','shu',3,['zhiming','twxingbu'],['ext:活动武将/image/character/old_qiaozhou.jpg']],'old');
game.HDaddCharacter('old_yj_zhanghe',['male','qun',4,['zhilve'],['ext:活动武将/image/character/old_yj_zhanghe.jpg']],'old');
game.HDaddCharacter('old_baosanniang',['female','shu',3,['xinfu_wuniang','xinfu_xushen'],['ext:活动武将/image/character/old_baosanniang.jpg']],'old');
game.HDaddCharacter('old_gaolan',['male','qun',4,['cxy_XiYing'],['ext:活动武将/image/character/old_gaolan.jpg']],'old');
game.HDaddCharacter('old_zhangbao',['male','qun',3,['old_zhoufu','old_yingbing'],['ext:活动武将/image/character/old_zhangbao.jpg']],'old');
game.HDaddCharacter('old_sunluyu',['female','wu',3,['meibu','mumu'],['ext:活动武将/image/character/old_sunluyu.jpg']],'old');
game.HDaddCharacter('old_pangtong',['male','qun',3,['manjuan','zuixiang'],['unseen']],'old');
game.HDaddCharacter('ol_manchong',['male','wei',3,['xinjunxing','yuce'],['ext:活动武将/image/character/ol_manchong.jpg']],'old');
game.HDaddCharacter('old_xushao',['male','qun',3,['oldpingjian'],['ext:活动武将/image/character/old_xushao.jpg']],'old');
game.HDaddCharacter('old_huaman',['female','shu',3,['hmmanyi','old_mansi','old_souying','old_zhanyuan'],['ext:活动武将/image/character/old_huaman.jpg']],'old');
game.HDaddCharacter('old_ol_xiaoqiao',['female','wu',3,['oltianxiang','rehongyan'],['ext:活动武将/image/character/old_ol_xiaoqiao.jpg']],'old');
game.HDaddCharacter('old_zhanghe',['male','wei',4,['qiaobian','bilibili_zhiyinxian'],['ext:活动武将/image/character/old_zhanghe.jpg']],'old');
game.HDaddCharacter('old_zhugejin',['male','wu',3,['olhongyuan','bolhuanshi','olmingzhe'],['ext:活动武将/image/character/old_zhugejin.jpg']],'old');
game.HDaddCharacter('old_sp_sunshao',['male','wu',3,['refubi','rezuici'],['ext:活动武将/image/character/old_sp_sunshao.jpg']],'old');
game.HDaddCharacter('old_liuzhang',['male','qun',3,['xiusheng','yinlang','huaibi'],['zhu','ext:活动武将/image/character/old_liuzhang.jpg']],'old');
game.HDaddCharacter('old_wangling',['male','wei',4,['mouli','zifu'],['ext:活动武将/image/character/old_wangling.jpg']],'old');
game.HDaddCharacter('old_sp_huaxin',['male','wei',3,['hxrenshi','debao','buqi'],['ext:活动武将/image/character/old_sp_huaxin.jpg']],'old');
game.HDaddCharacter('old_sp_kongrong',['male','qun',3,['spmingshi','splirang'],['ext:活动武将/image/character/old_sp_kongrong.jpg']],'old');
game.HDaddCharacter('old_sp_mifuren',['female','shu',3,['spguixiu','spcunsi'],['die_audio','ext:活动武将/image/character/old_sp_mifuren.jpg']],'old');
game.HDaddCharacter('old_zhouchu',['male','wu',4,['xianghai','chuhai'],['ext:活动武将/image/character/old_zhouchu.jpg']],'old');
game.HDaddCharacter('old_sp_maojie',['male','wei',3,['bingqing','yingfeng'],[]],'old');
game.HDaddCharacter('old_sb_ganning',['male','wu',4,['old_qixi','old_fenwei'],['ext:活动武将/image/character/old_sb_ganning.jpg']],'old');
game.HDaddCharacter('old_sb_liubei',['male','shu',4,['old_rende','old_zhangwu','sbjijiang'],['zhu','ext:活动武将/image/character/old_sb_liubei.jpg']],'old');
game.HDaddCharacter('ol_maliang',['male','shu',3,['zishu','yingyuan'],[]],'old');
game.HDaddCharacter('old_bulianshi',['female','wu',3,['anxu','zhuiyi'],[]],'old');
game.HDaddCharacter('junk_duanwei',['male','qun',4,['langmie'],[]],'old');
game.HDaddCharacter('oldx_zhangfei',['male','shu',4,['paoxiao','bilibili_tannang'],['character:zhangfei']],'old');
game.HDaddCharacter('oldx_guanyu',['male','shu',4,['wusheng','bilibili_yishi'],['character:guanyu']],'old');
game.HDaddCharacter('oldx_zhaoyun',['male','shu',4,['longdan','yicong'],['character:zhaoyun']],'old');
game.HDaddCharacter('oldx_yujin',['male','wei',4,['bilibili_zhengjun'],['character:yujin']],'old');
game.HDaddCharacter('old_yuanji',['female','wu',3,['dcmengchi','dcjiexing'],['ext:活动武将/image/character/old_yuanji.jpg']],'old');

//DIY
lib.characterSort.diy.diy_fakenews.addArray(['bol_zhangzhongjing','bol_sp_huaxin','bfake_zuoci','bfake_yangfu','bfake_chengpu','bfake_sundeng','old_shen_sunquan','old_shen_ganning','bfake_jiananfeng','bfake_chengui']);
game.HDdeleteCharacter('ol_guohuai');
game.HDaddCharacter('bfake_yangfu',['male','wei',4,['old_jiebing','old_kuzhan'],['ext:活动武将/image/character/bfake_yangfu.jpg']],'diy');
game.HDaddCharacter('bfake_zuoci',['male','qun',3,['BThuashen','BTxinsheng'],['ext:活动武将/image/character/bfake_zuoci.jpg']],'diy');
game.HDaddCharacter('bfake_chengpu',['male','wu',4,['bolkuangbi'],['ext:活动武将/image/character/bfake_sundeng.jpg']],'diy');
game.HDaddCharacter('bfake_sundeng',['male','wei',4,['old_jiebing','old_kuzhan'],['ext:活动武将/image/character/bfake_yangfu.jpg']],'diy');
game.HDaddCharacter('old_shen_sunquan',['male','shen',4,['shen_sunquan_skill'],['wu','ext:活动武将/image/character/old_shen_sunquan.jpg']],'diy');
game.HDaddCharacter('old_shen_ganning',['male','shen',1,['old_jieying','old_tongling'],['wu','ext:活动武将/image/character/old_shen_ganning.jpg']],'diy');
game.HDaddCharacter('bfake_jiananfeng',['female','jin',8,['bolduliao','bolhuidu','bolfushou'],['ext:活动武将/image/character/bfake_jiananfeng.jpg']],'diy');
game.HDaddCharacter('bfake_chengui',['male','qun',3,['bolyingtu','bolcongshi'],['ext:活动武将/image/character/bfake_chengui.jpg']],'diy');
if(lib.config.connect_nickname=='萌新（转型中）'){
game.HDaddCharacter('bol_sp_huaxin',['male','wei',3,['bolyuanqing','bolshuchen','bolxiezheng'],[]],'diy');
game.HDaddCharacter('bol_zhangzhongjing',['male','qun',3,['bolliaoyi','bolbinglun'],[]],'diy');
}

if(get.mode()!='boss'&&(!lib.config.plays||!lib.config.plays.boss)){
game.loadModeAsync('boss',mode=>{
['skill','translate'].forEach(i=>{
for(var j in mode[i]){
if(!lib[i][j]&&!j.startsWith('_')) lib[i][j]=mode[i][j];
if(i=='skill') game.finishSkill(j);
}
});
//虎牢关彩蛋
if(lib.config.extension_活动武将_ShenLvBu){
['boss_lvbu1','boss_lvbu2','boss_lvbu3'].forEach(name=>{
lib.rank.rarity.legend.add(name);
if(!lib.characterIntro[name]&&lib.characterIntro.lvbu) lib.characterIntro[name]=lib.characterIntro.lvbu;
});
lib.characterSort.extra.boss_hlg=['boss_lvbu1','boss_lvbu2','boss_lvbu3'];
game.HDaddCharacter('boss_lvbu1',['male','shen',8,['wushuang','mashu','boljingjia','boss_aozhan'],['mode:boss']],'extra');
game.HDaddCharacter('boss_lvbu2',['male','shen',6,['wushuang','mashu','xiuluo','shenwei','shenji'],['mode:boss']],'extra');
game.HDaddCharacter('boss_lvbu3',['male','shen',6,['wushuang','shenqu','jiwu'],['mode:boss']],'extra');
lib.translate.boss_hlg='OL·虎牢关';
}
});
}

//Prefix添加
lib.namePrefix.set('废案',{
color:'#a4a4a4',
nature:'black',
showName:'废',
});
lib.namePrefix.set('废案神',{
getSpan:(prefix,name)=>`${get.prefixSpan('废案')}${get.prefixSpan('神')}`,
});

//手杀前缀
lib.translate.re_sunben='手杀孙策';
lib.translate.re_sunben_prefix='手杀';
lib.translate.shenpei='手杀审配';
lib.translate.shenpei_prefix='手杀';
//新杀前缀
lib.translate.dc_zhuling='新杀朱灵';
lib.translate.dc_zhuling_prefix='新杀';
//取消前缀
lib.translate.sp_shenpei='审配';
delete lib.translate.sp_shenpei_prefix;
lib.translate.gz_dengzhi='邓芝';
lib.translate.gz_miheng='祢衡';
lib.translate.jin_xiahouhui='夏侯徽';
delete lib.translate.jin_xiahouhui_prefix;
lib.translate.gz_huangzu='黄祖';
lib.translate.gz_liuba='刘巴';

//添加武将翻译
lib.translate.old_zu_xunshu='旧荀淑';
lib.translate.old_zu_xunshu_prefix='旧';
lib.translate.old_zu_xunchen='旧荀谌';
lib.translate.old_zu_xunchen_prefix='旧';
lib.translate.old_zu_xuncai='旧荀采';
lib.translate.old_zu_xuncai_prefix='旧';
lib.translate.old_zu_xuncan='旧荀粲';
lib.translate.old_zu_xuncan_prefix='旧';
lib.translate.oldx_zu_xuncai='旧荀采';
lib.translate.oldx_zu_xuncai_prefix='旧';
lib.translate.old_qiaozhou='旧谯周';
lib.translate.old_qiaozhou_prefix='旧';
lib.translate.old_yj_zhanghe='旧张郃';
lib.translate.old_yj_zhanghe_prefix='旧';
lib.translate.old_yj_jushou='旧沮授';
lib.translate.old_yj_jushou_prefix='旧';
lib.translate.old_shen_caopi='旧神曹丕';
lib.translate.old_shen_caopi_prefix='旧神';
lib.translate.old_shen_xunyu='旧神荀彧';
lib.translate.old_shen_xunyu_prefix='旧神';
lib.translate.old_shen_simayi='单机神司马懿';
lib.translate.old_shen_simayi_ab='神司马懿';
lib.translate.old_shen_guojia='旧神郭嘉';
lib.translate.old_shen_guojia_prefix='旧神';
lib.translate.old_shen_taishici='旧神太史慈';
lib.translate.old_shen_taishici_prefix='旧神';
lib.translate.old_shen_sunce='旧神孙策';
lib.translate.old_shen_sunce_prefix='旧神';
lib.translate.old_shen_caocao='旧神曹操';
lib.translate.old_shen_caocao_prefix='旧神';
lib.translate.old_zhangyì='旧张翼';
lib.translate.old_zhangyì_prefix='旧';
lib.translate.old_yanghuiyu='旧羊徽瑜';
lib.translate.old_yanghuiyu_prefix='旧';
lib.translate.old_jiakui='旧贾逵';
lib.translate.old_jiakui_prefix='旧';
lib.translate.junk_zhangrang='新杀张让';
lib.translate.junk_zhangrang_prefix='新杀';
lib.translate.old_zhangqiying='手杀张琪瑛';
lib.translate.old_zhangqiying_prefix='手杀';
lib.translate.bolx_jsp_guanyu='★SP关羽';
lib.translate.bolx_jsp_guanyu_prefix='★SP';
lib.translate.bol_sunluban='用间孙鲁班';
lib.translate.bol_sunluban_prefix='用间';
lib.translate.old_zhoufei='旧周妃';
lib.translate.old_zhoufei_prefix='旧';
lib.translate.old_dengai='邓士载';
lib.translate.old_yj_ganning='旧甘宁';
lib.translate.old_yj_ganning_prefix='旧';
lib.translate.old_xunchen='旧荀谌';
lib.translate.old_xunchen_prefix='旧';
lib.translate.old_liuzhang='旧刘璋';
lib.translate.old_liuzhang_prefix='旧';
lib.translate.old_sp_sunshao='旧孙邵';
lib.translate.old_sp_sunshao_prefix='旧';
lib.translate.old_zhaoxiang='手杀赵襄';
lib.translate.old_zhaoxiang_prefix='手杀';
lib.translate.old_wangling='旧王淩';
lib.translate.old_wangling_prefix='旧';
lib.translate.old_sp_huaxin='旧华歆';
lib.translate.old_sp_huaxin_prefix='旧';
lib.translate.old_sp_kongrong='旧孔融';
lib.translate.old_sp_kongrong_prefix='旧';
lib.translate.old_sp_mifuren='旧糜夫人';
lib.translate.old_sp_mifuren_prefix='旧';
lib.translate.old_zhouchu='旧周处';
lib.translate.old_zhouchu_prefix='旧';
lib.translate.old_baosanniang='旧鲍三娘';
lib.translate.old_baosanniang_prefix='旧';
lib.translate.old_sp_maojie='旧毛玠';
lib.translate.old_sp_maojie_prefix='旧';
lib.translate.old_sb_ganning='旧甘宁';
lib.translate.old_sb_ganning_prefix='旧';
lib.translate.old_sb_liubei='旧刘备';
lib.translate.old_sb_liubei_prefix='旧';
lib.translate.old_gaolan='旧高览';
lib.translate.old_gaolan_prefix='旧';
lib.translate.old_zhangbao='旧张宝';
lib.translate.old_zhangbao_prefix='旧';
lib.translate.old_sunluyu='旧孙鲁育';
lib.translate.old_sunluyu_prefix='旧';
lib.translate.old_pangtong='旧庞统';
lib.translate.old_pangtong_prefix='旧';
lib.translate.ol_manchong='旧满宠';
lib.translate.ol_manchong_prefix='旧';
lib.translate.old_xushao='旧许劭';
lib.translate.old_xushao_prefix='旧';
lib.translate.old_huaman='旧花鬘';
lib.translate.old_huaman_prefix='旧';
lib.translate.old_ol_xiaoqiao='小乔';
lib.translate.old_zhanghe='张郃';
lib.translate.old_zhugejin='诸葛瑾';
lib.translate.ol_maliang='旧马良';
lib.translate.ol_maliang_prefix='旧';
lib.translate.junk_duanwei='旧段煨';
lib.translate.junk_duanwei_prefix='旧';
lib.translate.oldx_zhangfei='张翼德';
lib.translate.oldx_guanyu='关云长';
lib.translate.oldx_zhaoyun='赵子龙';
lib.translate.oldx_yujin='于文则';
lib.translate.bol_xin_sunluban='TW孙鲁班';
lib.translate.bol_xin_sunluban_prefix='TW';
lib.translate.bol_mazhong='TW马忠';
lib.translate.bol_mazhong_prefix='TW';
lib.translate.old_yuanji='旧袁姬';
lib.translate.old_yuanji_prefix='旧';
lib.translate.bfake_yangfu='废案杨阜';
lib.translate.bfake_yangfu_prefix='废案';
lib.translate.bfake_zuoci='谋左慈';
lib.translate.bfake_zuoci_prefix='谋';
lib.translate.bfake_chengpu='废案程普';
lib.translate.bfake_chengpu_prefix='废案';
lib.translate.bfake_sundeng='废案孙登';
lib.translate.bfake_sundeng_prefix='废案';
lib.translate.old_shen_sunquan='废案神孙权';
lib.translate.old_shen_sunquan_prefix='废案神';
lib.translate.old_shen_ganning='废案神甘宁';
lib.translate.old_shen_ganning_prefix='废案神';
lib.translate.bol_sp_huaxin='废案华歆';
lib.translate.bol_sp_huaxin_prefix='废案';
lib.translate.bol_jsp_guanyu='TW关羽';
lib.translate.bol_jsp_guanyu_prefix='TW';
lib.translate.bfake_jiananfeng='废案贾南风';
lib.translate.bfake_jiananfeng_prefix='废案';
lib.translate.bfake_chengui='废案陈珪';
lib.translate.bfake_chengui_prefix='废案';
lib.translate.old_zhangzhongjing_prefix='旧';
lib.translate.oldx_zhangzhongjing_prefix='旧';
lib.translate.bol_zhangzhongjing_prefix='废案';
lib.translate.bol_fuhuanghou_prefix='TW';

lib.translate.bilibili_buchong_fre='武将补充·OL废稿';
lib.translate.bilibili_buchong_shenhua='武将补充·神话再临';
lib.translate.bilibili_buchong_yijiang='武将补充·一将成名';
lib.translate.bilibili_buchong_refresh='武将补充·界限突破';
lib.translate.bilibili_buchong_menfashizu='武将补充·门阀士族';
lib.translate.bilibili_buchong_extra='武将补充·神武将';
lib.translate.bilibili_buchong_sp='武将补充·SP';
lib.translate.bilibili_buchong_szn2='武将补充·十周年服';
lib.translate.bilibili_buchong_mobile='武将补充·移动服';
lib.translate.bilibili_buchong_mobile2='武将补充·移动服';
lib.translate.bilibili_buchong_tw='武将补充·海外服';

lib.characterTitle.bol_sunluban='测试专用，问题居多<br>仅供参考，娱乐为上';
lib.characterTitle.old_sb_liubei='任何邪恶终将绳之以法';
lib.characterTitle.old_zhangzhongjing='第一版张仲景';
lib.characterTitle.oldx_zhangzhongjing='第三版张仲景';
lib.characterTitle.bol_zhangzhongjing='仁望值弃稿';
lib.characterTitle.bol_sp_huaxin='仁望值弃稿';
};
window.HDPJ_import(HDPJ);