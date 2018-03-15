var citySelect = function (option) {
    this.option = option;
    this.searchUrl = option.searchUrl;
    this.flag = true;
    this.hotcity = ["北京-PEK-1-3526-2", "上海-SHA-860-3527-2", "广州-CAN-2141-2140-2", "深圳-SZX-2167-2140-2", "杭州-HGH-1013-1012-2", "成都-CTU -2511-2510-2", "武汉-WUH-1862-1861-2", "西安-XIY-3071-3070-2", "青岛-TAO-1504-1491-2", "长沙-CSX-1991-1990-2", "南京-NKG-881-880-2", "厦门-XMN-1280-1264-2", "昆明-KMG-2835-2834-2", "大连-DLC-515-499-2", "天津-TSN-20-3529-2", "郑州-CGO-1667-1666-2", "三亚-SYX-2447-2440-2", "济南-TNA-1492-1491-2", "福州-FOC-1265-1264-2", "重庆-CKG-2469-3528-2"];
    var yletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var cityObj = {};
    var oletter = [];
    //酒店城市
    var hotelcity = "北京|BeiJingShi|BJS|PEK|1|3526|2,亳州|HoZhou|ZZ|ZZ|1243|1125|2,毕节|BiJie|BJ|BFJ|2773|2731|2,白银|BaiYin|BY|BY|3215|3198|2,包头|BaoTou|BT|BAV|388|376|2,巴彦淖尔|BaYanNaoEr|BYNE|RLK|453|376|2,本溪|BenXi|BX|BX|545|499|2,保山|BaoShan|BS|BSD|2873|2834|2,白山|BaiShan|BS|NBS|675|628|2,白城|BaiCheng|BC|DBC|690|628|2,宝鸡|BaoJi|BJ|BJ|3092|3070|2,博尔塔拉|BoErTaLaMengGuZiZhiZhou|BETLMGZZZ|BETLMGZZZ|3429|3396|2,巴音郭楞|BaYinGuoLengMengGuZiZhiZhou|BYGLMGZZZ|BYGLMGZZZ|3433|3396|2,北海|BeiHai|BH|BHY|2357|2302|2,百色|BaiSe|BS|AEB|2390|2302|2,保定|BaoDing|BD|BD|132|39|2,巴中|BaZhong|BZ|BZ|2668|2510|2,滨州|BinZhou|BZ|BZ|1646|1491|2,蚌埠|BangBu|BB|BFU|1147|1125|2,宿迁|SuQian|SQ|SQ|1005|880|2,苏州|SuZhou|SZ|SZV|928|880|2,绍兴|ShaoXing|SX|SX|1070|1012|2,宿州|SuZhou|SZ|SZ|1226|1125|2,十堰|ShiYan|SY|WDS|1885|1861|2,邵阳|ShaoYang|SY|SY|2034|1990|2,韶关|ShaoGuan|SG|SG|2155|2140|2,深圳|Shenzhen|SZ|SZX|2167|2140|2,汕头|ShanTou|ST|SWA|2180|2140|2,朔州|ShuoZhou|SZ|SZ|290|234|2,石嘴山|ShiZuiShan|SZS|SZS|3373|3364|2,三沙|SanSha|SS|SS|3530|2440|2,石家庄|ShiJiaZhuang|SJZ|SJW|40|39|2,沈阳|ShenYang|SY|SHE|500|499|2,四平|SiPing|SP|SP|652|628|2,松原|SongYuan|SY|SY|683|628|2,山南|ShanNan|SN|SN|3011|2988|2,双鸭山|ShuangYaShan|SYS|SYS|766|706|2,商洛|ShangLuo|SL|SL|3189|3070|2,绥化|SuiHua|SH|SH|844|706|2,上海|ShangHaiShi|SHS|SHA|860|3527|2,汕尾|ShanWei|SW|SW|2251|2140|2,三亚|SanYa|SY|SYX|2447|2440|2,遂宁|SuiNing|SN|SN|2584|2510|2,三明|SanMing|SM|SM|1295|1264|2,上饶|ShangRao|SR|SQD|1477|1368|2,三门峡|SanMenXia|SMX|SMX|1789|1666|2,商丘|ShangQiu|SQ|SQ|1812|1666|2,随州|SuiZhou|SZ|SZ|1972|1861|2,杭州|HangZhou|HZ|HGH|1013|1012|2,邯郸|HanDan|HD|HDG|90|39|2,淮安|HuaiAn|HA|HIA|960|880|2,湖州|HuZhou|HZ|HZ|1063|1012|2,黄石|HuangShi|HS|HS|1877|1861|2,衡阳|HengYang|HY|HNY|2020|1990|2,红河|HongHeHaNiZuYiZuZiZhiZhou|HHHNZYZZZZ|HHHNZYZZZZ|2933|2834|2,海西|HaiXiMengGuZuCangZuZiZhiZhou|HXMGZCZZZZ|HTT|3358|3311|2,呼和浩特|HuHeHaoTe|HHHT|HET|377|376|2,呼伦贝尔|HuLunBeiEr|HLBE|HLD|438|376|2,葫芦岛|HuLuDao|HLD|HLD|620|499|2,哈尔滨|HaErBin|HEB|HRB|707|706|2,鹤岗|HeGang|HG|HG|756|706|2,汉中|HanZhong|HZ|HZG|3150|3070|2,海东|HaiDong|HD|XNN|3321|3311|2,海北|HaiBeiCangZuZiZhiZhou|HBCZZZZ|HBCZZZZ|3328|3311|2,黄南|HuangNanCangZuZiZhiZhou|HNCZZZZ|HNCZZZZ|3333|3311|2,怀化|HuaiHua|HH|HH|2110|1990|2,黑河|HeiHe|HH|HEK|836|706|2,衡水|HengShui|HS|HS|221|39|2,惠州|HuiZhou|HZ|HUZ|2234|2140|2,河源|HeYuan|HY|HY|2257|2140|2,哈密|HaMi|HM|HMI|3417|3396|2,贺州|HeZhou|HZ|HZ|2404|2302|2,河池|HeChi|HC|HCJ|2410|2302|2,海口|HaiKou|HK|HAK|2441|2440|2,和田地区|HeTianDiQu|HTDQ|HTN|3471|3396|2,淮北|HuaiBei|HB|HB|1172|1125|2,黄山|HuangShan|HS|TXN|1197|1125|2,菏泽|HeZe|HZ|HZ|1655|1491|2,鹤壁|HeBi|HB|HB|1733|1666|2,花莲|HuaLian|HL|HUN|3549|3512|2,黄冈|HuangGang|HG|HG|1952|1861|2,合肥|HeFei|HF|HFE|1126|1125|2,淮南|HuaiNan|HN|HN|1156|1125|2,宁波|NingBo|NB|NGB|1028|1012|2,南京|NanJing|NJ|NKG|881|880|2,南通|NanTong|NT|NTG|941|880|2,南昌|NanChang|NC|KHN|1369|1368|2,南宁|NanNing|NN|NNG|2303|2302|2,南充|NanChong|NC|NAO|2611|2510|2,那曲|NaQuDiQu|NQDQ|NQDQ|3043|2988|2,内江|NeiJiang|NJ|NJ|2591|2510|2,南平|NanPing|NP|NP|1336|1264|2,宁德|NingDe|ND|ND|1357|1264|2,南阳|NanYang|NY|NNY|1797|1666|2,南投|NanTou|NT|NT|3554|3512|2,温州|WenZhou|WZ|WNZ|1041|1012|2,无锡|WuXi|WX|WUX|896|880|2,潍坊|WeiFang|WF|WEF|1557|1491|2,武汉|WuHan|WH|WUH|1862|1861|2,梧州|WuZhou|WZ|WUZ|2348|2302|2,武威|WuWei|WW|WW|3231|3198|2,吴忠|WuZhong|WZ|WZ|3378|3364|2,乌海|WuHai|WH|WUA|399|376|2,乌兰察布|WuLanChaBu|WLCB|UCB|462|376|2,文山|WenShanZhuangZuMiaoZuZiZhiZhou|WSZZMZZZZ|WSZZMZZZZ|2947|2834|2,渭南|WeiNan|WN|WN|3122|3070|2,乌鲁木齐|WuLuMuQi|WLMQ|URC|3397|3396|2,威海|WeiHai|WH|WEH|1593|1491|2,芜湖|WuHu|WH|WHU|1137|1125|2,徐州|XuZhou|XZ|XUZ|906|880|2,宣城|XuanCheng|XC|XC|1255|1125|2,新余|XinYu|XY|XY|1408|1368|2,湘潭|XiangTan|XT|XT|2013|1990|2,西安|XiAn|XA|XIY|3071|3070|2,新竹|XINZHU|XZ|XZH|3515|3512|2,香港|XiangGang|XG|HKG|3531|3513|2,兴安盟|XingAnMeng|XAM|XAM|475|376|2,西双版纳|XiShuangBanNa|XSBN|JHG|2956|2834|2,咸阳|XianYang|XY|XIY|3106|3070|2,忻州|XinZhou|XZ|WUT|326|234|2,西宁|XiNing|XN|XNN|3312|3311|2,湘西|XiangXiTuJiaZuMiaoZuZiZhiZhou|XXTJZMZZZZ|XXTJZMZZZZ|2131|1990|2,厦门|XiaMen|XM|XMN|1280|1264|2,新乡|XinXiang|XX|XX|1740|1666|2,许昌|XuChang|XC|XC|1774|1666|2,信阳|XinYang|XY|XY|1823|1666|2,新北|XinBei|XB|XB|3557|3512|2,襄阳|XiangYang|XY|XFN|1910|1861|2,孝感|XiaoGan|XG|XG|1933|1861|2,咸宁|XianNing|XN|XN|1964|1861|2,邢台|XingTai|XT|XNT|111|39|2,常州|ChangZhou|CZ|CZX|919|880|2,池州|ChiZhou|CZ|JUH|1249|1125|2,长沙|ChangSha|CS|CSX|1991|1990|2,重庆|ChongQingShi|CQS|CKG|2469|3528|2,楚雄|ChuXiongYiZuZiZhiZhou|CXYZZZZ|CXYZZZZ|2922|2834|2,赤峰|ChiFeng|CF|CIF|404|376|2,朝阳|ChaoYang|CY|CHG|611|499|2,长春|ChangChun|CC|CGQ|629|628|2,昌都|ChangDu|CD|BPX|2999|2988|2,常德|ChangDe|CD|CGD|2059|1990|2,郴州|ChenZhou|CZ|CZ|2084|1990|2,潮州|ChaoZhou|CZ|CCC|2283|2140|2,昌吉|ChangJiHuiZuZiZhiZhou|CJHZZZZ|CJHZZZZ|3421|3396|2,崇左|ChongZuo|CZ|CZ|2431|2302|2,成都|ChengDu|CD|CTU|2511|2510|2,滁州|ChuZhou|CZ|CZ|1206|1125|2,长治|ChangZhi|CZ|CIH|267|234|2,承德|ChengDe|CD|CDE|178|39|2,沧州|CangZhou|CZ|CZ|191|39|2,连云港|LianYunGang|LYG|LYG|951|880|2,六安|LiuAn|LA|LA|1233|1125|2,洛阳|LuoYang|LY|LYA|1693|1666|2,柳州|LiuZhou|LZ|LZH|2317|2302|2,临沧|LinCang|LC|LNJ|2912|2834|2,林芝|LinZhi|LZ|LZY|3062|2988|2,兰州|LanZhou|LZ|LHW|3199|3198|2,吕梁|LvLiang|LL|LLV|361|234|2,辽阳|LiaoYang|LY|LY|587|499|2,辽源|LiaoYuan|LY|LY|660|628|2,丽江|LiJiang|LJ|LJG|2893|2834|2,拉萨|LaSa|LS|LXA|2989|2988|2,陇南|LongNan|LN|LN|3282|3198|2,临夏|LinXiaHuiZuZiZhiZhou|LXHZZZZ|LXHZZZZ|3293|3198|2,廊坊|LangFang|LF|LF|209|39|2,娄底|LouDi|LD|LD|2124|1990|2,临汾|LinFen|LF|LFQ|342|234|2,来宾|LaiBin|LB|LB|2423|2302|2,泸州|LuZhou|ZZ|LZO|2547|2510|2,乐山|LeShan|LS|LS|2598|2510|2,龙岩|LongYan|LY|LY|1348|1264|2,莱芜|LaiWu|LW|LW|1605|1491|2,临沂|LinYi|LY|LYI|1609|1491|2,聊城|LiaoCheng|LC|LC|1636|1491|2,凉山|LiangShanYiZuZiZhiZhou|LSYZZZZ|LSYZZZZ|2713|2510|2,六盘水|LiuPanShui|LPS|LPF|2744|2731|2,漯河|Luohe|ZH|ZH|1782|1666|2,丽水|LiShui|LS|LS|1114|1012|2,盐城|YanCheng|YC|YNZ|970|880|2,扬州|YangZhou|YZ|YTY|981|880|2,鹰潭|YingTan|YT|YT|1412|1368|2,烟台|YanTai|YT|YNT|1543|1491|2,宜宾|YiBin|YB|YBP|2630|2510|2,玉树|YuShuCangZuZiZhiZhou|YSCZZZZ|YSCZZZZ|3351|3311|2,银川|YinChuan|YC|INC|3365|3364|2,营口|YingKou|YK|YKH|570|499|2,玉溪|YuXi|YX|YX|2862|2834|2,延边|YanBianChaoXianZuZiZhiZhou|YBCXZZZZ|YBCXZZZZ|697|628|2,运城|YunCheng|YC|YCU|311|234|2,延安|YanAn|YA|ENY|3135|3070|2,榆林|YuLin|YL|UYN|3163|3070|2,伊春|YiChun|YC|LDS|787|706|2,岳阳|YueYang|YY|YY|2048|1990|2,益阳|YiYang|YY|YY|2076|1990|2,永州|YongZhou|YZ|LLF|2097|1990|2,阳江|YangJiang|YJ|YJ|2265|2140|2,云浮|YunFu|YF|YF|2295|2140|2,玉林|YuLin|YL|YL|2382|2302|2,伊犁|YiLiHaSaKeZiZhiZhou|YLHSKZZZ|YLHSKZZZ|3480|3396|2,阳泉|YangQuan|YQ|YQ|260|234|2,宜春|YiChun|YC|YIC|1452|1368|2,雅安|YaAn|YA|YA|2658|2510|2,宜兰|YiLan|YL|YL|3558|3512|2,云林|YunLin|YL|YL|3559|3512|2,宜昌|YiChang|YC|YIH|1895|1861|2,镇江|ZhenJiang|ZJ|ZJ|989|880|2,舟山|ZhouShan|ZS|HSN|1097|1012|2,枣庄|ZaoZhuang|ZZ|ZZ|1528|1491|2,驻马店|ZhuMaDian|ZMD|ZMD|1847|1666|2,株洲|ZhuZhou|ZZ|ZZ|2002|1990|2,珠海|ZhuHai|ZH|ZUH|2175|2140|2,张掖|ZhangYe|ZY|YZY|3237|3198|2,中卫|ZhongWei|ZW|ZHY|3391|3364|2,昭通|ZhaoTong|ZT|ZAT|2880|2834|2,张家界|ZhangJiaJie|ZJJ|DYG|2070|1990|2,湛江|ZhanJiang|ZJ|ZHA|2205|2140|2,肇庆|ZhaoQing|ZQ|ZQ|2224|2140|2,中山|ZhongShan|ZS|ZS|2282|2140|2,自贡|ZiGong|ZG|ZG|2532|2510|2,漳州|ZhangZhou|ZZ|ZZ|1323|1264|2,淄博|ZiBo|ZB|ZB|1518|1491|2,资阳|ZiYang|ZY|ZY|2674|2510|2,张家口|ZhangJiaKou|ZJK|ZQZ|159|39|2,郑州|ZhengZhou|ZZ|CGO|1667|1666|2,遵义|ZunYi|ZY|ZYI|2749|2731|2,周口|ZhouKou|ZK|ZK|1835|1666|2,彰化|ZhangHua|ZH|ZH|3560|3512|2,泰州|TaiZhou|TZ|TZ|997|880|2,台州|TaiZhou|TZ|TZ|1103|1012|2,天津|TianJinShi|TJS|TSN|20|3529|2,铜仁|TongRen|TR|TEN|2783|2731|2,天水|TianShui|TS|THQ|3222|3198|2,塔城地区|TaChengDiQu|TCDQ|TCG|3491|3396|2,台北|TAIBEI|TB|TSA|3518|3512|2,台南|TAINAN|TN|TNN|3520|3512|2,台东|TAIDONG|TD|TSA|3521|3512|2,台中|TAIZHONG|TZ|RMQ|3522|3512|2,通辽|TongLiao|TL|TGO|418|376|2,铁岭|TieLing|TL|TL|602|499|2,唐山|TangShan|TS|TVS|65|39|2,通化|TongHua|TH|TNH|666|628|2,铜川|TongChuan|TC|TC|3086|3070|2,吐鲁番|TuLuFan|TLF|TLQ|3413|3396|2,太原|TaiYuan|TY|TYN|235|234|2,铜陵|TongLing|TL|TL|1178|1125|2,泰安|TaiAn|TA|TA|1585|1491|2,桃园|TaoYuan|TY|TPE|3556|3512|2,嘉兴|JiaXing|JX|JX|1054|1012|2,金华|JinHua|JH|JH|1078|1012|2,景德镇|JingDeZhen|JDZ|JDZ|1380|1368|2,九江|JiuJiang|JJ|JIU|1393|1368|2,济宁|JiNing|JN|JNG|1571|1491|2,嘉峪关|JiaYuGuan|JYG|JGN|3209|3198|2,金昌|JinChang|JC|JIC|3211|3198|2,嘉义|JIAYI|JY|CYI|3523|3512|2,锦州|JinZhou|JZ|JNZ|561|499|2,吉林|JiLin|JL|JIL|641|628|2,晋城|JinCheng|JC|JC|282|234|2,晋中|JinZhong|JZ|JZ|298|234|2,鸡西|JiXi|JX|JXA|745|706|2,佳木斯|JiaMuSi|JMS|JMU|806|706|2,酒泉|JiuQuan|JQ|CHW|3254|3198|2,江门|JiangMen|JM|JM|2196|2140|2,揭阳|JieYang|JY|SWA|2288|2140|2,吉安|JiAn|JA|KNC|1437|1368|2,济南|JiNan|JN|TNA|1492|1491|2,焦作|JiaoZuo|JZ|JZ|1754|1666|2,基隆|JiLong|JL|JL|3550|3512|2,金门|JinMen|JM|KNH|3551|3512|2,荆门|JingMen|JM|JM|1926|1861|2,荆州|JingZhou|JZ|SHS|1942|1861|2,衢州|QuZhou|ZZ|JUZ|1089|1012|2,黔西南|QianXiNanBuYiZuMiaoZuZiZhiZhou|QXNBYZMZZZZ|QXNBYZMZZZZ|2795|2731|2,黔南|QianNanBuYiZuMiaoZuZiZhiZhou|QNBYZMZZZZ|QNBYZMZZZZ|2821|2731|2,曲靖|QuJing|QJ|QJ|2851|2834|2,齐齐哈尔|QiQiHaEr|QQHE|NDG|727|706|2,秦皇岛|QinHuangDao|QHD|BPE|81|39|2,庆阳|QingYang|QY|IQN|3263|3198|2,七台河|QiTaiHe|QTH|QTH|818|706|2,清远|QingYuan|QY|QY|2271|2140|2,钦州|QinZhou|QZ|QZ|2369|2302|2,泉州|QuanZhou|QZ|JJN|1309|1264|2,青岛|QingDao|QD|TAO|1504|1491|2,阜阳|FuYang|FY|FUG|1216|1125|2,佛山|FoShan|FS|FUO|2189|2140|2,抚顺|FuShun|FS|FS|536|499|2,阜新|FuXin|FX|FX|578|499|2,防城港|FangChengGang|FCG|FCG|2363|2302|2,福州|FuZhou|FZ|FOC|1265|1264|2,抚州|FuZhou|FZ|FZ|1464|1368|2,萍乡|PingXiang|PX|PX|1386|1368|2,平顶山|PingDingShan|PDS|PDS|1710|1666|2,普洱|PuEr|PE|SYM|2900|2834|2,屏东|PINGDONG|PD|PIF|3524|3512|2,盘锦|PanJin|PJ|PJ|596|499|2,平凉|PingLiang|PL|PL|3245|3198|2,攀枝花|PanZhiHua|PZH|PZI|2540|2510|2,莆田|PuTian|PT|PT|1288|1264|2,濮阳|PuYang|ZY|ZY|1766|1666|2,澎湖|PengHu|PH|MZG|3555|3512|2,赣州|GanZhou|GZ|KOW|1417|1368|2,桂林|GuiLin|GL|KWL|2329|2302|2,广安|GuangAn|GA|GA|2642|2510|2,固原|GuYuan|GY|GYU|3384|3364|2,高雄|GAOXIONG|GX|KHH|3519|3512|2,甘南|GanNanCangZuZiZhiZhou|GNCZZZZ|GNCZZZZ|3302|3198|2,广州|GuangZhou|GZ|CAN|2141|2140|2,贵港|GuiGang|GG|GG|2375|2302|2,广元|GuangYuan|GY|GYS|2575|2510|2,甘孜|GanZiCangZuZiZhiZhou|GZCZZZZ|GZCZZZZ|2694|2510|2,贵阳|GuiYang|GY|KWE|2732|2731|2,东营|DongYing|DY|DOY|1536|1491|2,儋州|DanZhou|ZZ|ZZ|2452|2440|2,大同|DaTong|DT|DAT|247|234|2,达州|DaZhou|DZ|DZ|2649|2510|2,大连|DaLian|DL|DLC|515|499|2,丹东|DanDong|DD|DDG|553|499|2,大理|DaLiBaiZuZiZhiZhou|DLBZZZZ|DLBZZZZ|2960|2834|2,迪庆|DiQingZangZuZiZhiZhou|DQCZZZZ|DQCZZZZ|2984|2834|2,大庆|DaQing|DQ|DQA|776|706|2,定西|DingXi|DX|DX|3273|3198|2,大兴安岭|DaXingAnLingDiQu|DXALDQ|JGD|856|706|2,东莞|DongWAN|DZ|DZ|2281|2140|2,德阳|DeYang|DY|DY|2556|2510|2,德州|DeZhou|DZ|DZ|1623|1491|2,安阳|AnYang|AY|AYN|1722|1666|2,安顺|AnShun|AS|AVA|2765|2731|2,阿里|ALiDiQu|ALDQ|NGQ|3054|2988|2,阿勒泰|ALeTaiDiQu|ALTDQ|AAT|3499|3396|2,阿拉善盟|ALaShanMeng|ALSM|ALSM|495|376|2,鞍山|AnShan|AS|AOG|527|499|2,安康|AnKang|AK|AKA|3177|3070|2,阿克苏|AKeSuDiQu|AKSDQ|AKU|3443|3396|2,安庆|AnQing|AQ|AQG|1184|1125|2,阿坝|ABaCangZuQiangZuZiZhiZhou|ABCZQZZZZ|AHJ|2680|2510|2,澳门|Aomen|AM|MFM|3545|3514|2,眉山|MeiShan|MS|MS|2622|2510|2,牡丹江|MuDanJiang|MDJ|MDG|824|706|2,茂名|MaoMing|MM|MM|2216|2140|2,梅州|MeiZhou|MZ|MZ|2241|2140|2,绵阳|MianYang|MY|MIG|2564|2510|2,马鞍山|MaAnShan|MAS|MAS|1164|1125|2,马祖|MaZhu|MZ|MFK|3552|3512|2,苗栗|MiaoLi|ML|ML|3553|3512|2,鄂尔多斯|EErDuoSi|EEDS|DSN|428|376|2,鄂州|EZhou|EZ|EZ|1921|1861|2,恩施|EnShiTuJiaZuMiaoZuZiZhiZhou|ESTJZMZZZZ|ESTJZMZZZZ|1976|1861|2,昆明|KunMing|KM|KMG|2835|2834|2,克拉玛依|KeLaMaYi|KLMY|KRY|3407|3396|2,克孜勒苏柯尔克孜|KeZiLeSuKeErKeZiZiZhiZhou|KZLSKEKZZZZ|KZLSKEKZZZZ|3453|3396|2,喀什地区|KaShiDiQu|KSDQ|KHG|3458|3396|2,开封|KaiFeng|KF|KF|1681|1666|2,日喀则|RikaZe|RKZ|RKZ|3024|2988|2,日照|RiZhao|RZ|RIZ|1599|1491|2";
    //机票城市
    var fcity = "邯郸|HANDAN|HD|HDG|96|90|3,阿勒泰|ALETAY|ALT|AAT|3500|3499|3,安康|ANKANG|AK|AKA|3177|3070|2,安庆|ANQING|AQ|AQG|1184|1125|2,鞍山|ANSHAN|AS|AOG|527|499|2,安阳|ANYANG|AY|AYN|1722|1666|2,保山|BAOSHAN|BS|BSD|2873|2834|2,包头|BAOTOU|BT|BAV|388|376|2,北海|BEIHAI|BH|BHY|2357|2302|2,北京|BEIJING|BJS|BJS|1|3526|2,北京(首都国际机场)|BEIJINGSHOUDU|BJSD|PEK|1|3526|2,北京(南苑机场)|BEIJINGNANYUAN|BJNY|NAY|1|3526|2,长春|CHANGCHUN|CC|CGQ|629|628|2,常德|CHANGDE|CD|CGD|2059|1990|2,长沙|CHANGSHA|CS|CSX|1991|1990|2,长治|CHANGZHI|CZ|CIH|267|234|2,常州|CHANGZHOU|CZ|CZX|919|880|2,朝阳|CHAOYANG|CY|CHG|611|499|2,固原|GUYUAN|GY|GYU|3384|3364|2,赤峰|CHIFENG|CF|CIF|404|376|2,重庆|CHONGQING|CQ|CKG|2469|3528|2,大理|DALI|DL|DLU|2961|2960|3,大连|DALIAN|DL|DLC|515|499|2,大同|DATONG|DT|DAT|247|234|2,达州|DAZHOU|DX|DAX|2649|2510|2,鄂尔多斯|EERDUOSI|EEDS|DSN|428|376|2,敦煌|DUNHUANG|DH|DNH|3262|3254|3,恩施|ENSHI|ES|ENH|1977|1976|3,佛山|FOSHAN|FS|FUO|2189|2140|2,富蕴|FUYUN|FY|FYN|3502|3499|3,福州|FUZHOU|FZ|FOC|1265|1264|2,赣州|GANZHOU|GZ|KOW|1417|1368|2,广元|GUANGYUAN|GY|GYS|2575|2510|2,广州|GUANGZHOU|GZ|CAN|2141|2140|2,桂林|GUILIN|GL|KWL|2329|2302|2,贵阳|GUIYANG|GY|KWE|2732|2731|2,海口|HAIKOU|HK|HAK|2441|2440|2,海拉尔|HAILAR|HLE|HLD|440|438|4,哈密|HAMI|HM|HMI|3417|3396|2,杭州|HANGZHOU|HZ|HGH|1013|1012|2,汉中|HANZHONG|HZ|HZG|3150|3070|2,哈尔滨|HAERBIN|HEB|HRB|707|706|2,合肥|HEFEI|HF|HFE|1126|1125|2,黑河|HEIHE|HH|HEK|836|706|2,衡阳|HENGYANG|HY|HNY|2027|2020|3,呼和浩特|HUHEHAOTE|HHHT|HET|377|376|2,黄山|HUANGSHAN|HS|TXN|1197|1125|2,台州|TAIZHOU|TZ|HYN|1103|1012|2,徽州|HUIZHOU|HZ|HUZ|1201|1197|4,佳木斯|JIAMUSI|JMS|JMU|806|706|2,吉安|JIAN|JA|KNC|1441|1437|3,嘉峪关|JIAYUGUAN|JYG|JGN|3209|3198|2,吉林|JILIN|JL|JIL|641|628|2,济南|JINAN|JN|TNA|1492|1491|2,景德镇|JINGDEZHEN|JDZ|JDZ|1380|1368|2,济宁|JINING|JN|JNG|1571|1491|2,锦州|JINZHOU|JZ|JNZ|561|499|2,九江|JIUJIANG|JJ|JIU|1397|1393|3,酒泉|JIUQUAN|JQ|CHW|3254|3198|2,喀什|KASHI|KS|KHG|3459|3458|3,克拉玛依|KELAMAYI|KLMY|KRY|3407|3396|2,库尔勒|KUERLE|KEL|KRL|3434|3433|3,昆明|KUNMING|KM|KMG|2835|2834|2,库车|KUCHE|KC|KCA|3446|3443|3,兰州|LANZHOU|LZ|LHW|3199|3198|2,拉萨|LASHA|LS|LXA|2989|2988|2,连云港|LIANYUNGANG|LYG|LYG|951|880|2,丽江|LIJIANG|LJ|LJG|2893|2834|2,临沂|LINYI|LY|LYI|1609|1491|2,柳州|LIUZHOU|LZ|LZH|2317|2302|2,洛阳|LUOYANG|LY|LYA|1693|1666|2,泸州|LUZHOU|LZ|LZO|2547|2510|2,梅州|MEIZHOU|MZ|MXZ|2244|2241|3,绵阳|MIANYANG|MY|MIG|2564|2510|2,牡丹江|MUDANJIANG|MDJ|MDG|824|706|2,南昌|NANCHANG|NC|KHN|1369|1368|2,南充|NANCHONG|NC|NAO|2611|2510|2,南京|NANJING|NJ|NKG|881|880|2,南宁|NANNING|NN|NNG|2303|2302|2,南通|NANTONG|NT|NTG|941|880|2,南阳|NANYANG|NY|NNY|1797|1666|2,宁波|NINGBO|NB|NGB|1028|1012|2,且末|QIEMO|QM|IQM|3438|3433|3,青岛|QINGDAO|QD|TAO|1504|1491|2,庆阳|QINGYANG|QY|IQN|3263|3198|2,齐齐哈尔|QIQIHAER|QQHE|NDG|727|706|2,衢州|QUZHOU|HZ|JUZ|1089|1012|2,三亚|SANYA|SY|SYX|2447|2440|2,上海|SHANGHAI|SHS|SHS|860|3527|2,上海(虹桥国际机场)|SHANGHAIHONGQIAO|SHHQ|SHA|860|3527|2,上海(浦东国际机场)|SHANGHAIPUDONG|SHPD|PVG|860|3527|2,揭阳|JIEYANG|JY|SWA|2288|2140|2,沈阳|SHENYANG|SY|SHE|500|499|2,深圳|SHENZHEN|SZ|SZX|2167|2140|2,石家庄|SHIJIAZHUANG|SJZ|SJW|40|39|2,苏州|SUZHOU|SZ|SZV|928|880|2,松原|SONGYUAN|SY|YSQ|683|628|2,塔城|TACHENG|TC|TCG|3492|3491|3,太原|TAIYUAN|TY|TYN|235|234|2,天津|TIANJIN|TJ|TSN|20|3529|2,通化|TONGHUA|TH|TNH|670|666|3,通辽|TONGLIAO|TL|TGO|418|376|2,乌兰浩特|WULANHAOTE|WLHT|HLH|476|475|3,乌鲁木齐|WULUMUQI|WLMQ|URC|3397|3396|2,万州|WANZHOU|WZ|WXN|2471|2469|4,潍坊|WEIHUANG|WF|WEF|1557|1491|2,威海|WEIHAI|WH|WEH|1593|1491|2,温州|WENZHOU|WZ|WNZ|1041|1012|2,武汉|WUHAN|WH|WUH|1862|1861|2,武夷山|WUYISHAN|WYS|WUS|1345|1336|3,梧州|WUZHOU|WZ|WUZ|2348|2302|2,厦门|XIAMEN|XM|XMN|1280|1264|2,西安|XIAN|XA|XIY|3071|3070|2,西昌|XICHANG|XC|XIC|2714|2713|3,锡林浩特|XILINHAOTE|XLHT|XIL|484|482|3,西宁|XINING|XN|XNN|3312|3311|2,西双版纳|XISHUANGBANNA|XSBN|JHG|2956|2834|2,徐州|XUZHOU|XZ|XUZ|906|880|2,延安|YANAN|YA|ENY|3135|3070|2,盐城|YANCHENG|YC|YNZ|970|880|2,延吉|YANJI|YJ|YNJ|698|697|3,烟台|YANTAI|YT|YNT|1543|1491|2,宜宾|YIBIN|YB|YBP|2630|2510|2,宜昌|YICHANG|YC|YIH|1895|1861|2,银川|YINCHUAN|YC|INC|3365|3364|2,伊宁|YINING|YN|YIN|3481|3480|3,义乌|YIWU|YW|YIW|1086|1078|3,榆林|YULIN|YL|UYN|3163|3070|2,张家界|ZHANGJIAJIE|ZJJ|DYG|2070|1990|2,昭通|ZHAOTONG|ZT|ZAT|2880|2834|2,郑州|ZHENGZHOU|ZZ|CGO|1667|1666|2,舟山|ZHOUSHAN|ZS|HSN|1097|1012|2,九寨沟|JIUZHAIGOU|JZG|JZH|2685|2680|3,无锡|WUXI|WX|WUX|896|880|2,丹东|DANDONG|DD|DDG|553|499|2,珠海|ZHUHAI|ZH|ZUH|2175|2140|2,襄阳|XIANGYANG|XY|XFN|1910|1861|2,满洲里|MANZHOULI|MZL|NZH|448|438|3,运城|YUNCHENG|YC|YCU|311|234|2,东营|DONGYING|DY|DOY|1536|1491|2,芒市|MANGSHI|MS|LUM|2973|2973|3,攀枝花|PANZHIHUA|PZH|PZI|2540|2510|2,黎平|LIPING|LP|HZH|2815|2804|3,安顺|ANSHUN|AS|AVA|2765|2731|2,兴义|XINGYI|XY|ACX|2795|2795|3,铜仁|TONGREN|TR|TEN|2783|2731|2,湛江|ZHANJIANG|ZJ|ZHA|2205|2140|2,迪庆|DIQING|DQ|DIG|2985|2984|3,乌海|WUHAI|WH|WUA|399|376|2,思茅|SIMAO|SM|SYM|2902|2900|4,林芝|LINZHI|LZ|LZY|3063|3062|4,井冈山|JINGGANGSHAN|JGS|JGS|1451|1437|3,阿克苏|AKESU|AKS|AKU|3444|3443|3,和田|HETIAN|HT|HTN|3473|3471|3,临沧|LINCANG|LC|LNJ|2912|2834|2,文山|WENSHAN|WS|WNH|2948|2947|3,泉州|QUANZHOU|QZ|JJN|1309|1264|2,新源|XINYUAN|XY|NLT|3480|3480|3,格尔木|GEERMU|GEM|GOQ|3359|3358|3,百色|BAISE|BS|AEB|2390|2302|2,芷江|ZHIJIANG|ZJ|HJJ|2120|2110|3,漠河|MOHE|MH|OHE|856|856|3,阜阳|FUYANG|FY|FUG|1216|1125|2,永州|YONGZHOU|YZ|LLF|2097|1990|2,腾冲|TENGCHONG|TC|TCZ|2877|2873|3,白山|CHANGBAISHAN|CBS|NBS|675|628|2,康定|KANGDING|KD|KGT|2695|2694|3,天水|TIANSHUI|TS|THQ|3222|3198|2,伊春|YICHUN|YC|LDS|787|706|2,大庆|DAQING|DQ|DQA|776|706|2,昌都|CHANGDU|CD|BPX|2999|2988|2,玉树|YUSHU|YS|YUS|3352|3351|3,鸡西|JIXI|JX|JXA|745|706|2,中卫|ZHONGWEI|ZW|ZHY|3391|3364|2,成都|CHENGDU|CD|CTU|2511|2510|2,淮安|HUAIAN|HA|HIA|960|880|2,二连浩特|ERLIANHAOTE|ELHT|ERL|483|482|3,博乐|BOLE|BL|BPL|3430|3429|3,唐山|TANGSHAN|TS|TVS|65|39|2,黔江|QIANJIANG|QJ|JIQ|2484|2469|4,布尔津|BUERJIN|BEJ|KJI|3501|3499|3,日喀则|RIKAZE|RKZ|RKZ|3025|3024|4,遵义|ZUNYI|ZY|ZYI|2749|2731|2,加格达奇|JIAGEDAQI|JGDQ|JGD|438|376|2,阿拉善左旗|ALASHANZUOQI|ALSZQ|AXF|496|495|3,扬州|YANGZHOU|YZ|YTY|981|880|2,毕节|BIJIE|BJ|BFJ|2773|2731|2,香港|XIANGGANG|XG|HKG|3531|3513|2,秦皇岛|QinHuangDao|QHD|BPE|81|39|2,沧源|CANGYUAN|CY|CWJ|2921|2912|3,白城|BaiCheng|BC|DBC|690|628|2,稻城|DAOCHENG|DC|DCY|2711|2694|3,额济纳旗|EJINAQI|EJNQ|EJN|498|495|3,抚远|FUYUAN|FY|FYJ|815|806|3,果洛|GUOLUO|GL|GMQ|3344|3311|2,甘南|GANNAN|GN|GXH|3302|3198|2,神农架|SHENNONGJIA|SNJ|HPG|1989|1985|3,花土沟|HUATUGOU|HTG|HTT|3358|3311|2,德令哈|DELINGHA|DLH|HXD|3360|3358|3,池州|CHZHOU|CZ|JUH|1249|1125|2,凯里|KAILI|KL|KJH|2805|2804|3,龙岩|LONGYAN|LY|LCX|1348|1264|2,临汾|LINFEN|LF|LFQ|342|234|2,荔波|LIBO|LB|LLB|2824|2821|3,吕梁|LVLIANG|LL|LLV|361|234|2,六盘水|LIUPANSHUI|LPS|LPF|2744|2731|2,阿里|ALI|AL|NGQ|3054|2988|2,宁蒗|NINGLANG|NL|NLH|2899|2893|3,阿拉善右旗|ALASHANYOUQI|ALSYQ|RHT|497|495|3,日照|RIZHAO|RZ|RIZ|1599|1491|2,巴彦淖尔|BAYANZHUOER|BYZE|RLK|453|376|2,三明|SANMING|SM|SQJ|1295|1264|2,吐鲁番|TULUFAN|TLF|TLQ|3413|3396|2,乌兰察布|WULANCHABU|WLCB|UCB|462|376|2,十堰|SHIYAN|SY|WDS|1885|1861|2,忻州|XINZHOU|XZ|WUT|326|234|2,宜春|YICHUN|YC|YIC|1452|1368|2,阿尔山|AERSHAN|AES|YIE|477|475|3,营口|YINGKOU|YK|YKH|570|499|2,张家口|ZHANGJIAKOU|ZJK|ZQZ|159|39|2,琼海|QIONGHAI|QH|BAR|2451|2449|3,金昌|JINCHANG|JC|JIC|3211|3198|2,石河子|SHIHEZI|SHZ|SHF|3508|3507|3,河池|HECHI|HC|HCJ|2410|2302|2,扎兰屯|ZHALANTUN|ZLT|NZL|450|438|3,张掖|ZHANGYE|ZY|YZY|3237|3198|2,阿坝|ABA|AB|AHJ|2680|2510|2,澜沧|LANCANG|LC|JMJ|2910|2900|3,莎车|SHACHE|SC|QSZ|3464|3458|3,霍林郭勒|HUOLINGUOLE|HLGL|HUO|427|418|3,长海|CHANGHAI|CH|CNI|523|515|3,承德|CHENGDE|CD|CDE|178|39|2,惠州|HUIZHOU|HZ|HUZ|2234|2140|2";
    if (option.type == 0) {
        //机票
        this.ocityList = fcity.split(",");
    } else {
        //酒店
        this.ocityList = hotelcity.split(",");
    }
    $.each(this.ocityList, function (i, e) {
        var le = e.split("|")[1].substring(0, 1);
        if (oletter.indexOf(le) == -1) {
            oletter.push(le);
            cityObj[le] = [];
            cityObj[le].push(e);
        } else {
            cityObj[le].push(e);
        }
    });
    this.letters = Array.intersect(oletter, yletters);
    this.cityObjL = objKeySort(cityObj);
}
citySelect.prototype={
    init:function () {
        if ($(".citySelectDom" + this.option.DomName).length > 0) {
            this._slider(".citySelectDom" + this.option.DomName);
        }else {
            $("body").append("<div class='citySelectDom citySelectDom" + this.option.DomName + "' style='position: absolute;top: 0;left: 0;right: 0;bottom: 0; z-index: 999;background: #eeeeee'></div>");
            var ohtml = '<div  class="showLetter"><span>A</span></div>' +
                '<div class="allContent disFlex " data-id="" cityNa="">\n' +
                '        <div class="cityMain flex1">\n' +
                '            <div class="searchCity disFlex">\n' +
                '                <input class="serchInput" type="text" placeholder="请输入搜索条件">\n' +
                                 '<p class="cancelBtn" style="\n' +
                '    width: 0.5rem;\n' +
                '    height: 0.34rem;\n' +
                '    line-height: 0.34rem;\n' +
                '    text-align:  center;\n' +
                '    background: #fff;\n' +
                '    color: #2577e3;\n' +
                '    border-left: 1px solid #ccc;\n' +
                '">取消</p>' +
                '            </div>\n' +
                '            <div class="staticCity">' +
                '                 <div class="smallTitle">定位城市</div>\n' +
                '                 <div class="mapCityWrap">\n' +
                '                     <p class="mapCity smallP" >请选择</p>\n' +
                '                 </div>' +
                '                 <div class="smallTitle">热门城市</div>' +
                '                 <div class="hotCityWrap disFlex"></div>' +
                '                 <div class="cityList allcity"></div>' +
                '            </div>' +
                '            <div class="cityList ifHide searchResault">\n' +
                '                 <div class="oneCityList searchRList">\n' +
                '                 </div>\n' +
                '            </div>\n' +
                '        </div>' +
                '        <div class="letterList">\n' +
                '             <ul class="letter">\n' +
                '             </ul>\n' +
                '        </div>' +
                '</div>';

            $(".citySelectDom" + this.option.DomName).append(ohtml);
            this.addCityData();
        }
        this.staticFn();
        this.loactionCity();
    },
    addCityData: function () {
        var me = this;
        /*热门城市填充*/
        for (var i = 0; i < 20; i++) {
            var city = this.hotcity[i].split("-")[0];
            if (this.option.type == 0) {
                //机票
                $(".citySelectDom" +me.option.DomName).find(".hotCityWrap").append('<p class="hotCity smallP city" data-id="' + this.hotcity[i].split("-")[1]+ '">' +city + '</p>');
            } else {
                //酒店
                $(".citySelectDom" +me.option.DomName).find(".hotCityWrap").append('<p class="hotCity smallP city" data-id="' +this.hotcity[i].split("-")[2]+ '">' +city + '</p>');
            }
        }
        /*拼音首字母填充*/
        for (var j = 0; j < this.letters.length; j++) {
            var letter = this.letters[j];
            $(".citySelectDom" +me.option.DomName).find(".letter").append('<li><a href="javascript:;">' +letter + '</a></li>');
        }
        /*城市列表填充*/
        for (var j = 0; j < this.letters.length; j++) {
            var letter = this.letters[j];
            var ohtml = '<div class="oneCityList">\n';
            for (key in this.cityObjL) {
                ohtml += '<div class="listTitle" name="' + key + '1">' + key + '</div>';
                var someCityList = this.cityObjL[key];
                for (var m = 0; m < someCityList.length; m++) {
                    var cityName = someCityList[m].split("|")[0];
                    if (this.option.type == 0) {
                        //机票
                        var threeCode = someCityList[m].split("|")[3];
                        ohtml += '<p class="oneCity city" data-id="' + threeCode + '">' + cityName + '</p>';
                    } else {
                        //酒店
                        var idCode = someCityList[m].split("|")[4];
                        ohtml += '<p class="oneCity city" data-id="' + idCode + '">' + cityName + '</p>';
                    }
                }
            }
            ohtml += '</div>';
            $(".allcity").append(ohtml)
        }
    },
    _slider: function (ele) {
        $(ele).toggle();
    },
    _callback: function () {
        var me = this;
        var cityNameme = $(".citySelectDom" +me.option.DomName).find(".allContent").attr("cityNa");
        var dataId = $(".citySelectDom" +me.option.DomName).find(".allContent").attr("data-id");
        if (me.option.callback && $.type(me.option.callback) === "function") {
            var promise = new Promise(function (resolve) {
                if (true) {
                    resolve(cityNameme, dataId);
                }
            });
            promise.then(me.option.callback(cityNameme, dataId))
        }
    },
    staticFn: function () {
        var me = this;
        var thisLetter = $(".citySelectDom" +me.option.DomName).find('.letter');
        $(".citySelectDom" +me.option.DomName).on('click', '.letter a', function () {
            var s = $(this).html();
            $(window).scrollTop($(".citySelectDom" + me.option.DomName).find(".listTitle[name='" + s + "1']").offset().top - $(".citySelectDom" + me.option.DomName).find(".searchCity").offset().top - $(".citySelectDom" + me.option.DomName).find(".hotCityWrap").offset().top);
            $(".citySelectDom" +me.option.DomName).find(".showLetter span").html(s);
            $(".citySelectDom" +me.option.DomName).find(".showLetter").show().delay(500).hide(0);
        });
        var letterHei = [];
        $.each(thisLetter.find("a"), function (i, e) {
            letterHei.push($(e).offset().top);
        });
        thisLetter.on('touchstart', function (e) {
            e.stopPropagation();
            var touch = e.originalEvent.targetTouches[0];
            yh1 = touch.pageY;
        }).on('touchmove', function (e) {
            e.stopPropagation();
            var touch = e.originalEvent.targetTouches[0];
            var pos = { "x": touch.pageX, "y": touch.pageY };
            var x = pos.x, y = pos.y;
            var width = thisLetter.find("a").width();
            var height = thisLetter.find("a").height();
            $(this).find("a").each(function (i, item) {
                var offset = $(item).offset();
                var left = offset.left, top = offset.top;
                if (x > left && x < (left + width) && y > top && y < (top + height)) {
                    $(item).click();
                }
            });
        });
        //中间的标记显示
        $('body').on('onMouse', '.showLetter span', function () {
             $(".citySelectDom" +me.option.DomName).find(".showLetter").show().delay(500).hide(0);
        });
        //点击城市
         $(".citySelectDom" +me.option.DomName).find(".city").on("click", function (e) {
            e.stopPropagation();
            var dataId = $(this).attr("data-id");
            var cityName = $(this).text();
            if (me.flag) {
            me.flag = false;
                 $(".citySelectDom" +me.option.DomName).find(".allContent").attr("cityNa", cityName);
                 $(".citySelectDom" +me.option.DomName).find(".allContent").attr("data-id", dataId);
                 $(".citySelectDom" +me.option.DomName).find(".acitveCity").removeClass("acitveCity");
                $(this).addClass("acitveCity")
                $(".citySelectDom" + me.option.DomName).hide();
                $(window).scrollTop(0);
                me._callback();
            }
            me.flag = true;

        })
        //点击搜索
         $(".citySelectDom" + me.option.DomName).find(".serchInput").bind('input propertychange', function (e) {
            $(this).attr("placeholder","");
                e.stopPropagation();
             $(".citySelectDom" +me.option.DomName).find(".searchResault").show();
             $(".citySelectDom" +me.option.DomName).find(".staticCity,.letterList").hide();
        });

         $(".citySelectDom" +me.option.DomName).find(".cancelBtn").on("click", function (e) {
            e.stopPropagation();
             $(".citySelectDom" +me.option.DomName).find(".searchResault").hide();
             $(".citySelectDom" +me.option.DomName).find(".staticCity,.letterList").show();
             $(".citySelectDom" +me.option.DomName).find(".serchInput").val("");
             $(".citySelectDom" +me.option.DomName).find(".searchRList").empty();
        })

        //搜索失去输入框变化时绑定事件
         $(".citySelectDom" +me.option.DomName).find(".serchInput").bind('input propertychange', function () {

            if ($(this).val() == "") {
                 $(".citySelectDom" +me.option.DomName).find(".searchResault").hide();
                 $(".citySelectDom" +me.option.DomName).find(".staticCity,.letterList").show();
            } else {
                var _datatype = "Hotel";
                if (me.option.type == 0) _datatype = "Air";
                var data = $(this).val().replace(/^\s+|\s+$/g, '');
                var _CityId = "";
                //if (this.IsKeyWord) _CityId = $(that.input2).attr("src");
                $.ajax({
                    url: '/Home/Index',
                    data: { DataStr: data, DataType: _datatype, CityId: _CityId },
                    type: 'post',
                    success: function (res) {
                        if (res.Result.length > 0) {
                            var searchData = ' <div class="listTitle" id=" ">搜索结果</div>';
                            $.each(res.Result, function (i, e) {
                                if (me.option.type == 0) {
                                    //机票
                                    searchData += '<p class="oneCity searchCitys" data-id="' + e.ThreeCode + '" data-name="' + e.Name + '">' + e.Title + '(' + e.ThreeCode + '/' + e.Name + ')' + '</p>';
                                } else {
                                    //酒店
                                    searchData += '<p class="oneCity  searchCitys" data-id="' + e.split("|")[4]+ '">' + e.split("|")[0]+ ',' + e.split("|")[1]+ ',' + e.split("|")[2]+ ',' +e.split("|")[3]+ '</p>';
                                }
                            })
                        } else {
                            var searchData = ' <div class="listTitle" id=" ">暂无搜索结果...</div>';
                        }
                         $(".citySelectDom" +me.option.DomName).find(".searchRList").empty();
                         $(".citySelectDom" +me.option.DomName).find(".searchRList").append(searchData);

                         $(".citySelectDom" + me.option.DomName).find(".searchCitys").on("click", function (e) {
                            e.stopPropagation();
                            var dataId = $(this).attr("data-id");
                            var cityName = $(this).attr("data-name");
                            if (me.flag) {
                                me.flag = false;
                                 $(".citySelectDom" +me.option.DomName).find(".allContent").attr("cityNa", cityName);
                                 $(".citySelectDom" +me.option.DomName).find(".allContent").attr("data-id", dataId);
                                 $(".citySelectDom" +me.option.DomName).find(".acitveCity").removeClass("acitveCity");
                                 $(this).addClass("acitveCity")
                                $(".citySelectDom" +me.option.DomName).hide();
                                $(window).scrollTop(0);
                                me._callback();
                            }
                            me.flag = true;

                        })
                    }
                });

            }
        })
        //点击定位
         $(".citySelectDom" +me.option.DomName).find(".mapCity").on("click", function (e) {
            e.stopPropagation();
            if ($(this).text() == "请选择") {
                me.loactionCity();
            }else{
                var  locity=$(this).text();
                $.each(me.ocityList,function (i,e) {
                    if(e.indexOf(locity.substring(0,locity.length-1))>-1){
                        if(me.option.type==0){
                            $(".citySelectDom" + me.option.DomName).find(".mapCity").attr("data-id", e.split("|")[3]);
                        }else{
                            $(".citySelectDom" + me.option.DomName).find(".mapCity").attr("data-id", e.split("|")[4]);
                        }
                        return false;
                    }
                })
                if (me.flag) {
                    me.flag = false;
                    var dataId = $(this).attr("data-id");
                    var cityName = locity.substring(0, locity.length - 1);
                    $(".citySelectDom" +me.option.DomName).find(".allContent").attr("cityNa", cityName);
                     $(".citySelectDom" +me.option.DomName).find(".allContent").attr("data-id", dataId);
                     $(".citySelectDom" +me.option.DomName).find(".acitveCity").removeClass("acitveCity");
                     $(this).addClass("acitveCity");
                     $(".citySelectDom" +me.option.DomName).hide();
                    $(window).scrollTop(0);
                    me._callback();
                }
                me.flag = true;
            }
        });
    },
    loactionCity: function () {
        var me = this;
        // 百度地图API功能
        function myFun(result) {
            var cityName = result.name;
            $(".citySelectDom" + me.option.DomName).find(".mapCity").text(cityName);
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
    }

};
Array.intersect = function () {
    var result = new Array();
    var obj = {};
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            var str = arguments[i][j];
            if (!obj[str]) {
                obj[str] = 1;
            }
            else {
                obj[str]++;
                if (obj[str] == arguments.length) {
                    result.push(str);
                }
            }//end else
        }//end for j
    }//end for i
    return result;
}
function objKeySort(arys) {
    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newkey = Object.keys(arys).sort();
    var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {
        //遍历newkey数组
        newObj[newkey[i]] = arys[newkey[i]];
        //向新创建的对象中按照排好的顺序依次增加键值对

    }
    return newObj; //返回排好序的新对象
}


