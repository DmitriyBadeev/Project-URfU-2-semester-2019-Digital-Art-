
const PORT = '44380';

export const PATH = `https://localhost:${PORT}/`;

export const MAIN_PATH = `https://localhost:${PORT}/api`;

export const GET_ARTS_URL = '/home';

export const POST_ART_URL = '/home';

export const DELETE_ART_URL = (id) => `/home/${id}`;

export const GET_ART_URL = (id) => `/home/${id}`;

export const GET_USER_INFO_URL = (id) => `/users/${id}`;

export const GET_ARTS_ELSE_URL = '/home/get-else';

export const SEARCH_ARTS_URL = '/home/search';

export const PUT_USER_INFO_URL = '/users';

export const GET_AUTH_USER_URL = '/auth';

export const REGISTRATION_URL = '/registration';

export const AUTHORIZATION_URL = '/auth';

export const GET_LIKES_URL = '/likes';

export const POST_LIKE_URL = '/likes';

export const DELETE_LIKE_URL = '/likes';

export const POST_COMMENT_URL = '/comments';

export const POST_VIEW_URL = (idArt) => `/views/${idArt}`;

export const GET_SUBS_URL = '/subscriptions';

export const POST_SUB_URL = '/subscriptions';

export const DELETE_SUB_URL = '/subscriptions';


