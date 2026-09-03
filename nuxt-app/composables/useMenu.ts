export type MenuGroup =
  | 'noodle'
  | 'rice'
  | 'side'
  | 'drink'
  | 'takeout'
  | 'lunch'

export interface MenuItem {
  name: string
  price: string
  img?: string
  badge?: string
  note?: string
}

export interface MenuSection {
  id: string
  group: MenuGroup
  title: string
  concept?: string
  accent?: 'miso' | 'chuka' | 'syouyu' | 'solt' | 'neutral'
  items: MenuItem[]
  /** 画像を持たないテキスト主体のセクション（ドリンクなど） */
  compact?: boolean
}

export interface MenuFilter {
  value: 'all' | MenuGroup
  label: string
}

export const menuFilters: MenuFilter[] = [
  { value: 'all', label: 'すべて' },
  { value: 'noodle', label: 'ラーメン' },
  { value: 'rice', label: '定食・丼' },
  { value: 'side', label: 'おつまみ' },
  { value: 'drink', label: 'ドリンク' },
  { value: 'takeout', label: 'テイクアウト' },
  { value: 'lunch', label: '平日ランチ' },
]

const img = (file: string) => `/images/menu/${file}`

const sections: MenuSection[] = [
  {
    id: 'miso',
    group: 'noodle',
    title: '味噌',
    accent: 'miso',
    concept:
      '本場北海道の味噌を高級食材とともに、手ごねで丹念に熟成！奥行き深い味わいに仕立てました。',
    items: [
      { name: '辛ネギ味噌ラーメン', price: '¥1,000', img: img('spicy.jpg'), badge: '人気No.1' },
      { name: '味噌ラーメン', price: '¥880', img: img('miso.jpg') },
      { name: '辛ネギ味噌チャーシューメン', price: '¥1,250', img: img('spicy-pork.jpg') },
      { name: '肉味噌ラーメン', price: '¥970', img: img('meat-miso.jpg') },
      { name: 'チャーシュー味噌ラーメン', price: '¥1,130', img: img('char-siu-miso.jpg') },
      { name: '焦がしチーズコーンラーメン', price: '¥1,000', img: img('cheese.jpg') },
      { name: '味噌バターラーメン', price: '¥950', img: img('miso-butter.jpg') },
      { name: 'セサミラーメン', price: '¥1,000', img: img('sesami.jpg') },
      { name: '焙煎胡麻キムチラーメン', price: '¥1,000', img: img('kimchi-miso.jpg') },
      {
        name: '生姜味噌ラーメン',
        price: '¥950',
        note: 'たっぷりの針生姜で、冷え性や美肌効果に一役！',
      },
    ],
  },
  {
    id: 'chuka',
    group: 'noodle',
    title: '中華',
    accent: 'chuka',
    concept:
      '秘伝のタレに細麺がピッタリの一品！中華ラーメンでは珍しい塩味も登場！',
    items: [
      { name: '中華ラーメン', price: '¥880', img: img('chuka-ramen.jpg') },
      { name: '辛ネギ中華ラーメン', price: '¥1,000', img: img('spicy-chuka.jpg') },
      { name: '塩中華ラーメン', price: '¥880', img: img('solt-chuka.jpg') },
      { name: 'ワンタンスープ（醤油 or 塩）', price: '¥770', img: img('wantan.jpg') },
      {
        name: 'ワンタンメン（中華 or 塩）',
        price: '¥1,030',
        note: '中華（塩中華）ラーメンにワンタンがのっています！ツルッとした食感が特徴です！',
      },
    ],
  },
  {
    id: 'syouyu',
    group: 'noodle',
    title: '醤油',
    accent: 'syouyu',
    concept:
      'こだわりの高級醤油に豚ガラや鶏ガラ、昆布、野菜を使って熟成しています。繊細で深みのある味が特徴です！',
    items: [
      { name: 'あんかけ野菜ラーメン', price: '¥1,000', img: img('ankake.jpg') },
      { name: 'もやし醤油ラーメン', price: '¥880', img: img('moyashi-syouyu.jpg') },
      { name: '辛ネギ醤油ラーメン', price: '¥1,000', img: img('spicy-syouyu.jpg') },
      { name: 'チャーシュー醤油ラーメン', price: '¥1,130', img: img('char-siu-syouyu.jpg') },
    ],
  },
  {
    id: 'solt',
    group: 'noodle',
    title: '塩',
    accent: 'solt',
    concept:
      '沖縄の「玖美の塩」を中心に3種類の塩をブレンド！塩分を控えめにしつつも、まろやかでしっかりとした味わいが特徴です！',
    items: [
      { name: 'タンメン', price: '¥970', img: img('tanmen.jpg') },
      { name: '塩ラーメン', price: '¥880', img: img('solt.jpg') },
      { name: '塩バターコーンラーメン', price: '¥1,030', img: img('solt-butter.jpg') },
      { name: '塩バターラーメン', price: '¥950' },
    ],
  },
  {
    id: 'other',
    group: 'noodle',
    title: 'その他',
    accent: 'neutral',
    concept:
      'まぜ麺やつけ麺、坦々麺など人気商品もラインアップ！特にまぜ麺は、麺やタレを改良してのどごしとコクがアップしました！',
    items: [
      { name: 'まぜそば', price: '¥830', img: img('soupless-noodle.jpg') },
      { name: '四川風坦々麺（醤油 or 味噌）', price: '¥950', img: img('tantanmen.jpg') },
      { name: '煮干しつけ麺', price: '¥970', img: img('tukemen.jpg') },
      { name: 'ピリ辛醤油つけ麺', price: '¥930' },
    ],
  },
  {
    id: 'child',
    group: 'noodle',
    title: 'お子様',
    accent: 'neutral',
    concept:
      '子供には嬉しいお子様ラーメン！ジュースやおもちゃが無料でついてきます！醤油と味噌味からお選びいただけます！',
    items: [
      { name: 'お子様ラーメン（醤油 or 味噌）', price: '¥650', img: img('child-ramen.jpg') },
    ],
  },
  {
    id: 'teishoku',
    group: 'rice',
    title: '定食',
    accent: 'neutral',
    concept:
      'スープや漬物、小鉢がついてお得！人気のサイドメニューを定食で食べることで、満足感UP！',
    items: [
      { name: '餃子7個定食', price: '¥800', img: img('gyoza-set.jpg') },
      { name: '野菜炒め定食', price: '¥900', img: img('vegetables-set.jpg') },
      { name: '豚キムチ定食', price: '¥900', img: img('pork-kimchi-set.jpg') },
    ],
  },
  {
    id: 'donburi',
    group: 'rice',
    title: '丼',
    accent: 'neutral',
    concept:
      'ラーメンとセットで更に満足感UP！地元茨城県産のお米を使用しています。',
    items: [
      {
        name: 'スタミナ丼（ライス大盛り）',
        price: '¥900',
        img: img('sutamina-bowl.jpg'),
        note: '午後5時より提供',
      },
      { name: 'ミニ豚肉丼', price: '¥350', img: img('pork-bowl.jpg') },
      { name: 'ミニチャーシュー丼', price: '¥350', img: img('char-siu-bowl.jpg') },
      { name: 'ミニわさびチャーシュー丼', price: '¥350', img: img('wasabi.jpg') },
      { name: 'こだわり卵かけご飯', price: '¥330' },
      { name: 'ライス（小 / 中 / 大）', price: '¥200 / ¥250 / ¥300' },
    ],
  },
  {
    id: 'otsumami',
    group: 'side',
    title: 'おつまみ',
    accent: 'neutral',
    concept:
      'なんと言っても自慢の餃子！一度食べたら病みつきになること間違いなし！',
    items: [
      { name: '手作り餃子', price: '¥390', img: img('gyoza.jpg') },
      { name: '豚キムチ', price: '¥650', img: img('pork-kimchi.jpg') },
      { name: '野菜炒め', price: '¥650', img: img('vegetables.jpg') },
      { name: '食べる花椒辣油のせ餃子', price: '¥450', img: img('gyoza-oil.jpg') },
      { name: 'キムチ', price: '¥300', img: img('kimchi.jpg') },
      { name: 'もつ煮', price: '¥550', img: img('motuni.jpg') },
      { name: 'ネギチャーシュー', price: '¥300', img: img('leek-char-siu.jpg') },
      { name: 'うずらの味付け', price: '¥250', img: img('uzura.jpg') },
      { name: '枝豆', price: '¥250', img: img('edamame.jpg') },
      { name: 'ビールセット（生中＋餃子）', price: '¥880', img: img('beer-set.jpg') },
      { name: 'ハイボールセット（ハイボール＋餃子）', price: '¥700', img: img('highbaal-set.jpg') },
    ],
  },
  {
    id: 'alcohol',
    group: 'drink',
    title: 'アルコール',
    accent: 'neutral',
    compact: true,
    concept:
      '疲れた体に沁みる一杯！当店のサイドメニューとともにお召し上がりください。',
    items: [
      { name: '生ビール（中）', price: '¥570' },
      { name: '生ビール（小）', price: '¥400' },
      { name: '瓶ビール', price: '¥580' },
      { name: 'ノンアルコールビール', price: '¥420' },
      { name: '清酒', price: '¥420' },
      { name: '生酒', price: '¥480' },
      { name: '鏡月（ロック）', price: '¥420' },
      { name: '鏡月（ソーダ割り）', price: '¥400' },
      { name: 'レモンサワー', price: '¥450' },
      { name: 'サワー（グレープフルーツ・梅・カルピス）', price: '¥400' },
      { name: 'ウーロンハイ', price: '¥400' },
      { name: 'ハイボール', price: '¥430' },
      { name: '翠ジンソーダ', price: '¥450' },
    ],
  },
  {
    id: 'softdrink',
    group: 'drink',
    title: 'ソフトドリンク',
    accent: 'neutral',
    compact: true,
    items: [
      { name: 'コーラ', price: '¥300' },
      { name: '烏龍茶', price: '¥260' },
      { name: '100%りんごジュース', price: '¥270' },
      { name: 'カルピス（ソーダ）', price: '¥270' },
      { name: 'メロンソーダ', price: '¥270' },
    ],
  },
  {
    id: 'takeout',
    group: 'takeout',
    title: 'テイクアウト',
    accent: 'neutral',
    concept:
      '家庭でも美味しい味を食べられるようになりました。特にあんかけ丼はテイクアウト限定！ぜひご賞味ください！',
    items: [
      { name: '餃子弁当', price: '¥770', img: img('gyoza-box.jpg') },
      { name: '野菜炒め弁当', price: '¥770', img: img('vegetables-box.jpg') },
      { name: 'スタミナ丼', price: '¥700', img: img('sutamina.jpg') },
      { name: 'チャーシュー丼', price: '¥700', img: img('take-char-siu.jpg') },
      { name: 'あんかけ丼', price: '¥700', img: img('take-ankake.jpg') },
    ],
  },
  {
    id: 'lunch',
    group: 'lunch',
    title: '平日ランチ',
    accent: 'neutral',
    concept:
      '月〜金の平日11:00〜15:00。ランチセットのみ、プチデザートがセットで付きます！',
    items: [
      { name: '平日ランチメニュー', price: '', img: img('lunch.jpg') },
    ],
  },
]

export const useMenu = () => sections
