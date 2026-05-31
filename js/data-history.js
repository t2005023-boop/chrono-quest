// --- 歴史データ ---
const HISTORY_ERAS = {
  era1: {
    id: "era1",
    subject: "history",
    title: "人類の出現と文明のおこり",
    subtitle: "グレートジャーニーと石器時代",
    color: "var(--color-green)",
    glow: "var(--color-green-glow)",
    class: "era-1",
    slides: [
      {
        title: "人類の誕生と進化",
        text: "地球上に人類が現れたのは約<span class=\"red-mask\">700万年</span>前。チンパンジーと共通の祖先から進化した人類は、後ろ足で立つ<span class=\"red-mask\">直立二足歩行</span>を始めました。これにより手が自由になり道具を使い始めました。人類は、脳が小さい<span class=\"red-mask\">猿人</span>から、火や言葉を使い始めた<span class=\"red-mask\">原人</span>、そして約20万年前に現れ現代の直接の祖先となった<span class=\"red-mask\">新人</span>（ホモ・サピエンス）へと進化しました。",
        caption: "アフリカから世界中へ広がった人類の進化（グレートジャーニー）。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><path d="M50 150 Q100 80, 180 100 T300 90 T380 110" fill="none" stroke="#10b981" stroke-width="4" stroke-dasharray="5,5"/><circle cx="50" cy="150" r="10" fill="#ef4444"/><text x="50" y="180" fill="#fff" font-size="12" text-anchor="middle">誕生(アフリカ)</text><circle cx="180" cy="100" r="8" fill="#10b981"/><text x="180" y="80" fill="#fff" font-size="12" text-anchor="middle">アジアへ</text><circle cx="350" cy="110" r="8" fill="#06b6d4"/><text x="350" y="140" fill="#fff" font-size="12" text-anchor="middle">日本へ</text><text x="200" y="30" fill="#10b981" font-size="16" font-weight="bold" text-anchor="middle">人類の広がり（グレートジャーニー）</text></svg>`
      },
      {
        title: "旧石器時代と打製石器",
        text: "約260万年前から地球は氷河時代に入りました。この時期に人々は石を打ち欠いて作った<span class=\"red-mask\">打製石器</span>を使い、ナウマンゾウなどの大型動物を狩ったり、植物を採集して暮らしていました。このように打製石器を使い、狩りや採集を行っていた時代を<span class=\"red-mask\">旧石器時代</span>といいます。人々は獲物を求めて移動しながら暮らしていました。",
        caption: "石を打ち欠いて作った「打製石器」は、氷河期を生き抜く重要な武器でした。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><polygon points="200,40 160,100 150,160 180,210 220,210 250,160 240,100" fill="#64748b" stroke="#94a3b8" stroke-width="3"/><line x1="160" y1="100" x2="200" y2="120" stroke="#475569" stroke-width="2"/><line x1="240" y1="100" x2="200" y2="120" stroke="#475569" stroke-width="2"/><text x="200" y="235" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">打製石器（石を打ち欠いた道具）</text></svg>`
      },
      {
        title: "新石器時代と農耕の始まり",
        text: "約1万年前に氷河期が終わり温暖化すると、マンモスなどが減り植物や小動物が増えました。人々は植物を栽培する<span class=\"red-mask\">農耕</span>や、牛や羊を育てる<span class=\"red-mask\">牧畜</span>を始め、食料を計画的に生産できるようになり、<span class=\"red-mask\">定住生活</span>を送るようになりました。食料の調理用に土器を使い、石を磨いて作った<span class=\"red-mask\">磨製石器</span>を使うようになった時代を<span class=\"red-mask\">新石器時代</span>と呼びます。",
        caption: "農耕と牧畜の開始により定住生活が可能になり、磨製石器が活躍しました。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><path d="M170 50 C 170 50, 150 150, 160 200 C 160 210, 240 210, 240 200 C 250 150, 230 50, 230 50 Z" fill="#94a3b8" stroke="#cbd5e1" stroke-width="3"/><path d="M80 200 Q80 150, 60 120 M80 200 Q90 140, 110 130" fill="none" stroke="#10b981" stroke-width="4"/><text x="200" y="35" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">定住生活の始まり（農耕・牧畜）</text></svg>`
      }
    ],
    quizzes: [
      {
        type: "choice",
        question: "人類が進化の過程で最初に行った、他の動物と異なる最も重要な特徴は何ですか？",
        options: ["火の使用", "直立二足歩行", "言葉による会話", "磨製石器の使用"],
        correct: 1,
        explanation: "人類は後ろ足で立つ「直立二足歩行」を始めたことで手が自由になり、道具を使い、脳を発達させました。"
      },
      {
        type: "choice",
        question: "旧石器時代に使われていた、石を打ち欠いて作られた鋭い道具を何といいますか？",
        options: ["磨製石器", "青銅器", "打製石器", "鉄器"],
        correct: 2,
        explanation: "旧石器時代には、石を叩き割って鋭い刃を作った「打製石器」を使って、狩りや採集を行っていました。"
      },
      {
        type: "choice",
        question: "新石器時代に進み、人々の生活を移動から「定住生活」へと大きく変えたきっかけは何ですか？",
        options: ["氷河期が始まり寒冷化したこと", "農耕や牧畜が始まったこと", "万里の長城が築かれたこと", "打製石器が開発されたこと"],
        correct: 1,
        explanation: "温暖化に伴い「農耕と牧畜」が始まったことで、食料を計画的に作れるようになり、移動せずに同じ場所に「定住」できるようになりました。"
      }
    ],
    essay: {
      question: "旧石器時代と新石器時代の暮らしを比べて、使用した道具や食料の獲得方法などにどのような違いがあるか説明しましょう。",
      keywords: ["旧石器", "新石器", "打製石器", "磨製石器", "狩り", "採集", "農耕", "牧畜", "定住"],
      modelAnswer: "旧石器時代は氷河期で、人々は「打製石器」を使い、「狩りや採集」をしながら獲物を求めて移動生活をしていました。一方、新石器時代には地球が温暖になり、「農耕や牧畜」が始まって食料を生産するようになったため、人々は「定住」し、「磨製石器」や土器を使い始めました。"
    }
  },
  era2: {
    id: "era2",
    subject: "history",
    title: "原始や古代の日本",
    subtitle: "縄文時代と古墳時代の歩み",
    color: "var(--color-gold)",
    glow: "var(--color-gold-glow)",
    class: "era-2",
    slides: [
      {
        title: "縄文時代と縄文土器",
        text: "日本列島が大陸から切り離された約1万数千年前から、<span class=\"red-mask\">縄文時代</span>が始まります。この時代には、表面に縄目の模様がある厚手で黒褐色の<span class=\"red-mask\">縄文土器</span>が作られ、食物を煮炊きするのに使われました。人々は地面を掘り下げて柱を立てた<span class=\"red-mask\">たて穴住居</span>に住み、狩りや採集を行って定住しました。また、豊かな実りや魔よけを祈るための<span class=\"red-mask\">土偶</span>も作られました。",
        caption: "縄文時代の人々はたて穴住居に暮らし、縄文土器や土偶を生み出しました。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><path d="M120 70 L140 180 Q150 200, 160 200 L180 200 L220 70 Z" fill="#b45309" stroke="#d97706" stroke-width="2"/><circle cx="280" cy="90" r="15" fill="#78350f"/><rect x="255" y="105" width="50" height="60" rx="10" fill="#78350f"/><text x="200" y="35" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">縄文文化（縄文土器と土偶）</text></svg>`
      },
      {
        title: "古墳時代とヤマト政権",
        text: "3世紀後半になると、各地で王や豪族を葬るための巨大な墓である<span class=\"red-mask\">古墳</span>が盛んに作られるようになりました（<span class=\"red-mask\">古墳時代</span>）。特に近畿を中心に鍵穴のような形の<span class=\"red-mask\">前方後円墳</span>が作られ、これらを造らせた「大王（おおきみ）」を中心とする有力な豪族の連合体が<span class=\"red-mask\">ヤマト政権</span>として発展しました。古墳の周囲には、素焼きの土製品である<span class=\"red-mask\">埴輪</span>が並べられました。",
        caption: "絶大な権力を示す前方後円墳と、周囲に並べられた埴輪。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><circle cx="200" cy="100" r="45" fill="#10b981"/><polygon points="200,100 140,200 260,200" fill="#10b981"/><path d="M120 100 A 80 80 0 0 1 280 100 L 300 210 L 100 210 Z" fill="none" stroke="#3b82f6" stroke-width="8"/><text x="200" y="35" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">前方後円墳（豪族の巨大な墓）</text></svg>`
      }
    ],
    quizzes: [
      {
        type: "choice",
        question: "縄文時代に作られた、表面に縄目の模様がある食物を煮炊きするための黒褐色の土器は何ですか？",
        options: ["弥生土器", "須恵器", "縄文土器", "土師器"],
        correct: 2,
        explanation: "縄文時代に使われた、表面に縄の文様がある厚手の土器を「縄文土器」といいます。これによって煮炊きができるようになりました。"
      },
      {
        type: "choice",
        question: "古墳時代に造られた、円形の墓と四角い墓が合体した日本独自の鍵穴のような形のお墓を何といいますか？",
        options: ["円墳", "前方後円墳", "方墳", "八角墳"],
        correct: 1,
        explanation: "円形と四角形が組み合わさった日本特有の古墳は「前方後円墳」と呼ばれます。近畿地方に巨大なものが集中しています。"
      }
    ],
    essay: {
      question: "縄文時代の想像図と古墳時代の想像図を比べて、社会の仕組みや支配者の存在などに関してどのような変化が起きたか説明しましょう。",
      keywords: ["縄文", "古墳", "豪族", "大王", "支配", "格差", "権力", "共同体"],
      modelAnswer: "縄文時代は、人々はたて穴住居に住み、狩りや採集を行って皆が協力して暮らす、貧富の差が少ない共同体社会でした。しかし古墳時代になると、巨大な古墳が象徴するように、多くの人々を動員して墓を造らせる豪族や大王といった強い権力を持つ強力な支配者が現れ、身分の差のある階級社会へと大きく変化しました。"
    }
  },
  era3: {
    id: "era3",
    subject: "history",
    title: "大帝国の出現と交流",
    subtitle: "古代4大文明と中国統一の軌跡",
    color: "var(--color-blue)",
    glow: "var(--color-blue-glow)",
    class: "era-3",
    slides: [
      {
        title: "古代4大文明のおこり",
        text: "世界の大河のほとりで農耕が発達し、都市や国家が生まれました。<br>①<span class=\"red-mask\">エジプト文明</span>（ナイル川）：ピラミッドが築かれ、<span class=\"red-mask\">太陽暦</span>や象形文字が誕生。<br>②<span class=\"red-mask\">メソポタミア文明</span>（チグリス・ユーフラテス川）：太陰暦や『<span class=\"red-mask\">ハンムラビ法典</span>』が制定。<br>③<span class=\"red-mask\">インダス文明</span>（インダス川）：都市モヘンジョ・ダロが繁栄。<br>④<span class=\"red-mask\">中国文明</span>（黄河）：青銅器や甲骨文字が誕生。",
        caption: "大河の恵みにより、巨大な古代文明が誕生しました。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><polygon points="120,180 200,80 280,180" fill="#eab308" opacity="0.8"/><path d="M50 210 Q 150 190, 250 220 T 350 200" fill="none" stroke="#3b82f6" stroke-width="12" opacity="0.7"/><text x="200" y="35" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">世界の古代文明（ナイル川とピラミッド）</text></svg>`
      },
      {
        title: "始皇帝の中国統一とシルクロード",
        text: "紀元前3世紀、秦の<span class=\"red-mask\">始皇帝</span>が中国を初めて統一しました。彼は中央集権を確立し、文字や貨幣を統一。北方の遊牧民族を防ぐために<span class=\"red-mask\">万里の長城</span>を整備しました。秦の次に中国を支配した漢は、領土をさらに広げ、西方と結ぶ交易路である<span class=\"red-mask\">シルクロード</span>（絹の道）を開きました。これを通じて東西の文化交流が盛んになりました。",
        caption: "遊牧民族の侵入を防ぐために始皇帝が築いた「万里の長城」。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><path d="M50 180 Q100 120, 180 140 T300 90 L320 120 Q220 160, 180 170 L50 210 Z" fill="#64748b" stroke="#475569" stroke-width="2"/><text x="200" y="35" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">秦の始皇帝と万里の長城</text></svg>`
      }
    ],
    quizzes: [
      {
        type: "choice",
        question: "メソポタミア文明で制定された、「目には目を、歯には歯を」の復讐法で有名な世界最古級の法律は何ですか？",
        options: ["十二表法", "ハンムラビ法典", "ローマ法", "万民法"],
        correct: 1,
        explanation: "メソポタミア文明のバビロニア帝国でハンムラビ王が制定したのが「ハンムラビ法典」です。"
      },
      {
        type: "choice",
        question: "紀元前3世紀に中国を初めて統一し、万里の長城を整備した秦の初代皇帝は誰ですか？",
        options: ["孔子", "劉邦", "始皇帝", "武帝"],
        correct: 2,
        explanation: "秦の「始皇帝」は、分裂していた諸国を初めて統一し、中央集権体制をつくり、様々な制度（文字・貨幣）を統一しました。"
      }
    ],
    essay: {
      question: "古代の4大文明がおこった地域に共通する地理的特徴と、それが文明の発達にどう役立ったか説明しましょう。",
      keywords: ["大河", "流域", "農耕", "肥えた土", "洪水", "文字", "暦"],
      modelAnswer: "4大文明がおこった地域は、すべて大河の流域であるという共通点があります。大河の周辺は毎年おこる洪水によって肥えた土が運ばれ、農耕に適していました。大川の水を管理するために人々が協力する中で国家が生まれ、川の氾濫期を知るための暦や、記録用の文字が発達しました。"
    }
  },
  era4: {
    id: "era4",
    subject: "history",
    title: "すべての道はローマに通ず",
    subtitle: "ギリシャ・ローマの古代文明",
    color: "var(--color-purple)",
    glow: "var(--color-purple-glow)",
    class: "era-4",
    slides: [
      {
        title: "古代ギリシャと都市国家ポリス",
        text: "紀元前8世紀ごろ、ギリシャ人は各地に<span class=\"red-mask\">ポリス</span>と呼ばれる都市国家を建設しました。代表格のアテネでは、市民による直接<span class=\"red-mask\">民主政</span>が行われました。紀元前4世紀、マケドニアの<span class=\"red-mask\">アレクサンドロス大王</span>が東方遠征を行い大帝国を築くと、ギリシャの文化とオリエントの文化が融合し、のちに日本の仏教美術にも影響を与える<span class=\"red-mask\">ヘレニズム文化</span>が生まれました。",
        caption: "民主政のふるさとであるアテネのパルテノン神殿。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><line x1="80" y1="180" x2="80" y2="100" stroke="#cbd5e1" stroke-width="12"/><line x1="160" y1="180" x2="160" y2="100" stroke="#cbd5e1" stroke-width="12"/><line x1="240" y1="180" x2="240" y2="100" stroke="#cbd5e1" stroke-width="12"/><polygon points="60,100 200,50 340,100" fill="#94a3b8"/><text x="200" y="225" fill="#a855f7" font-size="14" font-weight="bold" text-anchor="middle">古代ギリシャ・アテネのパルテノン神殿</text></svg>`
      },
      {
        title: "ローマ帝国と実用的なインフラ",
        text: "イタリア半島からおこった<span class=\"red-mask\">ローマ帝国</span>は、地中海全域を支配する「帝政」へと移行しました。ローマ人は、広大な帝国を維持するために極めて実用的なインフラを整備しました。迅速な軍隊・物資輸送のための石造りの<span class=\"red-mask\">道路網</span>、遠くから都市へ水を運ぶ<span class=\"red-mask\">水道橋</span>、円形闘技場<span class=\"red-mask\">コロッセウム</span>などを建設し、実用的な法律も整えました。",
        caption: "堅牢な石造りのアーチを何層も重ねたローマの「水道橋」。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><rect x="50" y="130" width="300" height="70" fill="#475569"/><circle cx="90" cy="200" r="25" fill="#1e293b"/><circle cx="150" cy="200" r="25" fill="#1e293b"/><circle cx="210" cy="200" r="25" fill="#1e293b"/><text x="200" y="35" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">ローマ帝国の水道橋（アーチ構造）</text></svg>`
      }
    ],
    quizzes: [
      {
        type: "choice",
        question: "古代ギリシャで建設された、アテネやスパルタのような独立した都市国家を何と呼びますか？",
        options: ["ポリス", "ギルド", "コロニー", "ポピュラス"],
        correct: 0,
        explanation: "古代ギリシャでは、地形で細かく分断されていたため、人々は「ポリス」と呼ばれる自立した都市国家を作って生活・政治を行いました。"
      },
      {
        type: "choice",
        question: "ローマ帝国が広大な帝国領土を効率よく統治・維持するために建設した、実用的な社会インフラの代表例は何ですか？",
        options: ["ピラミッドと神殿", "ジッグラトと城壁", "道路網と水道橋", "大仏と木造寺院"],
        correct: 2,
        explanation: "ローマ人は、軍隊の移動や経済活動のための石畳の「道路網」や、都市生活を支える「水道橋」などの実用的な土木技術を極めました。"
      }
    ],
    essay: {
      question: "古代ギリシャとローマ帝国における、政治の仕組みや社会インフラの特徴について、それぞれの特色を比較して説明しましょう。",
      keywords: ["ポリス", "民主政", "帝政", "インフラ", "道路", "水道", "実用的", "統治"],
      modelAnswer: "古代ギリシャのアテネなどでは、ポリスという小さな国家規模の中で、市民による直接民主政が行われ、学問や芸術が重視されました。これに対しローマ帝国は、広大な領域を支配するために帝政へと移行し、統治を効率化するために石畳の道路網や都市へ水を送る水道といった極めて実用的なインフラ整備に力を入れました。"
    }
  }
};

// グローバルオブジェクトにアタッチ
window.HISTORY_ERAS = HISTORY_ERAS;
