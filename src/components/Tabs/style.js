export default {
  tabItemContainer: {
  },
  default_tab: {
    backgroundColor: '#545A63',
    fontSize: window.matchMedia('screen and (min-width: 1100px)').matches ? '11px' : '10px',
    borderBottom: '5px solid #0D5DB8',
    color: 'white',
    textTransform: 'capitalize',
  },
  active_tab: {
    backgroundColor: 'white',
    borderBottom: '5px solid #545A63',
    color: '#545A63',
    textTransform: 'capitalize',
  },
}
