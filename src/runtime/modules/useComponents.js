import { pickBy } from "es-toolkit/compat";
export const selectComponents = (category) => {
  return pickBy(components, (component) => component.category && component.category === category);
};
export const getComponent = (name) => {
  return components[name];
};
export const components = {
  Accordion: {
    doc: "/lang-[lang]/components/accordion",
    path: "./runtime/components/bootstrap/accordion/Accordion",
    category: "bootstrap",
    examples: {
      test: {
        items: [
          {
            component: "AccordionSection",
            text: "AccordionSection",
            attrs: {
              title: "AccordionSection #1"
            }
          }
        ]
      }
    },
    props: {
      parent: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: void 0
      },
      activeColor: {
        type: String,
        default: void 0
      },
      activeBackgroundColor: {
        type: String,
        default: void 0
      },
      activeButtonColor: {
        type: String,
        default: void 0
      },
      buttonIconWidth: {
        type: String,
        default: void 0
      },
      backgroundColor: {
        type: String,
        default: void 0
      }
    }
  },
  AccordionBody: {
    path: "./runtime/components/bootstrap/accordion/AccordionBody",
    category: "bootstrap",
    spec: {
      parents: ["Accordion"]
    }
  },
  AccordionButton: {
    path: "./runtime/components/bootstrap/accordion/AccordionButton",
    category: "bootstrap",
    spec: {
      parents: ["Accordion"]
    }
  },
  AccordionCollapse: {
    path: "./runtime/components/bootstrap/accordion/AccordionCollapse",
    category: "bootstrap",
    spec: {
      parents: ["Accordion"]
    }
  },
  AccordionHeader: {
    path: "./runtime/components/bootstrap/accordion/AccordionHeader",
    category: "bootstrap",
    spec: {
      parents: ["Accordion"]
    }
  },
  AccordionItem: {
    path: "./runtime/components/bootstrap/accordion/AccordionItem",
    category: "bootstrap",
    spec: {
      parents: ["Accordion"]
    }
  },
  AccordionSection: {
    path: "./runtime/components/bootstrap/accordion/AccordionSection.vue",
    category: "bootstrap",
    spec: {
      parents: ["Accordion"]
    }
  },
  Alert: {
    doc: "/lang-[lang]/components/alerts",
    path: "./runtime/components/bootstrap/alert/Alert",
    category: "bootstrap",
    examples: {
      test: {
        text: "Alert"
      }
    }
  },
  AlertHeading: {
    path: "./runtime/components/bootstrap/alert/AlertHeading",
    category: "bootstrap",
    spec: {
      parents: ["Alert"]
    }
  },
  AlertLink: {
    path: "./runtime/components/bootstrap/alert/AlertLink.vue",
    category: "bootstrap",
    spec: {
      parents: ["Alert"]
    }
  },
  Backdrop: {
    path: "./runtime/components/bootstrap/backdrop/Backdrop",
    category: "bootstrap",
    spec: {
      parents: ["Offcanvas", "Modal"]
    }
  },
  Badge: {
    doc: "/lang-[lang]/components/badge",
    path: "./runtime/components/bootstrap/badge/Badge",
    category: "bootstrap",
    examples: {
      test: {
        text: "Badge"
      }
    }
  },
  Breadcrumb: {
    doc: "/lang-[lang]/components/breadcrumb",
    path: "./runtime/components/bootstrap/breadcrumb/Breadcrumb",
    category: "bootstrap",
    examples: {
      test: {
        items: [
          {
            component: "BreadcrumbItem",
            text: "BreadcrumbItem 1"
          },
          {
            component: "BreadcrumbItem",
            text: "BreadcrumbItem 2"
          }
        ]
      }
    }
  },
  BreadcrumbItem: {
    path: "./runtime/components/bootstrap/breadcrumb/BreadcrumbItem.vue",
    category: "bootstrap",
    spec: {
      parents: ["Breadcrumb"]
    }
  },
  ButtonGroup: {
    doc: "/lang-[lang]/components/button-group",
    path: "./runtime/components/bootstrap/button/ButtonGroup",
    category: "bootstrap"
  },
  ButtonToolbar: {
    doc: "/lang-[lang]/components/button-group#button_toolbar",
    path: "./runtime/components/bootstrap/button/ButtonToolbar",
    category: "bootstrap"
  },
  CheckboxToggleButton: {
    doc: "/lang-[lang]/forms/checks-radios#toggle_buttons",
    path: "./runtime/components/bootstrap/button/CheckboxToggleButton",
    category: "bootstrap"
  },
  CloseButton: {
    doc: "/lang-[lang]/components/close-button",
    path: "./runtime/components/bootstrap/button/CloseButton",
    category: "bootstrap"
  },
  RadioToggleButton: {
    doc: "/lang-[lang]/forms/checks-radios#radio_toggle_buttons",
    path: "./runtime/components/bootstrap/button/RadioToggleButton",
    category: "bootstrap"
  },
  Card: {
    doc: "/lang-[lang]/components/card",
    path: "./runtime/components/bootstrap/card/Card",
    category: "bootstrap"
  },
  CardBody: {
    path: "./runtime/components/bootstrap/card/CardBody",
    category: "bootstrap",
    spec: {
      parents: ["Card"]
    }
  },
  CardFooter: {
    path: "./runtime/components/bootstrap/card/CardFooter",
    category: "bootstrap",
    spec: {
      parents: ["Card"]
    }
  },
  CardGroup: {
    doc: "/lang-[lang]/components/card#card_groups",
    path: "./runtime/components/bootstrap/card/CardGroup",
    category: "bootstrap"
  },
  CardHeader: {
    path: "./runtime/components/bootstrap/card/CardHeader",
    category: "bootstrap",
    spec: {
      parents: ["Card"]
    }
  },
  CardImg: {
    path: "./runtime/components/bootstrap/card/CardImg",
    category: "bootstrap",
    spec: {
      parents: ["Card"]
    }
  },
  CardImgBottom: {
    path: "./runtime/components/bootstrap/card/CardImgBottom",
    category: "bootstrap",
    spec: {
      parents: ["Card"]
    }
  },
  CardImgOverlay: {
    path: "./runtime/components/bootstrap/card/CardImgOverlay",
    category: "bootstrap",
    spec: {
      parents: ["Card"]
    }
  },
  CardImgTop: {
    path: "./runtime/components/bootstrap/card/CardImgTop",
    category: "bootstrap",
    spec: {
      parents: ["Card"]
    }
  },
  CardLink: {
    path: "./runtime/components/bootstrap/card/CardLink.vue",
    category: "bootstrap",
    spec: {
      parents: ["CardBody", "CardFooter", "CardHeader"]
    }
  },
  CardSubTitle: {
    path: "./runtime/components/bootstrap/card/CardSubTitle",
    category: "bootstrap",
    spec: {
      parents: ["CardBody", "CardFooter", "CardHeader"]
    }
  },
  CardText: {
    path: "./runtime/components/bootstrap/card/CardText",
    category: "bootstrap",
    spec: {
      parents: ["CardBody", "CardFooter", "CardHeader"]
    }
  },
  CardTitle: {
    path: "./runtime/components/bootstrap/card/CardTitle",
    category: "bootstrap",
    spec: {
      parents: ["CardBody", "CardFooter", "CardHeader"]
    }
  },
  Carousel: {
    doc: "/lang-[lang]/components/carousel",
    path: "./runtime/components/bootstrap/carousel/Carousel",
    category: "bootstrap"
  },
  CarouselCaption: {
    path: "./runtime/components/bootstrap/carousel/CarouselCaption",
    category: "bootstrap",
    spec: {
      parents: ["CarouselItem"]
    }
  },
  CarouselInner: {
    path: "./runtime/components/bootstrap/carousel/CarouselInner",
    category: "bootstrap",
    spec: {
      parents: ["Carousel"]
    }
  },
  CarouselItem: {
    path: "./runtime/components/bootstrap/carousel/CarouselItem",
    category: "bootstrap",
    spec: {
      parents: ["CarouselInner"]
    }
  },
  CarouselItemImage: {
    path: "./runtime/components/bootstrap/carousel/CarouselItemImage",
    category: "bootstrap",
    spec: {
      parents: ["CarouselItem"]
    }
  },
  Collapse: {
    doc: "/lang-[lang]/components/collapse",
    path: "./runtime/components/bootstrap/collapse/Collapse",
    category: "bootstrap"
  },
  // CollapseButton: {
  //  path: './runtime/components/bootstrap/collapse/CollapseButton',
  //  category: 'bootstrap',
  // },
  Flex: {
    doc: "/lang-en/utilities/flex#flex_component",
    path: "./runtime/components/bootstrap/cssgrid/Flex",
    category: "bootstrap"
  },
  FlexItem: {
    path: "./runtime/components/bootstrap/cssgrid/FlexItem",
    category: "bootstrap",
    spec: {
      parents: ["Flex"]
    }
  },
  Grid: {
    doc: "/lang-[lang]/layout/css-grid",
    path: "./runtime/components/bootstrap/cssgrid/Grid",
    category: "bootstrap"
  },
  GridCol: {
    path: "./runtime/components/bootstrap/cssgrid/GridCol",
    category: "bootstrap",
    spec: {
      parents: ["Grid"]
    }
  },
  Dropdown: {
    doc: "/lang-[lang]/components/dropdowns",
    path: "./runtime/components/bootstrap/dropdown/Dropdown",
    category: "bootstrap"
  },
  DropdownItem: {
    path: "./runtime/components/bootstrap/dropdown/DropdownItem.vue",
    category: "bootstrap",
    spec: {
      parents: ["Dropdown"]
    }
  },
  DropdownItemDivider: {
    path: "./runtime/components/bootstrap/dropdown/DropdownItemDivider",
    category: "bootstrap",
    spec: {
      parents: ["Dropdown"]
    }
  },
  DropdownItemText: {
    path: "./runtime/components/bootstrap/dropdown/DropdownItemText",
    category: "bootstrap",
    spec: {
      parents: ["Dropdown"]
    }
  },
  DropdownMenu: {
    path: "./runtime/components/bootstrap/dropdown/DropdownMenu",
    category: "bootstrap",
    spec: {
      parents: ["Dropdown"]
    }
  },
  DropdownToggle: {
    path: "./runtime/components/bootstrap/dropdown/DropdownToggle",
    category: "bootstrap",
    spec: {
      parents: ["Dropdown"]
    }
  },
  DropdownToggleSplit: {
    path: "./runtime/components/bootstrap/dropdown/DropdownToggleSplit",
    category: "bootstrap",
    spec: {
      parents: ["Dropdown"]
    }
  },
  Col: {
    doc: "/lang-[lang]/layout/columns",
    path: "./runtime/components/bootstrap/grid/Col",
    category: "bootstrap"
  },
  Container: {
    doc: "/lang-[lang]/layout/containers",
    path: "./runtime/components/bootstrap/grid/Container",
    category: "bootstrap"
  },
  Row: {
    doc: "/lang-[lang]/layout/grid",
    path: "./runtime/components/bootstrap/grid/Row",
    category: "bootstrap"
  },
  ListGroup: {
    doc: "/lang-[lang]/components/list-group",
    path: "./runtime/components/bootstrap/list-group/ListGroup",
    category: "bootstrap"
  },
  ListGroupItem: {
    path: "./runtime/components/bootstrap/list-group/ListGroupItem",
    category: "bootstrap",
    spec: {
      parents: ["ListGroup"]
    }
  },
  ListGroupItemAction: {
    path: "./runtime/components/bootstrap/list-group/ListGroupItemAction.vue",
    category: "bootstrap",
    spec: {
      parents: ["ListGroup"]
    }
  },
  ListGroupItemLabel: {
    path: "./runtime/components/bootstrap/list-group/ListGroupItemLabel",
    category: "bootstrap",
    spec: {
      parents: ["ListGroup"]
    }
  },
  ListGroupList: {
    path: "./runtime/components/bootstrap/list-group/ListGroupList",
    category: "bootstrap",
    spec: {
      parents: ["ListGroup"]
    }
  },
  Modal: {
    doc: "/lang-[lang]/components/modal",
    path: "./runtime/components/bootstrap/modal/Modal",
    category: "bootstrap"
  },
  ModalBody: {
    path: "./runtime/components/bootstrap/modal/ModalBody",
    category: "bootstrap",
    spec: {
      parents: ["Modal"]
    }
  },
  ModalContent: {
    path: "./runtime/components/bootstrap/modal/ModalContent",
    category: "bootstrap",
    spec: {
      parents: ["Modal"]
    }
  },
  ModalDialog: {
    path: "./runtime/components/bootstrap/modal/ModalDialog",
    category: "bootstrap",
    spec: {
      parents: ["Modal"]
    }
  },
  ModalFooter: {
    path: "./runtime/components/bootstrap/modal/ModalFooter",
    category: "bootstrap",
    spec: {
      parents: ["Modal"]
    }
  },
  ModalHeader: {
    path: "./runtime/components/bootstrap/modal/ModalHeader",
    category: "bootstrap",
    spec: {
      parents: ["Modal"]
    }
  },
  ModalTitle: {
    path: "./runtime/components/bootstrap/modal/ModalTitle",
    category: "bootstrap",
    spec: {
      parents: ["Modal"]
    }
  },
  ModalToggleButton: {
    path: "./runtime/components/bootstrap/modal/ModalToggleButton",
    category: "bootstrap",
    spec: {
      parents: ["Modal"]
    }
  },
  Nav: {
    doc: "/lang-[lang]/components/navs-tabs",
    path: "./runtime/components/bootstrap/nav/Nav",
    category: "bootstrap"
  },
  NavItem: {
    path: "./runtime/components/bootstrap/nav/NavItem",
    category: "bootstrap",
    spec: {
      parents: ["Nav"]
    }
  },
  NavItemDropdown: {
    path: "./runtime/components/bootstrap/nav/NavItemDropdown",
    category: "bootstrap",
    spec: {
      parents: ["Nav"]
    }
  },
  NavItemDropdownToggle: {
    path: "./runtime/components/bootstrap/nav/NavItemDropdownToggle",
    category: "bootstrap",
    spec: {
      parents: ["Nav"]
    }
  },
  NavLink: {
    path: "./runtime/components/bootstrap/nav/NavLink.vue",
    category: "bootstrap",
    spec: {
      parents: ["Nav"]
    }
  },
  NavList: {
    path: "./runtime/components/bootstrap/nav/NavList",
    category: "bootstrap",
    spec: {
      parents: ["Nav"]
    }
  },
  TabContent: {
    doc: "/lang-[lang]/components/navs-tabs#tabs",
    path: "./runtime/components/bootstrap/nav/TabContent",
    category: "bootstrap"
  },
  TabPane: {
    path: "./runtime/components/bootstrap/nav/TabPane",
    category: "bootstrap",
    spec: {
      parents: ["TabContent"]
    }
  },
  Navbar: {
    doc: "/lang-[lang]/components/navbar",
    path: "./runtime/components/bootstrap/navbar/Navbar",
    category: "bootstrap"
  },
  NavbarBrand: {
    path: "./runtime/components/bootstrap/navbar/NavbarBrand",
    category: "bootstrap",
    spec: {
      parents: ["Navbar"]
    }
  },
  NavbarCollapse: {
    path: "./runtime/components/bootstrap/navbar/NavbarCollapse",
    category: "bootstrap",
    spec: {
      parents: ["Navbar"]
    }
  },
  NavbarNav: {
    path: "./runtime/components/bootstrap/navbar/NavbarNav",
    category: "bootstrap",
    spec: {
      parents: ["Navbar"]
    }
  },
  NavbarNavList: {
    path: "./runtime/components/bootstrap/navbar/NavbarNavList",
    category: "bootstrap",
    spec: {
      parents: ["Navbar"]
    }
  },
  NavbarText: {
    path: "./runtime/components/bootstrap/navbar/NavbarText",
    category: "bootstrap",
    spec: {
      parents: ["Navbar"]
    }
  },
  NavbarToggler: {
    path: "./runtime/components/bootstrap/navbar/NavbarToggler",
    category: "bootstrap",
    spec: {
      parents: ["Navbar"]
    }
  },
  Offcanvas: {
    doc: "/lang-[lang]/components/offcanvas",
    path: "./runtime/components/bootstrap/offcanvas/Offcanvas",
    category: "bootstrap"
  },
  OffcanvasBody: {
    path: "./runtime/components/bootstrap/offcanvas/OffcanvasBody",
    category: "bootstrap",
    spec: {
      parents: ["Offcanvas"]
    }
  },
  OffcanvasHeader: {
    path: "./runtime/components/bootstrap/offcanvas/OffcanvasHeader",
    category: "bootstrap",
    spec: {
      parents: ["Offcanvas"]
    }
  },
  OffcanvasTitle: {
    path: "./runtime/components/bootstrap/offcanvas/OffcanvasTitle",
    category: "bootstrap",
    spec: {
      parents: ["Offcanvas"]
    }
  },
  PageItem: {
    path: "./runtime/components/bootstrap/pagination/PageItem",
    category: "bootstrap",
    spec: {
      parents: ["Pagination"]
    }
  },
  PageLink: {
    path: "./runtime/components/bootstrap/pagination/PageLink",
    category: "bootstrap",
    spec: {
      parents: ["Pagination"]
    }
  },
  Pagination: {
    doc: "/lang-[lang]/components/pagination",
    path: "./runtime/components/bootstrap/pagination/Pagination",
    category: "bootstrap"
  },
  Progress: {
    doc: "/lang-[lang]/components/progress",
    path: "./runtime/components/bootstrap/progress/Progress",
    category: "bootstrap"
  },
  ProgressBar: {
    path: "./runtime/components/bootstrap/progress/ProgressBar",
    category: "bootstrap",
    spec: {
      parents: ["Progress"]
    }
  },
  Spinner: {
    doc: "/lang-[lang]/components/spinners",
    path: "./runtime/components/bootstrap/spinner/Spinner",
    category: "bootstrap"
  },
  Toast: {
    doc: "/lang-[lang]/components/toasts",
    path: "./runtime/components/bootstrap/toast/Toast",
    category: "bootstrap"
  },
  ToastBody: {
    path: "./runtime/components/bootstrap/toast/ToastBody",
    category: "bootstrap",
    spec: {
      parents: ["Toast"]
    }
  },
  ToastContainer: {
    path: "./runtime/components/bootstrap/toast/ToastContainer",
    category: "bootstrap",
    spec: {
      parents: ["Toast"]
    }
  },
  ToastHeader: {
    path: "./runtime/components/bootstrap/toast/ToastHeader",
    category: "bootstrap",
    spec: {
      parents: ["Toast"]
    }
  },
  Vr: {
    doc: "/lang-[lang]/helpers/vertical-rule",
    path: "./runtime/components/bootstrap/vertical-rule/VerticalRule",
    category: "bootstrap"
  },
  Avatar: {
    doc: "/lang-[lang]/extend/components/avatar",
    path: "./runtime/components/extend/avatar/Avatar",
    category: "extend",
    props: {
      circle: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ""
      },
      imgSrc: {
        type: String,
        default: ""
      },
      imgAlt: {
        type: String,
        default: ""
      },
      initials: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: ""
      },
      status: {
        type: [Boolean, String],
        default: false
      },
      statusColor: {
        type: String,
        default: ""
      },
      icon: {
        type: String,
        default: ""
      },
      divider: {
        type: [Boolean, String],
        default: false
      },
      objectFit: {
        type: [String]
      }
    }
  },
  BackToTop: {
    doc: "/lang-[lang]/extend/components/back-to-top",
    path: "./runtime/components/extend/back-to-top/BackToTop.vue",
    category: "extend"
  },
  Background: {
    doc: "/lang-[lang]/extend/components/background",
    path: "./runtime/components/extend/background/Background.vue",
    category: "extend"
  },
  Calendar: {
    doc: "/lang-[lang]/extend/components/calendar",
    path: "./runtime/components/extend/calendar/Calendar.vue",
    category: "extend"
  },
  DatePicker: {
    doc: "/lang-[lang]/extend/components/date-picker",
    path: "./runtime/components/extend/calendar/DatePicker.vue",
    category: "extend"
  },
  CodeHighlighter: {
    doc: "/lang-[lang]/extend/components/code",
    path: "./runtime/components/extend/code/CodeHighlighter.vue",
    category: "extend"
  },
  EventViewer: {
    path: "./runtime/components/extend/code/EventViewer.vue",
    category: "extend"
  },
  ColorModeNavItemDropdown: {
    doc: "/lang-[lang]/extend/components/color-mode",
    path: "./runtime/components/extend/color-mode/ColorModeNavItemDropdown.vue",
    category: "extend"
  },
  // "Divider": {
  //  path: "./runtime/components/extend/divider/Divider.vue",
  //  category: "extend",
  // },
  // "HTVDivider": {
  //  path: "./runtime/components/extend/divider/HTVDivider.vue",
  //  category: "extend",
  // },
  ResponsiveRule: {
    doc: "/lang-[lang]/extend/components/responsive-rule",
    path: "./runtime/components/extend/divider/ResponsiveRule.vue",
    category: "extend"
  },
  LocaleNavItemDropdown: {
    doc: "/lang-[lang]/extend/components/localization",
    path: "./runtime/components/extend/dynamic-route/LocaleNavItemDropdown.vue",
    category: "extend"
  },
  Localization: {
    doc: "/lang-[lang]/extend/components/localization",
    path: "./runtime/components/extend/dynamic-route/Localization.vue",
    category: "extend"
  },
  BarChart: {
    doc: "/lang-[lang]/extend/components/chart-bar",
    path: "./runtime/components/extend/echart/BarChart.vue",
    category: "extend"
  },
  LineChart: {
    doc: "/lang-[lang]/extend/components/chart-line",
    path: "./runtime/components/extend/echart/LineChart.vue",
    category: "extend"
  },
  PieChart: {
    doc: "/lang-[lang]/extend/components/chart-pie",
    path: "./runtime/components/extend/echart/PieChart.vue",
    category: "extend"
  },
  Fixed: {
    doc: "/lang-[lang]/extend/components/position",
    path: "./runtime/components/extend/fixed/Fixed.vue",
    category: "extend"
  },
  Absolute: {
    doc: "/lang-[lang]/extend/components/position",
    path: "./runtime/components/extend/position/Absolute",
    category: "extend"
  },
  Relative: {
    doc: "/lang-[lang]/extend/components/position",
    path: "./runtime/components/extend/position/Relative",
    category: "extend"
  },
  GridArea: {
    path: "./runtime/components/extend/grid-template/GridArea",
    category: "extend",
    spec: {
      parents: ["GridTemplate"]
    }
  },
  GridTemplate: {
    doc: "/lang-[lang]/extend/layout/grid-template",
    path: "./runtime/components/extend/grid-template/GridTemplate.vue",
    category: "extend",
    spec: {
      layout: true
    }
  },
  HeadingBlock: {
    doc: "/lang-[lang]/extend/components/heading-block",
    path: "./runtime/components/extend/heading/HeadingBlock.vue",
    category: "extend"
  },
  HeroRow: {
    doc: "/lang-[lang]/extend/components/hero-row",
    path: "./runtime/components/extend/hero-row/HeroRow.vue",
    category: "extend"
  },
  IconBox: {
    doc: "/lang-[lang]/extend/components/icon-box",
    path: "./runtime/components/extend/icon-box/IconBox",
    category: "extend"
  },
  // Intro: {
  //  path: './runtime/components/extend/intro/Intro.vue',
  //  category: 'extend',
  // },
  JsonView: {
    doc: "/lang-[lang]/extend/components/json-view",
    path: "./runtime/components/extend/json-view/JsonView.vue",
    category: "extend"
  },
  PageLayout: {
    doc: "/lang-[lang]/extend/layout/page-layout",
    path: "./runtime/components/extend/layout/PageLayout.vue",
    category: "extend"
  },
  PageMeta: {
    doc: "/lang-[lang]/extend/components/page-meta",
    path: "./runtime/components/extend/meta/PageMeta.vue",
    category: "extend"
  },
  // RouteMeta: {
  //  // doc: '/lang-[lang]/extend/components/route-meta',
  //  path: './runtime/components/extend/meta/RouteMeta.vue',
  //  category: 'extend',
  // },
  LdArticle: {
    path: "./runtime/components/extend/linked-data/LdArticle.vue",
    category: "extend",
    spec: {
      parents: ["PageMeta"]
    }
  },
  LdAuthor: {
    path: "./runtime/components/extend/linked-data/LdAuthor.vue",
    category: "extend",
    spec: {
      parents: ["PageMeta"]
    }
  },
  LdOrganization: {
    path: "./runtime/components/extend/linked-data/LdOrganization.vue",
    category: "extend",
    spec: {
      parents: ["PageMeta"]
    }
  },
  LdPerson: {
    path: "./runtime/components/extend/linked-data/LdPerson.vue",
    category: "extend",
    spec: {
      parents: ["PageMeta"]
    }
  },
  FloatingNavbar: {
    path: "./runtime/components/extend/navbar/FloatingNavbar.vue",
    category: "extend"
  },
  SlideNavbar: {
    path: "./runtime/components/extend/navbar/SlideNavbar.vue",
    category: "extend"
  },
  StickyToggleNavbar: {
    path: "./runtime/components/extend/navbar/StickyToggleNavbar.vue",
    category: "extend"
  },
  PasswordStrength: {
    doc: "/lang-[lang]/extend/components/password-strength",
    path: "./runtime/components/extend/password-strength/PasswordStrength.vue",
    category: "extend"
  },
  Paper: {
    doc: "/lang-[lang]/extend/components/paper",
    path: "./runtime/components/extend/paper/Paper.vue",
    category: "extend"
  },
  Rating: {
    doc: "/lang-[lang]/extend/components/rating",
    path: "./runtime/components/extend/rating/Rating.vue",
    category: "extend"
  },
  Sidebar: {
    doc: "/lang-[lang]/extend/components/sidebar",
    path: "./runtime/components/extend/sidebar/Sidebar.vue",
    category: "extend"
  },
  Sortable: {
    doc: "/lang-[lang]/extend/components/sortable",
    path: "./runtime/components/extend/sortable/Sortable.vue",
    category: "extend"
    // spec: {
    //  parents: ['ListGroupList'],
    // },
  },
  ComponentsCatalog: {
    path: "./runtime/components/spec/ComponentsCatalog.vue",
    category: "spec"
  },
  UseBootstrap: {
    path: "./runtime/components/spec/UseBootstrap.vue",
    category: "spec"
  },
  SpecBinding: {
    path: "./runtime/components/spec/SpecBinding.vue",
    category: "spec"
  },
  StackGroup: {
    doc: "/lang-[lang]/extend/components/stack-group",
    path: "./runtime/components/extend/stack-group/StackGroup.vue",
    category: "extend"
  },
  StackGroupItem: {
    path: "./runtime/components/extend/stack-group/StackGroupItem.vue",
    category: "extend",
    spec: {
      parents: ["StackGroup"]
    }
  },
  StatusIndicator: {
    doc: "/lang-[lang]/extend/components/status-indicator",
    path: "./runtime/components/extend/status-indicator/StatusIndicator",
    category: "extend"
  },
  Step: {
    doc: "/lang-[lang]/extend/components/step",
    path: "./runtime/components/extend/step/Step.vue",
    category: "extend"
  },
  StepItem: {
    path: "./runtime/components/extend/step/StepItem.vue",
    category: "extend",
    spec: {
      parents: ["Step"]
    }
  },
  Swiper: {
    doc: "/lang-[lang]/extend/components/swiper",
    path: "./runtime/components/extend/swiper/Swiper.vue",
    category: "extend"
  },
  TiptapEditor: {
    doc: "/lang-[lang]/extend/components/editor",
    path: "./runtime/components/extend/tiptap/TiptapEditor.vue",
    category: "extend"
  },
  CollapseToc: {
    doc: "/lang-[lang]/extend/components/toc",
    path: "./runtime/components/extend/toc/CollapseToc.vue",
    category: "extend"
  },
  Toc: {
    doc: "/lang-[lang]/extend/components/toc",
    path: "./runtime/components/extend/toc/Toc.vue",
    category: "extend"
  },
  Typed: {
    doc: "/lang-[lang]/extend/components/typedjs",
    path: "./runtime/components/extend/typed/Typed",
    category: "extend",
    examples: {
      test: {
        attrs: {
          strings: ["Hello", "World"]
        }
      }
    }
  },
  Blockquote: {
    path: "./runtime/components/html-block/blockquote/Blockquote",
    category: "html"
  },
  BlockquoteFigure: {
    path: "./runtime/components/html-block/blockquote/BlockquoteFigure",
    category: "html"
  },
  BlockquoteFooter: {
    path: "./runtime/components/html-block/blockquote/BlockquoteFooter",
    category: "html"
  },
  Figure: {
    path: "./runtime/components/html-block/figure/Figure",
    category: "html"
  },
  FigureCaption: {
    path: "./runtime/components/html-block/figure/FigureCaption",
    category: "html"
  },
  FigureImage: {
    path: "./runtime/components/html-block/figure/FigureImage",
    category: "html"
  },
  ColFormLabel: {
    path: "./runtime/components/html-block/form/ColFormLabel",
    category: "html"
  },
  ColFormLegend: {
    path: "./runtime/components/html-block/form/ColFormLegend",
    category: "html"
  },
  Datalist: {
    path: "./runtime/components/html-block/form/Datalist",
    category: "html"
  },
  Fieldset: {
    path: "./runtime/components/html-block/form/Fieldset",
    category: "html"
  },
  Form: {
    path: "./runtime/components/html-block/form/Form",
    category: "html"
  },
  FormCheck: {
    path: "./runtime/components/html-block/form/FormCheck",
    category: "html"
  },
  FormCheckInput: {
    path: "./runtime/components/html-block/form/FormCheckInput.vue",
    category: "html"
  },
  FormCheckLabel: {
    path: "./runtime/components/html-block/form/FormCheckLabel",
    category: "html"
  },
  FormColor: {
    path: "./runtime/components/html-block/form/FormColor.vue",
    category: "html"
  },
  FormControl: {
    path: "./runtime/components/html-block/form/FormControl",
    category: "html"
  },
  FormFile: {
    path: "./runtime/components/html-block/form/FormFile.vue",
    category: "html"
  },
  FormFloating: {
    path: "./runtime/components/html-block/form/FormFloating",
    category: "html"
  },
  FormInput: {
    path: "./runtime/components/html-block/form/FormInput.vue",
    category: "html"
  },
  FormLabel: {
    path: "./runtime/components/html-block/form/FormLabel",
    category: "html"
  },
  FormRange: {
    path: "./runtime/components/html-block/form/FormRange.vue",
    category: "html"
  },
  FormSelect: {
    path: "./runtime/components/html-block/form/FormSelect.vue",
    category: "html"
  },
  FormSwitch: {
    path: "./runtime/components/html-block/form/FormSwitch",
    category: "html"
  },
  FormText: {
    path: "./runtime/components/html-block/form/FormText",
    category: "html"
  },
  FormTextarea: {
    path: "./runtime/components/html-block/form/FormTextarea.vue",
    category: "html"
  },
  InputGroup: {
    path: "./runtime/components/html-block/form/InputGroup",
    category: "html"
  },
  InputGroupText: {
    path: "./runtime/components/html-block/form/InputGroupText",
    category: "html"
  },
  Label: {
    path: "./runtime/components/html-block/form/Label",
    category: "html"
  },
  Legend: {
    path: "./runtime/components/html-block/form/Legend",
    category: "html"
  },
  Option: {
    path: "./runtime/components/html-block/form/Option",
    category: "html"
  },
  ValidFeedback: {
    path: "./runtime/components/html-block/form/ValidFeedback.vue",
    category: "html"
  },
  ValidTooltip: {
    path: "./runtime/components/html-block/form/ValidTooltip.vue",
    category: "html"
  },
  Block: {
    path: "./runtime/components/html-block/Block",
    category: "html"
  },
  Dd: {
    path: "./runtime/components/html-block/DefinitionDescription",
    category: "html"
  },
  Dl: {
    path: "./runtime/components/html-block/DefinitionList",
    category: "html"
  },
  Dt: {
    path: "./runtime/components/html-block/DefinitionTerm",
    category: "html"
  },
  Div: {
    path: "./runtime/components/html-block/Div",
    category: "html"
  },
  Footer: {
    path: "./runtime/components/html-block/Footer",
    category: "html"
  },
  Hr: {
    path: "./runtime/components/html-block/Hr",
    category: "html"
  },
  Img: {
    path: "./runtime/components/html-block/Image",
    category: "html"
  },
  Image: {
    alias: "Img",
    category: "extend"
  },
  Svg: {
    path: "./runtime/components/html-block/Svg",
    category: "html"
  },
  Input: {
    path: "./runtime/components/html-block/HtmlInput.vue",
    category: "html"
  },
  Ul: {
    path: "./runtime/components/html-block/List",
    category: "html"
  },
  List: {
    alias: "Ul",
    category: "extend"
  },
  Li: {
    path: "./runtime/components/html-block/ListItem.vue",
    category: "html"
  },
  ListItem: {
    alias: "Li",
    category: "extend",
    spec: {
      parents: ["List"]
    }
  },
  Main: {
    path: "./runtime/components/html-block/Main",
    category: "html"
  },
  Ol: {
    path: "./runtime/components/html-block/OrderedList",
    category: "html"
  },
  P: {
    path: "./runtime/components/html-block/Paragraph",
    category: "html"
  },
  Paragraph: {
    alias: "P",
    category: "extend"
  },
  Picture: {
    path: "./runtime/components/html-block/Picture",
    category: "html"
  },
  Select: {
    path: "./runtime/components/html-block/Select.vue",
    category: "html"
  },
  Textarea: {
    path: "./runtime/components/html-block/Textarea.vue",
    category: "html"
  },
  A: {
    path: "./runtime/components/html-inline/Anchor",
    category: "html"
  },
  Anchor: {
    alias: "A",
    category: "extend"
  },
  Button: {
    path: "./runtime/components/html-inline/Button",
    category: "html"
  },
  H1: {
    path: "./runtime/components/html-inline/H1",
    category: "html"
  },
  H2: {
    path: "./runtime/components/html-inline/H2",
    category: "html"
  },
  H3: {
    path: "./runtime/components/html-inline/H3",
    category: "html"
  },
  H4: {
    path: "./runtime/components/html-inline/H4",
    category: "html"
  },
  H5: {
    path: "./runtime/components/html-inline/H5",
    category: "html"
  },
  H6: {
    path: "./runtime/components/html-inline/H6",
    category: "html"
  },
  H: {
    path: "./runtime/components/html-inline/Headings",
    category: "html"
  },
  Headings: {
    alias: "H",
    category: "extend"
  },
  Span: {
    path: "./runtime/components/html-inline/Inline",
    category: "html"
  },
  Inline: {
    alias: "Span",
    category: "extend"
  },
  Small: {
    path: "./runtime/components/html-inline/Small",
    category: "html"
  },
  Strong: {
    path: "./runtime/components/html-inline/Strong",
    category: "html"
  },
  Caption: {
    path: "./runtime/components/html-table/Caption",
    category: "html"
  },
  Table: {
    path: "./runtime/components/html-table/Table",
    category: "html"
  },
  Tbody: {
    path: "./runtime/components/html-table/Tbody",
    category: "html"
  },
  Td: {
    path: "./runtime/components/html-table/Td",
    category: "html"
  },
  Tfoot: {
    path: "./runtime/components/html-table/Tfoot",
    category: "html"
  },
  Th: {
    path: "./runtime/components/html-table/Th",
    category: "html"
  },
  Thead: {
    path: "./runtime/components/html-table/Thead",
    category: "html"
  },
  Tr: {
    path: "./runtime/components/html-table/Tr",
    category: "html"
  },
  Icon: {
    path: "./runtime/components/icon/BIcon",
    category: "icon"
  },
  ActionState: {
    doc: "/lang-[lang]/integration/action-state",
    path: "./runtime/components/integration/ActionState.vue",
    category: "integration"
  },
  ArrayQuery: {
    path: "./runtime/components/integration/ArrayQuery.vue",
    category: "integration"
  },
  DataTable: {
    path: "./runtime/components/integration/DataTable.vue",
    category: "integration"
  },
  DataTableBody: {
    path: "./runtime/components/integration/DataTableBody.vue",
    category: "integration"
  },
  DataTableFooter: {
    path: "./runtime/components/integration/DataTableFooter.vue",
    category: "integration"
  },
  DataTableHeader: {
    path: "./runtime/components/integration/DataTableHeader.vue",
    category: "integration"
  },
  DataTableHeaderRowFilter: {
    path: "./runtime/components/integration/DataTableHeaderRowFilter.vue",
    category: "integration"
  },
  DataTableHeaderRowSorter: {
    path: "./runtime/components/integration/DataTableHeaderRowSorter.vue",
    category: "integration"
  },
  FullTextFilter: {
    path: "./runtime/components/integration/FullTextFilter.vue",
    category: "integration"
  },
  ViewState: {
    doc: "/lang-[lang]/integration/view-state",
    path: "./runtime/components/integration/ViewState.vue",
    category: "integration",
    examples: {
      test: {
        attrs: {
          src: "query://uid"
        }
      }
    }
  },
  SwiperSlide: {
    export: "SwiperSlide",
    path: "swiper/vue",
    category: "swiper",
    spec: {
      parents: ["Swiper"]
    }
  },
  UseWindowSize: {
    export: "UseWindowSize",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseWindowFocus: {
    export: "UseWindowFocus",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseVirtualList: {
    export: "UseVirtualList",
    path: "@vueuse/components",
    category: "vueuse"
  },
  UseTimestamp: {
    export: "UseTimestamp",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseTimeAgo: {
    export: "UseTimeAgo",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseScreenSafeArea: {
    export: "UseScreenSafeArea",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UsePreferredReducedMotion: {
    export: "UsePreferredReducedMotion",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UsePreferredLanguages: {
    export: "UsePreferredLanguages",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UsePreferredDark: {
    export: "UsePreferredDark",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UsePreferredContrast: {
    export: "UsePreferredContrast",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UsePreferredColorScheme: {
    export: "UsePreferredColorScheme",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UsePointerLock: {
    export: "UsePointerLock",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UsePointer: {
    export: "UsePointer",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UsePageLeave: {
    export: "UsePageLeave",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseOnline: {
    export: "UseOnline",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseOffsetPagination: {
    export: "UseOffsetPagination",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseObjectUrl: {
    export: "UseObjectUrl",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseNow: {
    export: "UseNow",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseNetwork: {
    export: "UseNetwork",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseMousePressed: {
    export: "UseMousePressed",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseMouseInElement: {
    export: "UseMouseInElement",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseIdle: {
    export: "UseIdle",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseGeolocation: {
    export: "UseGeolocation",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseFullscreen: {
    export: "UseFullscreen",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseEyeDropper: {
    export: "UseEyeDropper",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseElementVisibility: {
    export: "UseElementVisibility",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseElementSize: {
    export: "UseElementSize",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseElementBounding: {
    export: "UseElementBounding",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseDraggable: {
    export: "UseDraggable",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseDocumentVisibility: {
    export: "UseDocumentVisibility",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseDevicesList: {
    export: "UseDevicesList",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseDevicePixelRatio: {
    export: "UseDevicePixelRatio",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseDeviceOrientation: {
    export: "UseDeviceOrientation",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseDeviceMotion: {
    export: "UseDeviceMotion",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseClipboard: {
    export: "UseClipboard",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseBattery: {
    export: "UseBattery",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  UseActiveElement: {
    export: "UseActiveElement",
    path: "@vueuse/components",
    category: "vueuse"
    // mode: "client",
  },
  OnClickOutside: {
    export: "OnClickOutside",
    path: "@vueuse/components",
    category: "vueuse",
    mode: "client"
  }
};
