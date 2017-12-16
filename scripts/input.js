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

  const day7 = (function() {
      return `apcztdj (61)
    ulovosc (61) -> buzjgp, iimyluk
    awpvs (88)
    ykbjhi (14)
    gxvketg (49)
    gpmvdo (78) -> jjixrr, zacrh, smylfq, fdvtn
    nwpmqu (6025) -> aytrde, grokih, pjqaa, nzzved
    keiakhg (50)
    vkrlz (22)
    myzkj (40)
    zkzpbbp (46)
    eaumqtc (288) -> tvmvvxn, ckcpovl
    htlovrb (1662) -> atxtq, ewsqqum, mjwviex
    aoxky (53873) -> orzwmml, tcvtul, ygszhn
    uhfiqwc (81)
    gziopi (189) -> hboommj, glbipl, evojkum
    rjksjq (66)
    rwyzrl (1434) -> geiethw, nclvb, riphudi
    gmusjd (98)
    vjmwzo (76)
    xymsu (153) -> kbgmlab, yjjewyt
    mgiumh (64)
    cnfcuww (40)
    pgeoixp (211) -> qgrtg, svtcvi, rutmxs
    zwwpva (89)
    otgnir (87)
    vxftbc (60)
    xxpfmp (32) -> cnqemd, jmujchg, yfolyk, zalahl
    tcrcyis (1098) -> tyealpm, dirvqby
    ffjshhj (65)
    powwpec (23)
    gudpriq (171) -> zqxyn, bwxgrhf, dclnnlg
    nzrbmfg (7)
    fgptt (210)
    hpcafa (91)
    urepv (2628) -> qzcqhsk, iqeynjk, fakqhi
    qzcqhsk (516) -> ujjksl, qccwy, cddbi, cvpoqqk, nnhlcn
    riphudi (35)
    nwtvzap (101) -> iwumx, bpazmfd
    xhxctp (84)
    dkpmgrq (94)
    rvftpif (5)
    iqeap (27)
    aplauwh (693) -> rjkzf, nfvns, snhww
    iayrwd (81) -> beidb, lpjxpx, mtvxp, alcfp
    nsuysii (86) -> aktzpym, gdckok
    zbxbe (59) -> ahwtsi, uqjcaa
    yhiwu (37)
    qpcmzl (28)
    jmujchg (48)
    germn (218) -> mbdwm, kjxac
    mxsvay (328) -> stuom, twgcf, mexagfy
    sneog (20)
    rkczq (180) -> mdfae, rrsfv, yycys
    nnbfqh (819) -> guttanj, htmjx, rwlmsx
    nxzafkd (60)
    tptdvct (64)
    mokvas (49) -> ygfcl, xxitunl
    wcztr (133) -> chxurcq, hemhd, siwvncp
    satie (61)
    vcjpuw (43)
    hzcmmh (90) -> ivbwdn, eknlt, nzfjwtq, hwcbsyu, gejaump, xymsu, ebtoke
    jimigk (68)
    vzfebn (196) -> elqlx, lkffdz
    lcwpm (1946) -> jwjuylx, pjmwkz, geajywv, zyqfc
    iimyluk (65)
    zcgaxsi (49)
    elhmwsx (92)
    bxsxr (189) -> msowvgh, zjxlr, yylzxb
    qgrtg (14)
    gnupj (74)
    aktzpym (72)
    gvuwq (88)
    iojjekn (160) -> gnhcs, homrc
    gzdtco (88)
    ospfv (5)
    epovby (14)
    jflns (39)
    hmqam (161) -> tkiheq, flrtvno
    koxyrpn (94)
    witxvcj (44)
    pseltr (70) -> bzqmgl, vlmzfaf
    yrotnfh (68)
    fyqlqkg (19) -> gicwtf, dlxubg, ysrwm, qjnela, djupte, rayzwrp, mgexekz
    eipyu (84)
    hacgqe (54)
    nssvbj (5)
    maugts (7) -> owizuw, dopwkoo, nnbfqh, rwyzrl, kkfio, gzpcl
    uiclmg (14)
    psyem (173) -> tbxxc, bodpwem, lfhmte, pyobp, znnjzzw, pcnbkxm, tolty
    rskopr (68)
    mhihjb (68)
    bfkpjdl (150) -> mpbui, qcqpavg, lwmblwr
    ezotk (50)
    dyadgtm (7) -> zcvzrja, rifmmf
    npipd (20)
    ozqsvif (231) -> stketdd, jpedzjk, vrpoaq, hbollnl
    lxshx (67) -> peocao, vqsxe, tstuc, pqwzgz, ycuajn
    kdersld (98) -> nrarwj, ajyyjfx
    ontcbns (111) -> jptxyhp, zwwpva, ndoecxy
    vyzksry (99)
    sxygbpo (27)
    owayyaw (5346) -> ykvqh, ruejmc, oqrvpt, qmvebxb, macxvi
    paqzzv (60) -> nujgng, krnjk
    qhutc (168) -> ykbjhi, uiclmg
    ofndvr (46)
    vfgomle (56)
    znkru (32)
    eymsjfd (31)
    dvetl (124) -> kdccrl, rtsji
    pvdbhh (96)
    ggilocf (55)
    wjjmh (36)
    zqxyn (14)
    qweyxa (32)
    tiirxay (9)
    avsse (292) -> wchlqxi, griwu
    fmtox (6) -> mrflo, ikpyx, tsfrlzw
    qczgclr (90)
    tajeklj (151) -> kmrbuvq, hiaoc
    kxtzbj (49)
    dopwkoo (990) -> hnrwa, nwtvzap, ruitlxx
    gyqrut (1431) -> pykcza, kxxhn, tipdlf
    eknlt (177) -> erphv, dhahfgv
    pnpge (49)
    teeunu (4569) -> hirvz, mkpgx, dnflzcz
    kkfio (207) -> iayrwd, abofflv, cpsmrch, ndtcui
    wkdxdem (78)
    dnslk (50)
    civkkh (38)
    bzqmgl (91)
    gxtnep (43)
    hemhd (54)
    nzzved (110) -> vexun, sekcqad
    tnejqkf (47)
    jenxqco (14)
    tlsdvhf (79)
    kcltvch (65)
    tqyheu (18)
    csoko (1055) -> hnwpfl, rstsr, icnwzox
    jmgsk (54)
    rayzwrp (244) -> pydrzyk, hbomk
    dmqhi (31)
    wsctytx (26)
    kjxac (65)
    vrryj (177) -> nssvbj, gzlfqg
    vmvdhds (33)
    iuuve (90)
    wbugvc (938) -> hpmynx, cznyy, yjqbsxx, yzcddkw
    hnrwa (78) -> fbzro, iempnd, ojrsv
    inojzm (100) -> zxlfwi, homdmyc
    cvvex (75)
    thumfdk (365) -> hcvvfm, oyuklmp, vtnddpz, egzpkj
    wkqnq (8)
    ulcnxii (59)
    kdccrl (96)
    hpmynx (112) -> kdmprsg, jvdawi
    iempnd (35)
    rqzkom (305) -> bvdqhfs, ubiuve, vqlqq
    stuom (189) -> tffhcft, lzwplw
    bjqzgqj (75)
    ygfcl (69)
    qakcvf (117) -> udvdho, gxtnep
    vxlonb (88)
    tjlsmrz (18) -> pmznzoa, dtifm
    golth (22)
    xdmqa (18)
    xsilcvz (92)
    oudxhh (81)
    homdmyc (25)
    zyrztc (15)
    mmngri (60)
    vqsxe (220) -> prxex, jhggy, zkmdfh
    lyeoeff (74)
    mcnek (54)
    ckcpovl (55)
    vqmeer (359) -> ijbth, phoic
    zhgql (35)
    zalahl (48)
    toccxvy (58) -> ryecm, embmhv, wutkvkd, qlxioka
    sgvbpct (13)
    ubaaa (2460) -> ivkvhf, tjzut
    yxmycw (1258) -> mokvas, lzcant, vrryj
    mxtqhi (286) -> jwpbg, kizufjn
    ofqav (13)
    gqpqzrh (49)
    jgjbcux (23)
    vojblx (143) -> ytcgcq, bltsiq
    qrbiq (7)
    qnofu (64)
    tcvtul (372) -> vxlonb, xcvdoi
    spcpfe (255) -> tseydw, cfdumg
    ohyhw (153) -> xttop, hnocmo
    dqpcn (310) -> witxvcj, qshxib
    btxts (816) -> klgsp, thumfdk, kbothlh
    ezptzx (86)
    dtifm (68)
    gicwtf (254) -> beocjuy, kgfums
    wvawj (59)
    cddbi (255) -> ekrym, cysyc
    rimlwoh (64)
    wutkvkd (25)
    hqlni (74)
    vwzein (18)
    nxrlaw (74)
    nhrla (34394) -> idfyy, nwpmqu, owayyaw
    whotly (17)
    prxex (5)
    mkpgx (468) -> thunt, lujir, xjoid
    qmklslb (19)
    lokvk (67)
    xecai (12)
    mucnt (77)
    daaldt (68)
    rtatr (142) -> xkjzrg, btufku
    hpouwfs (22)
    nclvb (35)
    dnirbtx (49)
    pykcza (52) -> gkbpz, vzbywuf
    djplc (18)
    hflkio (88) -> elhmwsx, iovcix, twffuag, sygcnhv
    nkdtsf (33)
    cvzvo (139) -> gfrwxw, gjphrw
    ilgee (25)
    zyajdwf (273) -> eymsjfd, dmqhi
    rwlmsx (212) -> djsbpg, qrbiq, fnsceun, tdymtd
    uhwtkvo (66)
    hzzlebr (20)
    mundgs (93)
    ytjaofr (149) -> hmfvzi, bzplleg
    epbevf (26)
    ptydckb (47)
    hjuzxv (74)
    eljbay (138) -> rntsalv, llpxo
    kvnom (87)
    qvdrme (205) -> ffjshhj, kcltvch
    zbwrrsc (68)
    jmifnxw (42)
    pfojn (42)
    wgdrxl (85) -> notot, jogicnh
    wxzenj (224) -> swojvy, sidmmmy
    iekjt (91)
    quhxdb (28)
    pydrzyk (50)
    hboommj (21)
    vbiyre (65) -> kdrmsgh, lngffo, dqyifwc
    sqehayt (1007) -> vyzpzww, hmqam, qakcvf, dyadgtm
    keuqd (30) -> zrypv, zogeax, yyjfus
    tyjzoq (24) -> utvyxj, pwuhv, ombqq, inattlb
    xbfmp (37)
    aytrde (56) -> hfvkmf, vyzksry
    oufikpd (23)
    qpfybmv (189) -> znkru, cjlvlm
    hgsdq (288) -> bvxiqzm, jmifnxw, pfojn, bltkr
    nopjkom (1447) -> ayxuibs, krcntq, hbbhm, rehezo
    wtnmryv (92)
    mexagfy (235) -> leoti, uqwbtx
    bmsje (87)
    jkoyzxm (32)
    egzpkj (12)
    hirvz (774) -> cmhoj, eljbay, inojzm
    mxdluii (90)
    unuwu (41)
    ekuohb (24)
    xzqgkqn (87) -> mbqdugj, lujurf
    rzehh (98)
    dqqyiwm (61)
    oqialc (192) -> uhptzfg, quhxdb
    jwjuylx (63)
    ebwifj (14)
    grkauy (39)
    hvizfxx (83)
    pyxypca (64)
    gdckok (72)
    yccfitx (69)
    eisyowo (83) -> jjzbzsb, vbiyre, oqialc, uzxjxjx, tgjdv, ydhoryg, kdersld
    mjwviex (79) -> gnupj, lazcc
    grokih (202) -> wsctytx, qvksmrd
    vpfoaw (36)
    wtxndn (94)
    lazcc (74)
    pxzzw (55) -> dhccilz, rvzppdg, qcwhzgo, htlovrb
    jjzbzsb (88) -> cnfcuww, gtitbbk, myzkj, rfsrdn
    hrjil (71) -> ftmftoa, vdekve, lizqvr, rtkydv
    ddblq (28)
    eedxiav (257) -> jdeqa, tbmflh, zpjxsi, kgamsy
    ywxionz (239) -> gdkll, xecai
    ateol (34)
    hlcahpm (90)
    rntsalv (6)
    zcvzrja (98)
    kbbyj (87)
    btufku (80)
    hygdtn (7)
    yxbwlf (98)
    ivkvhf (9)
    mevvf (60)
    jdeqa (28)
    jhdmh (956) -> qkilfj, xzzar, gkqrml
    qlpft (57)
    delev (30)
    ndoecxy (89)
    lfhmte (334) -> qmklslb, ekcuavb
    fakqhi (1370) -> kqhggwy, zvpaj, zbxbe
    mzvjxgp (41)
    xuqhpz (49)
    rkfknhv (28)
    fbzro (35)
    vrmevdy (35)
    mysslj (49)
    aobgmc (341) -> tajeklj, rkczq, ohyhw, zceovs, gudpriq
    cocplr (67) -> opczxnj, ulcnxii, hjqvntn, wvawj
    fnsceun (7)
    yjqbsxx (122) -> ybtkkgv, fgyjop
    atxtq (181) -> oufikpd, czacja
    qvksmrd (26)
    gqmjvky (137) -> xvhnaf, cwspi
    bpusqb (84)
    ftmftoa (101) -> nlixy, mckkn, rpbawy
    aqshqpo (56)
    xsnmq (46)
    bltsiq (80)
    towwl (54)
    anhldnx (2024) -> kvnom, jbprgm
    ksioqg (8)
    nnunune (227) -> jmgsk, mefyd
    jvdawi (56)
    icnwzox (236)
    qiikh (127) -> zmveluw, ycncnr
    pjmwkz (63)
    pvqid (50)
    fivcv (64) -> pyydxvi, tzoefdo
    zacrh (44)
    smylfq (44)
    qcwhzgo (2040) -> aetlth, kqbrwt, ualcokx
    uwauv (196) -> daojy, sfyqi
    mjfbr (910) -> ruuovw, kghzy, psyem
    efcff (79)
    kzflj (19)
    shethb (91) -> qsgpsfr, fmtox, pseltr, gziopi, ohqlwmr
    yylzxb (6)
    ybtkkgv (51)
    olxmnkc (79) -> wtnmryv, encean
    cysyc (8)
    tkiheq (21)
    xkjzrg (80)
    vtnddpz (12)
    kgfums (45)
    rrlwo (41)
    rujggz (68)
    beidb (63)
    xcvdoi (88)
    xghng (17)
    vmoqov (43)
    pekzuyh (29)
    fheklq (66) -> crdlymr, vgsuq, lqspkzw, wbugvc
    wodhzc (18)
    rlzbv (92)
    ycuajn (185) -> iizggi, ilgee
    zjrpxp (73)
    sogepf (66)
    gbecv (78) -> hlcahpm, mxdluii, qczgclr
    xzvbcms (92)
    wcklpgi (14)
    wuhossn (96)
    dlrfwee (35)
    rfsrdn (40)
    akkrsv (108) -> ontcbns, mrydp, flqjd
    uqjcaa (54)
    ixcxv (49) -> ruvrw, rwqjiz, towwl
    kdrmsgh (61)
    gtxlyzz (32)
    udvdho (43)
    lelvcai (28)
    ivbwdn (121) -> hpocx, bwpqytq
    bvdqhfs (6)
    wrxzti (62)
    yoofo (79)
    oqrvpt (323) -> pyjzb, wkqnq
    bfxdtkg (93)
    yrmmga (36)
    tvmvvxn (55)
    hlhpm (187) -> xqnan, ykubvpo, bxsxr
    ovalfky (66)
    wpner (54)
    gljri (96)
    jpedzjk (153) -> byphua, nxzafkd, ccpek
    ydhoryg (65) -> apcztdj, wfuxy, satie
    zxsgnx (105) -> pnumlg, gouyeqw
    zyqfc (63)
    evxjdeo (57)
    uspfk (54)
    rwqjiz (54)
    griwu (72)
    mcgaqx (68)
    iqzkp (103) -> rkfknhv, lelvcai
    edmsh (77)
    uavzab (17)
    seleq (87)
    wsozlg (7)
    dgvvi (93)
    svbmkbx (196) -> golth, casbq
    szoomk (26)
    bcima (78)
    cyasn (4978) -> hlhpm, fmmhxab, chirgx
    hfvkmf (99)
    fjonxe (73) -> xbfmp, yhiwu, kxchm
    wnoer (81)
    zaouq (96)
    gkqrml (109) -> umitnao, bkcgx
    ppythr (73)
    qozshd (14)
    namzem (66)
    cjlvlm (32)
    ohcfrxm (85) -> xhxctp, wxpmbu
    iqwspxd (897) -> gqmjvky, wyzmc, mbzme
    chirgx (46) -> gpmvdo, fivcv, aelsfhi
    pyobp (78) -> gmusjd, pqfnj, xbhcwe
    kspoky (9)
    gtkqi (56) -> cquptt, cdeji
    twgcf (49) -> lokvk, cpxwa, yovtgg, nzzwed
    plsic (60)
    pmyqol (66) -> ayixid, efcff
    hnmba (22)
    ktbtfdb (56)
    yyjfus (85)
    rvzppdg (45) -> airnuh, mfvqvf, begmhqg, cykvv, wipzuag, fmstmh
    vebyb (30)
    yasoqri (41)
    gjphrw (85)
    caqjohx (25)
    oqiynm (9)
    lydynp (73)
    dclnnlg (14)
    nocugh (81)
    tqzbg (15)
    elqlx (81)
    mckkn (67)
    lujir (152) -> pvqid, keiakhg
    mywhdsm (47)
    oafxzu (27)
    fgumszu (98)
    hnwpfl (89) -> gqpqzrh, nlrwlj, gxvketg
    xrvno (49)
    kjdjj (225) -> keuqd, yompk, grxqt, ocxbgp
    vyzpzww (163) -> npipd, hzzlebr
    oqzcbx (81) -> wuhossn, ebhag, zaouq
    twffuag (92)
    nujgng (82)
    xbhcwe (98)
    bvugv (199) -> xdmqa, qqszul, wodhzc
    vgsuq (1510) -> oanoax, swcxes, qmelelp
    cwflw (27)
    yraktfn (27236) -> pxzzw, igwew, jjzlrku
    iqeynjk (17) -> dccvh, cvzvo, kcjujcr, phqplx, spcpfe, dygrnnf
    vgowu (30) -> mgiumh, pyxypca
    jjzlrku (635) -> fuwbaq, lcwpm, oahpf, anhldnx
    zkmdfh (5)
    dvskig (22)
    zaitni (83) -> iqagnh, ixckwlm, kfvvzd
    ikthp (51)
    jvpob (76)
    cpxwa (67)
    sphwh (88)
    mlbjc (81) -> fylao, ggilocf
    rwmci (63) -> qnofu, rimlwoh
    fluuo (51)
    exvmk (78)
    jgdqi (3125) -> mxsvay, hrjil, fhtktd, qqvgeq
    aplal (124) -> ezotk, mithbv
    gouyeqw (27)
    iqagnh (47)
    xfjafp (78)
    gvaie (153) -> cpwdhw, bjqzgqj
    ijbth (5)
    zduooao (93)
    tjlrb (78)
    emeyn (35)
    zblcbd (34)
    xxtki (88)
    nxgjqaf (1807) -> ubaaa, hjxhx, uyofsmv
    xqnan (87) -> ckbuzb, rutqvq
    xyquxix (70)
    pwuhv (72)
    sygcnhv (92)
    qjlfwtm (19)
    vkkgwbr (8)
    casbq (22)
    zeisn (95)
    rplqlc (63)
    ewsqqum (99) -> mojwgp, zuxgf
    mojwgp (64)
    dexul (230)
    kdmprsg (56)
    amifh (43)
    notot (63)
    byphua (60)
    vfjayw (88)
    gfrwxw (85)
    vrpoaq (41) -> mwzpa, pfhjtw, rthxl, ppythr
    wngqx (26)
    obgmlzf (67)
    daojy (17)
    vxnwq (61) -> kjhrii, ulovosc, ytjaofr, vrgblbn, rwmci, mlbjc, vblppqb
    yzcddkw (40) -> hvnzfbd, hqnonqc
    iiswvjq (62)
    yeerc (68)
    ycncnr (42)
    cmrcpf (294) -> onbptkd, qxsxzth
    zbtlfr (35)
    paqggr (84) -> ettsdu, iekjt
    prfbji (14)
    bodpwem (244) -> jkoyzxm, gtxlyzz, qweyxa, bbqzlo
    ccpek (60)
    buzjgp (65)
    ahwtsi (54)
    ckbuzb (60)
    mrflo (82)
    alcfp (63)
    engay (35)
    fxeka (18)
    ohqlwmr (112) -> tdcxeia, maaid, fiygpep, zhgql
    iizggi (25)
    qcqpavg (364)
    siwvncp (54)
    lpjxpx (63)
    ryecm (25)
    xrsaryj (115) -> qcrxve, iuuve
    dterxr (244) -> hfxmz, mpble
    kcjujcr (207) -> eyavk, ikthp
    sjommm (98)
    lneqx (456)
    dccvh (201) -> uipvt, iqeap, gbuilbn, oafxzu
    duzorty (20)
    mdfae (11)
    pmavka (48)
    ekrym (8)
    logpgb (2713) -> wamxgvn, ozqsvif, olnpj
    pxrxqs (78)
    thunt (94) -> tlsdvhf, yoofo
    ogkucp (84)
    xroaal (43)
    czacja (23)
    xbaytg (5)
    embmhv (25)
    ahsef (41)
    cfbjnxb (799) -> ujpka, fjonxe, slacopj
    itusrhj (277) -> gscng, pekzuyh
    vhruv (34)
    fdvtn (44)
    flrtvno (21)
    fiygpep (35)
    fhtktd (1103) -> xxtki, pgnulg
    dirvqby (72)
    codroxx (49)
    fswirnb (98)
    rvzqqr (290) -> wafsr, pwhrvu
    peocao (235)
    drleu (70)
    ygszhn (86) -> lnuqdd, tjlsmrz, yomawy
    ixbxszv (43)
    nzfjwtq (67) -> douggpq, ezptzx
    wfmxgw (98)
    gzuqs (80)
    ujpka (84) -> bhpvfr, dnslk
    ebjpdvd (19)
    mykkoc (91)
    pyydxvi (95)
    prybce (62)
    smpmp (9)
    nfvns (183)
    rvqubk (81)
    ezvdo (74)
    gdkll (12)
    tzoefdo (95)
    vzdmsv (224)
    vcusbhv (196) -> ospfv, wfvtfos, yjdsnqu
    beocjuy (45)
    zjxlr (6)
    dlxubg (344)
    kfvvzd (47)
    zrypv (85)
    aonpk (25)
    icsrp (14)
    pjthjam (286) -> ofqav, sgvbpct
    fgyjop (51)
    rstsr (68) -> xnleu, gfvjqj
    xgrjpl (92)
    rlzobr (89) -> ctifv, ffevqd, kbbyj, otgnir
    vbvctl (87)
    lqspkzw (90) -> rvzqqr, avsse, rocllr, cpiscj
    mbqtji (392) -> paqjozd, wsbpne, tncexxs
    vuumtry (63)
    zpjxsi (28)
    cykvv (247) -> yeerc, qfyrdo
    chgpk (281) -> sxygbpo, hkyqakf
    wchlqxi (72)
    lzwplw (64)
    daonbjx (790) -> ohcfrxm, yinhnv, bvugv, pgeoixp, qpfybmv
    ffevqd (87)
    gnhcs (78)
    yjdsnqu (5)
    vjugmg (73) -> qekol, jjdcuql, atdrk, rqzkom
    swcxes (60) -> bzwhd, ekuohb
    hmfvzi (21)
    wwcrqwq (54)
    iezlg (71) -> maugts, nxgjqaf, liibv, qrvmp, nwyqp, mjfbr
    erphv (31)
    vpxbz (48) -> qaalu, gtutr
    sbsustu (91)
    uvwnhot (14)
    mbdwm (65)
    cwspi (15)
    fnvxe (104) -> bwmckc, vxftbc
    qmxjyg (56)
    hkyqakf (27)
    uyofsmv (1214) -> ukdbm, iojjekn, dterxr, dvetl
    glbipl (21)
    yjjrrjj (93)
    xnleu (84)
    dyeffd (64)
    mpbui (52) -> bcima, yowna, hvpzbd, smzzu
    hvnzfbd (92)
    vguwn (40)
    tdcxeia (35)
    dhccilz (471) -> wxzenj, tyjzoq, azrdj, mxtqhi, pjthjam, zzjicx
    mfvqvf (355) -> rcdic, ebwifj
    qsjue (81)
    kgnbx (56)
    efsdxm (74)
    niojmd (95)
    uzxjxjx (68) -> plsic, mmngri, mevvf
    drbjnk (99)
    hqnonqc (92)
    opczxnj (59)
    iwumx (41)
    jwpbg (13)
    aetlth (7) -> tnejqkf, mywhdsm
    ujjksl (169) -> ixhsq, fluuo
    ygqjcm (74) -> uqpxyi, uxmfcyr, oudxhh, iktols
    oyjjdj (678) -> svbmkbx, lxpkrf, vayyag
    pnumlg (27)
    hbyxgv (94)
    ivhzxr (14)
    geajywv (63)
    kjhrii (135) -> ddblq, ehkhs
    rehezo (56) -> vuumtry, rplqlc, zcakvl
    gunfz (80)
    airnuh (369) -> hygdtn, nzrbmfg
    ruejmc (283) -> icsrp, ivhzxr, uvwnhot, jakny
    ikpyx (82)
    zxlfwi (25)
    ocxbgp (285)
    qfsbvqe (39)
    htmjx (48) -> tptdvct, smhzr, dyeffd
    ukdbm (44) -> rskopr, rujggz, mhihjb, jimigk
    lqtuij (66)
    jogicnh (63)
    vqlqq (6)
    bkcgx (80)
    fxsmo (85)
    icoiqa (256) -> ljscsoa, sxqnium
    ehhrom (334) -> aqshqpo, kgnbx
    tgrfyrx (6071) -> urepv, ippmv, yvirt, mofdlro, teeunu, jgdqi
    kttzsv (49)
    hpmag (88)
    jjixrr (44)
    rjkzf (147) -> fxeka, pealz
    rtsji (96)
    wfuxy (61)
    dzjef (22)
    gfvjqj (84)
    lslsl (28)
    lizqvr (101) -> zaeyze, ppbgib, obgmlzf
    rcdic (14)
    ykiwb (105) -> drbjnk, vwokfc
    dygrnnf (153) -> pxrxqs, xfjafp
    csbdh (28)
    tffhcft (64)
    eilgcny (62) -> ldfybwl, gzuqs, gunfz
    hfxmz (36)
    spqwtg (1089) -> foaubeo, ehhrom, fcuhw
    gtitbbk (40)
    wsbpne (15)
    gpcxuo (81)
    cpsmrch (333)
    fhmkuo (266) -> zeisn, niojmd
    ckifyf (23)
    ppbgib (67)
    titychs (25909) -> fqmyi, logpgb, cyasn, fheklq
    hlyfdr (26)
    zmveluw (42)
    kqhggwy (167)
    cakob (96)
    wipzuag (187) -> rerviwo, sjommm
    hvpzbd (78)
    vexun (72)
    fuwbaq (13) -> ytzrx, pwyiwkf, rlzobr, mbqtji, jpnfrsb
    fqmyi (3349) -> wxirji, cfbjnxb, shethb
    xbgmzxd (144) -> wsozlg, lzqtms
    paqjozd (15)
    jakny (14)
    susknu (81)
    olnpj (87) -> rhsdbfh, vqmeer, oqzcbx, eedxiav
    hjrzrli (62)
    tjzut (9)
    kizufjn (13)
    iduxx (9)
    wfvtfos (5)
    dhahfgv (31)
    oahpf (630) -> pmyqol, zaitni, xxpfmp, aplal, vzdmsv, paqzzv, fnvxe
    utvyxj (72)
    andixsk (39)
    nglumw (49)
    cdeji (59)
    ynxfzsu (73) -> amifh, xroaal
    hpljf (37)
    oanoax (52) -> csbdh, tfdjhaa
    jbxcafx (97) -> qlpft, evxjdeo
    xaplszi (689) -> qgbtnil, icoiqa, vzfebn
    sbtyi (91)
    wnhmooe (37)
    qekol (35) -> gljri, cakob, pvdbhh
    lkffdz (81)
    hjxhx (42) -> germn, ycrxr, cmrcpf, tbrxke, gbecv, wnakg, epdqjdp
    ualcokx (35) -> nkdtsf, vmvdhds
    hwofq (37) -> izjbi, dqqyiwm
    bzmra (34)
    gnuywz (30)
    rutqvq (60)
    kvgrf (38)
    rpbawy (67)
    uunjwu (70)
    nlrwlj (49)
    ettsdu (91)
    pyjzb (8)
    ehhlk (75)
    vdekve (292) -> xbaytg, rvftpif
    ycrxr (312) -> twvlr, djplc
    pdewbw (74)
    xzzar (239) -> tqzbg, zyrztc
    hwcbsyu (167) -> wjjmh, uwwyv
    msowvgh (6)
    jptxyhp (89)
    ulkzj (39)
    ytzrx (275) -> uspfk, wpner, wwcrqwq
    lunivx (78)
    tfdjhaa (28)
    lzqtms (7)
    qsgpsfr (96) -> utneufs, exvmk
    qmvebxb (43) -> hjuzxv, nxrlaw, pdewbw, hqlni
    qkilfj (99) -> mohya, fxsmo
    twvlr (18)
    fejmhpg (190) -> kvgrf, civkkh
    lzcant (149) -> gnoywf, ebjpdvd
    fcuhw (390) -> qpcmzl, ujdil
    qlxioka (25)
    tyealpm (72)
    ndbzyu (68)
    djqtfp (68)
    wlbua (48)
    xuhchjm (80)
    mwzpa (73)
    dqyifwc (61)
    tovvj (8)
    rthxl (73)
    bhpvfr (50)
    geiethw (35)
    yinhnv (22) -> mucnt, edmsh, apgzt
    abofflv (105) -> vjmwzo, jvpob, ddpmrsd
    ayxuibs (89) -> kgxseg, tjlrb
    ebcygk (42) -> cehqdz, qmxjyg, pwpmx
    ebhag (96)
    pqwzgz (189) -> jgjbcux, powwpec
    pmznzoa (68)
    fylao (55)
    bbqzlo (32)
    chxurcq (54)
    egdccd (54)
    yghyn (72)
    zuxgf (64)
    apgzt (77)
    ujdil (28)
    lwmblwr (208) -> ingwpue, jfwho
    oyvaqjr (80)
    maaid (35)
    pcnbkxm (93) -> bfxdtkg, zduooao, mundgs
    gscng (29)
    tolty (336) -> vwzein, tqyheu
    nzzwed (67)
    ruhyv (29)
    wxpmbu (84)
    izjbi (61)
    jbprgm (87)
    jpnfrsb (290) -> codroxx, xrvno, pnpge
    hcvvfm (12)
    yowna (78)
    mithbv (50)
    qcxfwey (81)
    pgnulg (88)
    bxucoyp (70)
    sxqnium (51)
    bzwhd (24)
    tbrxke (250) -> kxtzbj, zfuqmcg
    hnocmo (30)
    hbollnl (225) -> qrbvsw, mcnek
    pfhjtw (73)
    mrydp (324) -> vswcvmu, cwflw
    envbl (113) -> ehhlk, cvvex
    swojvy (44)
    gzlfqg (5)
    vblppqb (164) -> qhwkoc, oqiynm, kspoky
    rocllr (88) -> tvixzc, seleq, bmsje, vbvctl
    vlmzfaf (91)
    jfwho (78)
    llpxo (6)
    pwhrvu (73)
    kxxhn (126) -> ahsef, rrlwo
    evojkum (21)
    cpiscj (436)
    qhwkoc (9)
    grxqt (233) -> mtzvap, wngqx
    rhsdbfh (185) -> rlzbv, xgrjpl
    mbqdugj (62)
    aelsfhi (58) -> rzehh, fswirnb
    douggpq (86)
    ysrwm (206) -> zkzpbbp, xsnmq, ofndvr
    fjtgkp (78)
    tsfrlzw (82)
    kghzy (1262) -> gvaie, ykiwb, wztfz, vojblx, cocplr
    gzpcl (1291) -> qgzaj, wrxzti, hjrzrli, qklbf
    ykryfdg (1297) -> aoqukac, gtkqi, cjhcn
    kqitg (203) -> gnuywz, wwolc
    bwmckc (60)
    yovtgg (67)
    irducr (56)
    encean (92)
    tseydw (27)
    tyhtbv (28)
    macxvi (179) -> oyvaqjr, arqvl
    qklbf (62)
    hpocx (59)
    qccwy (85) -> yjjrrjj, dgvvi
    mehtsc (84)
    djupte (20) -> wnoer, qcxfwey, rvqubk, gpcxuo
    meuyumr (810) -> vpxbz, mhpbfn, qhutc
    crdlymr (1705) -> ixbxszv, vcjpuw, vmoqov
    suhcj (14)
    lujurf (62)
    pjqaa (118) -> bzmra, ateol, zblcbd, qwtlvuj
    ddpmrsd (76)
    foaubeo (70) -> hbyxgv, totzxaf, dkpmgrq, wtxndn
    ykubvpo (133) -> hpljf, wnhmooe
    ljscsoa (51)
    wztfz (269) -> whotly, evpryza
    qaalu (74)
    zzjicx (146) -> hvizfxx, xlukbym
    ykvqh (305) -> uavzab, xghng
    tbmflh (28)
    bpazmfd (41)
    bwxgrhf (14)
    vswcvmu (27)
    nnhlcn (201) -> emeyn, vzyxst
    vzyxst (35)
    qrvmp (426) -> xaplszi, jhdmh, hzcmmh, kkhvw, csoko
    kmrbuvq (31)
    uqpxyi (81)
    tstuc (59) -> sphwh, hpmag
    kbothlh (149) -> uhwtkvo, ovalfky, lqtuij, sogepf
    xvhnaf (15)
    qzsjiw (40)
    krnjk (82)
    rifmmf (98)
    cnqemd (48)
    ombqq (72)
    xmvxrop (48) -> eaumqtc, dqpcn, ygqjcm
    pwpmx (56)
    jhggy (5)
    ruvrw (54)
    qcrxve (90)
    ldfybwl (80)
    eyavk (51)
    smhzr (64)
    mtvxp (63)
    gmcebvw (26)
    hpbbqmn (84)
    wafsr (73)
    homrc (78)
    znnjzzw (8) -> sbsustu, sbtyi, clzgzgc, mykkoc
    umitnao (80)
    tncexxs (15)
    qwbkv (92)
    tipdlf (61) -> dnirbtx, kttzsv, mysslj
    wnakg (166) -> hpcafa, emecx
    fxzvbzr (51) -> qqbdtow, xuhchjm
    tgjdv (80) -> ogkucp, bpusqb
    hiaoc (31)
    onbptkd (27)
    yhovo (78)
    zogeax (85)
    qqbdtow (80)
    leoti (41)
    yomawy (154)
    qfyrdo (68)
    rerviwo (98)
    liibv (8767) -> toccxvy, xbgmzxd, vgowu
    uxmfcyr (81)
    cfdumg (27)
    emecx (91)
    hbbhm (137) -> hacgqe, egdccd
    zvrld (46) -> xsilcvz, evxjdo
    ixckwlm (47)
    ruitlxx (67) -> jbiaxln, ekfwsv
    wwolc (30)
    ixhsq (51)
    rutmxs (14)
    sekcqad (72)
    haeee (400) -> qozshd, prfbji, jenxqco, wcklpgi
    uqwbtx (41)
    phoic (5)
    kqbrwt (43) -> ruhyv, xxpauyc
    btzbl (78)
    ziock (49)
    yycys (11)
    tvixzc (87)
    frucbsg (69)
    ruuovw (41) -> hflkio, lneqx, fhmkuo, haeee, jvefqe, hgsdq
    wamxgvn (511) -> ywxionz, olxmnkc, kqitg, envbl
    qrbvsw (54)
    evpryza (17)
    zjxyreo (34) -> gvuwq, awpvs
    sfyqi (17)
    gtutr (74)
    ctifv (87)
    yjjewyt (43)
    mofdlro (789) -> aplauwh, tcrcyis, bfkpjdl, akkrsv, lxshx, xmvxrop
    hjqvntn (59)
    wxirji (553) -> pmvdtmm, fejmhpg, paqggr
    qgzaj (62)
    qqszul (18)
    kgxseg (78)
    iktols (81)
    orzwmml (478) -> engay, zbtlfr
    gkbpz (78)
    inattlb (72)
    jjdcuql (183) -> xyquxix, uunjwu
    kkhvw (1133) -> zjxyreo, fgptt, ebcygk
    rrsfv (11)
    atdrk (285) -> kzflj, qjlfwtm
    nrarwj (75)
    tdymtd (7)
    bvxiqzm (42)
    ehkhs (28)
    cvpoqqk (211) -> delev, vebyb
    owizuw (62) -> ixcxv, qiikh, wgdrxl, xzqgkqn, vcusbhv, fxzvbzr, jbxcafx
    kgamsy (28)
    cmhoj (12) -> frucbsg, yccfitx
    kbgmlab (43)
    epdqjdp (244) -> epbevf, hlyfdr, szoomk, gmcebvw
    vrgblbn (191)
    ndtcui (239) -> umymwd, ptydckb
    xjoid (154) -> xuqhpz, nglumw
    mefyd (54)
    cpwdhw (75)
    jwasx (246) -> tyhtbv, lslsl
    pwyiwkf (281) -> wkdxdem, yhovo
    xcndr (8)
    yvirt (960) -> nopjkom, spqwtg, fyqlqkg
    xttop (30)
    nwyqp (1965) -> yxmycw, sqehayt, eisyowo, ykryfdg
    clzgzgc (91)
    agsrs (185) -> qsnjuqh, wcztr, xrsaryj, ifqsqyz
    ojrsv (35)
    gnoywf (19)
    wyzmc (97) -> dlrfwee, vrmevdy
    tesql (72)
    ejsitta (83) -> mehtsc, hpbbqmn, eipyu
    ekfwsv (58)
    xxitunl (69)
    jvefqe (339) -> ulkzj, jflns, grkauy
    vwokfc (99)
    mtzvap (26)
    vzbywuf (78)
    cquptt (59)
    fmstmh (383)
    qgbtnil (86) -> daaldt, ndbzyu, yrotnfh, djqtfp
    qshxib (44)
    nclav (91) -> vhruv, vjnejlj
    azrdj (176) -> zbwrrsc, mcgaqx
    cehqdz (56)
    zfuqmcg (49)
    tkhjz (73)
    pealz (18)
    hbomk (50)
    oyuklmp (12)
    klgsp (89) -> uhfiqwc, susknu, nocugh, qsjue
    uwwyv (36)
    mhpbfn (196)
    krcntq (165) -> duzorty, mcvuku, sneog, bnetz
    dkvqe (222) -> qzsjiw, vguwn
    ingwpue (78)
    smzzu (78)
    bzplleg (21)
    uhptzfg (28)
    qwtlvuj (34)
    arqvl (80)
    bnetz (20)
    yfolyk (48)
    flqjd (84) -> yxbwlf, fgumszu, wfmxgw
    igwew (5332) -> kjdjj, agsrs, vjugmg
    vjnejlj (34)
    svtcvi (14)
    lnuqdd (154)
    evxjdo (92)
    vvtfwwb (74)
    snhww (39) -> yghyn, tesql
    cjhcn (124) -> aonpk, caqjohx
    iovcix (92)
    mgexekz (212) -> namzem, rjksjq
    ajyyjfx (75)
    bwpqytq (59)
    nvmqchp (23)
    asosowy (56)
    guttanj (208) -> tovvj, vkkgwbr, xcndr, ksioqg
    utneufs (78)
    zcakvl (63)
    begmhqg (87) -> lyeoeff, efsdxm, vvtfwwb, ezvdo
    pmvdtmm (220) -> ckifyf, nvmqchp
    fmmhxab (13) -> zxsgnx, iqzkp, ynxfzsu, hwofq, nclav
    zaeyze (67)
    djsbpg (7)
    rqwgj (15) -> nhrla, titychs, tgrfyrx, aoxky, iezlg, yraktfn
    lxpkrf (196) -> vkrlz, dvskig
    nlixy (67)
    gbuilbn (27)
    vayyag (56) -> qwbkv, xzvbcms
    qsnjuqh (61) -> btzbl, lunivx, fjtgkp
    aoqukac (50) -> iiswvjq, prybce
    ekcuavb (19)
    tbxxc (372)
    ippmv (21) -> btxts, daonbjx, zebuqzh, gyqrut
    zvpaj (69) -> zcgaxsi, ziock
    bltkr (42)
    dnflzcz (16) -> dkvqe, eilgcny, rtatr, jwasx
    jbiaxln (58)
    qmelelp (80) -> epovby, suhcj
    mpble (36)
    ebtoke (143) -> pmavka, wlbua
    pqfnj (98)
    kxchm (37)
    cznyy (224)
    ytcgcq (80)
    phqplx (85) -> asosowy, irducr, ktbtfdb, vfgomle
    umymwd (47)
    zceovs (25) -> koxyrpn, emhnlu
    rtkydv (83) -> zjrpxp, lydynp, tkhjz
    ayixid (79)
    xlukbym (83)
    stketdd (157) -> gzdtco, vfjayw
    yompk (162) -> unuwu, yasoqri, mzvjxgp
    slacopj (44) -> bxucoyp, drleu
    emhnlu (94)
    mbzme (101) -> hpouwfs, hnmba, dzjef
    mohya (85)
    totzxaf (94)
    ifqsqyz (223) -> vpfoaw, yrmmga
    lngffo (61)
    xxpauyc (29)
    qxsxzth (27)
    zebuqzh (45) -> ejsitta, chgpk, zyajdwf, itusrhj, nnunune, qvdrme
    ubiuve (6)
    mcvuku (20)
    uipvt (27)
    qqvgeq (359) -> zvrld, nsuysii, uwauv, dexul
    gejaump (212) -> iduxx, tiirxay, smpmp
    sidmmmy (44)
    qjnela (266) -> andixsk, qfsbvqe
    idfyy (51) -> vxnwq, meuyumr, oyjjdj, iqwspxd, aobgmc`;
  })();

  const day8 = (function(){
    return `y inc 497 if n <= 3
    ig inc -54 if es < 9
    j dec 278 if low < 10
    nm inc -531 if tr == 0
    tq inc 537 if tq < 9
    txm dec 835 if s != -8
    xho dec -204 if vv < 6
    ipq dec 59 if txm != -835
    vv dec -259 if xho <= 210
    tq inc 364 if qen != -7
    xho inc -198 if xho < 205
    afo dec -182 if j == -278
    qen inc 774 if ntk == 4
    cwp dec -414 if tr < 4
    vv dec -696 if ntk == 0
    low dec 851 if n == 0
    tq inc -132 if t > -10
    mux dec 626 if j >= -283
    wby dec 759 if vv >= 950
    qen inc 853 if j >= -283
    qen inc -571 if tr != 0
    ntk inc 213 if n == 0
    qen dec 714 if qen == 853
    es inc -936 if qen == 139
    tq inc -496 if vv >= 955
    tr dec -242 if afo > 175
    tr inc 937 if ipq == -8
    es inc 543 if wby <= -752
    s dec -670 if low >= -860
    vv inc 858 if ig == -46
    ixp inc 292 if zhz >= -5
    zhz dec 628 if xho != 8
    wby dec 538 if tr == 242
    y dec -183 if j > -287
    ig inc -804 if mux >= -633
    afo inc -89 if ig >= -862
    low dec -423 if vv == 951
    vv inc 144 if vv == 955
    cwp inc 317 if s <= 677
    ipq dec 963 if cwp < 731
    mux dec -663 if vv <= 1091
    qen inc 522 if ipq == 0
    nm inc 940 if t >= -7
    low inc -847 if ixp != 290
    ig inc 112 if t < 2
    tr dec -910 if ntk == 213
    afo dec 445 if nm == 409
    zhz inc 93 if tq < 279
    s dec 902 if jaq <= 2
    ixp inc -250 if n != -4
    mux inc 41 if es < -385
    ntk dec -326 if vv < 1102
    wby inc -735 if mux == -585
    jaq dec -794 if afo >= -352
    tr inc -212 if n > -7
    y inc 132 if tr < 948
    tq dec -72 if cwp <= 738
    wby inc -154 if txm > -840
    jaq dec -138 if xho != 4
    ixp inc 201 if cwp > 729
    tq dec 322 if wby < -2185
    ig inc 333 if afo <= -344
    nm dec 688 if tq < 31
    nm dec 204 if jaq != 931
    ig inc -650 if qen > 658
    t inc -269 if ixp != 239
    vv inc 925 if vv > 1096
    ntk inc -763 if ig != -1054
    t dec 50 if ipq < 8
    es inc 437 if tr <= 947
    wby dec -465 if s > -240
    tq inc 374 if mux == -585
    ipq inc 26 if afo >= -355
    cwp dec 507 if j != -272
    j inc -521 if ntk >= -229
    wby inc 822 if jaq == 932
    n dec 782 if low >= -1702
    y dec -376 if nm != -481
    y inc 402 if cwp == 224
    zhz dec -396 if j >= -807
    txm inc 679 if n >= -789
    xho inc -680 if mux <= -585
    ig dec 716 if tq != 397
    n inc -392 if nm > -479
    xho inc -142 if j <= -801
    jaq dec 33 if tr < 942
    y dec 822 if cwp <= 228
    jaq dec 554 if low >= -1698
    low dec -208 if s >= -239
    ntk inc 219 if es == 44
    mux dec 895 if jaq > 335
    es inc 832 if ntk < 0
    vv dec 68 if cwp > 231
    cwp dec -357 if y <= 776
    es dec 969 if es < 886
    nm dec 268 if txm <= -158
    vv dec 702 if ipq > 24
    tr dec -150 if mux > -1482
    cwp dec -591 if low != -1483
    cwp dec -404 if tr >= 1089
    mux inc -586 if ipq > 19
    xho inc -80 if n >= -784
    tr dec -933 if cwp >= 1575
    qen inc 512 if txm >= -160
    n inc 206 if low > -1493
    ixp inc -157 if n == -576
    es inc -285 if s < -222
    j dec -594 if qen >= 1164
    xho inc -7 if es == -380
    afo dec -475 if tq <= 406
    ixp dec -542 if ixp == 93
    xho dec 394 if zhz == -144
    xho inc 263 if afo >= 121
    zhz dec 393 if low <= -1482
    xho inc -100 if j >= -212
    ntk dec 748 if jaq == 345
    nm inc -477 if y <= 770
    mux inc -256 if xho == -591
    j dec 698 if low != -1490
    vv dec 857 if jaq == 345
    ntk inc -133 if mux >= -2331
    mux inc -570 if tr <= 2028
    t dec 35 if ntk <= -886
    ixp inc 437 if j != -207
    ipq inc -200 if txm < -156
    j inc -968 if ig == -1063
    j inc -250 if n > -580
    zhz inc 794 if zhz <= -527
    vv dec -413 if cwp > 1569
    nm dec -698 if ntk != -878
    jaq inc -937 if vv <= 884
    afo dec -121 if ig < -1071
    low inc -887 if cwp >= 1576
    nm inc -290 if n != -577
    vv dec -13 if t != -354
    tq dec 240 if n != -576
    y inc -173 if j > -1428
    xho inc -348 if ipq <= 20
    wby inc -385 if ig <= -1055
    ntk dec 570 if txm < -154
    j inc -55 if qen < 1182
    xho dec 9 if txm <= -148
    s inc 212 if afo != 118
    low dec 51 if wby <= -1292
    xho inc -81 if zhz != 262
    zhz dec 190 if s != -12
    low inc 475 if tr >= 2032
    zhz dec -876 if txm < -164
    txm inc 792 if tr <= 2030
    zhz inc 643 if s != -22
    afo inc 594 if nm < -542
    y inc 31 if tr < 2014
    xho inc 435 if qen > 1179
    y dec -512 if tq == 397
    y dec -186 if wby < -1278
    t inc -194 if zhz != 718
    tr dec 629 if y < 1295
    xho dec -804 if jaq > -601
    tq dec -581 if wby >= -1285
    nm inc -172 if tr <= 1397
    jaq dec 579 if vv < 876
    vv dec -666 if ntk != -1456
    tq dec 795 if cwp <= 1585
    tq dec -62 if ntk >= -1464
    vv dec 779 if qen >= 1171
    ntk inc 815 if tq > 249
    zhz dec 11 if ntk == -1456
    xho dec 765 if j > -1480
    zhz dec -694 if cwp <= 1583
    low inc 795 if tq <= 248
    n inc 756 if ntk != -1464
    cwp inc -300 if t > -551
    ipq dec 858 if xho > -564
    ixp inc 975 if n >= 172
    mux inc 954 if ixp > 1489
    zhz inc 552 if qen >= 1169
    ixp dec -398 if txm <= 642
    wby inc -643 if ixp > 1886
    y dec -978 if vv >= 95
    mux inc 853 if nm <= -720
    low inc -886 if mux > -1086
    zhz dec -990 if jaq != -587
    low inc 111 if es > -379
    cwp dec 416 if y <= 2273
    zhz dec 742 if ntk < -1452
    es inc -655 if es == -378
    vv inc 81 if wby > -1932
    tr inc -572 if tr == 1394
    qen dec -217 if wby > -1928
    ig dec -562 if y >= 2269
    qen dec 422 if wby < -1920
    ig dec 146 if nm >= -730
    afo inc -5 if txm < 638
    qen dec -747 if j == -1478
    ixp dec -197 if ipq == -832
    tq dec 63 if mux <= -1093
    tr dec -194 if y <= 2266
    qen inc -894 if nm != -731
    tr dec -258 if es < -1028
    mux inc 290 if s >= -25
    n inc 653 if tr == 1080
    xho dec -724 if jaq == -584
    wby inc -941 if ixp >= 2086
    j inc -918 if j > -1471
    es dec -179 if zhz != 2198
    txm inc -726 if tq <= 251
    j dec 875 if ntk <= -1448
    tr inc -499 if ig > -642
    j dec -440 if cwp != 853
    ipq inc -325 if zhz >= 2197
    mux dec 200 if j > -1921
    vv inc -51 if es <= -1026
    vv dec -96 if n != 833
    t inc 598 if ntk > -1457
    jaq inc -465 if vv >= 129
    jaq dec -642 if n <= 830
    mux dec 752 if nm > -727
    xho inc -607 if nm < -717
    xho inc 453 if jaq < -1060
    mux inc -465 if vv > 122
    xho inc -669 if vv < 135
    tr inc -789 if vv > 121
    low dec 65 if zhz >= 2204
    low dec -161 if mux >= -2210
    tr dec -559 if nm < -719
    tq inc -414 if ipq != -1157
    tr inc -290 if tq <= 247
    low inc 435 if cwp == 860
    vv dec -621 if cwp >= 853
    ig inc -488 if t >= 50
    wby dec 849 if ixp == 2093
    xho dec -948 if mux < -2206
    ipq inc 78 if mux != -2211
    qen dec -912 if ipq > -1080
    ixp dec -49 if ntk > -1459
    qen inc 882 if j == -1913
    txm dec 426 if qen == 2615
    n dec -105 if txm <= -510
    y dec -757 if tq == 235
    y dec 786 if j < -1906
    xho inc 283 if y != 1485
    vv inc 346 if j != -1912
    afo inc -849 if nm == -724
    j inc -270 if n > 937
    n dec -907 if txm == -520
    wby inc -682 if ixp <= 2140
    vv dec -617 if xho <= -886
    y dec -97 if afo <= -136
    wby inc 762 if ntk != -1455
    es dec -39 if afo >= -143
    afo inc 91 if tq == 245
    vv inc -974 if xho >= -892
    j dec 758 if afo == -46
    ig dec 129 if es == -994
    y inc 947 if tq < 246
    qen dec -15 if cwp < 868
    es inc -430 if zhz != 2193
    j dec 132 if ntk != -1456
    zhz inc -779 if y == 2529
    cwp dec -382 if cwp == 866
    mux inc -872 if jaq <= -1058
    ixp inc -321 if ig >= -1273
    tr inc -56 if ixp > 1814
    wby inc -250 if wby >= -2955
    es dec 771 if ntk < -1448
    tq inc 830 if s > -25
    ixp dec 255 if qen >= 2629
    y inc -322 if mux != -2215
    ipq inc -154 if xho == -889
    wby dec -975 if ig >= -1267
    zhz inc 159 if mux <= -2209
    nm dec 178 if vv > 735
    xho dec 998 if ntk != -1464
    ig inc 106 if mux == -2212
    jaq dec -414 if cwp >= 856
    ixp inc 139 if low == -1922
    ixp dec 283 if cwp <= 869
    ixp dec -457 if wby <= -2229
    low dec 684 if mux <= -2205
    afo inc -823 if ntk <= -1451
    n dec 979 if j == -2939
    j dec 185 if mux <= -2204
    mux dec 794 if vv <= 731
    low inc -240 if j != -3130
    ixp dec -563 if wby > -2238
    mux inc -791 if ig >= -1161
    txm dec -765 if ntk == -1456
    ipq inc 570 if tq == 1075
    j dec 341 if ntk == -1456
    afo inc -960 if tr != 496
    y inc -354 if t == 50
    wby inc -461 if ipq > -656
    mux dec 968 if jaq < -636
    wby inc 535 if afo <= -1826
    wby inc -140 if nm > -909
    zhz inc -247 if es < -2194
    es dec 832 if afo >= -1819
    cwp dec -172 if ig > -1160
    ntk dec 767 if wby >= -1841
    afo dec 999 if s < -16
    txm inc 562 if mux > -3972
    zhz inc -463 if tq > 1069
    zhz dec 628 if wby < -1830
    vv dec -217 if j < -3474
    s inc -201 if tq < 1066
    txm inc -972 if es >= -2203
    tq dec 720 if xho < -1879
    t inc 268 if wby < -1831
    cwp inc -213 if y < 1859
    afo inc 674 if txm == -161
    n inc 360 if ixp == 2442
    tq inc -328 if cwp <= 822
    y inc -500 if low <= -2856
    ipq inc 650 if qen != 2639
    low inc -635 if ixp <= 2434
    ipq inc -281 if tr > 498
    txm dec -111 if wby >= -1838
    ixp dec -128 if es == -2195
    tr dec -297 if y <= 1852
    t inc 65 if ntk <= -2223
    nm inc 999 if nm > -912
    ixp inc 647 if ipq != -289
    jaq inc -884 if afo > -2150
    txm dec -505 if tr != 508
    zhz inc -728 if es > -2197
    cwp inc 578 if nm < 103
    ipq inc 156 if tr > 497
    es inc -500 if s == -20
    j dec 296 if zhz <= -496
    vv dec 524 if txm > 452
    ipq inc 417 if tq != 31
    tq dec 630 if cwp != 1404
    jaq inc 791 if zhz == -496
    cwp inc 5 if wby >= -1836
    mux dec -502 if afo < -2147
    n inc -296 if n >= 1306
    vv dec 883 if mux < -3468
    txm dec -593 if j >= -3471
    j dec -34 if zhz < -487
    ig dec 183 if ntk <= -2219
    y dec 236 if j >= -3441
    ntk inc 78 if mux == -3469
    t inc -480 if xho == -1887
    nm inc -337 if y < 1622
    zhz inc 966 if j == -3433
    y inc -46 if zhz < 481
    qen inc 281 if vv == -668
    jaq dec 324 if tq < -599
    vv inc 882 if low == -2840
    ntk inc -359 if txm < 1058
    n dec -894 if low == -2846
    n dec 762 if y >= 1564
    txm inc 428 if afo < -2149
    t inc 500 if ntk > -2500
    ntk dec -175 if y < 1577
    txm inc -851 if nm < -234
    t dec -802 if mux == -3469
    tr inc 254 if n != 1431
    afo inc 910 if mux >= -3472
    txm dec -99 if j < -3432
    vv dec -689 if wby == -1835
    es inc -446 if es < -2688
    ixp inc 703 if afo != -1242
    nm inc -260 if afo < -1240
    afo dec -656 if wby >= -1836
    afo inc 866 if s > -26
    jaq inc 700 if ipq != 285
    xho inc 770 if tq != -596
    qen dec -878 if t < 709
    txm inc 175 if ntk < -2327
    tr dec -92 if ipq != 279
    tq inc -406 if zhz < 485
    ntk dec 19 if y < 1577
    es inc 164 if vv < 23
    j dec 341 if jaq == -267
    txm dec -776 if j > -3784
    cwp dec -22 if s >= -28
    n dec 944 if jaq > -269
    tq dec 658 if s > -23
    tr inc -482 if t >= 696
    cwp inc 66 if xho > -1126
    es dec 880 if afo != 271
    nm dec -457 if cwp >= 1491
    ixp inc -690 if ntk < -2344
    n inc 552 if jaq != -267
    ntk dec 24 if tr == 276
    low dec 582 if tr > 278
    n dec -373 if j != -3776
    wby inc 783 if ipq == 279
    xho inc -720 if qen >= 3786
    ntk inc 783 if xho < -1830
    tq dec 720 if tq < -1675
    vv inc -358 if wby > -1060
    zhz inc 347 if tr < 278
    vv inc -448 if n == 859
    j dec 487 if ig >= -1342
    n inc -604 if xho > -1840
    ipq dec 898 if tq <= -1660
    tq inc 229 if tr != 286
    vv dec 21 if ixp < 3231
    tq inc 747 if ixp > 3229
    xho dec 48 if wby >= -1057
    tq inc 364 if jaq >= -268
    tq inc -647 if mux > -3462
    tq inc -580 if j >= -4260
    n dec 937 if tq <= -324
    cwp inc -976 if xho < -1876
    vv inc 555 if mux == -3469
    txm inc 305 if wby == -1047
    jaq inc -790 if qen < 3798
    qen dec -83 if ntk < -1580
    afo dec 725 if txm <= 1679
    qen inc 790 if ixp <= 3223
    jaq dec -693 if ixp <= 3223
    tr inc 706 if txm == 1675
    tq inc 547 if es < -3849
    tq dec 841 if t < 706
    j dec 393 if jaq >= -1063
    tr dec 775 if ntk <= -1584
    y inc -706 if mux >= -3464
    cwp dec 436 if ixp == 3230
    low dec -311 if xho >= -1886
    t inc 777 if es >= -3858
    t dec -916 if ipq >= -622
    ipq inc 85 if xho >= -1885
    nm inc 949 if xho == -1885
    es dec -238 if j == -4663
    mux inc 310 if tr == 207
    tq dec 638 if cwp >= 76
    mux inc -922 if ixp != 3233
    txm inc 941 if cwp != 83
    tq inc 646 if mux > -4086
    qen inc -179 if xho >= -1878
    zhz inc 359 if zhz != 825
    ipq inc 173 if y >= 1563
    txm dec -586 if s == -16
    afo inc -614 if tr < 211
    jaq inc 666 if ixp != 3230
    ixp dec 153 if es >= -3858
    nm dec 488 if j == -4654
    t inc 660 if afo != -1056
    ipq inc -447 if tr >= 200
    cwp dec 883 if t < 3062
    txm inc -846 if tr > 198
    j dec -33 if ipq < -815
    zhz dec 761 if vv < -242
    tr inc 621 if zhz <= 59
    ig dec 26 if y != 1581
    txm dec 376 if y < 1581
    low inc -726 if jaq > -1066
    txm dec -152 if es >= -3865
    wby inc 323 if jaq <= -1048
    low dec 884 if zhz > 57
    n dec 112 if t != 3062
    ig inc 332 if xho != -1878
    afo dec -295 if low > -4150
    wby dec -158 if nm <= -47
    low inc 824 if n <= -790
    ipq dec -90 if y != 1570
    j inc 41 if tq <= -608
    txm inc 712 if j == -4613
    n dec 557 if n < -793
    ipq dec 340 if xho != -1885
    wby dec 699 if wby <= -721
    ipq dec 468 if y <= 1577
    es inc 999 if ixp <= 3077
    j dec -798 if es == -2858
    es inc 652 if mux <= -4084
    ntk inc -262 if ntk == -1589
    n dec 528 if afo <= -758
    vv dec 511 if es > -2861
    ntk inc 78 if ixp < 3076
    qen inc 502 if j < -3819
    afo inc 363 if jaq < -1052
    nm inc 215 if wby == -1428
    s inc 608 if tq < -619
    txm dec 100 if low >= -3324
    mux inc 516 if mux > -4085
    cwp inc -888 if ntk >= -1856
    wby inc -941 if afo >= -408
    tr dec 686 if cwp <= -1684
    ig inc -365 if jaq > -1061
    tq inc -593 if zhz == 64
    cwp inc -867 if wby == -2369
    ixp inc 736 if wby <= -2370
    qen inc -240 if tq <= -1204
    wby dec -961 if vv <= -759
    txm inc 132 if ixp > 3075
    ig inc 984 if n < -1877
    ixp inc -898 if vv >= -769
    wby inc -517 if es >= -2864
    mux dec 735 if afo <= -396
    n dec 971 if txm != 2290
    t dec -329 if cwp > -2568
    ig dec -780 if y < 1573
    ixp dec 955 if tr <= -471
    wby inc 545 if wby <= -1920
    cwp dec -506 if afo == -400
    afo inc 191 if vv > -764
    afo inc -314 if s <= -13
    ig dec -7 if tr > -486
    afo dec 643 if n >= -1872
    low dec -477 if nm != 183
    t dec 98 if xho != -1885
    nm dec -343 if zhz == 64
    n dec -941 if zhz == 64
    cwp inc 222 if ixp != 1218
    zhz inc 756 if nm > 522
    nm dec -233 if cwp != -2329
    n inc 158 if es >= -2864
    j dec 447 if ipq >= -1189
    vv dec 236 if es <= -2852
    txm dec -940 if j < -4264
    low dec -631 if ntk == -1851
    t inc 552 if tr != -479
    nm inc -390 if vv >= -1006
    ipq inc -589 if j <= -4263
    tq dec -273 if n >= -785
    wby dec 62 if jaq > -1062
    t inc 897 if qen == 3639
    ipq inc -541 if nm >= 355
    jaq dec 169 if wby != -1452
    mux dec 922 if nm > 354
    y dec -185 if t < 3391
    tq inc -170 if es > -2864
    cwp inc -459 if es != -2849
    tr dec -384 if ntk > -1854
    vv inc 776 if s < -26
    ixp dec 603 if vv >= -1005
    ig dec -979 if low == -2213
    qen inc -345 if jaq < -1216
    s dec -931 if tr != -100
    s dec 252 if ipq != -1721
    wby inc 487 if tq <= -1096
    tq inc 653 if ntk < -1841
    xho dec -526 if y == 1756
    ipq inc -563 if txm >= 2283
    nm inc -679 if qen == 3287
    cwp dec 223 if y > 1754
    es inc 852 if tq < -447
    es dec 455 if txm >= 2285
    ntk dec 787 if y != 1749
    tr inc 873 if xho < -1352
    ig inc 690 if txm < 2281
    cwp inc -367 if y != 1754
    ig dec 502 if j < -4263
    j dec -144 if cwp <= -3379
    zhz inc 287 if mux >= -5222
    ntk dec -34 if jaq != -1231
    y inc -592 if ntk != -2610
    afo inc 296 if s != 667
    ixp inc 614 if es > -2465
    jaq dec 424 if t <= 3385
    ipq inc 894 if ntk > -2609
    y dec 484 if afo == -230
    jaq inc -458 if zhz <= 354
    n dec -547 if ntk == -2604
    t inc -683 if jaq <= -1689
    t dec -703 if afo > -233
    afo inc -998 if nm != -314
    vv inc 695 if jaq < -1677
    afo inc 986 if tq == -450
    es dec -29 if ntk != -2612
    ixp inc -666 if zhz > 359
    txm inc -505 if low != -2213
    qen inc -980 if txm > 2285
    tq dec 900 if vv == -303
    tr inc -728 if nm > -325
    low dec -702 if ipq < -1391
    mux inc -9 if ixp >= 1236
    j dec -777 if s == 665
    ig inc 527 if ipq < -1388
    es inc 251 if n != -242
    nm inc -979 if txm == 2290
    wby inc -524 if tq == -1350
    zhz dec -886 if txm < 2294
    nm inc -296 if zhz > 1232
    j inc 114 if wby >= -1478
    cwp dec -142 if s <= 667
    n inc -286 if es != -2180
    jaq inc 681 if nm > -1591
    mux inc -299 if txm > 2289
    vv dec 602 if es == -2181
    nm inc -118 if s == 653
    s dec 176 if j != -4111
    low dec -469 if tr >= 50
    xho dec 775 if txm == 2290
    mux inc -164 if ipq < -1391
    tq dec 695 if tr < 48
    afo inc 93 if n < -515
    cwp inc -973 if nm > -1596
    vv dec 517 if es < -2179
    low dec -353 if wby == -1479
    ixp dec -742 if ixp == 1235
    tr inc -76 if vv < -1421
    ixp inc -26 if txm != 2281
    qen inc -205 if tq != -1347
    zhz inc -178 if zhz > 1232
    xho dec -540 if qen < 2109
    nm inc -650 if j > -4123
    es inc -191 if xho == -1594
    txm dec -939 if wby == -1479
    ig inc 658 if wby > -1471
    xho dec -234 if n <= -529
    nm dec -510 if ixp == 1958
    ig inc 856 if low >= -682
    ipq dec -415 if ixp <= 1959
    wby inc -471 if vv > -1417
    t inc -104 if zhz < 1062
    low dec -345 if tq <= -1348
    xho inc -163 if wby <= -1485
    low inc 594 if ipq < -980
    ipq dec 754 if ixp != 1951
    ixp inc 263 if y != 680
    vv inc -186 if mux != -5685
    vv inc 436 if t < 3993
    cwp dec 276 if xho >= -1595
    t dec -268 if t >= 3983
    j dec -241 if cwp == -4494
    wby dec -883 if ipq < -972
    afo inc 881 if ntk == -2604
    ntk inc -543 if ntk < -2602
    mux dec 524 if mux <= -5688
    ixp inc -15 if low != 243
    jaq dec -21 if wby < -590
    tq dec 728 if jaq == -1663
    vv dec -831 if low >= 241
    j dec 290 if vv > -148
    ig dec -192 if cwp == -4494
    zhz dec 684 if j < -3874
    tq dec 807 if cwp <= -4489
    t inc -979 if y < 689
    es inc 853 if qen >= 2095
    s dec 211 if ipq >= -982
    t inc -113 if j != -3880
    tr inc -801 if wby >= -598
    afo inc -405 if es < -1511
    ipq inc -980 if y == 680
    qen inc -345 if n >= -520
    n dec 332 if n < -515
    mux dec -593 if zhz <= 380
    vv dec -97 if j > -3881
    mux inc 321 if y >= 679
    mux inc 299 if n > -857
    tr dec 105 if qen <= 1757
    y dec 746 if jaq != -1673
    qen inc 898 if afo <= 333
    s inc 467 if afo < 330
    xho dec -634 if txm <= 3233
    ig inc -288 if es <= -1512
    es dec -371 if xho > -970
    xho inc -421 if txm < 3235
    ntk dec -803 if tr == -939
    xho dec -762 if es != -1150
    ixp dec -336 if afo > 325
    es dec 88 if ixp >= 2273
    n dec -586 if afo >= 321
    zhz inc -260 if tq == -2885
    qen dec 94 if tr < -930
    mux inc -37 if j <= -3868
    es inc 438 if s <= 733
    mux dec 946 if mux < -4501
    qen inc -341 if s > 746
    cwp inc -773 if cwp != -4485
    txm dec 836 if vv == -58
    y inc 495 if wby > -603
    txm inc -286 if ixp > 2270
    jaq inc 147 if txm > 2104
    tq dec -65 if j > -3878
    cwp dec 733 if n >= -272
    n inc -65 if j >= -3884
    nm inc 582 if qen != 2563
    y dec 719 if j >= -3877
    vv inc 636 if vv <= -51
    es dec -295 if y > -299
    n dec 288 if cwp > -6006
    ntk inc -40 if afo >= 322
    tr inc -197 if s != 732
    j inc -224 if xho < -626
    mux dec 465 if zhz > 123
    s dec 633 if ixp <= 2275
    ipq inc 307 if tq == -2812
    s dec 336 if s > 96
    low inc 4 if vv == 578
    t inc -665 if afo != 327
    qen inc -403 if t >= 3161
    t dec 586 if t >= 3160
    txm dec 745 if tq <= -2816
    mux dec -443 if nm != -1654
    vv dec 370 if y < -297
    vv dec -198 if vv == 578
    n dec -470 if s > -240
    cwp dec 166 if wby >= -598
    xho dec 478 if cwp != -6171
    n dec -914 if zhz >= 110
    txm inc 494 if ixp >= 2264
    tq inc -742 if n < 774
    tr dec -748 if wby >= -599
    wby inc 421 if es == -853
    ipq inc -900 if qen < 2166
    s dec 452 if es != -853
    afo dec -929 if ntk >= -3178
    qen inc 706 if jaq == -1516
    ipq dec 58 if j != -3868
    afo inc -331 if s < -221
    ntk dec -186 if ipq == -2919
    jaq dec -371 if y < -289
    cwp dec -975 if n == 766
    qen inc -631 if xho != -1090
    cwp dec 57 if ig < 1779
    ixp inc -146 if ipq <= -2922
    s inc -148 if y < -283
    zhz dec 842 if mux < -5009
    nm inc -840 if ipq != -2923
    mux inc -583 if wby < -171
    j dec -467 if ig >= 1788
    cwp inc -513 if j == -3877
    s inc 353 if ntk != -3001
    s dec 731 if ixp > 2273
    tr inc 928 if afo != 3
    vv dec 947 if jaq != -1140
    tq inc 184 if ig <= 1785
    vv dec 571 if s != -375
    n dec 222 if vv == -742
    ig dec 812 if qen <= 2235
    s inc 722 if y > -294
    afo dec 278 if cwp != -5708
    tr dec 897 if low < 245
    es inc 439 if afo == -282
    zhz inc 976 if vv != -750
    low dec 381 if ipq != -2927
    zhz dec -510 if zhz >= 242
    mux dec -846 if tr <= 555
    tq dec 786 if y <= -293
    wby inc 40 if wby >= -180
    wby inc 461 if wby != -131
    y inc -388 if t < 2579
    ig dec 40 if ntk < -2992
    txm inc -177 if nm > -2503
    j inc -922 if tq == -3378
    tr dec 739 if ipq != -2917
    y dec 776 if mux == -4749
    s inc 261 if afo != -273
    s dec 28 if y != -1463
    es dec 156 if txm > 1679
    low inc -914 if es == -413
    xho inc 923 if s <= 584
    txm inc -979 if txm >= 1671
    jaq inc -102 if nm >= -2503
    jaq dec -802 if low >= -122
    mux inc 183 if low > -129
    zhz dec -428 if nm == -2500
    tq inc -712 if txm >= 692
    tq dec -624 if txm < 705
    zhz inc -472 if tr <= -199
    tr dec 568 if nm < -2495
    tr dec 602 if ixp > 2272
    tr inc -283 if zhz == 1187
    ntk inc 387 if ixp < 2277
    tr inc 11 if wby <= 331
    es dec -830 if txm != 692
    nm inc -957 if qen > 2233
    xho inc 564 if tq > -3475
    s dec 145 if n < 545
    nm inc -366 if cwp == -5704
    t dec 752 if afo > -283
    ig inc 881 if ipq >= -2911
    zhz inc -139 if cwp != -5708
    afo inc 926 if wby > 317
    jaq dec 494 if es >= 412
    j inc 92 if j <= -4792
    txm inc -93 if jaq > -1743
    tq dec 776 if y <= -1447
    jaq inc 696 if zhz == 1048
    mux dec -327 if j >= -4713
    zhz dec 432 if vv >= -742
    tq inc 100 if t > 1823
    t inc 684 if qen <= 2238
    txm dec 251 if mux > -4243
    low dec -387 if j != -4702
    txm inc -736 if qen <= 2239
    mux dec -658 if qen < 2237
    n inc -314 if low < 268
    t dec -246 if mux < -3575
    xho dec -143 if cwp > -5712
    low inc 83 if t <= 2755
    ixp dec 503 if y > -1460
    cwp dec 18 if qen <= 2235
    y inc 390 if zhz != 616
    ntk dec -289 if ipq > -2927
    s inc -982 if low <= 343
    jaq dec -701 if ntk <= -2327
    n inc -62 if j >= -4703
    nm inc 870 if tr >= -1037
    xho inc -962 if j > -4715
    afo inc 226 if y != -1459
    j dec -510 if s != -557
    low inc -1 if afo != 879
    jaq inc -847 if qen > 2231
    jaq dec 360 if t <= 2760
    j inc -770 if qen > 2228
    low dec -965 if y < -1452
    j inc 553 if mux == -3585
    mux dec 300 if t <= 2756
    xho inc 495 if tq > -4150
    cwp inc -730 if ipq < -2912
    tq inc -315 if n >= 235
    j inc -995 if mux >= -3877
    y inc 378 if txm < -377
    vv dec -898 if t >= 2749
    nm inc -432 if jaq > -2249
    ipq inc 850 if qen > 2230
    afo inc 853 if s != -558
    vv dec 628 if low != 1314
    y inc -182 if ntk <= -2323
    wby inc 270 if j < -4958
    n dec 685 if j < -4976
    low inc -33 if s != -548
    wby dec -502 if jaq < -2243
    nm inc -400 if xho < 69
    jaq dec -404 if t > 2744
    mux dec 668 if t > 2748
    wby inc -308 if xho > 63
    low dec 790 if ixp > 1766
    ixp inc -581 if vv > -481
    es dec -399 if y <= -1258
    ixp inc -839 if tq >= -4146
    jaq inc 451 if low == 479
    mux dec 733 if j < -4957
    cwp inc 263 if xho == 66
    y dec -522 if ntk < -2319
    t dec 764 if ixp <= 356
    vv inc 458 if es != 819
    afo dec 798 if xho < 67
    wby dec -902 if zhz > 616
    ixp inc 881 if s > -554
    ntk inc -955 if s != -550
    nm inc -890 if n >= 229
    n dec -214 if j > -4972
    wby inc -553 if txm <= -388
    s dec -319 if tr != -1033
    t inc 18 if mux < -5272
    tr dec 923 if zhz <= 625
    xho inc -917 if afo != 927
    tq dec -518 if tr <= -1950
    j inc -895 if ipq != -2066
    low inc 23 if y > -738
    vv inc 31 if zhz >= 611
    cwp inc 447 if y >= -742
    nm inc 702 if cwp <= -5746
    ig dec -733 if low <= 512
    es inc -577 if vv <= 24
    y inc 697 if nm < -3280
    s inc -434 if y != -31
    tq dec 694 if ipq == -2069
    t inc -759 if n > 442
    jaq inc 223 if s >= -670
    zhz inc 811 if txm < -374
    mux inc 25 if nm > -3277
    jaq dec 825 if nm < -3283
    tr dec -412 if n >= 438
    txm inc 341 if mux >= -5283
    j dec -952 if zhz == 1427
    qen inc 392 if cwp <= -5752
    zhz inc 486 if txm == -39
    afo inc -500 if wby == 790
    s inc -208 if zhz >= 1912
    afo dec -937 if xho != -849
    ig inc -618 if y > -41
    ntk inc -11 if qen > 2229
    vv inc 34 if s <= -873
    ixp inc 535 if cwp == -5742
    ipq dec -996 if mux != -5290
    s dec 436 if qen != 2224
    ntk inc 250 if wby != 790
    low dec -959 if txm > -46
    y inc -807 if es <= 244
    es inc -109 if txm == -39
    y dec -720 if y != -846
    t inc -658 if jaq < -2445
    ntk inc -522 if y == -846
    zhz inc -911 if low <= 1475
    zhz inc 313 if vv <= 59
    afo inc -631 if zhz <= 1319
    low inc -18 if t == 595
    ipq inc 16 if xho >= -855
    cwp inc 841 if ig > 1034
    es dec -31 if wby <= 781
    ipq dec 904 if mux != -5286
    cwp inc 309 if ntk > -2859
    txm dec 413 if jaq != -2442
    mux dec 237 if ixp <= 1771
    vv inc -891 if ipq >= -1969
    s dec -4 if n != 444
    cwp dec 971 if s == -1309
    mux inc -388 if es < 122
    es inc -687 if txm < -442
    ixp inc 95 if t != 591
    jaq dec -333 if y >= -851
    ixp dec -134 if j >= -4910
    mux inc 496 if zhz > 1313
    j dec -568 if afo >= 722
    ig dec -234 if wby >= 781
    mux dec 814 if xho > -856
    jaq inc 78 if nm != -3276
    nm dec -942 if ig < 1287
    vv inc 397 if zhz == 1315
    n inc 86 if wby != 790
    ig dec -202 if s < -1306
    j dec 0 if afo >= 728
    ntk dec -320 if vv > -438
    tr dec -962 if ipq <= -1957
    es inc -424 if xho >= -843
    txm dec 972 if ig <= 1487
    cwp dec -730 if vv < -436
    ipq dec -691 if ig == 1480
    t inc -852 if afo == 731
    ntk inc -361 if es <= -563
    low inc -413 if n > 436
    afo dec -818 if ixp != 1892
    cwp dec -16 if wby >= 791
    s inc 884 if ntk <= -2853
    ipq inc -523 if low >= 1061
    mux inc -157 if tq < -4309
    low inc -917 if low < 1054
    low dec -679 if zhz > 1309
    zhz dec -426 if ntk <= -2866
    tr dec 995 if y < -838
    low inc -343 if jaq != -2039
    wby dec 906 if ixp != 1899
    txm inc 805 if n == 444
    jaq inc -628 if nm <= -2343
    t inc 464 if es != -554
    qen dec 133 if low >= 821
    xho dec -729 if zhz > 1319
    xho inc -186 if zhz <= 1315
    zhz dec 798 if s <= -417
    jaq inc -726 if zhz <= 521
    ig dec -214 if zhz > 513
    low inc 486 if es == -558
    ig dec -328 if y != -851
    tq inc -112 if ixp != 1905
    ipq inc 53 if afo != 1546
    ntk inc 694 if es != -567
    jaq dec -394 if tq <= -4427
    ixp dec -575 if s <= -423
    ig dec 694 if tr >= -1579
    mux dec -573 if nm > -2345
    vv inc -966 if tr <= -1576
    vv inc 135 if tq >= -4435
    afo dec -140 if jaq >= -3007
    jaq inc 543 if ipq != -1217
    vv inc -145 if vv == -1274
    wby inc -788 if cwp < -4825
    jaq inc -180 if zhz <= 518
    vv inc -248 if vv >= -1425
    zhz inc -174 if xho == -1037
    t dec -570 if t <= 207
    afo inc -422 if cwp > -4838
    wby inc -494 if low >= 1297
    s inc 20 if vv <= -1661
    s dec -349 if ig > 1323
    s inc -399 if txm > -627
    tr inc 59 if ixp == 2474
    t inc -490 if wby > -499
    jaq dec 265 if ixp <= 2480
    afo inc 77 if qen > 2234
    ntk inc -683 if ixp != 2481
    tr dec -127 if afo > 1262
    low inc -239 if jaq < -3438
    j inc 840 if ipq >= -1220
    n dec 197 if vv > -1677
    low dec 896 if nm > -2352
    wby inc 26 if vv > -1663
    txm inc 552 if low > 162
    jaq inc -948 if nm >= -2347
    tr dec -871 if txm == -67
    s dec -498 if n >= 246
    n inc -934 if mux >= -5430
    j inc -113 if ntk < -2849
    tq dec -636 if cwp < -4828
    j inc 114 if cwp >= -4832
    tq dec 557 if txm != -71
    ipq inc 392 if ig <= 1335
    low dec 739 if tq != -4343
    s dec -853 if t < 288
    n dec 715 if txm >= -75
    jaq inc 140 if ixp == 2474
    n dec 896 if xho < -1030
    ipq inc -359 if xho < -1031
    ixp dec -497 if j != -3506
    afo inc -293 if low < -566
    jaq inc 89 if nm > -2345
    ntk dec -524 if vv >= -1669
    ntk dec 371 if s < 897
    s dec -478 if jaq > -4170
    j inc 924 if ipq == -1184
    ntk inc -239 if y == -846
    wby inc -397 if ntk >= -2941
    nm dec 907 if qen == 2233`;
  })();

  const day9 = (function() {
    return `{{{{{{{{<a}!!!aa!!!>ua,a,!>{!>!!!>a>,<!>,!!!!,!!!"!,!a!e}!>!>,<!!oi!!}>},<!!'u"!!!!!>,<e>}},{{<}eaa'<!>},<<>},<}<!},!>},<e>}}},{{{{}}},{{{<,!>,<!!}!>!!!>!!!>!>!>a!!,!!',>},<e,!!!!!><'!<,>},{{{<!<!>i'u">}},<!e!!!>!!eo!!""'!>,<a!i!!!>!!,,>}}},{{{{{{<o!!''!!!>!>,<e}a!>},<>}}},{{<aeo!!!>!!!!<!!!!!!!>,<uu!>},<{!!!>>},{<>}}},{{{<},!!'>}},{{<!"}}!!!ooe'!o!!!!<>},{<u!'aoa!!u{!o!>!>},<!!!>'>}},{{{<!>,<!!!>}!!!>u>},<'a,!>,<!{<!!!>e!>!u>},{{{{},<!>e!""!!'e">},<{e!!!>!}'}o!>,<,o!>},<!!}!>,<i>},<!>},<!oo'!>},<}}<'o}!>,<'!!!>'>},{<{e>,{}}}},{{},{}}},{{<uu!!!!o!>,<!<!!o!!!>!>e"'!>},<!!e!,!!!u!!!>>},<,!>}}<<!!!>,<ai!>{!e>}},{{{<a'!>},<o{ie!>},<!!!>{}au!>},<!!!!iu!ai>,{<!!{',>}},{<eu!o,!<}!>i!"!!!>a,uu!ao>},{<!!!>,<oe!>{e!!!>},<!!!!!!!>!!!>!ei!!io}!>},<"!!o!}>,<!!!><!!!><!!!!!!!>"!!!o!>,<!"!!!>,<!>},<>}},{},{{{{{<"!!!!!>>}}}},{<{!>},<}i'!!i!>!'}<!'!{}>,{{<!!!>ioi"u>}}}}}},{{{<{"'e<e!>},<!o!!,!,'!!!!!>>}},{{{{<ia'oa!!i<o,!>u!!!>ao'a>},{}},<!>},<!!!>!>},<!!!>"!>!>},<u,!>,<eauu}!!}o">},{{{<}',"'>},{{}}},<{<>},{<{!!"}!!!>!!!>{!,"!>},<!>,<!}!!!>ae}'>,<!!<u{!!!>!!!>},<o!!!!<!>,<!!}>}}},{{{{<o!!}!>},<a!>i!!!>},<e!e<,>}},{{{<"iao,}>},{{{}},{{{}},{<!>},<!!i'!>},<o!!{e'!{e"!!u"!!!>>}},{{<>,{<!>o"!>!>},<,ea>}},{{<e'>},{}},{<!<!!!>!>},<!>},<{!e,!>},<},e>,<!!!>"!!u{u{!>,<!uuuoi!!!>!>,<>}}}},{{{{<!!!>},<<"!!!>},<iu!>}e<io>},<e!>,<!!}}>},<!>a{{!!!>,<{!a}ua<',!!!o!!!>e,!!!>>},<!!{a!>},<e'oe!!{u!!u>}}},{{{<ai!!{}ai'>,<}!>{!>o!>},<!!!!!!!e!>'}<!a>},{<!!o}!!!>"!!ou!!o>,{<!>},<!>},<>}}},{{<io>}}},{{{<"!eui!>},<!!!>!>o!!!}>,{<o!!<ie!>!!!!!>!i!'!!e>}},{{<!!!!!>i!>,<,""}a}{!!!>{u!>,<!!'>},<!!!>,a!!!>,<!!iu<}!!!>>},{{{<!!!!'!<ao!>,<}>,<e!>!!!!!>i>},{<,a!{{{!>,<!>!!a!>},<i,!!'>},{{},{}}},{{<!!!!!>u!>'!>!!!>,o!>,<!>a!!,<!>},<!!',>}},{{<!'u}{>},<'!{'u!>,<!>},<!>,<!!!>},<>}}},{{{<!!e!>'>},<!!!><!"e!!!!ea<,ue>},{{<i!><u>}},{{<!>a>,<<"e,u!!!'i!'!!!!!!}!>}i"aa>}}},{{{<u!>ai!!!>!!!>'!>},<e!>!>u"i>,<aeiu}>}},{{{<,i!!!>!!e"au!!'"u>},{}},{}}}}},{{{{},{{<,!>},<<!!!>"!>,<!>,<<!>!!!!"!>,<!>,<>},<"<<{},!!!o,o!!!>!!!>!>},<>}},{{<{,<!!e!>{>},<"oi,!!e!!!>i!>,<{!>,<!>},<!!!!o>}},{{{<,{!>'i!>!!!>!!!!!>},<'i{u>},<!>},<!>uo!!o!>,<o!!e!ae!!',!>,<>},{{{<u!!!!!>"u!!{>},{<!<{uo!>},<<!>},<>}},{}}},{{},{{{{{<,,>},{}},{{<i'!!!>!>!!e!>o!!!!!!!e'!!!><!"",!!!>"u>}},{{<iiu!!{!!!>'aa!!!>},<!!!>!'}!!!>>}}}},{{{<i!!ae<!!u<a!!"''!>,<>},{<!!!!!>!!o!>a,<!!{!>!>,<,!!!!>}}},{{{{{}},{{<!!'eo!>!o<,e!>,<!>},<!!>},{{<<u',}!!!>!<!i!>},<!>>},{<e<e!>},<}!>,<ii!!<"!>},<!!!>>}}},{{<{}!>!>i!>,<!>!!!>!!!!"{!>,<,'!>},<>,{<!iee!!!!"ao{",!>u"!{!!!!}>}},{<{>,{<!>},<!e">}},{<a!!!>},<u>}}},{{{{<!>},<>},{{<!<e!!!!!!u!!!!!ea!!ue!!u}!>},<!>,<!>},<!!!>a>}}},{{<a!>,<ua<!>},<'e>},{<a!!!!!!!>>}}},{{<i!!!!<!>,<'{,!{!!!!!!}}e!!{<io>},{{<,o"e!>},<!>},<i{i!>},<!!>}}},{{{<a!>}!!'a"<ou>}}}}},{{},{<,!>},<>}},{{{},{<>}},{<!a!!!>u!!a>}},{{},{<!!,'>,<}o!!!>!!!>>},{{{<<,,!!!>!!!>!>},<e!!{<!>i!!!>o!!!>'!>},<!!!>>}}}}}},{{{<!"!"!,!>},<!!!>a{e!!!>!!!!!>>,<!>,<!>},<!!"!>,<ii'!!{'>},{<!>},<,>}},{<o!!,!i"'!>,<>,<ie,!<"oeu,'!!!>!>},<'i'>},{{<!!,!!{!!eai!!!aa!!!>'<!>},<!!>},<!>},<o!!!>,<iu}">}}}},{{{{<e>},{{{}},<!i!>,<i'!i!!!>!!!!}!!!>'<!>},<uo!>>}},{<,!!!!!a!>},<!uo!!!>,<!!e!!!>>,<>},{<>}},{{<e!!u!a<{u>,<<!!!>!>},<{!!!>,{!!!!o!u",!!!>'o!!!!a!'!!,>},{<}!>,<u!!,{!e'!!!>,<e!>!!!>u!!!!!>!>},<!!!>a!!!>!>>}},{{{},{<uueua!!!>!>},<!!!!!><!>,<!!!>e}<>,<}{uuo"!!o!e>}},{{{<}!>"!!!>{o!!!!<>},{},{{}}},{},{{<{!!!>eo!>},<,>},<!!{<!>,<{iu{!,!!oi!!"!{'!!>}}}}},{{{{<!!u!!!!!>e,"!!e!>!!,'!>,<>},{{{<<!>},<!!!>u>},{<!!!!!>"<u!'!!!<!>,<a{!!!>,<>}}}},{{<!>,<!>i!!a!>},<e"!>>},{{<<''o!>!!!>>}}},{{<!!!!u!!!!a,!!<"!>{ao>},{<<o!!!'!>,<u!>,<o!u!>{!!>,{<},,o}!!"ioo!>,<}!!,o}i!>,<<a">,{<!!!>!!!!!!!>!>},<,{!!ia!>,<!!!>!!!>a!!{}o>}}},{<a>,<!>!!o>}},{{{{{<{o!!e'}{,<!!u>}},{{<o"<!!!>!>},<i{!!a!!!>}'o{!'{>},<!!{u!a!>,<"!!{>}},{{<!!!>!!o!!<!>!>},<"!>a{!>},<'!>},<!>},<!!!uo">,{<}!>},<!!i!>,<!!!>},<!!!>!>},<!!!a!<!>i!!!>>}},{<}ia"!!!>o,<",!,>}}},{{<!>,<<a!>,<>,<}a<!!!!}!>},<u'"!!!>},<'!e>},{<!ue!!!>},<oe>},{{}}},{{}},{{{{}},{{<<<,!!o!!!!e!!!>}!!!>!>,<ia'"'"!>},<e{>}},{{<,oe!a}!>>},{<{!>},<!!e!!!>!>!!o!!!>u'"!>,<!>>}}},{{{<<'!>},<e!!!>!!!!!u!{e!!i!>,<!>},<'!!}!>,<!>},<!>,<!!!!!>e>},{<"!!!>,<!!!>},<!>}'!!"!>},<!"a<!!!>,e!}oe>}},{<">}}}}},{{{<!!}'!!{a!>,<!>a>},{<!!i!}!!!!!>!>,<e!!!,}!>{!>,<u!a!>,<>}},{{{{<!>!>,<>},{{<">}}},{{{<,i!!!>}!>,<!>!>,<!!!>},<e!>},<!>''!>>},{}},{{<!>,<{!!!>'!ai!!!>,<>}}},{{{{{<!'!!ei,!>!!!>!>,<!>{!}'o!>!!ui}>}},{{<!!!>!!!>,<e!ou{!>},<ei!!!>!uu!a!>},<>}}},{<<o{{"!!!>o!>,<!!}!!<!>,<}o'!>>,<}!,,},!>},<o!!{<"">}},{<!!!>{<!!!>,<'!>,<i!!!>o!'o>,{}},{<ui!ou!{o>}},{{<,!>},<!!!><"!!!!!>''>},{{<ou}!>,<!!}'!!"<!!u!!!}!!e!!"!>,<!{!>!!!!!>},<!!!!!>,<!!!!!>>}},{{<e!'>},<o{a!!!>,!!'!>},<!>},<!>,<ue""!><<<i>}}},{{{<<!>},<<!!!>,<"oai,<o!!!>!>>},{<'ue!!!><!!!>{!>},<e!!,!!">}}},{},{{{},{}},{<!u!>,<!"!>},<{o!!">,<>}}},{{{}},{{},{<,u!!'!>!>!>},<}!!e!{!!u!!!>},<!>!>},<,>}},{<>}},{{{<u}!"!!'u!!i!>,<!!!>}!!!>!''!>!!>},<!!u!!{,ui!{!!!!!>!!!>},<!!!!>},{<iie,!!!!!!!>'>,<!!a!!e',!>u{'!!,<!!!>'>},{}}},{{{{{{},{}}}},{}}},{{{{{<!!u!!}!u!!!>!>},<!>!!u!!{{e<'!>},<'!>!>},<>},{<"o!>,<!>,<!,!>,<u>}}}}},{{{{<e{<e{!!!>!>,<ii},}!>,<a>}},{<'au!>},<{{aaiu!!>},{<!i,ui!!!!!>i"!!iiiu}>}},{},{{<}!!'<ua!!!!!!o}a!>,<!>},<>,{}}},{{{{<i!>iie!o"!!,!>,<!>,<!>,<>},{<i{!>e!>'>}},{}},{{<'!>},<'!!}!!a!>},<e!!a}!{{'!>e>}},{{<}i"'!>,<!!!>!>},<!ae{!!o!!!>!!,!!!!!>,<!!>},{{<i<!!a,!'>,{<"i!>},<!,!>'euu!!!>,<,>}}}}}}},{{{{{{<'u!}!>!>},<a>}}},{{{<!!ee!!"}>,{<eu,!!!!'!!!>!>,<,{oee}<!>},<i,>}}},{{{<u!>,<!!!>ai!>},<""e!!!>!>,<!u>},<!!!!!!'!!'!!i!!"ei,}!!!i<,!>},<!>>},{<a!!!>aui!>},<e!<!>}"}!>,<,!!!>!>},<!!!>!!>},{{{}},{<!>!ue"a,!!!!!>e!!,!>!>,<<>}}},{{{<!>,<"!!{,<!><!>},<<!!iio!>},<>},{}},{{},<a,"!>,<}!>,<a!!!>e!!">},{{<!>!o!!uu!,!>,<u>},{<!a!!!>!>,<iu!o!!ia!!!>!>,<!!!>,<,o!!!>!>!!!>e{>}}},{{{<!>o!!!>}oa"!!!>!a"!{>,<i>},{{<'>},{<ee!!!>!!!a!!ia!,!>,<!!!!}!!ui!>u<u>}},{{}}},{{<a<!e!!e!!!!!>!u!!!>"!>,<o!!}!>>}}}},{{{{}},{{{<!!}{o!u{!<o'}u!>,<!!!!<>}}},{{{<e!!!>!>},<!>!>},<!u>}},<i'ei'!>},<!!oo<i!>},<!!!>,o{!>>}},{<"e!>,ia"!>},<u!!!a"!}<ea!!<!{>}},{{}}},{{{{{<!{aiioi<!ei!>!!!>},<a!!a!>},<!u!!!!!!,!}<a>,{<'oo!!!>!>,<!!!!!>!u!>},<>}},<"},!!!>,!>!!!>!!!i,>},{{<{!!u">,<{,{!>},<{!}'>},{{<<o!{'!!!>,<>},{<i'oo!{u!!">}},{<oo>,<<>}},{{{{<i{!>,<!>},<"<!!!>e<e!>,<!!!""<!!'o>}},{{},<e"a!>},<au,>}},<!!i{!>,<!!!!<>}},{{<"<o}'e!!!!,<>,{<>}},{<>,<!o!>},<"!!!!!>!"{{"''au!!o,<!!!,>},{{<!!!>!>!e<o!>,<>,<>},{<>}}}},{{{{{{<"}>},{{<!!{u!!!>,<!>},<<!!!!"'>},{<!>},<'"}o,o!>},<!!o!>},<!!ie'!>}!>,<a,>}},{<{'e,a!>i!>,<!!!>,<!!!!"'a,o>}},{{<i"i"!>},<!!,!!!>!>'a!{!>,<!!!>,<!>},<e>},{{<!>,<>}}},{{<'i!>,<,o,!!i'i!!e<!}o>},<!>}e{!!o<!!!>o!!,!>},<,!>,<!>},<!>},<o!!{>}}},{{<!i{!!,u}'u!ea>,{{<!!oo>},{<,>}}},{{<!>,<!!i!!!>'!!u}!!,,u}<!!,!ea>},{{<!!i!!,"!>'o"{ou,'}>},<!!!>>}}},{{<e'!!<u>},<!>,<i}!>!>,<<!!!>"{u<uo>}},{{{},{{<u!!euu!>},<>}}},{{},{<!!!>a<<}{""'!!!>>}}},{{<}!{'!!}}e,'e!!'}!>},<!!e>},{{{<u!a,eoo!>,<{!!,<>},{<!>,<>}}},{<!<}uei}o,io!>,<{!!!>,<!>>,<!!{oioi!>,<!!,!>},<iu!>},<!!o,}!u<>}}},{{{{{<!!!!!!e!>},<u!!i!!!>a!">,<a!>},<}>},{{},{<e!!!>>}}},{{},{<i!!>,{}},{<""{!a>}}},{{{<a,"!!!>!!'!au',a!'aie'!>,<{o>,{<<<<!!e<>}},{{<e'"!!a""!!>},{<a!oe!>},<,<>}},{{<}i'<!>!>,<}!!oa!!eeu!>},<a>}}},{{},{{{{}},{<!>!!<!!}>}}}},{<!!!!'i,<!>},<"{!!"},>,{<!e'!>},<,!><!!{"!>!"!>!!'>}}},{{{<!!io!>,<ioi,>},{<i{!!!>,<!>!<!!!!{ae!!!>!>},<e!>!!!>'a,"!>},<>}}},{{{<>}}}},{{{{{{<{!>},<!!!!ua!!{e!>a>}},{<oa!!u{,!>},<e!>,<!>'o'u>,{<!!"!!!>,<}!>!!}!!<"ui!>,<!"!>},<,ou>}},{<o!>>,<!>},<{!!,a!>,<!,aa!>'!!!!!>"!o!>,a>}},{{<!"!!!e!>,!o,'<ea'i!>>,{<!>},<'!,!>},<e}>}}},{{{<!>,<!!}!!!>,<a!!<e}!o!>i,!>},<,>},<o,>}}},{{{},{{<!a!!!>!>},<o!!e<!!oa!!}!!>},<}!>!!!!i{>}},{<<"!>!>,<<<!!!>,!!!>!!!"{a>,<!>,<!!,!!!!!>>}},{{{{<>,{<{o{i'<{!!"i<!>,<u!>>}}},{{<u!>,<!>,<!!,!}!ee,!!!!'<'!<!><>}},{{{{<!>},<'!!!>ue!o!>!!<!>},<<!!>},<!!!>}>},<!>!>u<>},{{},{<!>},<!o!>,<i<e}>}},{{<u"u<,u"'a}<i!!!!!>e}>,{<!>,<!!!>>}},{}}}},{{{<!>,!!!>e>}}},{{<,oe>},{{<<!o!!!>},<!>,<u!!}!!!>'!!'"!!!!!>>}},{{{}}}}},{{{<!>},<!!a!>,<!>!!}a"<'>,{<!''u!!!>},<!!'aa!>i!!o'e!!!a>}},{<!>},<o!>i'!a!!<aa>,<'<e>},{{<'!!!>},<}i{i!!!>!!{!!a,!,>}}},{{}}}}},{{{{<e}!!>,{<e!!!>!!!!!'u{!!"!!!}o!'aou!!!!!>a>,<!!o}}ai!>,<i>}},{<!>},<!>,<'!!!>u!o{oo{'!!!>>,{}},{{<!!{!""o,}!!!!{!o<!,ii!!<,!!u,<>}}},{{{<<!>,<!>},<!>,<!!}!!!a,<,o!>},<!!a}!>,<!{}>}},{<"}{!>,<!a<<o!{u}!!!!!!!!"<!>,<!!<!>>},{{<<!!,"!>!!<!>,<a!>},<e,!>},<<{!!>},{<<!>,<!!{!!!o!}!>,<!!!>},<!o>,<oo>}}}},{{<{o!!!!!>{!>,<}>},{{}}},{{<{!!!>,<<!>!!!!u!>!!!>'i{,}u>}}},{{{{{<!>},<!!!>e!>},<oui">}},{<,,!'!>,<o!!!>ua<!>>}},{{{<{!,!>,<!!!>"!!!!<!>,<<!!<a!!''!>>}},{{}}},{{{<!!u}{!>"!!!>},<>},{<!!!>u'ea!>eu!u!!!><u"e,>}}}},{{{{{},<!!!>!u!!!>},<,{oi!>,<'!!!>,<>}},{{{{<!>,<"u}!!">,{}}},{<i!i,{{!>,<{!!!>!>!!uuo!>,<'!>,<>,<!!!!!><ioe!<!!ae'!!!>},<,>},{}},{{<<}!!{!{!!>},{<!!!>!ioaau!>!>},<ou,oo>,{<!>{e<,iei!!au!!!><u{!>},<>,<!!!!!>'!""!!!>e{!!!>u>}}}},{<!!o!!!,<!'!!!i>}}}},{{{{<a!!!!!!,iai!!!{!!o!!e<uo!!!><>},<}!!'!>,<<a,!!},!>,<!!!!!>}'!>,<!>u>},{<!!!>!<o!!!>{o!uaa,!!!>{!!!!}<o!!!>!>},<>,{<,"{ae!>},<!>},<!!!!!>!!!>!!!>}e,>}}},{{{<<"!>'a'!!uu>},<,!>!>a!>!!>},{<!!!!'!!!>e!!!!!}uu<!!"!o!{ie!>"eo>,{}},{{},{{{},{}},{<!>,<'!>e!}!!a<o>}}}},{{<!!!!!>},u!!!>e<{!!u">},{}},{{<,'i!!!>>,<"e<,'e{u!!!!o}"!""uu!!!!!>!>},<'o>},{{{}},<o!>},<!!!>!!!>e,!!!>,<!>},<,!!!>,<a>}}}},{{{},{{}},{{{<>}},{<>}}},{{},{{{<ueao>,<ou!!!>},<!>!>ei"e<i!!>},{<!!!>,<!>,<u<,!!a}<!>,<e>}}}},{{{{{{{<"!>">}}},{{<{!,}!>!!!>,<"!>},<!!!i!>},<i!!'!!uau!!!>!>},<>,{{}}}},{{{<>,<!>,<!>,<!!!!ioi!!!><{{}!!!!!!'>}},{<!!'!!{o!!i!!i}o!!!>},,>,{}},{{{<>,{{{<e!}{!!o""!>u!!!>">},<!!'{!!!>"!!!!!u!!!<,!!!>>}}},{<!!!>!!a!>},<}u!!!><!>,<o!!!>!uo}"u!{!>!!<>}},{{<a!>,<ui!!<!!!!{o!>}}!>},<"e,>,{<a<aeu"a!!"u!!i!!u!>},<!>,<!>,<'"<a<>,<>}},{<!>},<}"e'a!>},<!!'!>,<e!a!!!!o'!{!>},<!>},<'>}},{{{{},<<<o!>},<!>,<!!}!!!}>},{{},{<u!!'}i!!!!>}},{{}}}}}},{{{<"!!e!>},<i}!>i>,<!>},<!>!>},<>},{<!!oeou!>},<i!au{ai!!!!!>!>!>,<!!!>>,{{{}}}}},{{{{{<e!,,,!!u}i!>,<e,}}o!'>}},{<!!!>>}},{<{},!!iue''o!!!!!>!>},<>}},{{}},{<a!>e'!!,!!!>},<>}}}},{{<>}},{{{<'}{ae>},{<!e!>,<<}!!!>a!>},<!>,<!!!>!!!>a!!o>,{<!>},<<{a,e,,i}o!>,<>}}},{{}},{<ui!!!!ui!>,<{!>},<>,{}}}},{{{{{},<!!!!!>,<a''ao!>},<{!",>},{<!>!!u!!!!!>a!!!!!>,>,{<!>!>,<!!!!!>i}u!!!>!!!>,<!!uu!>},<!!>}}},{{{{<iai,!>'!>,<,u!!!>},<!!!>!!ao>},{<!!!>{!!!u!!',a!!!!!>u!>,<{>}},{{{}}}}},{{}}},{{{<i!>,<"!>,<{>},{{<e!!a!!!!!!}!!!>!!i<!!!>{>},{<!!!>!!!>}!!a!{,e!>a!!,!!!>>}},{}}},{{{{{<e!!iue<e!!,>}}},{{<o!>},<,!>,<>,{<i,,"{a!'}{o>}},<!!!>,!{!!!>},<!!oa!!,oa{!>>}},{{},{{<!!!!e'!>},<{!>,<!!i!}{a!!!><uu,!!!>},<}!!">,{}},<!!eo!>,<!>,<,o!>,<!>},<,!!!>}"o<!>,<i!!!!!!!>},<>}},{{{},<oae!!!e!>,<>}}}}}}}},{{{{}}},{{},{<!{'ie'!!!>,<!>,<ou!>,<!!!>},<{ea!u!>a!!!><>,{{<o!!!!!<,i<!>},<i!}!}!!!>,<!>u{!!!>>}}},{<!!!>a!>,<<{e{!>},<}}!>>}},{{<!>,<e>,{<!>},<!a!>a!!!>!!!>o!uio{o>}},{{<!!!>!!o!!iu!<"}!!o{'!{ooio<>},<e>}}},{}},{{{{<>},{{{},{<!!!>},<i!!!!!>!iaa,}e!>!!o}a!!!>},<>,<e!>},<!>,<!!i,,,"'uo>}}},{{<>,<>}}},{{{<!ee!!!!!>!>},<'!!!>!>i>}}}},{{}},{{{<}!!!>{!!>},{<'a,!{i!!,!>!!'!>}u>}},{<!!"!>!>,<">,{<<<!><o!>},<!>},<e!!<"!>>}},{}},{{{<!!!!!>!!!!!!<"<!"{}!>},<!!!!!!!>e}'!!{!!i>}},{{<!!i!>>,<o"!{'!>!>'!>,<!!<i!>},<o!>},<!!!>,<!!}a!>,<!!>},{{},{<!!a">}}},{<!>,<ii!!,>,{<a<o"!>>}}}},{{{<!>,<o!!!>}>},{{{<u>}},{<!>},<!>},<>}},{{<!!!!!>ao!>},<<!>},<!>,<!>,<!',o!>,<!!{!>,<!>},<!>},<{>}}},{{{<}!>},<<a>},<,!!!>ua!>!>,<o{u!!!i!>>},{{<'o>}},{{<e!>},<!!!>>},<!>!>,<"<!!!!i}>}},{{{{},{{<!!<o<!>},<>,{<>}},{{}},{}},{{{<>},<eoeuo!>,<>},{{{<o!!,!>,<!>"o!>,<,!!!>o'!!<oe>},{{{},{}},{}},{{<!>!>},<eo>},<>}},{{<!>!>",!!!>,<!!<,!>>},<!!!>{!>},<}<uo!!oe!o<o!>,<"{"<>},{}},{{},<!!{!!!!!>!>i!>'{ei!!!a!!!><!!{!!!!!>}<>}},{{{{}},{<i!!!>!>},<!>a!>},<"}!!,u,'{a!>},<{>,<!!!>io!!<!!{o!!!!!,e,>},{{<e>},{}}}}},{{{{{<u!>,<">,{<<!>uo!>,<>}}}},{<<u}"!<{{!!}!!a!!">},{{<}!!!>},<i!>},<!>},<}>},{<!!ui>,{}}}},{{<}"o!<ae!!'!>},<!>},<'u'!>},<<>},{{{<ai,}io!!!>e!>,<a,>}},{{<!>!><a!!!>o!!!>},<,{,a<u!!}e>}},{{{<'!>}!!'u,!!!i!!u>}},{<!>,<o!>!,>}}},{{{{}}},{{<!!!>,a!!<iae!!!>{<!!ao!!!u>},<!!!>!!<!>i"!>,<!!!>!!iu!>},<!!"'"!}!>,<<,>}}},{{{{{<iu!>},<'aae!o!!!>{aa,!>!!!>,<>},{<u!!!>,io<{u!!!!u>,{}}},{<}!<!!}!!!>!>},<}!>!>!>!!i,!>'!>,<,">,<{ioo!>},<!!!>{}a'e"!o>},{}},{}},{{{{}},{{<!!ue<>},{{}}},{{<a!,>,{}}}},{{{}}},{},{{{<o!!!>!>,<!>i!>},<,e!!!u<!>},<>,{<{<!!!>a!!!!'oi<!!!>!!}!>},<!!!>{>}}},{{{{<!!'u,>,<!!"!!}"!!{!i>}},{{<!>},<{!!<}<e>,<u!>,<!!!>!!!>!>,<a<!!!a!!u!a"!!,!!''>},{{{{},{{<!>!!!>!>,<e!!}!><!>,<!!!>,<'!>e!>!!ee,>}},{{{<,o!,,o<!!i!u!>>,{<!!!!ii"{}!!!>',>}},<!><"a!!!!{a!>},<e{!!!>}}>},{{{<"',!a>},<!>},<'!>,<!>,<{i!>},<!}!!!!!!!>!>,<i!>!'!!}<>},<{!o"o>},{{{{<i!!!!'{>}},{{<!{!}!>e!!!>!!!>i'e,,a}!>u">},{<!>},<u!>,i!i!!!>!>,<,a!!'"",uu>}}},{{},{{<!u!>a"}>},{{<!<iu!!!!!!u'''>}}}}}}},{},{<'!oue!!!>oa!u!>,<}e!>{o>}},{{},{{{<!!!!!eii!!!>},<>}},{{<}!>},<e<!>!!!>i,!!!>},<!e!!!!!>e!!!!!>">}}}},{}}},{{{<!!!>"!,!>,<!>!!!>,!!!!!>!!!!!!!!'oa!!u{a"!!!>e>},{<{,!!!>!>,<<!!!>,<"!!!>!>},<!!a"o}'>}},{{<>},{{<!>},<"!!!!!>'!>,<!>>},{<!!!>!>,<e{,a!!e}!>,<u<}!!i!>},<!!!>'>}}}}},{{{{<!!!>o<!!!>!!!!e"!!",!!!!!!i!!!!!>!'>},{<!!e!>,<'!!!>>}},{}},{{{<!'!!!>!ao!>,<!!ia!>},<!>i!>},<'!>,<>}},{{{<o!!,>},{{}}}},{{{<"!>,<!<<!>,<'>}}},{{},{<"!a!>},<ia{!>!!!>{!!!>},<!!}a"!!'!!'"u>},{{<a"!!!>},<'!!!>i!>,<',}}>},{}}}},{{},{{<o!!!>!!!>!i}''eu!>},<!!a,!!!>>},{<{!!!>o'u'oa!!e,>}}},{{<!>,<!}<}"!!!>u,!>!!!!!!!>!!!!o>,{<{!>},<!>'e!!"!!e>}},{{},{}}}},{{{<!>,<!!!>",!>oo{!>},<e'!!!!!>>},{<!>'a!>,<eu!!!>u}!!!!u">}}}},{{<!o'!i!>,<,!!",a!>},<>,{<{}oe!!!>}{!>},<,{'!>},<u!!!!!>,<>}},{{<'ao'a!!,!!<i!!!>>},{<i}!>,<'e>}}},{{{<<!!!>,<i!!!!!!!>}>}}}}}},{{{{{{{<{!>,<o"u}!!!>{o>},{<ue!!{>}},{<!!i!>},<o,!}eo'!!ue!>},<e>}},{{<{{!!i{!>},<!!!>!!!!!>},<e'<'!!{!>},<>,{<a!>,<'!>{!!!>"!}"<a}!!!>!!e!!ii!>>}}},{{{{{}},{<!!!'!!!!!>!,!>,<i,,i"{,e!>,<!>,<,>}}},{{<<ai!!!!!!!>!!!>},<"'o!>,<o'!!!>,<!!{}>,{}},{{<!!!>!>},<i!>},<i>},{}}},{{<<{>},{<!!!>,!!i!!ea<}!!!!o{}a!>,<,}!>>}}}},{{<"a!>},<ee,!>,<}!!!!!>'eoi{!!}!>},<>},{<!!i}!>!>},<!u!>!>,<}",!!'!><!>!<>},{}},{{{<u!>,<ae!i!>,<!!e!!!>iia>},{<!>,<!!!>a{u}ieu!!a}!!!!e!>},<o!>},<!>u!!u!>},<>}},{{<!!!>>,{<'>}}},{<!!u!>},<,!!o!!!>!!a!!!>!!}>}},{{},{{}}}},{}},{{{<e'o!>},<!!iie!>,<,!>,<!>!!e!>},<!!!!!!!>,<>,{<!!!!!>u!>,<e!o!e!>!!!>!e>}}},{<<!>,<i"!!}!!o!!!>!e{aaoui>,{<,}i'i"}"ou>}}},{{{<>},{<!!i,oa!!!>!!!!!>}}}eu>}},{<iaa!!!!i>},{{{},<<u!!!>!!o!>,<',!!!>u!!!>!!'{!>'!!,e>},{}}}}},{{{<}!>,<!>!!!>},<>},{{{}},{{<{,!>u"!!a"',<}!!!>u!!!!!>a!><!e>}},{<!>,<!!"'}!oa}uu}!{e'ei!!oa{!!!!!>>}}},{}},{{{},{{{<!!e">}},{{{<!!!>!!,">}},{},{{<a"oe!!!>"<!>,<!>,<">},{<a!>,<i!>!'!!!>u'!>,<,!>,<o,>}}}},{<"<!!!>iii!>!!!>},<<!>,<!!!>},<!!o!>,<!!!>ui">,<<i<a!!'"}<e!!!><!!!!!"}e,,!a>}},{<euo<!!!>},<u>,{<!!,!!u{!!!>!!!!!!!!}e<>}},{{<'}i!>},<a"e!!!>ue!!'oa>},<!e!!!>>}}}},{{{<'{!>,<a!ai'!!!!!><u!>,<"!>},<>},<a}!>},<}eo!!!>ai!>},<e',!>,<a!>!a"}>},{{<}o!>ao"!}<<>},{{<>}}}}},{{{{{<!!!>!>},<!ai!!>},{<{>}},{}},{{{},<i},ue!!!!ou!ee!'e'!!'>}}},{{<!>},<ii!!!>!>,<!>},<<}!>},<!,!>},<"}a>},{<,!!!>}!>},<!!,!>},<!>u<i!!"!>,<'u!>,<!>,<!!!>>}},{{{{{<"e!!!!!!u!!!>!!"!!!>"!}!oo!!!>,<>},{<!>},<!<!'u!>,<ae>}},{{},{<i!{>}}},{{{<{'!!<}!>,<,i,!>},<!>,<o!!!>,<}!!!!o>},<!!!>!e}a!e!>}!!o>},{<!o!!ae,a!>},<}}!>},<}{!!>},{<ea!>io"'{!<!>,<>,<o,"a'!>,<i!!!>}}!!!>,<!!<!>,<!}{a'>}},{{{{},{<{!!!!!>!!u'!!!!!!!<}e"a}>}},{<!>},<!!!>io!!!!!>},<,e,}!>!>!!e}!>},<ui<>,{{<i}o!!!>!!!!,{!!ee!>,<,!!>}}},{<!>},<,!>},<>,{{<{!>,<{"a}!!!>!!!>!!a!!ai!u>,{<ie"!"i>}}}}},{{{{<!"!!!>!}!!a!!>,<!>u!!!>!!,o!!,<!!<!>,<"!>,<e!!!>,{}!>},<!">}},{{}}},{{{<!>},<a"!!oo!!!!i>,{<uoo!>},<!!!>!!e,e!!u!u,i!!i,>,{}}},{{{<!>,<'i!>},<{e!{!!i>}},{<uiua{!!<e>}},{}},{<io!>e>,{{<i,!}!e>},<,!>{!!!>!a!}>}},{{},{{<a!>,<a!>!>,<oi!!!!!>,<!>!"!!a!!!>!<!<>}}}},{{<"ioe!>,<!!a<!o"!>!!i{!!!>,<!>!!o>}},{{{},{}},{<>,{<'!!'!>!i<!>>}},{{<!>,<!!!>,a<o<{!,}!a!!!>,!!!>>}}}}}},{{<"'",<'>},{{<u},!!!>",!>},<e{e!!!>!!!>!>,<!!'o}i>,<!>,<{{}i"a{!!!!!!!>,<}o,>},<!ii>},{{<{!>,<!!o{>}}},{},{{<'uo!>ui{!!!>!>,<!'!!'!"eo!<!!{!i>,{<!!,{{i!!!>,<!o>}},{{},{<o>}}}},{{{{{{},{}},{}},{{<e!>e!!o!!!>ue"{!!!>!!!>!>>}}},{{<>,{<i",a!"">}},{{<!i!>,<!!!"e!!u!!!!!!!>o}e"}>},{}}}},{{{<},!>,<!!!>uu!!'}!!!>o!!}<{!!!>,<u!}>,{{{},{{},{<<a!<!>},<u!!i{<!>},<>}}}}},{{<!>!>o!!!>!>,<<,!"!!}">}},{{<!!!!'o>},{}}},{<ao!!!>!!!>!!!>!>},<!"aao"{!>},<!>>},{{<'oa{!u}!o!!e!>},<!!'>}}}}},{{{{{<!>},<o}o!!!>,<'>}},{}},{}},{{{},<!>,<i!!e!>},<<<!>,<e{aa!iouie>},{<!!!>,>,<{!!!>,<'!!!>},<"!>"}!>},<!!!>,<!>!!!!!e!!!!,!>,<>},{{<!!!>,<>}}},{{<!>!>},<<<!!e!!!!!>>},{{<}!>},<'>}}}}}}`;
  })();

  return [day1, day2, day3, day4, day5, day6, day7, day8, day9];
})();

export default adventOfCodeInput;