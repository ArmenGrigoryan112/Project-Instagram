import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { addPost } from "./middleware/addPostMiddleware";
import { delPost } from "./middleware/deletePostMiddleware";
import ignoreEmptyChatInput from "./middleware/middlawareChatInput";
import { ignoreEmptyInput } from "./middleware/middlawareInput";
import { ignoreSpacesInSearch } from "./middleware/middlewareSearch";
import { conversationsReducer } from "./slices/conversations/conversationsSlice";
import { postsReducer } from "./slices/posts/PostsSlice";
import { searchReducer } from "./slices/search/searchSlice";
import { usersReducer } from "./slices/users/usersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'InstagramProject.am',
    storage,
  }

  const rootReducer = combineReducers({
        posts: postsReducer,
        search: searchReducer,
        users: usersReducer,
        conversations: conversationsReducer
    })

    const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer: persistedReducer ,
    middleware:(getDefaultMiddleware) => {
        return [
            ...getDefaultMiddleware(
                {
                    serializableCheck: {
                      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    },
                }
            ),
            ignoreSpacesInSearch,
            ignoreEmptyInput,
            ignoreEmptyChatInput,
            addPost,
            delPost
        ]
    }
})

export const persistor = persistStore(store)
export default store