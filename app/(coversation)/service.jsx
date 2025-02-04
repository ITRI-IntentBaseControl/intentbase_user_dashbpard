"use client";

import { postAPI } from "@/app/api/entrypoint";

/** 取得指定使用者的對話列表 */
export async function getConversationList(userUid) {
  try {
    const response = await postAPI(
      "conversation_mgt/ConversationManager/get_conversation_list",
      { user_uid: userUid }
    );
    return response.data; // { status, message, data }
  } catch (error) {
    console.error("[getConversationList] API Error:", error);
    throw error;
  }
}

/** 刪除指定對話 */
export async function deleteConversation(conversationUid) {
  try {
    // 假設後端的刪除路由如下，請依實際為準
    const response = await postAPI(
      "conversation_mgt/ConversationManager/delete_conversation",
      { conversation_uid: conversationUid }
    );
    return response.data; // { status, message, ... }
  } catch (error) {
    console.error("[deleteConversation] API Error:", error);
    throw error;
  }
}

/** 重新命名指定對話 */
export async function renameConversation(conversationUid, newName) {
  try {
    // 假設後端的更新路由如下，請依實際為準
    const response = await postAPI(
      "conversation_mgt/ConversationManager/update_conversation_name",
      {
        conversation_uid: conversationUid,
        new_name: newName,
      }
    );
    return response.data; // { status, message, ... }
  } catch (error) {
    console.error("[renameConversation] API Error:", error);
    throw error;
  }
}

export async function getConversationHistory(conversationUid) {
  try {
    // 直接使用 postAPI
    const response = await postAPI(
      "conversation_mgt/TextManager/get_text_list",
      {
        conversation_uid: conversationUid,
      }
    );

    // 檢查回傳
    // Axios 返回結構:
    //   { status: number, data: { status: boolean, message: string, data: [...] } }
    if (response.status !== 200) {
      throw new Error(`getConversationHistory failed: ${response.status}`);
    }

    // 回傳後端 JSON
    return response.data;
    // e.g. { status: true, message: "...", data: [...對話列表...] }
  } catch (error) {
    console.error("[getConversationHistory] API Error:", error);
    throw error;
  }
}
