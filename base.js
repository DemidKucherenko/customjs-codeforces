try {
  document.querySelector('.standings tbody tr th:nth-of-type(2)').style.width='200px';
} catch (error) {
  console.error(error);
}

const dict = {
 "Sokol080808": "Сокольников Алексей",
"zwezdinv": "Звездин Владимир",
"molney": "Ходыкин Тимофей",
"Mishazher": "Жерневский Михаил",
"makcvim": "Солдатов Максим",
"T4M0FEY": "Ижицкий Тимофей",
"tiom4eg": "Туревич Артём",
"Prokhor08": "Иголкин Прохор",
"tch1cherin": "Чичерин Тимофей",
"zhukovaliza": "Жукова Елизавета",
"a.nasretdinov": "Насретдинов Амир",
"makrav": "Кравченко Максим",
"zhiganov_v": "Жиганов Владислав",
"_dmitriy_makarov_": "Макаров Дмитрий",
"UhahaUhaha": "Яшкин Роберт",
"Grigoreva-Irina": "Григорьева Ирина",
"Noinoiio": "Любин Михаил",
"polosatic": "Ожегов Леонид",
"MaSkA05": "Скрипник Максим",
"_IVON_": "Пономарев Иван",
"hero_of_math_and_magic": "Бацын Тимофей",
"AndreyPavlov": "Павлов Андрей",
"Rodionno": "Кунакбаев Родион",
"systy": "Возмилов Георгий",
"nek12312378": "Минасян Никита",
"IvanD": "Девятьяров Иван",
"Tadfo": "Файзуллин Андрей",
"yaaarseny": "Ятчений Арсений",
"zarubin": "Зарубин Егор",
"VolkovMA": "Волков Михаил",
"anadere": "Антонова Анна",
"_MatMath_": "Маевский Матвей",
"Mr_Ell": "Гаврилов Максим",
"Mizev_Andrey": "Мизев Андрей",
"kiquxd": "Кобзев Андрей",
"RomkaRS": "Шумилов Роман",
"Timur2006": "Лузгов Тимур",
"Egakrut3": "Кривов Георгий",
"goodbee": "Лещинский Артём",
"bibikov1": "Бибиков Александр",
"Smurf_with_me": "Волков Алексей",
"svorogaze": "Загоровский Владимир",
"kolomig0r": "Коломиец Игорь",
"2020TAndr": "Тунёв Андрей",
"Blinov_Artemii": "Блинов Артемий",
"MaxBalakirev": "Балакирев Максим",
"__Foam": "Голиков Егор",
"aone_A1": "Кононов Олег",
"zog34bro": "Макаров Михаил",
"Pavarishko": "Мотыгуллин Карим",
"GGFu87": "Пучков Пётр",
"Nil2007": "Иванов Нил",
"EvgenyUtkin": "Уткин Евгений",
"Greg908": "Новгородцев Григорий",
"YseraKon": "Коновалов Ярослав",
"Son_of_Dijkstra": "Хамитов Хаким",
"pervuneckih.v.2025": "Первунецких Еремей",
"Kapitar": "Ким Артём",
"ArSarapkin": "Сарапкин Артём",
"vl342": "Бурмистров Владислав",
"lunaTu": "Левина Мария",
"Noobish_Monk": "Беляев Марк",
"iNNNo": "Сыздыков Константин",
"hoshiii": "Хаев Булат",
"meowcneil": "Макнил Александр",
"ArtemUstimenko": "Устименко Артём",
"127.0.0.1": "Авдеев Дмитрий",
"t.ravnushkin": "Равнушкин Тимофей",
"akritovandrey": "Акритов Андрей",
"yaroslav_n": "Ноздрин Ярослав",
"Daughter_of_Dijkstra": "Желтовский Владислав",
"SugarDadGG": "Хамитов Галим",
"Margaret07": "Зедгенизова Маргарита",
"HimerZERO": "Чернышов Игнат",
"Fedorshebanin": "Шебанин Фёдор",
"ventilator13": "Ильин Михаил",
"H235": "Жеглов Александр",
"average_treap_enjoyer": "Балакин Владимир",
"vdxz": "Черников Владислав",
"Georggg999": "Степанян Георгий",
"VAntonuk": "Антонюк Вадим",
"EnderMaster": "Шубин Матвей",
"xfloud": "Прыгунов Ярослав",
"IGlazkovI": "Глазков Илья",
"nya.qin.": "Шейкис Марк",
"lerasimus": "Соболев Олег",
"KoT_OsKaR": "Шабаров Игорь",
"alexvezh": "Вежновец Александр",
"sirazeev": "Сиразеев Ильяс",
"Hectonit": "Егоров Тимофей",
"cup_of_coffee": "Кудашев Фёдор",
"arseny2606": "Порхунов Арсений",
"_Mister_Doctor": "Бессолицын Максим",
"sputn1k": "Свирид Егор",
"sdyakonov": "Дьяконов Сергей",
"glooooby": "Малышев Игорь",
"tikhon_grinev": "Гринев Тихон",
"EJIC_B_KEDAX": "Кузнецов Иван",
"average_treap_enjoyer": "Балакин Владимир",
"AntonMordakin": "Мордакин Антон",
"s1r_D": "Шакиров Идриc",
"Alex239": "Коншин Алексей",
"Yunus": "Гарипов Юныс",
"lewc": "Цыбань Лев",
"yankovsky_alexey": "Янковский Алексей",
"Yar_sem": "Семенюк Ярослав",
"OG_Matveychick1": "Макаров Матвей",
"tepchik": "Клименко Степан",
"Taktikatikin": "Голубов Никита",
"grishko-d": "Гришко Дмитрий",
"Grigoreva-Irina": "Григорьева Ирина",
"KasymovVR": "Касымов Владислав",
"BzL16082010": "Барсуков Захар",
"PetukhovaAS": "Петухова Александра",
"TimVen74": "Венидиктов Тимофей",
"_shakespeare_": "Зарубин Егор",
"zfk": "Зайков Федор",
"AndrewB2011": "Бисярин Андрей",
"askoria": "Корюкина Анастасия",
"IvanKL2008": "Клименко Иван",
"GrishechkinIvan": "Гришечкин Иван",
"maks_simenkov": "Сименков Максим",
"Sonya_2009": "Тарасова Софья",
"sharkee": "Падалко Александр",
"sergeyn.2008": "Нарижный Сергей",
"tank0gradec": "Ческидов Даниил",
"Dmitriy10": "Вейгандт Дмитрий",
"tmari_sun": "Ткаченко Мария",
"PoDuReMaN": "Подуременных Артём",
"Chugunov_Alexander": "Чугунов Александр",
"FilippovVlad": "Филиппов Владислав",
"GRIVA_": "Грибакин Иван",
"shilo_vile9": "Шиляева Виолетта",
"MalkevichAS": "Малькевич Александр",
"Kupriyanov_Maksim": "Куприянов Максим",
"YaroslavTalkov": "Тальков Ярослав",
"Egorov_Dmitriy": "Егоров Дмитрий",
"spajzmand": "Шпайзман Даниил",
"orolik": "Потапова Мария",
"wtf._.": "Трофимов Глеб",
"lunaTu": "Левина Мария",
"s0f1sm": "Бурбах София",
"beskrovnaya": "Бескровная Софья",
"PrytexY": "Кувыкин Искандер",
"Daria2012": "Горина Дарья"
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
