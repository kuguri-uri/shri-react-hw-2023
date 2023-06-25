import { Dropdown } from "@/components/Dropdown";

export default function FaQ() {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-6 bg-white rounded-lg">
        <h1 className="text-3xl">Вопросы-ответы</h1>
      </div>

      <Dropdown
        title="Что такое Билетопоиск?"
        description="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
      />
      
      <Dropdown
        title="Какой компании принадлежит Билетопоиск?"
        description="МММ бебра-холдинг 'подержи бебру'"
      />
      <Dropdown
        title="Как купить билет на Билетопоиск?"
        description="ахахаха да хз вообще я корзину не сделала"
      />
      <Dropdown
        title="Как оставить отзыв на Билетопоиск?"
        description="не поверишь но нужно залезть в апи и в файле mock написать отзыв"
      />
    </div>
  );
}
