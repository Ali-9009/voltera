// Background-removed vials, in order of preference.
export const CUTOUTS = {
  "vls-3rt": "/pngs/vials/vls-3rt.png",
  "vls-2trz": "/pngs/vials/vls-2trz.png",
  "ghk-cu": "/pngs/vials/ghk-cu.png",
  "tesamorelin": "/pngs/vials/tesamorelin.png",
  "vls-1sm": "/pngs/vials/vls-1sm.png",
};

export const getCutout = (slug) => CUTOUTS[slug] ?? CUTOUTS["vls-3rt"];
