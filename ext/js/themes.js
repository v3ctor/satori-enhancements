const THEMES = {
  satori:
`
:root {
  --bg-button-color: var(--primary-color);
  --bg-button-hover-color: var(--primary-light-color);
  --bg-color: #fff;
  --bg-example-color: #efc;
  --bg-header-color: #666;
  --bg-input-color: #fff;
  --bg-question-answer-color: #E8E8E8;
  --bg-question-content-color: #F0F0F0;
  --bg-question-header-color: #E0B0A0;
  --bg-sta-acc-color: #43791a;
  --bg-sta-ans-color: #f8c3d2;
  --bg-sta-cme-color: #9d888e;
  --bg-sta-int-color: inherit;
  --bg-sta-mem-color: #f8c3d2;
  --bg-sta-ok-color: #d9f7c2;
  --bg-sta-que-color: #fff2c8;
  --bg-sta-rej-color: #a29d8c;
  --bg-sta-rte-color: #f8c3d2;
  --bg-sta-tle-color: #f8c3d2;
  --bg-table-even-color: #f3f3fc;
  --bg-table-header-color: #bfbee9;
  --bg-table-highlight-color: #deffcc;
  --bg-table-odd-color: #e3e3fc;
  --bg-wheel-color: #E3E3FC;
  --bg-wheelsel-color: #F8C3D2;
  --button-color: #fff;
  --button-hover-color: #b3b2ff;
  --color: #3c3b42;
  --example-color: #333;
  --example-highlight: #208050;
  --header-color: #c9c9d0;
  --header-link-color: #c9c9d0;
  --input-color: #000;
  --link-color: var(--primary-color);
  --link-hover-color: var(--primary-light-color);
  --navitem-color: var(--color);
  --navitem-hover-color: var(--primary-color);
  --primary-color: #1b1972;
  --primary-light-color: #1b1972;
  --question-color: #000;
  --sta-color: #3c3b42;
  --table-color: #3c3b42;
  --table-header-color: #000;
  --wheel-color: #000;
  --wheelsel-color: #000;
}
`,

  suspicious:
`
:root {
  --bg-button-color: var(--primary-color);
  --bg-button-color: var(--primary-color);
  --bg-button-hover-color: var(--primary-light-color);
  --bg-button-hover-color: var(--primary-light-color);
  --bg-color: #000;
  --bg-example-color: #333;
  --bg-header-color: #1b1b1b;
  --bg-input-color: #363636;
  --bg-question-answer-color: #222;
  --bg-question-content-color: #292929;
  --bg-question-header-color: #333;
  --bg-sta-acc-color: #5b996a;
  --bg-sta-ans-color: #995b61;
  --bg-sta-cme-color: #bf7288;
  --bg-sta-int-color: #5b9099;
  --bg-sta-mem-color: #995b61;
  --bg-sta-ok-color: #5b996a;
  --bg-sta-que-color: #99895b;
  --bg-sta-rej-color: #99895b;
  --bg-sta-rte-color: #995b61;
  --bg-sta-tle-color: #995b61;
  --bg-table-even-color: #000;
  --bg-table-header-color: #333;
  --bg-table-highlight-color: #393939;
  --bg-table-odd-color: #222;
  --bg-wheel-color: #000;
  --bg-wheelsel-color: #f90;
  --button-color: #000;
  --button-hover-color: #000;
  --color: #fff;
  --example-color: #fff;
  --example-highlight: #59a6b2;
  --header-color: #eee;
  --header-link-color: #f90;
  --input-color: #cacaca;
  --link-color: var(--primary-color);
  --link-color: var(--primary-color);
  --link-hover-color: var(--primary-light-color);
  --link-hover-color: var(--primary-light-color);
  --navitem-color: var(--color);
  --navitem-color: var(--color);
  --navitem-hover-color: var(--primary-color);
  --navitem-hover-color: var(--primary-color);
  --primary-color: #f90;
  --primary-light-color: #ffa31a;
  --question-color: #fff;
  --sta-color: #fff;
  --table-color: #fff;
  --table-header-color: #fff;
  --wheel-color: #fff;
  --wheelsel-color: #fff;
}
`
};

if (typeof module !== 'undefined') {
  module.exports = {
      THEMES
  };
}
