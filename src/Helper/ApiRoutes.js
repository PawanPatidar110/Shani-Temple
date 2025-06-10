
const API_ROUTES = {
    MANAGEMENT: {
        ADD: `/api/management/add`,
        SHOW_ALL: `/api/management/showall`,
        DELETE: `/api/management/delete`,
        UPDATE: (id) => `/api/management/update/${id}`,
    },

    BLOG: {
        ADD: `/api/blog/add`,
        SHOW_ALL: `/api/blog/showall`,
        UPDATE: (id) => `/api/blog/update/${id}`,
    },

    GALLERY: {
        ADD: `/api/gallery/add`,
        SHOW_ALL: `/api/gallery/showall`,
    },
};

export default API_ROUTES;
