import React from "react";
import Link from "next/link";

import { Gutter } from "@components/Gutter";
import { MainMenu } from "@types";

import { FullLogo } from "@graphics/FullLogo";
import { MenuIcon } from "@graphics/Menu";

import classes from "./classes.module.scss";
import { Theme } from "@providers/Theme/types";
import { Modal, useModal } from "@faceless-ui/modal";
import { usePathname } from "next/navigation";

import { ArrowUpRight, NavArrowLeft, NavArrowRight } from "iconoir-react";
import { CMSLink } from "@components/CMSLink";

type NavItems = Pick<MainMenu, "tabs">;

export const modalSlug = "mobile-nav";
export const subMenuSlug = "mobile-sub-menu";

const NavigationItems = ({ tabs, setActiveTab }: any) => {
  const { openModal } = useModal();
  const handleOnClick = (index: number) => {
    openModal(subMenuSlug);
    setActiveTab(index);
  };

  return (
    <ul className={classes.mobileMenuItems}>
      {(tabs || []).map((tab: any, index: number) => {
        const { link, label, enableDirectLink, enableDropdown } = tab;

        if (!enableDropdown) {
          return (
            <CMSLink
              {...link}
              label={label}
              className={classes.mobileMenuItem}
              key={index}
            >
              <ArrowUpRight />
            </CMSLink>
          );
        }
        if (enableDirectLink) {
          return (
            <CMSLink
              {...link}
              label={label}
              onClick={() => handleOnClick(index)}
              className={classes.mobileMenuItem}
              key={index}
            >
              <ArrowUpRight />
            </CMSLink>
          );
        } else
          return (
            <CMSLink
              {...link}
              className={classes.mobileMenuItem}
              onClick={() => handleOnClick(index)}
              label={label}
              key={index}
            >
              <NavArrowRight />
            </CMSLink>
          );
      })}
    </ul>
  );
};

const MobileMenuModal: React.FC<
  NavItems & { setActiveTab: (index: number) => void; theme?: Theme | null }
> = ({ tabs, setActiveTab, theme }) => {
  return (
    <Modal
      slug={modalSlug}
      className={classes.mobileMenuModal}
      trapFocus={false}
    >
      <Gutter
        className={classes.mobileMenuWrap}
        dataTheme={`${theme}`}
        leftGutter={false}
        rightGutter={false}
      >
        <NavigationItems tabs={tabs} setActiveTab={setActiveTab} />
        <div className={classes.modalBlur} />
      </Gutter>
    </Modal>
  );
};

const SubMenuModal: React.FC<
  NavItems & { activeTab: number | undefined; theme?: Theme | null }
> = ({ tabs, activeTab, theme }) => {
  const { closeModal, closeAllModals } = useModal();
  return (
    <Modal
      slug={subMenuSlug}
      className={[classes.mobileMenuModal, classes.mobileSubMenu].join(" ")}
      trapFocus={false}
      onClick={closeAllModals}
    >
      <Gutter
        className={classes.subMenuWrap}
        dataTheme={`${theme}`}
        leftGutter={false}
        rightGutter={false}
      >
        {(tabs || []).map((tab, tabIndex) => {
          if (tabIndex !== activeTab) return null;
          return (
            <div className={classes.subMenuItems} key={tabIndex}>
              <button
                className={classes.backButton}
                onClick={(e) => {
                  closeModal(subMenuSlug);
                  e.stopPropagation();
                }}
              >
                <NavArrowLeft />
                Back
              </button>
              {tab.descriptionLinks && tab.descriptionLinks.length > 0 && (
                <div className={classes.descriptionLinks}>
                  {tab.descriptionLinks.map((link, linkIndex) => (
                    <CMSLink
                      {...link.link}
                      className={classes.descriptionLink}
                      key={linkIndex}
                      label=""
                    >
                      <ArrowUpRight />
                    </CMSLink>
                  ))}
                </div>
              )}
              {(tab.navItems || []).map((item, index) => {
                return (
                  <div className={classes.linkWrap} key={index}>
                    {item.style === "default" && item.defaultLink && (
                      <CMSLink
                        {...item}
                        className={classes.defaultLink}
                        {...item.defaultLink.link}
                        label=""
                      >
                        <div className={classes.listLabelWrap}>
                          <div className={classes.listLabel}>
                            {item.defaultLink.link.label}
                            <ArrowUpRight />
                          </div>
                          <div className={classes.itemDescription}>
                            {item.defaultLink.description}
                          </div>
                        </div>
                      </CMSLink>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </Gutter>
    </Modal>
  );
};
export const MobileNavigation: React.FC<NavItems> = (props) => {
  const { isModalOpen, openModal, closeAllModals } = useModal();
  const headerTheme = "dark";
  const pathname = usePathname;
  const [activeTab, setActiveTab] = React.useState<number | undefined>();

  const isMenuOpen = isModalOpen(modalSlug);

  React.useEffect(() => {
    closeAllModals();
  }, [pathname, closeAllModals]);

  const toggleModal = React.useCallback(() => {
    if (isMenuOpen) {
      closeAllModals();
    } else {
      openModal(modalSlug);
    }
  }, [isMenuOpen, closeAllModals, openModal]);
  return (
    <div className={classes.mobileNav}>
      <div className={classes.menuBar}>
        <Gutter>
          <div className={"grid"}>
            <div
              className={[classes.menuBarContainer, "cols-16 cols-m-8"]
                .filter(Boolean)
                .join(" ")}
            >
              <Link href={"/"} className={classes.logo} aria-label={"logo"}>
                <FullLogo />
              </Link>
              <div className={classes.icons}>
                <div
                  className={[
                    classes.modalToggler,
                    isMenuOpen ? classes.hamburgerOpen : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={toggleModal}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
        </Gutter>
      </div>
      <MobileMenuModal
        {...props}
        setActiveTab={setActiveTab}
        theme={headerTheme}
      />
      <SubMenuModal {...props} activeTab={activeTab} theme={headerTheme} />
    </div>
  );
};
