try {
  document.querySelector('.standings tbody tr th:nth-of-type(2)').style.width='200px';
} catch (error) {
  console.error(error);
}

const dict = {
"127.0.0.1": "Авдеев Дмитрий",
"akritovandrey": "Акритов Андрей",
"anadere": "Антонова Анна",
"VAntonuk": "Антонюк Вадим",
"average_treap_enjoyer": "Балакин Владимир",
"MaxBalakirev": "Балакирев Максим",
"BzL16082010": "Барсуков Захар",
"hero_of_math_and_magic": "Бацын Тимофей",
"Noobish_Monk": "Беляев Марк",
"beskrovnaya": "Бескровная Софья",
"_Mister_Doctor": "Бессолицын Максим",
"bibikov1": "Бибиков Александр",
"AndrewB2011": "Бисярин Андрей",
"Blinov_Artemii": "Блинов Артемий",
"s0f1sm": "Бурбах София",
"vl342": "Бурмистров Владислав",
"alexvezh": "Вежновец Александр",
"Dmitriy10": "Вейгандт Дмитрий",
"TimVen74": "Венидиктов Тимофей",
"systy": "Возмилов Георгий",
"VolkovMA": "Волков Михаил",
"Smurf_with_me": "Волков Алексей",
"Mr_Ell": "Гаврилов Максим",
"Yunus": "Гарипов Юныс",
"plagues": "Герасиков Владимир",
"IGlazkovI": "Глазков Илья",
"__Foam": "Голиков Егор",
"Taktikatikin": "Голубов Никита",
"Daria2012": "Горина Дарья",
"GRIVA_": "Грибакин Иван",
"Grigoreva-Irina": "Григорьева Ирина",
"tikhon_grinev": "Гринев Тихон",
"GrishechkinIvan": "Гришечкин Иван",
"grishko-d": "Гришко Дмитрий",
"IvanD": "Девятьяров Иван",
"sdyakonov": "Дьяконов Сергей",
"Hectonit": "Егоров Тимофей",
"Egorov_Dmitriy": "Егоров Дмитрий",
"H235": "Жеглов Александр",
"Daughter_of_Dijkstra": "Желтовский Владислав",
"Mishazher": "Жерневский Михаил",
"zhiganov_v": "Жиганов Владислав",
"zhukovaliza": "Жукова Елизавета",
"svorogaze": "Загоровский Владимир",
"simpotyaga": "Зайков Федор",
"zarubin": "Зарубин Егор",
"zwezdinv": "Звездин Владимир",
"Margaret07": "Зедгенизова Маргарита",
"Nil2007": "Иванов Нил",
"Prokhor08": "Иголкин Прохор",
"T4M0FEY": "Ижицкий Тимофей",
"ventilator13": "Ильин Михаил",
"KasymovVR": "Касымов Владислав",
"Kapitar": "Ким Артём",
"tepchik": "Клименко Степан",
"kuzyaa": "Клименко Иван",
"kiquxd": "Кобзев Андрей",
"kolomig0r": "Коломиец Игорь",
"YseraKon": "Коновалов Ярослав",
"aone_A1": "Кононов Олег",
"Alex239": "Коншин Алексей",
"askoria": "Корюкина Анастасия",
"makrav": "Кравченко Максим",
"Egakrut3": "Кривов Георгий",
"iskander09": "Кувыкин Искандер",
"cup_of_coffee": "Кудашев Фёдор",
"EJIC_B_KEDAX": "Кузнецов Иван",
"Rodionno": "Кунакбаев Родион",
"Kupriyanov_Maksim": "Куприянов Максим",
"lunaTu": "Левина Мария",
"goodbee": "Лещинский Артём",
"Timur2006": "Лузгов Тимур",
"Noinoiio": "Любин Михаил",
"_MatMath_": "Маевский Матвей",
"_dmitriy_makarov_": "Макаров Дмитрий",
"zog34bro": "Макаров Михаил",
"OG_Matveychick1": "Макаров Матвей",
"meowcneil": "Макнил Александр",
"glooooby": "Малышев Игорь",
"_why_not_": "Малькевич Александр",
"Mizev_Andrey": "Мизев Андрей",
"nek12312378": "Минасян Никита",
"AntonMordakin": "Мордакин Антон",
"Pavarishko": "Мотыгуллин Карим",
"pledqd": "Нарижный Сергей",
"a.nasretdinov": "Насретдинов Амир",
"Greg908": "Новгородцев Григорий",
"yaroslav_n": "Ноздрин Ярослав",
"polosatic": "Ожегов Леонид",
"AndreyPavlov": "Павлов Андрей",
"sharkee": "Падалко Александр",
"pervuneckih.v.2025": "Первунецких Еремей",
"PetukhovaAS": "Петухова Александра",
"PoDuReMaN": "Подуременных Артём",
"_IVON_": "Пономарев Иван",
"arseny2606": "Порхунов Арсений",
"orolik": "Потапова Мария",
"xfloud": "Прыгунов Ярослав",
"GGFu87": "Пучков Пётр",
"t.ravnushkin": "Равнушкин Тимофей",
"ArSarapkin": "Сарапкин Артём",
"sputn1k": "Свирид Егор",
"Yar_sem": "Семенюк Ярослав",
"Maks_Simenkov": "Сименков Максим",
"sirazeev": "Сиразеев Ильяс",
"MaSkA05": "Скрипник Максим",
"lerasimus": "Соболев Олег",
"Sokol080808": "Сокольников Алексей",
"makcvim": "Солдатов Максим",
"Georggg999": "Степанян Георгий",
"iNNNo": "Сыздыков Константин",
"katzi": "Тальков Ярослав",
"Sonya_2009": "Тарасова Софья",
"tmari_sun": "Ткаченко Мария",
"ilqw": "Трофимов Глеб",
"2020TAndr": "Тунёв Андрей",
"tiom4eg": "Туревич Артём",
"ArtemUstimenko": "Устименко Артём",
"EvgenyUtkin": "Уткин Евгений",
"Tadfo": "Файзуллин Андрей",
"FilippovVlad": "Филиппов Владислав",
"hoshiii": "Хаев Булат",
"Son_of_Dijkstra": "Хамитов Хаким",
"SugarDadGG": "Хамитов Галим",
"molney": "Ходыкин Тимофей",
"lewc": "Цыбань Лев",
"vdxz": "Черников Владислав",
"HimerZERO": "Чернышов Игнат",
"tank0gradec": "Ческидов Даниил",
"tch1cherin": "Чичерин Тимофей",
"Chugunov_Alexander": "Чугунов Александр",
"KoT_OsKaR": "Шабаров Игорь",
"s1r_D": "Шакиров Идриc",
"Fedorshebanin": "Шебанин Фёдор",
"nya.qin.": "Шейкис Марк",
"shilo_vile9": "Шиляева Виолетта",
"spajzmand": "Шпайзман Даниил",
"EnderMaster": "Шубин Матвей",
"RomkaRS": "Шумилов Роман",
"yankovsky_alexey": "Янковский Алексей",
"marzipan": "Ятчений Арсений",
"UhahaUhaha": "Яшкин Роберт",
"bashkort": "Абудуллин Гимран",
"star25light": "Шарафиев Рагде",
"idr1ska": "Шакиров Идрис",
"Min_Iskander": "Миннахметов Искандер",
"_Makar_": "Рипенко Макар",
"prefix": "Дьяконов Сергей",
"isirazeev": "Сиразеев Ильяс",
"Despry": "Зиганшин Рамир",
"mirach0ck": "Альмиев Карим",
"karimq": "Сулейманов Карим",
"Renal": "Газизуллин Реналь",
"Dolce_Banana": "Хамитов Галим",
"Ha7NBaTop": "Сибгатуллин Камиль",
"M_bolshakov": "Большаков Максим",
"damirsit": "Ситдиков Дамир",
"Amirkhan_Zakirov": "Закиров Амирхан",
"rockoff": "Насибуллин Наиль",
"s.nazyrov": "Назыров Сергей",
"Vlad_-_null_vampir_best_": "Насыбуллин Ильяс",
"Kinder88888": "Дьяконов Кирилл",
"Ooops_no": "Каримов Ренат",
"UnrealZoned": "Закиров Аяз",
"ShinigamiCHOP": "Цой Андрей",
"Mark_Pr": "Приводнов Марк",
"princeee": "Принц Михаил",
"Koptilin": "Коптилин Ратибор",
"Nick220": "Самохин Никита",
"Roman_2007": "Болуць Роман",
"Ogloblin": "Оглоблин Владислав",
"putis": "Панов Богдан",
"45425": "Майтак Дмитрий",
"AleksanderV": "Войтюк Александр",
"kostylevGO": "Костылев Глеб",
"kalistratov-andrey": "Калистратов Андрей",
"Dart-Xeyter": "Савватеев Михаил",
"philmol": "Молодцов Филипп",
"Pechalka": "Нагибин Всеволод",
"timdresv": "Дресвянников Тимофей",
"dima20": "Фешин Дмитрий",
"KWAMP": "Чесноков Андрей",
"bad.ksu": "Баданина Ксения",
"Karpliuk_Ksenia": "Карплюк Ксения",
"shevnin_d": "Шевнин Даниил",
"EvgeniyMart": "Мартьянов Евгений",
"Maximilian06": "Хомяков Максимилиан",
"Jrxed": "Кормин Павел",
"kirill.kligunov": "Клигунов Кирилл",
"ellr": "Козырев Константин",
"afanasenkoarsenii": "Афанасенко Арсений",
"ilia-ivanov": "Иванов Илья",
"higz": "Останин Андрей",
"barabarka": "Мансурова Алина",
"gvoronin": "Воронин Григорий",
"dream_4ild": "Гришин Дмитрий",
"Goshix": "Морев Георгий",
"Mitth_raw_nuruodo": "Марин Кирилл",
"Echp0chmak": "Рябов Владимир",
"filatova_rimma": "Филатова Римма",
"Mitth_raw_nuruodo": "Марин Кирилл",
"Jooxe": "Равилов Игорь",
"vandr": "Вадченко Андрей",
"mdku2005": "Кутянова Мария",
"katyaporay": "Порай Екатерина",
"-Danila": "Машков Данила",
"Holpens": "Овчаров Иван",
"0I0acOJleHbKa": "Поспелова Ольга",
"dragonmuffin": "Мизёв Андрей",
"GreatDevResh": "Решетников Максим",
"AndrewSap2": "Сапегин Андрей",
"fireinferno": "Туров Макар",
"vdv09": "Бугрышев Михаил",
"KotlechkovEgor": "Котлечков Егор",
"ivchenkoandrey2": "Ивченко Андрей",
"SleepingCat": "Колоколов Александр",
"Konobeitsev_Ivan": "Конобейцев Иван",
"kuzi-": "Кузиванов Андрей",
"Friendiks": "Ипатов Андрей",
"yuriy.potekhin": "Потехин Юрий",
"semwin2008": "Виноградов Семён",
"ANDREYkao__": "Кулаков Андрей",
"leddev": "Леденёв Михаил",
"Alexfil": "Филиппов Алексей",
"SlavaKemDev": "Чертан Вячеслав",
"s_k_a_r_a": "Сулейманов Карам",
"H235": "Жеглов Александр",
"kiquxd": "Кобзев Андрей",
"DommeUse": "Зверев Герман",
"zlotnikova": "Злотникова Таисия",
"_Dasha_": "Борко Дарья",
"IGlazkovI": "Глазков Илья",
"yaroslav_n": "Ноздрин Ярослав",
"N00BGH0ST": "Ставкин Матвей",
"ElizaBest": "Винокурова Елизавета",
"UhahaUhaha": "Яшкин Роберт",
"malinka": "Булатицкий Максим",
"kolomig0r": "Коломиец Игорь",
"cSERAFIMc": "Королев Серафим",
"Mishatuzov13": "Тузов Михаил",
"anadere": "Антонова Анна",
"StepanYL": "Лязер Степан",
"ivdev": "Девятьяров Иван",
"akritovandrey": "Акритов Андрей",
"goodbee": "Лещинский Артём",
"nikuradze": "Никурадзе Дмитрий",
"GGFu87": "Пучков Пëтр",
"EvgenyUtkin": "Уткин Евгений",
"oblememan": "Черепанов Георгий",
"PJutch": "Жучков Павел",
"onmount": "Нагорнов Владимир",
"_DuMoH4uK_": "Семенов Дмитрий",
"pavel..pers": "Тураев Павел",
"___1": "Киселев Марк",
"canonica1": "Романовский Владислав",
"Your_Bunny_Wrote": "Зулунов Арсланбек",
"Gzhibovsciy_Arseniy": "Гжибовский Арсений",
"tikhon_grinev": "Гринев Тихон",
"Georggg999": "Степанян Георгий",
  "Yaroslav7": "Агеев Ярослав",
"Ananasixxx": "Бакке Григорий",
"bighunt": "Гриценко Антон",
"Umid5": "Гумметов Умид",
"Animeshnik2312": "Дюкин Глеб",
"Wiz1x": "Иванов Георгий",
"salureet": "Матюк Анна",
"Omper52": "Насыбулин Артур",
"metnep": "Непеин Матвей",
"Alfose": "Осинкин Тимофей",
"the8888": "Софронов Алексей",
"Fladislaf": "Упыр Владислав",
"UzenU": "Юсупов Ильнар"
};

// Rename users
document.querySelectorAll('.rated-user').forEach(a => {
  const key = a.innerHTML.trim();
  if (key in dict) {
    a.innerHTML = dict[key];
  }
});

// Hide flag
document.querySelectorAll('.standings-flag').forEach(a => {
  a.remove();
});

// Hide to-practice
const aElements = document.querySelectorAll('.change-participant-type-link').forEach(a => {
  a.remove()
});
