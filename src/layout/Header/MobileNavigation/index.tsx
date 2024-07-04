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

type NavItems = Pick<MainMenu, "tabs">;

export const modalSlug = "mobile-nav";
export const subMenuSlug = "mobile-sub-menu";

const MobileMenuModal: React.FC<
  NavItems & { setActiveTab: (index: number) => void; theme?: Theme | null }
> = ({ tabs, setActiveTab, theme }) => {
  return (
    <Modal
      slug={modalSlug}
      className={classes.mobileMenuModal}
      trapFocus={false}
    >
      <Gutter className={classes.mobileMenuWrap} dataTheme={`${theme}`}>
        Testing
        <div className={classes.modalBlur} />
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
    </div>
  );
};
