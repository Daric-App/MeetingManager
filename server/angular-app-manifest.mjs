
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MeetingManager/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/MeetingManager/regular-participant",
    "route": "/MeetingManager"
  },
  {
    "renderMode": 2,
    "route": "/MeetingManager/regular-participant"
  },
  {
    "renderMode": 2,
    "route": "/MeetingManager/admin/minutes"
  },
  {
    "renderMode": 2,
    "route": "/MeetingManager/admin/meetingstream"
  },
  {
    "renderMode": 2,
    "redirectTo": "/MeetingManager/regular-participant",
    "route": "/MeetingManager/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 52437, hash: '2647f4787cebc07a98b63b57b23df21a243e5e9e6c0620d6ba37ff91b2d010d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: 'f4ee7630481c5844f6a7942f70bc7a439879c776c943e1ee645e9a630e0384d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'regular-participant/index.html': {size: 56727, hash: 'ac228bde9fc8732b946ea82409c72f49a40a66734d8536054b30550af8538370', text: () => import('./assets-chunks/regular-participant_index_html.mjs').then(m => m.default)},
    'admin/minutes/index.html': {size: 52734, hash: '7d35b66bc1566b36e24492106e7df7ec325aa499892c49dbc565aba404cbfd23', text: () => import('./assets-chunks/admin_minutes_index_html.mjs').then(m => m.default)},
    'admin/meetingstream/index.html': {size: 57476, hash: '37f84a01c1e03dd6d76a5fd9e6d3dde87d4468a86800b77b4d620cf2a9478353', text: () => import('./assets-chunks/admin_meetingstream_index_html.mjs').then(m => m.default)},
    'styles-NO4WVWUR.css': {size: 319584, hash: '3XKX2IzQuSQ', text: () => import('./assets-chunks/styles-NO4WVWUR_css.mjs').then(m => m.default)}
  },
};
