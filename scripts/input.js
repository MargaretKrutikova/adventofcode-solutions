const adventOfCodeInput = (function(){
  const day1 = "3893445835429722678558456317563893861752455542588369533636585887178232467588827193173595918648538852463974393264428538856739259399322741844613957229674619566966921656443476317729968764183945899765294481327998956154956571467872487576314549468261122281384513266834769436913544431258253346374641589492728885222652146158261225296144835682556133922436438188211288458692217737145834468534829945993366314375465767468939773939978272968388546791547526366348163672162245585168892858977723516752284597322176349412485116173844733679871253985762643852151748396593275274582481295864991886985988427966155944392352248314629138972358467959614279553511247863869663526823326467571462371663396188951696286916979923587358992127741723727623235238531991996999181976664226274715591531566495345212849683589582225465555847312199122268773923175183128124556249916458878785361322713513153175157855597289482439449732469754748544437553251412476225415932478849961897299721228198262823515159848941742786272262236888514421279147329383465929358896761449135917829473321834267122759371247338155787774952626616791265889922959653887288735233291968146648533754958199821789499914763279869931218136266492627818972334549751282191883558361871277375851259751294611921756927694394977764633932938573132221389861617195291742156362494769521829599476753198422283287735888197584327719697758442462886311961723849326959213928195182293316227334998926839139915138472514686689887874559367524254175582135318545912361877139367538434683933333264146289842238921989275112323681356256979576948644489986951538689949884787173194457523474156229389465725473817651516136514446513436419126533875125645855223921197481833434658264655912731133356464193251635637423222227273192628825165993827511625956856754776849919858414375874943572889154281862749595896438581889424559988914658387293414662361364793844213298677236787998677166743945812899526292132465751582925131262933636228593134861363493849168168765261647652342891576445292462341171477487223253795935253493869317616741963486473";
  const day2 = {
    array: [6046,6349,208,276,4643,1085,1539,4986,7006,5374,252,4751,226,6757,7495,2923,1432,1538,1761,1658,104,826,806,109,939,886,1497,280,1412,127,1651,156,244,1048,133,232,226,1072,883,1045,1130,252,1038,1022,471,70,1222,957,87,172,93,73,67,192,249,239,155,23,189,106,55,174,181,116,5871,204,6466,6437,5716,232,1513,7079,6140,268,350,6264,6420,3904,272,5565,1093,838,90,1447,1224,744,1551,59,328,1575,1544,1360,71,1583,75,370,213,166,7601,6261,247,210,4809,6201,6690,6816,7776,2522,5618,580,2236,3598,92,168,96,132,196,157,116,94,253,128,60,167,192,156,76,148,187,111,141,143,45,132,140,402,134,227,342,276,449,148,170,348,1894,1298,1531,1354,1801,974,85,93,1712,130,1705,110,314,107,449,350,1662,1529,784,1704,1187,83,422,146,147,1869,1941,110,525,1293,158,1752,162,1135,3278,1149,3546,3686,182,149,119,1755,3656,2126,244,3347,157,865,2049,6396,4111,6702,251,669,1491,245,210,4314,6265,694,5131,228,6195,6090,458,448,324,235,69,79,94,78,515,68,380,64,440,508,503,452,198,216,5700,4212,2370,143,5140,190,4934,539,5054,3707,6121,5211,549,2790,3021,3407,218,1043,449,214,1594,3244,3097,286,114,223,1214,3102,257,3345],
    cols: 16
  };
  const day3 = 289326;
  const day4 = (function() {
    return `una bokpr ftz ryw nau yknf fguaczl anu
      tvay wvco bcoblpt fwzg sfsys zvuqll mcbhwz ovcw fgdy
      ynsocz vid rfmsy essqt fpbjvvq sldje qfpvjvb
      yvh nxc kla vhy vkbq cxfzgr
      kljv ymobo jlvk ebst cse cmlub tavputz omoby psif
      ebfuvvu paqgzri uvvubef hglk jvn gzeln bdl ziqgpra bzcfa
      tclq ytw tclq tezcqys
      qae eofr yzwcwqf wqm ytcdnc pxnmkw
      krryi irykr ycp lbeed ykrir lhq rdd tyujwd
      hms pii lxoa dchsvz bepjwst bllxkqg hsm yrdj myzvju msh lwnnc
      yxqh hqxy xkn ljjsqjh jjljshq
      mhgsehj urbvnvf gbz ykxsd hsmgehj wtoc ujpfaos eir vifog tsy kdo
      wfruf wwijme pxbbsvf asmgs ccbn vwtc mkhah oxxfh
      lxqy jzvcvd cfgg uahxrwr dqmaqr bwzm wruxhra lrb lmk
      jspgxo yuhgni njzqtn zglkzz ybc itj orqr zgqwuoo mjagh erll srqrk
      cbrtnbx ukblei ienmdm sinzq lytyliz mma lizylty zeumwgu
      aeggz eljcry buqdeog dvjzn ilvw arz vep kxdzm mvh szkf
      imn sfty ugg flqq nydky mni bkqzlok wye lehwlmp xeyfmj
      beyv oamrpkc tebdkwv zlq jes mqvif sej qpsnmjz edvtbkw
      hylmacl wwlra xntnvg ppvb bzof cymllha
      qktxomf ngfpuz qqz malc zxuqz szg zis vzro rfpgk
      phru sxlg qzqlw uej vmd omzga jue
      drzgojf ttqdqar weikik wvrjtxi gbj jramqh nlwoj drzgojf bgabmn xqlaeun
      aiuohu pca apkmv cpa kmvpa nmdn
      gelymv eto itcnuhn ote teo
      oxiz xzio kqu wwgow
      picoyb coibpy acsw ehlirq deyz gymqvz opicyb vuet lrl
      zerg rezg miwtjgw gezr cui
      mlh qlu ktil tnlgnrk bfqbk pgg qxeyd noadmjo nonlsh eqxdy
      yqqaq yqqqa xod oss
      mkotw bznvs xowoofq sebp wsgpsmn fytcpc vvmzr vmzrv xwtxz zrvvm
      dvs twhz teqmlow oqg sjetxd aku cwl qfvrkex mndsio hfg
      itdl qwdagkk wli tdil vlgur dyl xvfm
      wlmyd dwmlx zhmqd zqmhd edzsvmz yclg umpq
      petva gazw byrca pvaet epkoqh nlp vqfl vatpe
      rykn ckr dijkme kmiedj ozlh deikmj
      kuecjh sfqv pojfzf fjopzf fjpfzo amxtc
      hri gglmial lrwbyc memgszu hir cfwlg ylcrwb
      rxrfbtv pwpra fngt auh rapwp zrruuq uah
      cevc utfd ysrfcw nnlg fnqtx aua htteunu mrjhhj
      tvnxznj mvpagt nqmxvnl mutn ntmu eybh vkqeaj frayclp
      ygktzxo lzwwy qsipu nwb jdmw pahao paow mwjd uivqbnj woap nyyogcc
      log zihz rsmx ixfr xwvd osg zxc gol ufnbig
      dogve cnb osa xbafl vefr nxlw yjgquui
      ucyl aaoae ktjvi fyps xvjhpbh iiur tuc
      pqt jasxg ehhs lzjzzzl sqmmj vwyva eklbtv hksanb fuesnd oyw fuesdn
      uankv wesi frhpau qiucu lim uzbdapf ciwjd tifbqxh tfbtsdi
      vgjd izpofu fqjpcct phuz
      cfg cfg rgahl frm emn pbfsmgy frm jemwqgn sfpm azunntj igl
      daps hpe fqg err sapd dci vbzlqx gsigq eyp rre
      iuqyqdy djprdj mgtkdxr pwmkzv wmkvzp hppisd pidphs
      rlr rrl vhevh cucprc xki urte lrr zfc xrqydzk ipjkyxj kytul
      jwbkaee rgyjl rjljbwe ppq plp pfts ijd ckpvmw mbdrqh zolt lzmr
      alw law awl wknavtb esklsbj wvssyai
      aqy ldf qdht soxkg qtfipe nsdm aqe rtlc fbqrk ius gybbhxr
      xteov wgqoqim nlz szlj oxevt xwb
      tmgdst fyn oul tsohzbq ltmxji fgops gatssx zxdzfc talb
      zkvjpu jnhtc nxs jqv pyoqz zsj ckwd xot ykai
      fxfarre yjbxvj lqfaglo mbxuv bmuxv bxumv
      yrhi uosldj hryi fwres ycygw ycvxze zevxyc iyk
      yphev xisbai xdb hzrbg ayxbhdx qnvbus pwc
      wytqraw yvurj erqckl rvrvda xsh gsd bxtm acxle gpndk
      kpvjtu vacggk oabcuoq qusf zitqpgn pbyq ocabouq ntpgizq gaiiry dke
      frz ceozajo ljltawq tjepzp iflv
      zntejm dkfgc ysno noys sony muy
      qdnyvvw oykq bnmldt zjgauw pviurd cbcnl tnkhq ebsey bccln arvwe
      iqazt xidjgom wcrdz itht lfh ifzwkj rwqxhy ervcgmt vojg lzntz ezg
      tlcxioh qvvkan wpi ody
      mhsy dwm hyms yegvvc
      hbkvi wvemc uwxgqf pwrgu wcy wxqfgu qkzppc vxcwdwd rcgp ivjd wmevc
      upc ucp cpu unmr pyod
      bqfew ebwfq paccwh phgc fchhr jrnio
      abh bjalls bdtac zzvt totdlc yptqmgu rpcin bch cqklqly
      bsnss qcsgi tegyz lqoqkpf qvatlyu ibza mzfotsk lye oqqf mnor
      lzrxca stkbn axhr wckbip bsntk ahrx
      oricdw cnpte dbz nqx xloxc bdz fdsl uyvgi nvoy ezbi
      nlcqye ofta jcvqvtg yxduyh btawc tjgvqvc tcvqjvg
      nji znctdfm kkmp pmt ikhl jjoubc xnp zdctnmf covvmsh ydh ircplcm
      yafkuk yasqsyt ytqayss nusgb ukfyka
      yogcf emg jlkd blupemf axg wihhrb ysernt yznhz
      gmc yyqtgp use lohoit
      lclwa ojjkm rxr rrx
      punyfv iphw ddbc jghx lrssszc bepexv sicpy syicp lszrscs vrqjb
      rjanra juh hljdmad scu usc baifu ijs suc bgdbbv
      ogs hehi lgiwowc wwezznc ogs lorcl naunpll wlmal ajcbj ciujw
      slenm xxod vhf amhts
      mrrduda mrrduda lwecwjv lwecwjv vvzmjla cjipv
      ixnv invx inmzz aoxghpv
      ulyvfrf zsup zfryjy xoo agdsd giw papa ljtu rzbjiq wrex
      bzpv svpuyov mklrct uzox
      fxs iypd uaqch kxazj ksjyv
      uxaommf xtq uubbfk bmlq kdhgjzg oxwpag itfij irmkjx ggod sddcyo bopn
      lch plmvfni qbjr dnu zjcod qlwax gejmyj gxjqm mfzkb gejmyj
      yoa thrfbto wposvrm amulogu mcqzfax fjquli oay
      kywj kqqhney ozuljxz wqwfte ubo mjj anhhg aphy ocfnef yhin ywnx
      vxuledm wllj obqtsrr jwll uvmelxd xvj gbwte
      hevc bitwu ydw ywd btiwu iuether gfe
      dzn ssmfpel wbbdeyt xge hrfi
      zebz ifhq euto ppfnrwc winkkj
      utuly wtdt iahpe ihtxwmh zxun bqluj hsaxgcs ytluu jlfnnuv drxlctr myhp
      kwxgy hreul rsnh wdmsx kkajywb
      bond djq kccazc zvzcie hndm myx cmhyhkc ove ord dqj
      zcong tekgn pbzs ywqgqgu eizrx ypydeku yqyjdjp dwsu zxire zcgon iggnvf
      tkioh hflkm fsjz gisjbi otikh
      ccdqqm fdabbne fyd lbyqm cyzgtd puitvjz nluf hirrpxd tgxrg vvl
      hjnygbz fnu twwbp xqw pfdlt uoalyme rsd muayeol ezcq
      kubeooi bxgwoun paogjs twvwlji opsajg higbdfi aazo evmj
      sfipxe mqbkmrn plwqd zvq nmvom fyfbs nbs qkrbmmn eym kqnrmbm
      ruhsp hurps mqws umm sphru
      ksjs pgpxh qozg enplxbn oqzg rvjnaje sjsk
      rbwbvog mhgtgg uld twrqz rbf kpop
      lwho lohw ylhd dej lydh vsfffsm
      icljgu gluijc vthqx orynv xhvqt
      biav elxkct mtaw nlafk snyr cbqdwim blim rtrqmc wze cxktel
      fgpeia ebkhga azlfsr bsj pipvwsd nry bayrjzl ftth ynr mfhd
      ymlowur nighqgk yjv pyxf nan xamb ohm jvy owrxbg icbz
      iyyt linaqu httt zyfeo udap mllq pdxo lpl djhqaou zkit llp
      dxspk yge kcqjqpz ulb hoe mfx nwayo
      rdnmmh gyqd qhxrzj dgizu lyittbv txngpdg fiu mwd ndp oks vxnxybi
      eul ztpe evnz yxx iuwon rkbbsw liy mqhxt
      qahp zwn ualtk txbt cbthj xchqy pirucp povdwq
      mqwu mwww muiafa miaafu hzripx wmww
      auw hyyi ylewfi ihva jknbrry voxzooq xaos xymv qzzjw hjc
      enpb jqa ajciy cbeopfs tqrlqj ecudb gso cyjai gxoet
      yohkjj yohjjk xapawgo rtgnjj
      lnlxxn nxllnx vhjrev uoew zts smkd kynlrg
      bkblpr vgafcy alju aiyqe eebtsyu buve hdesodl pspbohw
      aacmw qpndwo tcwsfqy qecnms wondpq sto
      wdsyxe edsxyw jnzruiw pfqdrhi
      pfgxekl vswgxhb qyn mykn jimiatq zkcz jimiatq kaexgxm mykn
      xegwn upudt dew uqjrcl abyof hbtiko wxgne sorgno etm
      xzojs zxsjo szjox gumjtwi
      gttngkk bwdgce bhuw fgo rcbf byw
      ngtzwqx ptx xodmy ctmtf oioahmm qajlhje jzilpk cvypp ijaefz
      arlx slcugvm hyuo zoptsh emyr tndx rroecp tdnx xea rtkpd
      sfckdx ktyrjju ruwjtp zhqznj vncun
      oqqh xpc itrdg gtrid hoqq tuo yijh ncp suvck jic
      brrlqu twdt urblrq twtd
      brfuh arwtkpu mzlj wdyqk
      pmag dtwnva nect azld axqrwy apgm xbv gdq ienubsy andvwt
      hqb qbh gxdl mwjn cmfsmik
      yiwma utlor qxjfjsn aomlvu gxp ryj rfkdsw kuguhyi qxxpg
      ifq wcvcgly jdalgzx lgcycwv rajmnqw
      latakk yxxbw evy vey
      odkvw ojgveb jhg qwhkyoh btvu qbfot nouv owgtsi pdwbmfn pmvcv dnqbo
      tmka qqnty knz swi fyvmt ikcdu jfjzsfu dshgi cosacuj szjjuff
      eanet uua fbztk bzkft
      jepi hyo jgzplr jyqk zzcs iepj hfamvu bfgbz sjsnf lprgzj
      mlca ywko mtg vkfv ojka zbelq qkaujs simt kafq qtycfzo
      sqh omv llvra ecvxmtx dpnafv llvszx xzlsvl quj ufnhvod faraf fivmnl
      pvxlls fzeoav ahgv uhq nodcr cohy vqisgaj jsfcyur dbohh
      ztccbwk okv vok kov ywel
      xyu cmaikc jgqu ozccdzk ybn yoeq fky aetrkj eyoyvla laiu cermo
      sssnb kxly mgvaz jpffkq bysbwwu rfnkm eycp ipyd hyi wjew
      obdfqmh flkm semednj iafewg lvh uwa ciepe
      zmldp ykffe gtehz qlmvule edrtzg prund oagwto qia bvyxur
      kjok neno qbxh wqgkkt ympclso poyclsm cajgnnn
      paqili kur sfit jbqchzx bhjqzxc
      fhghm ubtaana qbn autnaab aaaunbt vmz
      exlrl hfnpq zgdwx smix nyg ogccrhj iimhhwc uhcldo oydwxp kqc jxxpycv
      wtdqjfh ialoqr zeej ipoh qtjdwhf wdhqftj
      jcgug cmtvmu ynhnilj txlv uemowyu cvrool oolcvr njr cxqntdh
      uhtwtp tgnc jmmjl utiu jfxtsoz cxwqcz
      qntxl lyownp tsp tps mixyge rqfqumc bxjiry zmaj azjm
      abt bat tftvm nyjs jyns
      hzsdh pwthfvm cedg hzsdh rsxtehn owh cedg
      hcoiny aqbeme eeuigt pocpvox tiugee rwb tvgmyc ojg hgdaf
      mzlwcfc uoobo bouoo tvgvmiu evsfkm popgm evmfsk ehxvits vebxbmd qhmz jzj
      mypgg jbpx vgeb ahvjl zbm ancdzfy wytkcq
      bivscw zmzmjxu jzm fwb ujefxp jzsiskp cgx atcj sszikjp cxg nqvxga
      vvurbxp iry zlz gfnlpuy npyugfl
      fpmee mhj iul lui liu
      xjoesn ggsdc vnisnmw kyxmmv xphfq
      zcsml ngzlpy udaoab eotbv ylca bfmums izx
      pdi bpyoep cofsy qazl oaovek fvfbe sotc lfdmaea smvs
      zajm bskaqhj qxyiptb bdyeuqr dqjrekn iywj
      hzhky hukvpve iqcbwju nyiwb rvutxlb hyuah urnhxg savicaw hexr ptedk
      qndji wrr sin ljogf ncrb zvt tvz
      kvfke tjpzhrl zvd doq kxyw fdgr oqd egkybdh rqpfxks nja
      escstpv ccc ryzdv gxkjuyt gkhw jxnfda awpzg csestpv
      cpcd onxeae nimbrpt zyji qnuo ktxgwbj vtjfglz skcozd zgii zgii nimbrpt
      lwq iue hfbv hgbg aeqc
      vzgbod yjkoc ckt bpiaz
      eyco ecoy uzousjp faxj utu yoec
      fhqdi myd tvex bzizkcx pifcfhz fczhpif eofzv bqzd knbhbgj dok ffcizhp
      qlqlgmz hofmnc cwtk ahgnpne acn prwdh hwdrp rfofhl atavrf afkcbk
      sgl apyfr pwxzptv osuwy vmqqh soyuw lqilked oinhh
      eglqdox gcxfxql ejtnwu wvho can eyu uetwnj elgdxqo atvpkk eailsnn cwosyn
      mylxhuj kbc apnllw qbmtj sqy hxtnvoe ins iyudo aagezrq nsi ikvn
      lpmzo tkdeg zilkm vdkmtf yulbdd dkfmtv
      fzrv grq zfvr ychga gqr
      vdjxx wew pdxgp cjywsc meoffrj pgpdx chxmw eizgz ruea
      iaklyhx btqqik tbiqqk ynmq laxykhi qatrnsh lnmtm plz
      sfogup jtdsx tsxjd wwzkyy wzywky vgdsgr
      paupqb kyy bccklmr vopviup lctcxza yyk yky
      gduuia doek hqcr upvb szeewnu rrrdz
      lhnsaf lut kzf allu dvj tyngx zkf aqsgz rtkzzdz
      xxqj msg xxqj ezmm tmyji msg cco tain ctpel
      pvcfzv rhn hlhxyu bghzzpx dlhvr hrvdl lhuxhy
      npzhkp voghdv rvezqff hvgvdo jndf gpa wevrwpu
      faixq aecax hxdouer yqlngzd grf wid iwd cce xnmmr
      ifqwiah dib ibd dtvkwqj mpn dtwjkqv kyntq xwlv
      rwoiz dja cvv lvza kfdblq bgtwgh ongdub wggthb lvaz
      xajf eyasx rupsyqx wubjwx bsrqi ripghci sbzxp sbz dhooax
      ydnv tvhwgp uvrh yryhl yxdlwa ladwxy awi mkwyn ghvpwt
      qrl vwdvwic ocbhpi bcmz dor lrq hokg gokh
      adz echnlju ebnmw twjl cfw loq fqklyyq clgqq jtgpsu wltj
      vwlgisb murtsw ldkacqv wxfcke vcqkald ldhh gsl kpzn
      itnvo lyddd saewfse spnri vtmst iblx
      qsgv qni wvqiih mneg lkpb quhbkyi
      efwaaa huu fslzwpc uuh szflwpc
      sgmj ajh vcwpcua enltaks aquooh bwoda txbuve
      vbe astgezx xqbxkdj evb bev yuuesdc fvohzq
      gpn oqxfz pbwibjw gljdbf gbldfj sis dpk iss
      pha ebybvye ntxhs wcuce
      odnnywv qpcjll aslxqjm injfs vkbturz atxi
      zzncfj kbhk jzzvnwf kqipx qkxpi rzb czfnzj
      ygu vqpnxkw trdtv rrte
      hrutley ljxuuq yonbpmk hmpc etyrhlu
      odxp fpvizzx dxop jjbr skhxq mpzawhe zptdxuu erxk adbbuk zfzipvx
      qjovasi yutjpg rcp bykpctm fqmmg pckbymt hqj
      ssqc cype tkowxb fbh rsluu zjk scrukwv pkuexk qlgjtdq oulrke
      bkcd nnf hdj sdlweyr uyf kmvzq
      sgeg moy png blv bblree ufe uqknuqd lnjwbh
      snpex hrbcfok pffv cwrvhcs fpk uprhn gbpy zkxyi esug ccnnj
      bmwue dugcrdu uifiy clid rdmodec jodp hti xptj tpopl vuwhdyi hnoq
      cwlkg qsz nnp lfyk pwn dpe oeuzp jusxxkq qlnchc
      tsmkvge pxauyc cxypua boi hybq rzf iioyi rtedkc gjmk iob mqb
      cvip wgbjhe ulwg jckkwd gdu bmaoisp
      drpl xbliszf rpld ngnvgxl xnrd xsmd oetrcmn xvfohp mtocren
      habmf dmfxq qitw xxtybla cxvb colcvpj sowoeuh bhmfa plccvjo naftjgw
      cix soo icx ahx cdrjyxe htcnp
      acoksaf cgahlg tdj euchwnj bdn lunouq aewrk uktre kklwqy lnouuq
      ibsel hwjbah vxuk bjxa dvzbpq tffqvo bjax qfoftv
      iynms tzv jakuuw cmz cjnyr ddibtd gcb
      tmgerk pvwizc lxoma ergmtk xmg loaxm
      ajazon yjwt viyemnk wobzwwm jcucn nopymyq znaajo qcjtmlq ccjun ywvt oqczod
      kdhgnv kdnvgh rpyrxx xpyrxr
      qftmshx hrbr kcggxw jwtuk qxbzkn
      ddi fjekwxs xxua cmmkrso
      ptrsv favvfh innnnx nninnx
      kzsnd pnf evtazgw wmjk gvxp bslajo
      nphqtka umlxu ymw whqiab whqiab vwigkz pevtps
      vhje cnu uzfzum rwucy mxr wyrdqfi gnkuwz dkrwc otfc vbfc
      ubtzio vlijsst anruj qyntadb fnic klz ywqq fnic vlijsst
      rprj ybyqawb tgeieih nzcr rjpr bjfpozh tpevsx flvjdq
      kvqqzvm cfdm wzjmkq sbcfx vzmkvqq
      zqtt elpg eglp uoe glep
      lqv madhtch xevl fal ijmx chcpra lzl afl cndbvnq
      yjx jyx xjy otwklfj
      cur egsdzaz ocbx wvky coxb pgiysbh lclhvy gfu oxbc vqyjvhh
      gtd pytdaz kecsku nkiud ytt bmgobx tyt pfleji ebqlifv lqp ytzadp
      bopfdvy eovszvw krgu jhuhyqi kaczafr krgu zlfxtl
      yixprs zqai oprgw vcsjoc pgorw ypx ijo urjcjqv
      estg oqnhw xgwajp mpbsag ibzi
      zggbt jmmtkru sye ybd ztggb
      tzryuqb blyxnnu sjpmf yxe zimf uyzqtbr qbyrtzu
      rzivz rxn invxqd nazw efzun bwnw ywx rfuda jhnoww mketav
      zxfw zcaqi qaciz ktefiwk xwzf
      ntougl fvyaxfr obml obml bjkm lgsqj yfcggdu rqcpgt ntougl nveto
      rma dakifg pvfc ticvff iffctv difkga
      wpnt eclov vmmoqh qvw mljlvnj hxrx
      ijnpo uhgxrfe xxopw xuzwyd powlpo ctduj eepw gubnepv
      rxcmve myxckxk ecid nxe xevrmc juzaonr ilkx zpb pbz mvgos yzr
      yfecm wqkh defqqa mnzgx nwe ixxg rjdhe new
      awztgx vqgnfd iwcakr ajaiwn jiwnaa uqfrim wrgbjon ufqrmi vdu yjwy gwkdc
      vrqf yzmvnr jkjji ghya pdlye ygha qlcm twmkex frqv
      hjb xgypw vtr mgj asa owcuks fnllp ommrhng senv iix
      usw iyuatv ondiwh neac ttge tzw bvjkfe neac usw
      qwehwhj idrwo vex zopkjd lrcc sfqyz smte qrfh lccr qwjhewh vlb
      efnlhsj ltm xirn nctwio cin
      zocc cpfo czoc oiz tftk
      rlzvqe inivone kptyumn eatw urjxc aetw
      qavvqa jvvc yux cvvj
      bfr fcpc xpkphcf irak bfr nuhsooj nniugf bfr gllq ipo
      ekd dydxs rnmgb dek yowk
      ipdll wdgx gjiigd uleiwg buvv vdhuzg gigidj gkyigmx lpdli lzyode fqdpvms
      ycna rhyz bsipz lit rmc mrofb cyan mrc wujk
      tjrk cwdsvf srkdjy lsyvryj nko syjvlry fgqq srdykj pgb koh dyle
      sflcxt wmgdgej akllaoa bbsvve nsxnt nsxnt kgm akllaoa btqbez
      bzmoci agemx mdtiol pyohvf zwtx aqblx oibmcz ypcmz lfg ckssn ozx
      cuojke joekcu eusr dxqk xxwob klpsm
      byspz lyunt eojrx ubh rjxoe ypzsb
      ibok bkrtut wzcdk ppm qekhvy aupaic vswwul lmlxrv ainigy sasurbx
      jeigcyc cycgjie resio ncz
      xvxr lmlaje ebmtn cvms xrvx vsmc
      cfjbffj xvo hpsbu nfm jhlsk mnf fmn
      xncxo iwuon voj aebv jks nynzl hwjwo womejo ugzmr tdfaep olpdiaf
      jlnusc hgpprf nulcjs kwiwypu kitjjbj snlcju
      buqzm kpuoxel ajlqke qqdur jecuibn leajqk qudrq usi
      ahbnjf uuzecdv yfyrsxv eoqey oonue vyyrxfs jixmvao
      wjdi cfgurdl usdnlk jmao qnus cicxnux vtdxxkx nusq
      mlvfz twu unj mar qpiz fhjczpz ytl npwjys ppq koa
      ippdky pvwthzj qlkhl pvwthzj
      kfm lcedomr xgdkrzo hfxyoe rafcby uwe pzjyuja weu nso erdwc fjvc
      peep oufzlb fsgn kxj uge xvufb zsnrxss lere gfsn gvwajkj fmh
      mexvi kgkktz kgkktz auyln ghvqc mexvi
      wit qxtewrk qdaz oljeb wowb suergyt hxq pfnfbei rdu qrxkwte fyw
      qjjzkd oxedeu uoxbehs zder vvjnn ocxkiz wkblzy eyzksc waiiqo fut raak
      dhojys qkusuxs kzicui dcsxo
      hsnexb yoz inza gqxtbc rya jqfe ufzlqva
      scpquf gbloz ceol eclo qpvzavo rwfnxa
      jyg edqf vdpsihl edqf
      mbyjg yjgbm mgybj mhgi grw
      ler oxssrel jhw jwh sfa hdhlo gng auzoan
      hmkuis iaxf muhisk ikshum
      eodbpo prajasi zsu hyb npr tbcntup uzs bxchne
      zpyr kxmvz frlzwnb tzqrw vdh ndbwqmu cadwsv adq bzfnrwl qfgf
      dybnn dmarc mknr fovokgj ukrp cuwag
      khweq eljs rllijp pizevm lwws kehqw mkjcu otqodz
      fvsrb kzbjbcc kzbjbcc mee dhyedb kzbjbcc
      cnlmjd dvnd vhlvsa rsrtc scrrt tqhx vke jqmxpd udkjqc qxriw pfqpk
      tyureg urteyg rutyge rmoihs
      pccxeak tkmyane qqggpr tbdmpi ieb
      wjucbi wjm hais pcxjd kkzh qns hmf mhf mnsv ifigsc
      lqeyr pnopcig cpgoinp pncpigo mjfkjus cko zedvvyq
      ofsnspv goj wqm ynolb qczly brl lrupzg buof zladwte
      xzn zxn yaseulw qwhxb easyluw vvlmh
      aiybip ydfczwh wkl rjsu xreokl qov mko pna fkfu
      zjlwozs nxke ozwlzjs jybx jpsxp qtkll idsrad savpoe
      xph lpvkmvy afq uqhg qqjgm smg tmhem mxdyqx bvhot lpvmkyv
      jxkkzil pkjheow fewr ggbfy fuol cuzud wnx fxujfwh srjsmic
      lzbjx vfx sncis xuv unoa nlgs stdhf oibxsgk uhogsb
      hfqzkms bzyfnz npcd yhfdo myqukug pjq adle sqkfhmz
      czhainb iazcnhb hhaqr cyrwj zzow luuvt zdyhnh uppysr
      fyw dulbxa drewqsr tldlaac kyaw datclal ylplup hdzbj
      kiiv tly gua lfg
      gphbvwc lqdd jqja ffpkz hafal eiapksw wsikpea vphgbcw lkcpm zjxcx
      viapp rxt vdgbm ezphp pcqr bll mklgx epzhp
      favz bwmczgg zoyns pens wpgi mrwxel
      ozwjjn kbzaozc cuaa igbfyq swi uypx bczaozk pyux odvawqx
      npnpw nwppn egnpj fkzh wppnn
      asu mlqmwa npewa cjluw qmalmw newpa fznx dzypi yiy
      hleh usw bgmgscg cqc fijfuw idtyh cgmsbgg zjhr wus hymbju
      tmre fvm cgowgb eduyfla ttez vdzp vtmtaog ezxsfi gyxgzi pvzd
      acvarlu hkmfzdg jsnil hpv wjj rljpk pygl wjhhohk rkplj spvgx psgvx
      wyz rvuobq kbmhaf bec bec
      zosyz psuo lgihdo mjtftk fjkttm ddmcd
      pqm qpswpb opviwxg ppqsbw waco jpx
      yzgumgq kqv hqjghnl jixhoyg ufer kvq lzi rojm gbhvsd urd tuy
      sxc jndqc ozpex wkchpu tmwv utcxzd piecpma cmppeia
      ifjc lttj tltj rxmgxqa jcif lzhxkg zqb mdq kbjavv
      isyxn zjbj uiw avziqxf zpezazx iuw
      rjaudu amtpuk gufogys xiqs
      gau sndrkv cmiolti cdxm ikkcisu xusnfbp jxffy ffcizj psye sgd
      mvx onzmy oynzm mwfgvs
      mrdg roanty dljs jlil gzcj dqitnfb gxb vzzqf ooweeh pgs oyntra
      yna xgok fvbdl xgko udqp sorfo hmhl yan
      kycl ule blupejp kycl fhpkoe pqkptw cfzpv nkncl
      snugkyw zfdbsfs aehb olq kkoi xpsvy jqcspf lajjyu jtm
      hifhfa mii clukcbc fhhifa wcts tgai vvqsyr kclcbcu
      ordjftj dokk hdhytwc fjodrtj ojrjfdt san ajxrwy ked jfrqc
      eylx cohd biswq xgiibz gzcptbf eylx icunv bfg jqanbv rntp sbfkiey
      kub gdpbdms qnnto bit visqop
      tywk clicj daics cbuewkx yyjjjka vxzk afsdyqg
      bmxzll wqjnyr mxlzbl yutkaa qmpz hiqkf lqqqle jagj qlqelq
      jgdeatg qubj jsu bhgbm swmgy lwgnuh qjbu dqwiikp mgwys
      ryisldg asrrhz vxvrnk ibjr kebyx dwbx qdrpa tgakt
      dfvgzk hifan dpjdnqc ncnvf xmqjjao npjq vobt evtaety kvufds pcugx oyjo
      ezionjg ioznegj cykxy igeojzn ezm
      dkv dkv vfqyl dkv dtjhrem
      xfgh brsjcdw auvq fibb gcbecl
      eet qdnrymr ndqmyrr tpfqxoi kbkxw
      qhmaj maukf uygg hqmaj tfmtv irao wsari
      ofoywus wxs leemkn wfko dwzqv txg qsiiiss aiiffe fadmdq zjtaovt
      fgfms oazi sam msgff qif evxca reho
      gpzhy qxh sco qeax wtabxwv sjd oev
      xsmpi wskvku xspmi smipx
      ghgf tbpeun qdivuvq dump umdp khxcxtx laljpv lownp egovve
      vhmu eziabt hnz neko nkz hfmizn
      vqhb lax zzyf lxa lik jrqynr rgcos
      zjgbfzv ieufyz kjxad qxeuewx
      ufl drkaac hoyic pqutop wqzdk eewabsr mqspcr ewarbse dzqkw
      bgatanj xmddwv mwlmw scgzboo myignm lkfl fsqr
      xkrx otjzfk wek dpbwk cromg fclmhg pkvw wsln
      yyqjs lifg gifl cfv lfig fycza
      dfup fkfeiqq rcmuv dly iforzi lngkjc rzifio oiifrz mlhor puwm qrthoa
      nzfaeto punt rtmlg dwdk hyig
      mds ueoyclh lxb axgea wqt wwqqglf tqw yvzji ryr dst bojf
      ayoj yzj lyctgnc woxz gqltw lkzkwte wysb mjyeu hrwso
      gymmvtt lhskza lsb nhlijnt men zphurrw oftksy zxs ykerwue hnijltn iknqyz
      xuaxkc lgzeef fwb nlzzhjj lsieg qdr ews rue rdq
      xnf lljcmod kyuercp kvlvd lkvh ncn afaq
      bjytofa ltz mkyy bwt uxca somiz rhgdg keaqu ybr
      aipljn qpq nilajp udgkchc dirvxg rrbmi mxfxkk kmfxkx
      sfzjemk hjsvnmb hfd hprfmvg pbhkc
      cvxi srj ucy yuc euswuns jpox
      tajlnn ivuecv fdfce rakjq bfuxirh eibde tajnln nlajtn
      ndvm mlnhy bfqlzn nmdv ohto
      jysyvwy xbcyt lbbm osoye swwtwa emfznci qnzc qsgk
      xcm jbqsuo xmc mtrk bojuqs
      ukshrrh xhfl ooxgq vadlcrg ydva hugplg mnqbd wkyouq
      mnmqys bhws megar krgoke modxe krgoke clovh dlo
      ejl qzc agxph jcn zcq zqc
      jgh yhh hjg jhg
      tarm jboyg gbyjo pgalg xugzt bph mart
      yur wrrahr fnnfqu rwhrar cdq
      mukod gueg guge epalg xjkctt
      hub hbu hbzul buh sqfl
      xyrly lvpitr xfzn jjcl uvcnz dnpdyzq ifaiwe zlvzcx
      wxzsf tgd khvwp cmd mzv bsvjvjm wvhpk ublnqyz mvbjvjs peishcb
      zunmk hxpney nphxey znmku
      bfxlgur wftcw xfkf fsik xkff ffxk
      sxyjzr ugcscx uiovqx ldzhord xgxbfph ldzhord prdhg rhdhzd ugcscx
      udg drb apyjq dgyevo fuxjhg
      qshbe aigfdp wyvz xfcos wve dgfrufw dwimmb jfh wfrjbzk nwgrigr sbrpbb
      ahpn xnzeof wxbv chxpcu jmso age ojsm bqonfki hqhrkw
      mfupm vvig ndqbbm jlw
      ejqh ebcrytj zpiqtpp ogznd
      wkwkae odq rsrnqk nslczz hiyyhur kuw mjbuwll vduvod ryhuhiy swo tsos
      znkufyx jejrdno knr wkx ikrlly tnxtj
      iizdiw iizdiw hukep rwj eaq ptm klta rwj onaz
      znb egqy qqnc igqr ikza ojgzkr xaen kurb pyckxvt wqx
      pbohpw bphowp dajwdpp kotevs
      hmuvxu zdnguk jhcmj gccyxiu cxgiycu uyxcgic akxi demeff
      zjr lupzwcy puva rzj
      cdn wee iqkbhl jwxo nhl cqd mqgqf ltdfg
      phwco ggcj cggj ergpqmc kcz
      aryjl wqwmkc aklktpz kptnroc mckqww
      jadydt atjdyd tajdyd owswsgm
      dshqt kacoge sdqth ylobih
      kdnik knkdi dinkk xwvqa gvii
      cifbkpt zye xhwnrhm fctibpk sbn pdqry emkye kzyjpa plzkc btkfcip gcchi
      kekfr fufp dfy eqebgko obbn nuh
      zixfbus skuf bea gimbqq caubhto eba uvkovz xisfzub peukmyn
      okihcgh gazrc slee vlnwyg geviex eesl nmnvk rcbv ycupyw
      tcvlgqs wxe lusvwzy unr yzluwvs wsylvzu zkwth qdykv
      hyenkj ugao vlwgb putcepr lyeccs fqdotx burf aqew fje rfbu
      uhmnc zgnkarz gylqawm abl zimcz qbs zzmic
      pxkbpn zuxlwtt rlbhegv zlxuwtt ooxpr pgjx
      leg wavgps fcplfpc xvxih ueskmi dvu wbiq nvtia pwjojw usiemk ojwwjp
      zmrpknx xrfpq avque tvoyqp
      lyposyj mckyoub sqbl olpsjyy hjafzi wmojb nvezofd
      yflxrg egi aij qvc yflxrg typbs yflxrg kliexy eqnj jqrr
      gggt sht kdajvz sht gkqwaot sht vout
      ahl aucpih feig man umtchcv ceqabr tfptb
      ftlywun voaorf kde ilwt hlpoe pksqxyh vpg cxo xgq fdkkl sgxhnq
      zzekhfi akb lupta sgtd qapznzf lgidsx lidsgx akgmq ettuwjq xyumf
      dxhpku lwoxpim gwb lhjmoh gxqapd ntmvc rvwwszg pvin lwoxpim coubc
      qia bxmremo rjf vaeio eqexwz wuoz sguf bsbusof xqeewz
      iczzz krf hbq tsgrih mzjabrt sfnwrm djignf zwac cwaz dgc nsrfmw
      yvarsva zzpbp yai und kkbinr zlyj nyxxof ggrgu vyk eib
      nepzm yrrgr vrlhbv hykmiog natrqx jvpq nbyhe zuo grx nwl
      cfboeev hcn yfobyx cqvlo obctww xxaux ofybxy wouguq avuztl xmgqq xyofby
      tikv uvzp oxopqy reh uzvp wefka vli kied gngks vbz thfsxyt
      exxvknp pucbdyl dboto tzat qze xyinygz mhzl ubahr ekxbtk
      jcz ufszbi pknsfgb ivok ijau okxolj etecn aurun zsa gbxs uryx
      ypnb ousd osg mvset ipffzdn dfinfpz ltescx
      taeoct aoetct aocett ttda fcdqnxv
      bimtlk ssax bmrifkr vfxdmq hglp rgzr zpvk zhxtq rndwy mmr arkr
      bwvdb axxbhzk nwfmbbu kzuc sahv cvas wdac acsv
      xavkwou yvx ouwkxva otbe uzr mmw atq yiy ghavd qta pqlhv
      omzht vsdsc zhtmo hmotz
      eqt wtveez syift shtfnc hmckjxa apwbvn yme okdl hbihdtv hxahns eetvwz
      rokdg ndjw hprxjc viys mbcctod dbvd
      lhzb fyxf xaslmi sjd vqp grxhmfe snetfv mgivd uaknj givkdi
      gxkxl kqcdnl rna jhcuepd npiedg djcpheu huce njryw bjluhq bvedvl kqxu
      sogh uym atpzuwx vjgbe xgrvkg thgbyn mptcebt rkro
      tnpxw uxrqxd lajmsmr tnnlt vrvbf deret hkmvrs eubvkn kks hjq
      rcdoa zfja vod supip dvo
      zbxdo xglqv how mgoq jqrdou pwrminc lidi nfs xglqv lidi
      ldmnp dnqn ahhr tha mvsbsfh rpm rgus faf tjash
      ewrdol jqhfpf rckj mrxlwj redjg bmxprx grla
      rhr jksebwa vtu skwaejb vut
      wrx iqvrjh atrt xrw vtqo tkcasd xedjh zkqrh vvhj
      owc qlzygar uajwwe obzl inxawur
      crbtrf phvy nzipo rctbfr trrcbf
      vwuun wcfhhzo vxxjdt fbf bqtmmhs bffqcna
      wkxfxmv zmrkyh sggw whwcw zukynw
      lsdiy lnbn kblxi qfyib irfl mymrr zqbl
      gwdkeu ghn afry zxoz fary uzntlnk kee xtnop ptnox zngoran
      lgs lsg sgeseiz gsl
      erpoqpi svtnv vsogl uym amzxbs
      jtmodqx yjcsfcl zosugm jrekfdw xxbdqnx fcha
      vio tlfxokx xaoq pydeiq glxsuzm honifvf maiuzsy uizsyam eco
      ophcui saka qyt ltti syw
      qff qff sde ryv
      eiii jazx nlehtx tnhvxl rzvsjo qkupif feypppe tefxr wdjmlc
      pdrr mwuy wccd rxla drpr enbbap
      pclml ubwdbz hfudj gdpujfm ovabv
      uink ffebi wdvhqzs qiympf lqxihty vnsp wdvhqzs hutxkcs lxfuos hutxkcs
      fycoaw palkpz yrkg kappzl ncjym mergg kryg
      eqy npvgh ghafkro piqnogb polacs qye hnvpg
      dxyy udhmz jij tqsuic qxz erctv
      urum nmbr cgek eetmhj gxr oxgukf wzdmvi oibzt fxkoug rcrywcr rglx
      jkp ofej waibl opqhmww ifnczcg jdtkbc lil isc ill mylvuv
      vqbcosk yhhsy gasmj bspx peakt cjtekw hvzo ywe qcvbosk ohzv qddt
      edq llbvsx vedyvlm gou wkecank rkgf ziyrr belgo tbz
      wbome vhzf ztk zaxiu ywjb supuf beq sxq spuuf pufus
      femu ymkdoew kjynct aia
      yjymr orovqj aremii licw bdtnc
      uyade fbx duaye ujtvpn
      yzvp pvzgjp yofcvya gvkkoh cafyvoy mhsm okhkvg
      xuh qkaf dmi imd tzmlce mqkxj qilrc dim cadotvy
      azpqgb kyc aflgyaf laagffy kesmk jzyzaer taf bpkbzdg
      ogd dbdlh dqt zaaloh
      exal vgnfx omu omepvwf szcwq snz bptite bzqyxl khmblyc sse emg
      yqcbwsn aihhf tqck tcqk wqwqy cfez xahpn
      qqbuf lil ies tqu pyxhqp mnfuk azj
      vwma rzdtgl mxbasw nwgjav mwav
      itpjfq rrgyt hralwm fqrig btwcod
      ydjd kmk fvwr wrfv yvhw mkk
      xbsxub yhsj xzbuf ace xubbsx fzuxb vxk
      ttsist vubpf mhwkmtx vlj hdsva kmmhtwx ukxr upfvb tbma fxsrnxl hzwufho
      wckjvz unmtev egxts ihw topvw ptowv rnihhmq
      gpdtl kcric nwg ssbs qah aarp ydsdty ngw
      lzhxbbq oktvcw xbasqe owtmwgp koa gumjie sodwrp hqsw aqh dtgsbb
      xjbyy mxfxa ogvk nqiy qyni ldqwryj niyq jjixc
      uhbul daccgva xtiz dim uhbul yjmakv yjmakv
      huo esajup ouj oju ujo
      eeeu hwvsk jfkmds okhi pogskfm itdlbll
      lpyubo dylpfb iehwug decj ntidy cuygyg lalkb iutu oxgm imn`;
  })();

  const day5 = [2, 2, 1, 2, -3, -4, 2, -4, -6, 0, 1, -10, 0, -10, -1, -6, -11, -14, -2, -7, -12, -18, 1, -6, -18, -11, 2, -19, -4, -18, -7, -8, -28, 0, -3, -13, -29, -28, -16, -15, -1, -33, -6, -6, -27, 0, -3, -22, -47, -46, -34, 0, -49, -33, -19, -3, 0, -8, -37, -43, -28, -11, -18, -29, -44, -19, -42, -40, -61, -2, -25, -52, -69, -57, -9, -52, -24, -48, -11, -27, -72, -45, -14, -46, -56, -15, -75, -67, -11, -18, -43, -32, -39, -59, -47, -61, -28, -33, -14, -60, -1, -18, -60, -50, -14, -95, -101, -103, -7, -9, -48, -110, -28, -29, -73, -41, -13, -57, -67, -30, -65, -97, -59, -118, -119, -101, -35, -41, -123, -41, -109, -1, -58, -118, -107, -1, -35, -2, -27, -7, -92, -117, -109, -121, -83, -61, -114, -112, -77, -145, -18, -91, -2, -101, -106, -92, -145, -4, -156, -108, -60, -95, -81, 0, -37, -112, -132, -112, -94, -3, -117, -155, -160, -112, -43, -72, -106, -110, -108, -124, -132, -180, -109, -12, -107, -86, -181, -59, -168, -57, -179, -143, -146, -46, -82, -19, -30, -150, -164, -178, -152, -197, -66, -139, -179, -31, -194, -146, -141, -205, -52, -12, -194, -112, -44, -144, -13, -99, -48, -73, -80, 1, -91, -125, -74, -108, -43, -101, -212, -160, -152, -93, -85, -122, -88, -64, -26, -64, -209, -39, -102, -200, -195, -61, -85, -80, -137, -98, -5, -217, -94, -200, -88, -170, -201, -91, -25, -29, -92, -237, -139, -146, -194, -4, -250, -227, -33, -212, -72, -144, -73, -185, -101, -115, -168, -72, -50, -88, -179, -271, -83, -205, -193, -171, -142, -86, -154, -172, -44, -234, -77, -198, -54, -270, -6, -166, -265, -194, -221, -1, -251, -220, -54, -285, -268, -22, -168, -16, -116, -189, -120, -84, -273, -140, -292, -254, -167, -190, -147, -51, -50, -143, -204, -233, -87, -80, -321, -112, -81, -234, -209, -15, -315, -68, -58, -283, -332, -74, -252, -187, -187, -220, -334, -108, -163, -262, -327, -330, -89, -265, -254, -108, -140, -104, -104, -245, -306, -69, -75, -297, -351, -198, -3, -318, -221, -185, -211, -151, -221, -352, -95, -301, -30, -365, -237, -344, -157, -173, -358, -25, -325, -108, -48, -335, 1, -121, -277, -284, -121, -97, -99, -315, -74, -263, -366, -20, -329, -288, -284, -247, -236, -196, -104, -347, -24, -83, -134, -322, -74, -199, -101, -272, -313, -129, -94, -60, -309, -60, -287, -308, -187, -125, -14, -324, -3, -358, -199, -152, -91, -60, -300, -316, -90, -54, -60, -307, -216, -231, -373, -228, -111, -365, -352, -87, -359, -411, -293, -26, -1, -159, -324, -210, -308, -251, -201, -367, -119, -448, -239, -275, -215, -294, -104, -298, -196, -43, -43, 1, -174, -200, -358, -395, -328, -340, -9, -350, -2, -466, -127, -9, -158, -161, -345, -71, -410, -189, -287, -334, -377, -39, -316, -153, -169, -155, -459, -328, -289, -443, -339, -442, -5, -1, -416, -395, -493, -364, -295, 1, -270, -496, -280, -19, -49, -216, -142, -492, -511, -285, -113, -237, -322, -402, -254, -366, -281, -501, -368, -159, -527, -289, -441, -268, -118, -246, -154, -116, -294, -39, -218, -306, -196, -225, -435, -298, -456, -380, -163, -489, -408, -137, -410, -128, -499, -484, -195, -202, -547, -364, -347, -304, -473, -208, -474, -384, -437, -104, -310, -109, -378, -517, -330, -324, -87, -100, -351, -275, -376, -7, -128, -378, -452, -383, -270, -309, -281, -351, -183, -213, -68, -183, -503, -36, -584, -359, -482, -152, -404, -3, -460, -397, -559, -441, -356, -251, -448, -229, -49, -27, -164, -430, -327, -514, -485, -164, -255, -453, -143, -484, -263, -19, -348, -190, -49, -610, -77, -347, -30, -382, -486, -42, -550, -39, -75, -523, -258, -77, -552, -196, -234, -504, -133, -308, -629, -81, -359, -429, -251, -115, -192, -459, -353, -68, -471, -630, 0, -345, -566, -434, -638, -550, -79, -557, -289, -170, -495, -575, -584, -407, -382, -540, -641, -202, -378, -32, -652, -573, -372, -107, -396, -202, -554, -675, -141, -437, -588, -194, -205, -186, -58, -8, -624, -63, -499, -540, 1, -215, -579, -305, -690, -412, -540, -488, -168, -174, -645, -655, -509, -336, -430, -591, -304, -300, -472, -40, -100, -154, -38, -315, -492, -179, -198, -605, -310, -458, 0, -74, -186, -463, -354, -627, -341, -360, -380, -527, -656, -42, -643, -691, -460, -404, -118, -332, -36, -486, -519, -511, -611, -711, -482, -384, -327, -470, -112, -302, -479, -732, -506, -179, -512, 2, -525, -616, -161, -702, -348, -359, -354, -680, -548, -707, -215, -379, -412, -589, -687, -276, -758, -86, -489, -609, -429, -12, -779, -243, -146, -696, -668, -576, -247, -280, -785, -683, -659, -232, -45, -115, -744, -687, -642, -222, -531, -111, -644, -712, -623, -569, -778, -610, -389, -186, -112, -457, -62, -543, -43, -59, -431, -578, -280, -576, -302, -482, -108, -504, -405, -370, -328, -145, -277, -484, -622, -80, -242, -750, -668, -509, -481, -824, -265, -107, -718, -296, -792, -377, -532, -774, -599, -528, -630, -665, -428, -419, -722, -303, -18, -89, -845, -548, -109, -715, -55, -74, -493, -123, -452, -713, -515, -382, -633, -450, -61, -108, -520, -42, -498, -48, -750, -652, -88, -152, -852, -215, -839, -353, -349, -306, -710, -90, -120, -360, -402, -336, -656, -510, -649, -31, -698, -344, -125, -502, -589, -289, -604, -600, -270, -508, -51, -862, -670, -211, -117, 1, -835, -101, -125, -858, -156, -565, -861, -36, -732, -667, -3, -189, -19, -452, -327, -750, -678, -80, -155, -428, -446, -206, -698, -895, -321, -267, -492, -830, -101, -355, -610, -426, -242, -376, -871, -495, -3, -319, -718, -632, -590, -90, -791, -52, -692, -54, -86, -705, -174, -853, -31, -774, -172, -962, -168, -123, -590, -817, -379, -355, -101, -647, -696, -950, -859, -178, -546, -829, -378, -669, -837, -11, -577, -942, -674, -267, -474, -284, -617, -892, -568, -274, -790, -661, -277, -379, -741, -949, -681, -202, -681, -6, -50, -930, -367, -590, -498, -120, -737, -393, -765, -344, -937, -271, -766, -920, -204, -621, -714, -17, -554, -1003, -605, -616, -1013, -730, -621, -488, -1022, -163, -38, -418, -920, -155, -286, -969, -426, -370, -153, -940, -1009, -659, -629, -186, -511, -989, -809, -285, -397, -87, -153, -493, -1021, -817, -444, -46, -667, -845, -641, -20, -756, -973, -811, -355, -1042, -329, -400, -297];

  const day6 = [11, 11, 13, 7, 0, 15, 5, 5, 4, 4, 1, 1, 7, 1, 15, 11];

  return [day1, day2, day3, day4, day5, day6];
})();

export default adventOfCodeInput;