import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ChoiceQuestion from './ChoiceQuestion';
import BirthQuestion from './BirthQuestion';

const styles = () => ({
  show: {
    position: 'relative',
    display: 'block',
  },
});


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.questions = [
      {
        content: '如果人民没有受过民主教育，他们是不应该拥有普选权的。',
        order_id: 101,
        question_type: 1,
        addtion: '',
        q_id: 'q101',
        rev: -1,
        short: '普选权',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '人权高于主权。',
        order_id: 102,
        question_type: 1,
        addtion: '',
        q_id: 'q102',
        rev: 1,
        short: '人权与主权',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '西方的多党制不适合中国国情。',
        order_id: 103,
        question_type: 1,
        addtion: '',
        q_id: 'q103',
        rev: -1,
        short: '多党制',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '发生重大社会安全事件时，即使认为信息公开会导致骚乱的风险，政府仍应该开放信息传播。',
        order_id: 104,
        question_type: 1,
        addtion: '',
        q_id: 'q104',
        rev: 1,
        short: '信息公开',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '由高校自主考试招生比全国统一考试招生更好。',
        order_id: 105,
        question_type: 1,
        addtion: '',
        q_id: 'q105',
        rev: 1,
        short: '自主招生',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '在中国照搬西方式的言论自由会导致社会失序。',
        order_id: 106,
        question_type: 1,
        addtion: '',
        q_id: 'q106',
        rev: -1,
        short: '言论自由',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '应该容许宗教人士在非宗教场所公开传教。',
        order_id: 107,
        question_type: 1,
        addtion: '',
        q_id: 'q107',
        rev: 1,
        short: '公开传教',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '无论中小学生或大学生，都应参加由国家统一安排的军训。',
        order_id: 108,
        question_type: 1,
        addtion: '',
        q_id: 'q108',
        rev: -1,
        short: '统一军训',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '国家的统一和领土完整是社会的最高利益。',
        order_id: 109,
        question_type: 1,
        addtion: '',
        q_id: 'q109',
        rev: -1,
        short: '领土完整优先',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '国家有义务进行对外援助。',
        order_id: 110,
        question_type: 1,
        addtion: '',
        q_id: 'q110',
        rev: -1,
        short: '对外援助',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '哪怕经历了违反程序规定的审讯和取证过程，确实有罪的罪犯也应被处刑。',
        order_id: 111,
        question_type: 1,
        addtion: '',
        q_id: 'q111',
        rev: -1,
        short: '司法程序正义',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '国家领导人及开国领袖的形象可以作为文艺作品的丑化对象。',
        order_id: 112,
        question_type: 1,
        addtion: '',
        q_id: 'q112',
        rev: 1,
        short: '丑化领袖',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '当法律未能充分制止罪恶行为时，人民群众有权自发对罪恶行为进行制裁。',
        order_id: 113,
        question_type: 1,
        addtion: '',
        q_id: 'q113',
        rev: 1,
        short: '人民自决',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '应当允许媒体代表某一特定阶层或利益集团发言。',
        order_id: 114,
        question_type: 1,
        addtion: '',
        q_id: 'q114',
        rev: 1,
        short: '媒体代言',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '如果国家综合实力许可，那么中国有权为了维护自己的利益而采取任何行动。',
        order_id: 115,
        question_type: 1,
        addtion: '',
        q_id: 'q115',
        rev: -1,
        short: '国家唯利',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '应该允许中国公民同时具有外国国籍。',
        order_id: 116,
        question_type: 1,
        addtion: '',
        q_id: 'q116',
        rev: 1,
        short: '双重国籍',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '条件允许的话应该武力统一台湾。',
        order_id: 117,
        question_type: 1,
        addtion: '',
        q_id: 'q117',
        rev: -1,
        short: '武统台湾',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '国家应当采取措施培养和支持体育健儿在各种国际比赛场合为国争光。',
        order_id: 118,
        question_type: 1,
        addtion: '',
        q_id: 'q118',
        rev: -1,
        short: '运动举国体制',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '律师即使明知被辩护人的犯罪事实也应当尽力为其进行辩护。',
        order_id: 119,
        question_type: 1,
        addtion: '',
        q_id: 'q119',
        rev: 1,
        short: '律师辩护',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '以美国为首的西方国家不可能真正容许中国崛起成为一流强国。',
        order_id: 120,
        question_type: 1,
        addtion: '',
        q_id: 'q120',
        rev: -1,
        short: '西方有敌意',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '两个成年人之间自愿的性行为是其自由，无论其婚姻关系为何。',
        order_id: 201,
        question_type: 2,
        addtion: '',
        q_id: 'q201',
        rev: 1,
        short: '性自由',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '不应公开谈论自己长辈的缺点。',
        order_id: 202,
        question_type: 2,
        addtion: '',
        q_id: 'q202',
        rev: -1,
        short: '为尊者讳',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '现代中国社会需要儒家思想。',
        order_id: 203,
        question_type: 2,
        addtion: '',
        q_id: 'q203',
        rev: -1,
        short: '重新尊儒',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '判断艺术作品的价值的根本标准是看是不是受到人民大众喜爱。',
        order_id: 204,
        question_type: 2,
        addtion: '',
        q_id: 'q204',
        rev: -1,
        short: '艺术评判',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '即使有人口压力，国家和社会也无权干涉个人要不要孩子，要几个孩子。',
        order_id: 205,
        question_type: 2,
        addtion: '',
        q_id: 'q205',
        rev: 1,
        short: '生育自由',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '周易八卦能够有效的解释很多事情。',
        order_id: 206,
        question_type: 2,
        addtion: '',
        q_id: 'q206',
        rev: -1,
        short: '周易八卦',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '中国传统医学对人体健康的观念比现代主流医学更高明。',
        order_id: 207,
        question_type: 2,
        addtion: '',
        q_id: 'q207',
        rev: -1,
        short: '中医药',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '汉字无需人为推行简化。',
        order_id: 208,
        question_type: 2,
        addtion: '',
        q_id: 'q208',
        rev: -1,
        short: '汉字简化',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '应当将中国传统文化的经典作品作为儿童基础教育读物。',
        order_id: 209,
        question_type: 2,
        addtion: '',
        q_id: 'q209',
        rev: -1,
        short: '国学启蒙',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '如果是出于自愿，我会认可我的孩子和同性结成伴侣关系。',
        order_id: 210,
        question_type: 2,
        addtion: '',
        q_id: 'q210',
        rev: 1,
        short: '同性恋',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '最低工资应由国家规定。',
        order_id: 301,
        question_type: 3,
        addtion: '',
        q_id: 'q301',
        rev: -1,
        short: '最低工资',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '中国改革开放以来的经济发展的成果都被一小群人占有了，大多数人没得到什么好处。',
        order_id: 302,
        question_type: 3,
        addtion: '',
        q_id: 'q302',
        rev: -1,
        short: '改革成果分配',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '在重大工程项目的决策中，个人利益应该为社会利益让路。',
        order_id: 303,
        question_type: 3,
        addtion: '',
        q_id: 'q303',
        rev: -1,
        short: '集体利益优先',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '浪费粮食也是个人的自由。',
        order_id: 304,
        question_type: 3,
        addtion: '',
        q_id: 'q304',
        rev: 1,
        short: '个人自由',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '如果猪肉价格过高，政府应当干预。',
        order_id: 305,
        question_type: 3,
        addtion: '',
        q_id: 'q305',
        rev: -1,
        short: '价格干预',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '应当对国外同类产品征收高额关税来保护国内民族工业。',
        order_id: 306,
        question_type: 3,
        addtion: '',
        q_id: 'q306',
        rev: -1,
        short: '关税保护',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '国有企业的利益属于国家利益。',
        order_id: 307,
        question_type: 3,
        addtion: '',
        q_id: 'q307',
        rev: -1,
        short: '国企意义',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '试图控制房地产价格的行为会破坏经济发展。',
        order_id: 308,
        question_type: 3,
        addtion: '',
        q_id: 'q308',
        rev: 1,
        short: '控制房市价格',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '教育应当尽可能公立。',
        order_id: 309,
        question_type: 3,
        addtion: '',
        q_id: 'q309',
        rev: 1,
        short: '教育公立',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '改善低收入者生活的首要手段是国家给予财政补贴和扶持。',
        order_id: 310,
        question_type: 3,
        addtion: '',
        q_id: 'q310',
        rev: -1,
        short: '补贴穷人',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '有钱人理应获得更好的医疗服务。',
        order_id: 311,
        question_type: 3,
        addtion: '',
        q_id: 'q311',
        rev: 1,
        short: '富人优先服务',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '高收入者应该公开自己的经济来源。',
        order_id: 312,
        question_type: 3,
        addtion: '',
        q_id: 'q312',
        rev: -1,
        short: '富人公示财源',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '靠运作资金赚钱的人对社会的贡献比不上靠劳动赚钱的人。',
        order_id: 313,
        question_type: 3,
        addtion: '',
        q_id: 'q313',
        rev: -1,
        short: '劳资要素地位',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '与其让国有企业亏损破产，不如转卖给资本家。',
        order_id: 314,
        question_type: 3,
        addtion: '',
        q_id: 'q314',
        rev: 1,
        short: '国企私有化',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '市场竞争中自然形成的垄断地位是无害的。',
        order_id: 315,
        question_type: 3,
        addtion: '',
        q_id: 'q315',
        rev: 1,
        short: '市场垄断',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '那些关系到国家安全、以及其他重要国计民生的领域，必须全部由国有企业掌控。',
        order_id: 316,
        question_type: 3,
        addtion: '',
        q_id: 'q316',
        rev: -1,
        short: '命脉国企',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '资本积累的过程总是伴随着对普通劳动人民利益的伤害。',
        order_id: 317,
        question_type: 3,
        addtion: '',
        q_id: 'q317',
        rev: -1,
        short: '资本原罪',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '私人应当可以拥有和买卖土地。',
        order_id: 318,
        question_type: 3,
        addtion: '',
        q_id: 'q318',
        rev: 1,
        short: '地权民有',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '政府应当采用较高的粮食收购价格以增加农民收入。',
        order_id: 319,
        question_type: 3,
        addtion: '',
        q_id: 'q319',
        rev: -1,
        short: '农业补贴',
        choice_group: [
          {
            content: '强烈支持',
            value: -2,
            group_id: 2,
            order_id: 1,
          },
          {
            content: '支持',
            value: -1,
            group_id: 2,
            order_id: 2,
          },
          {
            content: '反对',
            value: 1,
            group_id: 2,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: 2,
            group_id: 2,
            order_id: 4,
          },
        ],
      },
      {
        content: '在华外国资本应享受和民族资本同样的待遇。',
        order_id: 320,
        question_type: 3,
        addtion: '',
        q_id: 'q320',
        rev: 1,
        short: '外资待遇',
        choice_group: [
          {
            content: '强烈支持',
            value: 2,
            group_id: 1,
            order_id: 1,
          },
          {
            content: '支持',
            value: 1,
            group_id: 1,
            order_id: 2,
          },
          {
            content: '反对',
            value: -1,
            group_id: 1,
            order_id: 3,
          },
          {
            content: '强烈反对',
            value: -2,
            group_id: 1,
            order_id: 4,
          },
        ],
      },
      {
        content: '性别',
        order_id: 1001,
        question_type: 10,
        addtion: '',
        q_id: 'q1001',
        rev: 0,
        short: '',
        choice_group: [
          {
            content: '男',
            value: 1,
            group_id: 3,
            order_id: 1,
          },
          {
            content: '女',
            value: 0,
            group_id: 3,
            order_id: 2,
          },
        ],
      },
      {
        content: '出生年份',
        order_id: 1002,
        question_type: 10,
        addtion: '',
        q_id: 'q1002',
        rev: 0,
        short: '',
        choice_group: [],
      },
      {
        content: '年收入',
        order_id: 1003,
        question_type: 10,
        addtion: '',
        q_id: 'q1003',
        rev: 0,
        short: '',
        choice_group: [
          {
            content: '0-25k',
            value: 1,
            group_id: 5,
            order_id: 1,
          },
          {
            content: '25k-50k',
            value: 2,
            group_id: 5,
            order_id: 2,
          },
          {
            content: '50k-75k',
            value: 3,
            group_id: 5,
            order_id: 3,
          },
          {
            content: '75k-100k',
            value: 4,
            group_id: 5,
            order_id: 4,
          },
          {
            content: '100k-150k',
            value: 5,
            group_id: 5,
            order_id: 5,
          },
          {
            content: '150k-300k',
            value: 6,
            group_id: 5,
            order_id: 6,
          },
          {
            content: '300k+',
            value: 7,
            group_id: 5,
            order_id: 7,
          },
        ],
      },
      {
        content: '学历',
        order_id: 1004,
        question_type: 10,
        addtion: '',
        q_id: 'q1004',
        rev: 0,
        short: '',
        choice_group: [
          {
            content: '初中及以下',
            value: 1,
            group_id: 6,
            order_id: 1,
          },
          {
            content: '高中',
            value: 2,
            group_id: 6,
            order_id: 2,
          },
          {
            content: '大学',
            value: 3,
            group_id: 6,
            order_id: 3,
          },
          {
            content: '研究生及以上',
            value: 4,
            group_id: 6,
            order_id: 4,
          },
        ],
      },
    ];
    const answersStr = localStorage.getItem('answers');
    let l = 0;
    if (answersStr) {
      l = JSON.parse(answersStr).length;
    }
    this.state = {
      index: 50,
      // answers: [],
    };
  }

  handleChoice(v, id) {
    const answersStr = localStorage.getItem('answers');
    const answersArr = answersStr ? JSON.parse(answersStr) : [];
    answersArr.push({
      id,
      value: v,
    });
    localStorage.setItem('answers', JSON.stringify(answersArr));
    this.setState({
      index: this.state.index + 1,
    });
  }

  render() {
    const { classes } = this.props;
    const questionDomList = this.questions.map((el, i) => {
      if (el.choice_group.length) {
        return (
          <ChoiceQuestion
            option={{
              index: i,
              id: el.q_id,
              // isShow: i === this.state.index,
              progress: this.state.index,
            }}
            data={el}
            onClick={(v, id) => this.handleChoice(v, id)}
            key={el.q_id}
          />

        );
      }
      return (
        <BirthQuestion
          option={{
            index: i,
            id: el.q_id,
            // isShow: i === this.state.index,
            progress: this.state.index,
          }}
          data={el}
          onClick={(v, id) => this.handleChoice(v, id)}
          key={el.q_id}
        />
      );
    });
    return (
      <div className={classes.show}>
        {questionDomList}
      </div>
    );
  }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Question);
