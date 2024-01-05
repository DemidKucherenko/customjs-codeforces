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
"IvanKL2008": "Клименко Иван",
"kiquxd": "Кобзев Андрей",
"kolomig0r": "Коломиец Игорь",
"YseraKon": "Коновалов Ярослав",
"aone_A1": "Кононов Олег",
"Alex239": "Коншин Алексей",
"askoria": "Корюкина Анастасия",
"makrav": "Кравченко Максим",
"Egakrut3": "Кривов Георгий",
"PrytexY": "Кувыкин Искандер",
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
"MalkevichAS": "Малькевич Александр",
"Mizev_Andrey": "Мизев Андрей",
"nek12312378": "Минасян Никита",
"AntonMordakin": "Мордакин Антон",
"Pavarishko": "Мотыгуллин Карим",
"sergeyn.2008": "Нарижный Сергей",
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
"YaroslavTalkov": "Тальков Ярослав",
"Sonya_2009": "Тарасова Софья",
"tmari_sun": "Ткаченко Мария",
"wtf._.": "Трофимов Глеб",
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
"yaaarseny": "Ятчений Арсений",
"UhahaUhaha": "Яшкин Роберт",
"plagues": "Герасиков Владимир"
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
