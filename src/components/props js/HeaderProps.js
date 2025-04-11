// src/components/props/HeaderProps.js
export const headerProps = [
  {
    icon: "fa-question",
    label: "About",
    onClick: (toggleModal) => toggleModal("toggleAbout"),
  },
  {
    icon: "fa-envelope",
    label: "Contact Us",
    onClick: (toggleModal) => toggleModal("toggleContact"),
  },
];
