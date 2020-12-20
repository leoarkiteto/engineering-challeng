import React from 'react';
import FooterItem from './FooterItem';

import classes from './style.module.css';

function Footer() {
  const footerList = [
    {
      id: 1,
      title: 'About',
      items: ['Missão', 'Visão', 'Valores'],
    },
    {
      id: 2,
      title: 'Compras',
      items: ['Ajuda', 'Gasto de Envio', 'Devolução'],
    },
    {
      id: 3,
      title: 'Contact',
      items: [
        'Apoio ao Cliente',
        'Junte-se a Equipe',
        'Sugestões',
        'Fornecedor',
      ],
    },
    {
      id: 4,
      title: 'Rede Social',
      items: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
    },
  ];

  return (
    <footer>
      <div className={classes.Footer}>
        {footerList.map(el => (
          <FooterItem key={el.id} title={el.title} items={el.items} />
        ))}
      </div>
      <div>Leo França Copyright © Fusion Lab, S.L. 2020 | Aviso legal</div>
    </footer>
  );
}

export default Footer;
