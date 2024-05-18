import React from 'react';

const Content = () => {
  return (
    <div className="content">
        <div className="info">
            <div className="heading">Знакомьтесь с нашей командой создателей, дизайнеров и специалистов мирового уровня по решению проблем</div>
            <div className="subheading">Чтобы стать ценной компанией для клиентов, нужна <br /> группа пассионарных людей, например, таких как <br /> разработчики Cabify</div>
        </div>

        <div className="resume">
            <img src="%PUBLIC_URL%/frontend_developer.jpg" alt="Frontend Developer" />
            <div className="circle">
                <div className="circle-text">&lt;&gt;</div>
            </div>
            <div className="resume-wrapper">
              <ul className="social">
                <li className="social__item">
                  <a href="#!">
                    <img src={vk} alt="Link" />
                  </a>
                </li>
                <li className="social__item">
                  <a href="#!">
                    <img src={instagram} alt="Link" />
                  </a>
                </li>
              </ul>
              
            </div>
            <img src="%PUBLIC_URL%/backend_developer.jpg" alt="Backend Developer" />
            <div className="frontend_text">Жирняков Владислав</div>
            <div className="frontend_undertext">Backend-разработчик</div>
            <div className="backend_text">Чистяков Константин</div>
            <div className="backend_undertext">Frontend-разработчик</div>
        </div>
    </div>

  );
};

export default Content;