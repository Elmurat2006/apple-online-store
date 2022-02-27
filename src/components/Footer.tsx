import React,{FC} from 'react'

const Footer:FC = () => {
  return (
    <div className="bg-gray-50">
        <div className="flex justify-between items-center ml-20 mr-20 ">
            <ul>
                <li>
                    <h3>
                        ПЕРЕПОЛНЕНИЕ СТЕКА
                    </h3>
                </li>
                <li>
                     Вопросы
                </li>
                <li>
                    Контакты
                </li>
                <li>
                  Тех.поддержка
                </li>
                 <li>
                 Блог
                 </li>
            </ul>
            <ul>
                <li>
                    <h3>
                    ПРОДУКТЫ
                    </h3>
                </li>
                <li>
                    Команды
                </li>
                <li>
                        TeamBuilding
                </li>
                <li>
                Реклама
                </li>
                 <li>
                 Предприятие
                 </li>
            </ul>
            <ul>
                <li>
                    <h3>
                    КОМПАНИЯ
                    </h3>
                </li>
                <li>
                Юридический
                </li>
                <li>
                нажимать
                </li>
                <li>
                Политика конфиденциальности
                </li>
                 <li>
                 Фейсбук
                 </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer