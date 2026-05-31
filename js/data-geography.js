// --- 地理データ ---
const GEOGRAPHY_ERAS = {
  geo1: {
    id: "geo1",
    subject: "geography",
    title: "地球の姿と地域構成",
    subtitle: "六大洋と三つの大洋、世界の州区分",
    color: "var(--color-green)",
    glow: "var(--color-green-glow)",
    class: "era-1",
    slides: [
      {
        title: "陸地と海洋の比率・三大洋",
        text: "宇宙から見た地球は青く、水が豊かな惑星です。地球全体の面積における、海洋と陸地の比率は<span class=\"red-mask\">およそ7対3</span>となっています。海洋は、面積が最大の<span class=\"red-mask\">太平洋</span>、これに次ぐ<span class=\"red-mask\">大西洋</span>、そして<span class=\"red-mask\">インド洋</span>の「三大洋」と、そのほかの海から成り立っています。",
        caption: "地球全体の面積の約7割が海（海洋）、約3割が陸地（陸地）です。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><circle cx="150" cy="125" r="70" fill="#3b82f6"/><path d="M150 55 A 70 70 0 0 1 220 125 L 150 125 Z" fill="#10b981"/><text x="150" y="130" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">海7 : 陸3</text><text x="290" y="100" fill="#3b82f6" font-size="12" font-weight="bold">● 海洋 (約70%)</text><text x="290" y="130" fill="#10b981" font-size="12" font-weight="bold">● 陸地 (約30%)</text><text x="200" y="30" fill="#10b981" font-size="16" font-weight="bold" text-anchor="middle">地球の海と陸の比率</text></svg>`
      },
      {
        title: "六つの大陸と世界の州",
        text: "陸地は、面積が最大の<span class=\"red-mask\">ユーラシア大陸</span>をはじめ、アフリカ、北アメリカ、南アメリカ、オーストラリア、南極の「六大陸」からなります。また、世界を地域区分するときは「州」がよく使われます。日本はアジア州の東アジアに属します。なかには<span class=\"red-mask\">トルコ</span>のように、アジア州とヨーロッパ州の<span class=\"red-mask\">二つの州にまたがる</span>国もあり、その都市イスタンブールは東西文化の交差点として栄えました。",
        caption: "世界は6つの大陸と、6つの「州」に区分されます。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><path d="M40 80 Q100 50, 160 80 T260 70 T360 80 L340 180 Q240 160, 160 170 Z" fill="#047857" opacity="0.6"/><text x="200" y="125" fill="#fff" font-size="16" font-weight="bold" text-anchor="middle">ユーラシア大陸(最大)</text><text x="200" y="35" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">六大陸と世界の地域区分（州）</text></svg>`
      }
    ],
    quizzes: [
      {
        type: "choice",
        question: "地球の表面における、海洋（海）と陸地の面積の割合はおよそどれくらいですか？",
        options: ["海5：陸5", "海7：陸3", "海3：陸7", "海9：陸1"],
        correct: 1,
        explanation: "地球全体の面積のうち、海洋が約7割、陸地が約3割（正確には71対29）を占めており、およそ7対3と覚えましょう。"
      },
      {
        type: "choice",
        question: "地球上の六つの大陸のうち、最も面積が大きい大陸の名前は何ですか？",
        options: ["アフリカ大陸", "北アメリカ大陸", "ユーラシア大陸", "オーストラリア大陸"],
        correct: 2,
        explanation: "面積が最大の大陸は「ユーラシア大陸」で、ヨーロッパからアジアにまたがっています。最小の大陸は「オーストラリア大陸」です。"
      },
      {
        type: "choice",
        question: "国土が「アジア州」と「ヨーロッパ州」の二つの州にまたがっており、都市イスタンブールが東西文化の交差点として発展した国はどこですか？",
        options: ["トルコ", "エジプト", "ロシア", "イタリア"],
        correct: 0,
        explanation: "「トルコ」は国土の大部分がアジア州ですが、北西端の一部分がヨーロッパ州に属しており、二つの州にまたがっています。"
      }
    ],
    essay: {
      question: "地球上の陸地と海洋の面積比や、三つの大洋・六つの大陸の名前と特徴について、知っていることを説明しましょう。",
      keywords: ["陸地", "海洋", "7対3", "太平洋", "ユーラシア", "三大洋", "六大陸"],
      modelAnswer: "地球の表面は「海洋と陸地」が「およそ7対3」の割合で構成されています。海洋には「太平洋」「大西洋」「インド洋」の「三大洋」があり、最大の面積を持つのは太平洋です。陸地には「ユーラシア」「アフリカ」「北アメリカ」「南アメリカ」「オーストラリア」「南極」の「六大陸」があり、最大の面積を持つのはユーラシア大陸です。"
    }
  },
  geo2: {
    id: "geo2",
    subject: "geography",
    title: "地球儀と世界地図の特徴",
    subtitle: "球体と平面のジレンマ、各種地図の図法",
    color: "var(--color-gold)",
    glow: "var(--color-gold-glow)",
    class: "era-2",
    slides: [
      {
        title: "地球儀と世界地図の違い",
        text: "<span class=\"red-mask\">地球儀</span>は、地球を小さくした模型のため、距離、面積、形、方位を<span class=\"red-mask\">すべて正しく</span>表せます。しかし、全体を一度に見渡せず、持ち運びに不便です。一方、<span class=\"red-mask\">世界地図</span>は持ち運びに便利で全体を一望できますが、球体を平面にするため、距離・面積・形・方位を<span class=\"red-mask\">一度に正しく表せない</span>という特徴があります。",
        caption: "地球儀はすべて正しいですが持ち運べず、世界地図は便利ですが必ずどこかが歪みます。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><circle cx="120" cy="125" r="40" fill="none" stroke="#fff" stroke-width="2"/><text x="120" y="190" fill="#fff" font-size="12" text-anchor="middle">地球儀（すべて正しい）</text><rect x="230" y="95" width="80" height="60" fill="none" stroke="#fff" stroke-width="2"/><text x="270" y="190" fill="#fff" font-size="12" text-anchor="middle">世界地図（どこかが歪む）</text></svg>`
      },
      {
        title: "用途に合わせた世界地図の図法",
        text: "①<span class=\"red-mask\">メルカトル図法</span>：経線と緯線が直角に交わる。角度が正しく航路を示すのに便利だが、高緯度ほど面積が拡大され、グリーンランドが南アメリカと同じ広さに見える（実際は南米が約8倍広い）。<br>②<span class=\"red-mask\">正距方位図法</span>：中心からの<span class=\"red-mask\">距離と方位が正しい</span>。中心からの直線が最短距離（大圏航路）を示し、航空路の確認に利用されます。",
        caption: "経線と緯線が直角に交わるメルカトル図法（左）と、距離・方位が正しい正距方位図法（右）。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><path d="M70 70 L70 170 M120 70 L120 170 M50 100 L140 100 M50 140 L140 140" stroke="#06b6d4" stroke-width="2"/><circle cx="280" cy="120" r="45" fill="none" stroke="#a855f7" stroke-width="2"/><line x1="280" y1="120" x2="315" y2="90" stroke="#ef4444" stroke-width="3"/><text x="100" y="210" fill="#fff" font-size="12" text-anchor="middle">メルカトル（直角）</text><text x="280" y="210" fill="#fff" font-size="12" text-anchor="middle">正距方位（中心から正しい）</text></svg>`
      }
    ],
    quizzes: [
      {
        type: "choice",
        question: "地球儀と世界地図を比較したとき、世界地図だけが持つ最も大きな利点（長所）は何ですか？",
        options: ["距離、面積、方位がすべて正しいこと", "世界全体を一度に見渡せて、持ち運びやすいこと", "球体の形をしていること", "高緯度ほど面積が正確に表現されること"],
        correct: 1,
        explanation: "世界地図は平面なので、地球儀のように「すべてを正しく」は表せませんが、「世界全体を一度に見渡せる」「折りたたんで持ち運べる」という地球儀にはない高い利便性を持っています。"
      },
      {
        type: "choice",
        question: "経線と緯線が直角に交わり、角度が正しいため羅針盤を使った航海に便利だった一方、高緯度ほど面積が引き伸ばされて表現される地図の図法を何といいますか？",
        options: ["正距方位図法", "モルワイデ図法", "メルカトル図法", "サンソン図法"],
        correct: 2,
        explanation: "「メルカトル図法」は角度が正しいため航海図として利用されましたが、赤道から離れて極地方に近づくほど（高緯度ほど）面積が実際よりも巨大に引き伸ばされる歪みを持っています。"
      },
      {
        type: "choice",
        question: "地図の中心からの「正しい方向（方位）」と「最短距離（距離）」が正確に表され、中心から引いた直線が最短の航空路を示す図法は何ですか？",
        options: ["メルカトル図法", "正距方位図法", "モルワイデ図法", "地球儀"],
        correct: 1,
        explanation: "中心からの距離と方位が正しく表される図法は「正距方位図法」です。飛行機のルート（大圏航路）を決める際に非常に便利です。"
      }
    ],
    essay: {
      question: "地球儀と世界地図のそれぞれのメリット（長所）とデメリット（短所）について、比較して説明しましょう。",
      keywords: ["地球儀", "世界地図", "正しく", "見渡せる", "持ち運び", "歪み", "距離", "面積"],
      modelAnswer: "「地球儀」は地球の正確な縮小模型であるため、「距離・面積・形・方位」が「すべて正しく」表されているのがメリットですが、「持ち運び」に不便で世界全体を一目で「見渡せない」のがデメリットです。一方、「世界地図」は全体を一度に「見渡せる」ことや「持ち運び」やすいことがメリットですが、球体を平面に映すため、距離や面積などに必ず「歪み」が生じ、「一度にすべてを正しく」表現することはできないのがデメリットです。"
    }
  },
  geo3: {
    id: "geo3",
    subject: "geography",
    title: "世界の国々と国境",
    subtitle: "自然の障壁と人為的な直線、島国と内陸国",
    color: "var(--color-blue)",
    glow: "var(--color-blue-glow)",
    class: "era-3",
    slides: [
      {
        title: "国境の二つの決まり方",
        text: "世界には190余りの国があり、国と国の境界を国境と呼びます。国境には二つの種類があります。<br>①<span class=\"red-mask\">自然国境</span>：山脈（アルプスやアンデス）や河川、湖といった自然の地形に沿って引かれたもの。<br>②<span class=\"red-mask\">人為的国境</span>：緯線や経線などの<span class=\"red-mask\">まっすぐな線</span>を利用したもの。アフリカの多くの国境や、アメリカとカナダの北緯49度の国境がこれに当たります。",
        caption: "自然の地形を利用した国境（左）と、緯線・経線で真っ直ぐ引かれた国境（右）。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><path d="M60 160 Q 90 90, 130 150 T 200 120" fill="none" stroke="#3b82f6" stroke-width="4"/><text x="130" y="200" fill="#fff" font-size="12" text-anchor="middle">自然国境（川や山）</text><line x1="280" y1="60" x2="280" y2="180" stroke="#ef4444" stroke-width="4"/><text x="280" y="200" fill="#fff" font-size="12" text-anchor="middle">人為的国境（直線）</text></svg>`
      },
      {
        title: "島国・内陸国と国名の由来",
        text: "日本やイギリスのように、国土の周囲がすべて海に囲まれている国を<span class=\"red-mask\">島国</span>（海国）と呼びます。一方、モンゴルやスイスのように海に全く面していない国を<span class=\"red-mask\">内陸国</span>と呼びます。国名には由来があり、スペイン語で赤道を意味する<span class=\"red-mask\">エクアドル</span>や、低い土地を意味する<span class=\"red-mask\">オランダ</span>、氷の国を意味するアイスランドなどがあります。世界で最も面積が小さい国は、東京ディズニーランドほどの面積しかない<span class=\"red-mask\">バチカン市国</span>です。",
        caption: "周りに海がないモンゴルのような「内陸国」と、四方を海に囲まれた「島国」。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><rect x="80" y="80" width="100" height="70" fill="#b45309"/><circle cx="300" cy="115" r="25" fill="#0284c7"/><text x="130" y="180" fill="#fff" font-size="12" text-anchor="middle">内陸国（海なし）</text><text x="300" y="180" fill="#fff" font-size="12" text-anchor="middle">島国（海囲み）</text></svg>`
      }
    ],
    quizzes: [
      {
        type: "choice",
        question: "アフリカの国々や、アメリカとカナダの境界線のように、緯線や経線を利用してまっすぐに引かれた国境を何といいますか？",
        options: ["自然国境", "人為的（数式的）国境", "山脈国境", "暫定国境"],
        correct: 1,
        explanation: "緯線や経線などの人が考えた数式的な線をベースにした国境を「人為的国境」と呼びます。地形に関係なく真っ直ぐな線になるのが特徴です。"
      },
      {
        type: "choice",
        question: "周囲が完全に陸地に囲まれ、海に全く面していないモンゴルやスイスなどの国を何と呼びますか？",
        options: ["島国", "内陸国", "半島国", "海洋国"],
        correct: 1,
        explanation: "領土が海に面していない国を「内陸国」と呼びます。これに対し、日本のように周囲が海に囲まれた国を「島国（海国）」と呼びます。"
      },
      {
        type: "choice",
        question: "スペイン語で「赤道」という意味の言葉がそのまま国名になっており、実際に赤道が通っている南アメリカの国はどこですか？",
        options: ["コロンビア", "エクアドル", "アルゼンチン", "オランダ"],
        correct: 1,
        explanation: "「エクアドル」はスペイン語で「赤道」を意味し、その名の通り赤道直下の国です。同様にオランダは「低い土地」を意味します。"
      }
    ],
    essay: {
      question: "世界の国境の決め方にはどのような種類があるか、二つの国境のあり方とそれぞれの具体例を挙げながら説明しましょう。",
      keywords: ["自然", "人為的", "山脈", "河川", "経線", "緯線", "直線", "地形"],
      modelAnswer: "国境には、自然の「地形」を利用した「自然国境」と、人間が決めた線を利用した「人為的国境」の二種類があります。自然国境は「山脈」（アルプス山脈など）や「河川」（ザンベジ川など）、湖に沿って境界を決めます。人為的国境は「緯線」や「経線」を利用し、アフリカの国々やアメリカとカナダの国境のように、地図上で「直線」的に国と国の境界を引きます。"
    }
  },
  geo4: {
    id: "geo4",
    subject: "geography",
    title: "緯度と経度による位置の表し方",
    subtitle: "地球上の番地、本初子午線と赤道、季節の逆転",
    color: "var(--color-purple)",
    glow: "var(--color-purple-glow)",
    class: "era-4",
    slides: [
      {
        title: "緯度と経度の仕組み",
        text: "地球上のあらゆる場所は、緯度と経度という「番地」で正確に表せます。<br>①<span class=\"red-mask\">緯度</span>（横の線）：<span class=\"red-mask\">赤道</span>を0度とし、北側を<span class=\"red-mask\">北緯</span>（90度まで）、南側を<span class=\"red-mask\">南緯</span>（90度まで）と表します。<br>②<span class=\"red-mask\">経度</span>（縦の線）：イギリス・ロンドンの旧グリニッジ天文台を通る<span class=\"red-mask\">本初子午線</span>を0度とし、東側を<span class=\"red-mask\">東経</span>（180度まで）、西側を<span class=\"red-mask\">西経</span>（180度まで）と表します。",
        caption: "緯度は赤道(横)を基準とし、経度はロンドンを通る本初子午線(縦)を基準とします。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><circle cx="200" cy="125" r="60" fill="none" stroke="#fff" stroke-width="2"/><line x1="140" y1="125" x2="260" y2="125" stroke="#ef4444" stroke-width="2"/><line x1="200" y1="65" x2="200" y2="185" stroke="#3b82f6" stroke-width="2"/><text x="200" y="55" fill="#fff" font-size="12" text-anchor="middle">北極</text><text x="275" y="130" fill="#ef4444" font-size="12">赤道 (緯度0°)</text><text x="200" y="200" fill="#3b82f6" font-size="12" text-anchor="middle">本初子午線 (経度0°)</text></svg>`
      },
      {
        title: "季節と緯度の関係",
        text: "地球は地軸を約23.4度傾けた状態で、太陽の周りを1年かけて公転しています。このため、太陽の光が当たる強さが変化し、季節が生まれます。赤道を境にして北半球と南半球では季節が<span class=\"red-mask\">逆</span>になります。日本が冬である12月に、南半球のオーストラリア（南緯約35度）では真夏の太陽が照りつけ、人々がサンタクロースと海で泳ぐような「真夏のクリスマス」を迎えることになります。",
        caption: "地球の傾きにより、赤道を挟んで北半球と南半球では季節が完全に逆になります。",
        imageSvg: `<svg viewBox="0 0 400 250" class="slider-svg-fallback"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><circle cx="200" cy="125" r="30" fill="#f59e0b"/><circle cx="70" cy="125" r="20" fill="#3b82f6"/><circle cx="330" cy="125" r="20" fill="#3b82f6"/><line x1="62" y1="110" x2="78" y2="140" stroke="#fff" stroke-width="2"/><line x1="322" y1="110" x2="338" y2="140" stroke="#fff" stroke-width="2"/><text x="200" y="35" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">地球の公転と季節の移り変わり</text></svg>`
      }
    ],
    quizzes: [
      {
        type: "choice",
        question: "経度の基準（0度）となる、イギリスのロンドンを通る重要な経線の名前を何といいますか？",
        options: ["赤道", "本初子午線", "国際日付変更線", "回帰線"],
        correct: 1,
        explanation: "ロンドンの旧グリニッジ天文台を通る経度0度の基準線は「本初子午線（ほんしょしごせん）」と呼ばれます。子午線とは「縦線（経線）」の別名です。"
      },
      {
        type: "choice",
        question: "地球の地軸が傾いて公転しているため、赤道を挟んで「北半球」と「南半球」の季節にはどのような特徴がありますか？",
        options: ["両方とも一年中ずっと夏である", "季節が完全に逆になる", "まったく同じ季節のまま進む", "南半球には冬が存在しない"],
        correct: 1,
        explanation: "地球が傾いたまま太陽の周りを回っているため、北半球が太陽に傾いている時は夏、同時に南半球は日射しが弱くなり冬になります。つまり「季節が完全に逆」になります。"
      },
      {
        type: "choice",
        question: "緯度の基準（0度）であり、地球を北半球と南半球に真っ二つに分ける横の境界線を何といいますか？",
        options: ["極東線", "子午線", "日付変更線", "赤道"],
        correct: 3,
        explanation: "地球の最も太い横線であり、緯度0度の基準線は「赤道」です。赤道から北側が北緯（北半球）、南側が南緯（南半球）になります。"
      }
    ],
    essay: {
      question: "地球上の国や都市の位置を正確に示すための「緯度」と「経度」の仕組みについて、それぞれの基準線を交えて説明しましょう。",
      keywords: ["緯度", "経度", "赤道", "本初子午線", "北緯", "南緯", "東経", "西経", "ロンドン"],
      modelAnswer: "地球上の位置は「緯度」と「経度」という座標で表せます。緯度は「赤道」を緯度0度の基準とし、赤道より北側を「北緯」、南側を「南緯」としてそれぞれ90度までで表します。経度はイギリスの「ロンドン」を通る「本初子午線」を経度0度の基準とし、本初子午線より東側を「東経」、西側を「西経」としてそれぞれ180度までで表します。"
    }
  }
};

// グローバルオブジェクトにアタッチ
window.GEOGRAPHY_ERAS = GEOGRAPHY_ERAS;
