///////////////////////////////////////////////
// clientmetrics.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CClientMetrics_ClientBootstrap_RequestInfo
 * @property {string} [original_hostname]
 * @property {string} [actual_hostname]
 * @property {string} [path]
 * @property {string} [base_name]
 * @property {boolean} [success]
 * @property {number} [status_code]
 * @property {string} [address_of_request_url]
 * @property {number} [response_time_ms]
 * @property {string} [bytes_received]
 * @property {number} [num_retries]
 */

/**
 * @typedef {object} Proto_CClientMetrics_ClientBootstrap_Summary
 * @property {number} [launcher_type]
 * @property {number} [steam_realm]
 * @property {string} [beta_name]
 * @property {boolean} [download_completed]
 * @property {number} [total_time_ms]
 * @property {Proto_CClientMetrics_ClientBootstrap_RequestInfo[]} manifest_requests
 * @property {Proto_CClientMetrics_ClientBootstrap_RequestInfo[]} package_requests
 */

/**
 * @typedef {object} Proto_CClientMetrics_ContentDownloadResponse_Counts
 * @property {number} [class_100]
 * @property {number} [class_200]
 * @property {number} [class_300]
 * @property {number} [class_400]
 * @property {number} [class_500]
 * @property {number} [no_response]
 * @property {number} [class_unknown]
 */

/**
 * @typedef {object} Proto_CClientMetrics_ContentDownloadResponse_HostCounts
 * @property {string} [hostname]
 * @property {number} [source_type]
 * @property {Proto_CClientMetrics_ContentDownloadResponse_Counts} [counts]
 */

/**
 * @typedef {object} Proto_CClientMetrics_ContentDownloadResponse_Hosts
 * @property {Proto_CClientMetrics_ContentDownloadResponse_HostCounts[]} hosts
 */

///////////////////////////////////////////////
// common.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CChatPartyBeacon
 * @property {number} [app_id]
 * @property {string} [steamid_owner]
 * @property {string} [beacon_id]
 * @property {string} [game_metadata]
 */

/**
 * @typedef {object} Proto_CChatRoleActions
 * @property {string} [role_id]
 * @property {boolean} [can_create_rename_delete_channel]
 * @property {boolean} [can_kick]
 * @property {boolean} [can_ban]
 * @property {boolean} [can_invite]
 * @property {boolean} [can_change_tagline_avatar_name]
 * @property {boolean} [can_chat]
 * @property {boolean} [can_view_history]
 * @property {boolean} [can_change_group_roles]
 * @property {boolean} [can_change_user_roles]
 * @property {boolean} [can_mention_all]
 * @property {boolean} [can_set_watching_broadcast]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetChatRoomGroupSummary_Response
 * @property {string} [chat_group_id]
 * @property {string} [chat_group_name]
 * @property {number} [active_member_count]
 * @property {number} [active_voice_member_count]
 * @property {string} [default_chat_id]
 * @property {Proto_CChatRoomState[]} chat_rooms
 * @property {number} [clanid]
 * @property {string} [chat_group_tagline]
 * @property {number} [accountid_owner]
 * @property {number[]} top_members
 * @property {Buffer} [chat_group_avatar_sha]
 * @property {number} [rank]
 * @property {string} [default_role_id]
 * @property {string[]} role_ids
 * @property {Proto_CChatRoleActions[]} role_actions
 * @property {number} [watching_broadcast_accountid]
 * @property {number} [appid]
 * @property {Proto_CChatPartyBeacon[]} party_beacons
 * @property {string} [watching_broadcast_channel_id]
 * @property {string} [active_minigame_id]
 * @property {string} [avatar_ugc_url]
 * @property {boolean} [disabled]
 */

/**
 * @typedef {object} Proto_CChatRoomState
 * @property {string} [chat_id]
 * @property {string} [chat_name]
 * @property {boolean} [voice_allowed]
 * @property {number[]} members_in_voice
 * @property {number} [time_last_message]
 * @property {number} [sort_order]
 * @property {string} [last_message]
 * @property {number} [accountid_last_message]
 */

/**
 * @typedef {object} Proto_CMsgAuthTicket
 * @property {number} [estate]
 * @property {EResult} [eresult=2]
 * @property {string} [steamid]
 * @property {string} [gameid]
 * @property {number} [h_steam_pipe]
 * @property {number} [ticket_crc]
 * @property {Buffer} [ticket]
 */

/**
 * @typedef {object} Proto_CMsgClientAccountInfo
 * @property {string} [persona_name]
 * @property {string} [ip_country]
 * @property {number} [count_authed_computers]
 * @property {number} [account_flags]
 * @property {string} [facebook_id]
 * @property {string} [facebook_name]
 * @property {boolean} [steamguard_notify_newmachines]
 * @property {string} [steamguard_machine_name_user_chosen]
 * @property {boolean} [is_phone_verified]
 * @property {number} [two_factor_state]
 * @property {boolean} [is_phone_identifying]
 * @property {boolean} [is_phone_needing_reverify]
 */

/**
 * @typedef {object} Proto_CMsgClientAddFriendToGroup
 * @property {number} [groupid]
 * @property {string} [steamiduser]
 */

/**
 * @typedef {object} Proto_CMsgClientAddFriendToGroupResponse
 * @property {EResult} [eresult]
 */

/**
 * @typedef {object} Proto_CMsgClientAMGetPersonaNameHistory
 * @property {number} [id_count]
 * @property {Proto_CMsgClientAMGetPersonaNameHistory_IdInstance[]} Ids
 */

/**
 * @typedef {object} Proto_CMsgClientAMGetPersonaNameHistory_IdInstance
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CMsgClientAMGetPersonaNameHistoryResponse
 * @property {Proto_CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance[]} responses
 */

/**
 * @typedef {object} Proto_CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance
 * @property {EResult} [eresult=2]
 * @property {string} [steamid]
 * @property {Proto_CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance[]} names
 */

/**
 * @typedef {object} Proto_CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance
 * @property {number} [name_since]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CMsgClientChangeStatus
 * @property {number} [persona_state]
 * @property {string} [player_name]
 * @property {boolean} [is_auto_generated_name]
 * @property {boolean} [high_priority]
 * @property {boolean} [persona_set_by_user]
 * @property {number} [persona_state_flags=0]
 * @property {boolean} [need_persona_response]
 * @property {boolean} [is_client_idle]
 */

/**
 * @typedef {object} Proto_CMsgClientClanState
 * @property {string} [steamid_clan]
 * @property {number} [clan_account_flags]
 * @property {Proto_CMsgClientClanState_NameInfo} [name_info]
 * @property {Proto_CMsgClientClanState_UserCounts} [user_counts]
 * @property {Proto_CMsgClientClanState_Event[]} events
 * @property {Proto_CMsgClientClanState_Event[]} announcements
 * @property {boolean} [chat_room_private]
 */

/**
 * @typedef {object} Proto_CMsgClientClanState_Event
 * @property {string} [gid]
 * @property {number} [event_time]
 * @property {string} [headline]
 * @property {string} [game_id]
 * @property {boolean} [just_posted]
 */

/**
 * @typedef {object} Proto_CMsgClientClanState_NameInfo
 * @property {string} [clan_name]
 * @property {Buffer} [sha_avatar]
 */

/**
 * @typedef {object} Proto_CMsgClientClanState_UserCounts
 * @property {number} [members]
 * @property {number} [online]
 * @property {number} [chatting]
 * @property {number} [in_game]
 * @property {number} [chat_room_members]
 */

/**
 * @typedef {object} Proto_CMsgClientCreateFriendsGroup
 * @property {string} [steamid]
 * @property {string} [groupname]
 * @property {string[]} steamid_friends
 */

/**
 * @typedef {object} Proto_CMsgClientCreateFriendsGroupResponse
 * @property {EResult} [eresult]
 * @property {number} [groupid]
 */

/**
 * @typedef {object} Proto_CMsgClientDeleteFriendsGroup
 * @property {string} [steamid]
 * @property {number} [groupid]
 */

/**
 * @typedef {object} Proto_CMsgClientDeleteFriendsGroupResponse
 * @property {EResult} [eresult]
 */

/**
 * @typedef {object} Proto_CMsgClientEmoticonList
 * @property {Proto_CMsgClientEmoticonList_Emoticon[]} emoticons
 * @property {Proto_CMsgClientEmoticonList_Sticker[]} stickers
 * @property {Proto_CMsgClientEmoticonList_Effect[]} effects
 */

/**
 * @typedef {object} Proto_CMsgClientEmoticonList_Effect
 * @property {string} [name]
 * @property {number} [count]
 * @property {number} [time_received]
 * @property {boolean} [infinite_use]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CMsgClientEmoticonList_Emoticon
 * @property {string} [name]
 * @property {number} [count]
 * @property {number} [time_last_used]
 * @property {number} [use_count]
 * @property {number} [time_received]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CMsgClientEmoticonList_Sticker
 * @property {string} [name]
 * @property {number} [count]
 * @property {number} [time_received]
 * @property {number} [appid]
 * @property {number} [time_last_used]
 * @property {number} [use_count]
 */

/**
 * @typedef {object} Proto_CMsgClientGetClanActivityCounts
 * @property {string[]} steamid_clans
 */

/**
 * @typedef {object} Proto_CMsgClientGetEmoticonList
 */

/**
 * @typedef {object} Proto_CMsgClientHeartBeat
 * @property {boolean} [send_reply]
 */

/**
 * @typedef {object} Proto_CMsgClientInviteToGame
 * @property {string} [steam_id_dest]
 * @property {string} [steam_id_src]
 * @property {string} [connect_string]
 * @property {string} [remote_play]
 */

/**
 * @typedef {object} Proto_CMsgClientLoggedOff
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientLogon
 * @property {number} [protocol_version]
 * @property {number} [deprecated_obfustucated_private_ip]
 * @property {number} [cell_id]
 * @property {number} [last_session_id]
 * @property {number} [client_package_version]
 * @property {string} [client_language]
 * @property {number} [client_os_type]
 * @property {boolean} [should_remember_password=false]
 * @property {string} [wine_version]
 * @property {number} [deprecated_10]
 * @property {Proto_CMsgIPAddress} [obfuscated_private_ip]
 * @property {number} [deprecated_public_ip]
 * @property {number} [qos_level]
 * @property {string} [client_supplied_steam_id]
 * @property {Proto_CMsgIPAddress} [public_ip]
 * @property {Buffer} [machine_id]
 * @property {number} [launcher_type=0]
 * @property {number} [ui_mode=0]
 * @property {number} [chat_mode=0]
 * @property {Buffer} [steam2_auth_ticket]
 * @property {string} [email_address]
 * @property {number} [rtime32_account_creation]
 * @property {string} [account_name]
 * @property {string} [password]
 * @property {string} [game_server_token]
 * @property {string} [login_key]
 * @property {boolean} [was_converted_deprecated_msg=false]
 * @property {string} [anon_user_target_account_name]
 * @property {string} [resolved_user_steam_id]
 * @property {number} [eresult_sentryfile]
 * @property {Buffer} [sha_sentryfile]
 * @property {string} [auth_code]
 * @property {number} [otp_type]
 * @property {number} [otp_value]
 * @property {string} [otp_identifier]
 * @property {boolean} [steam2_ticket_request]
 * @property {Buffer} [sony_psn_ticket]
 * @property {string} [sony_psn_service_id]
 * @property {boolean} [create_new_psn_linked_account_if_needed=false]
 * @property {string} [sony_psn_name]
 * @property {number} [game_server_app_id]
 * @property {boolean} [steamguard_dont_remember_computer]
 * @property {string} [machine_name]
 * @property {string} [machine_name_userchosen]
 * @property {string} [country_override]
 * @property {boolean} [is_steam_box]
 * @property {string} [client_instance_id]
 * @property {string} [two_factor_code]
 * @property {boolean} [supports_rate_limit_response]
 * @property {string} [web_logon_nonce]
 * @property {number} [priority_reason]
 * @property {Proto_CMsgClientSecret} [embedded_client_secret]
 * @property {boolean} [disable_partner_autogrants]
 */

/**
 * @typedef {object} Proto_CMsgClientLogonResponse
 * @property {EResult} [eresult=2]
 * @property {number} [out_of_game_heartbeat_seconds]
 * @property {number} [in_game_heartbeat_seconds]
 * @property {number} [deprecated_public_ip]
 * @property {number} [rtime32_server_time]
 * @property {number} [account_flags]
 * @property {number} [cell_id]
 * @property {string} [email_domain]
 * @property {Buffer} [steam2_ticket]
 * @property {number} [eresult_extended]
 * @property {string} [webapi_authenticate_user_nonce]
 * @property {number} [cell_id_ping_threshold]
 * @property {boolean} [deprecated_use_pics]
 * @property {string} [vanity_url]
 * @property {Proto_CMsgIPAddress} [public_ip]
 * @property {string} [client_supplied_steamid]
 * @property {string} [ip_country_code]
 * @property {Buffer} [parental_settings]
 * @property {Buffer} [parental_setting_signature]
 * @property {number} [count_loginfailures_to_migrate]
 * @property {number} [count_disconnects_to_migrate]
 * @property {number} [ogs_data_report_time_window]
 * @property {string} [client_instance_id]
 * @property {boolean} [force_client_update_check]
 * @property {string} [agreement_session_url]
 */

/**
 * @typedef {object} Proto_CMsgClientManageFriendsGroup
 * @property {number} [groupid]
 * @property {string} [groupname]
 * @property {string[]} steamid_friends_added
 * @property {string[]} steamid_friends_removed
 */

/**
 * @typedef {object} Proto_CMsgClientManageFriendsGroupResponse
 * @property {EResult} [eresult]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSInviteToLobby
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {string} [steam_id_user_invited]
 */

/**
 * @typedef {object} Proto_CMsgClientPersonaState
 * @property {number} [status_flags]
 * @property {Proto_CMsgClientPersonaState_Friend[]} friends
 */

/**
 * @typedef {object} Proto_CMsgClientPersonaState_Friend
 * @property {string} [friendid]
 * @property {number} [persona_state]
 * @property {number} [game_played_app_id]
 * @property {number} [game_server_ip]
 * @property {number} [game_server_port]
 * @property {number} [persona_state_flags]
 * @property {number} [online_session_instances]
 * @property {boolean} [persona_set_by_user]
 * @property {string} [player_name]
 * @property {number} [query_port]
 * @property {string} [steamid_source]
 * @property {Buffer} [avatar_hash]
 * @property {number} [last_logoff]
 * @property {number} [last_logon]
 * @property {number} [last_seen_online]
 * @property {number} [clan_rank]
 * @property {string} [game_name]
 * @property {string} [gameid]
 * @property {Buffer} [game_data_blob]
 * @property {Proto_CMsgClientPersonaState_Friend_ClanData} [clan_data]
 * @property {string} [clan_tag]
 * @property {Proto_CMsgClientPersonaState_Friend_KV[]} rich_presence
 * @property {string} [broadcast_id]
 * @property {string} [game_lobby_id]
 * @property {number} [watching_broadcast_accountid]
 * @property {number} [watching_broadcast_appid]
 * @property {number} [watching_broadcast_viewers]
 * @property {string} [watching_broadcast_title]
 * @property {boolean} [is_community_banned]
 * @property {boolean} [player_name_pending_review]
 * @property {boolean} [avatar_pending_review]
 */

/**
 * @typedef {object} Proto_CMsgClientPersonaState_Friend_ClanData
 * @property {number} [ogg_app_id]
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CMsgClientPersonaState_Friend_KV
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CMsgClientRemoveFriendFromGroup
 * @property {number} [groupid]
 * @property {string} [steamiduser]
 */

/**
 * @typedef {object} Proto_CMsgClientRemoveFriendFromGroupResponse
 * @property {EResult} [eresult]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestFriendData
 * @property {number} [persona_state_requested]
 * @property {string[]} friends
 */

/**
 * @typedef {object} Proto_CMsgClientSecret
 * @property {number} [version]
 * @property {number} [appid]
 * @property {number} [deviceid]
 * @property {string} [nonce]
 * @property {Buffer} [hmac]
 */

/**
 * @typedef {object} Proto_CMsgClientServersAvailable
 * @property {Proto_CMsgClientServersAvailable_Server_Types_Available[]} server_types_available
 * @property {number} [server_type_for_auth_services]
 */

/**
 * @typedef {object} Proto_CMsgClientServersAvailable_Server_Types_Available
 * @property {number} [server]
 * @property {boolean} [changed]
 */

/**
 * @typedef {object} Proto_CMsgClientServerTimestampRequest
 * @property {string} [client_request_timestamp]
 */

/**
 * @typedef {object} Proto_CMsgClientServerTimestampResponse
 * @property {string} [client_request_timestamp]
 * @property {string} [server_timestamp_ms]
 */

/**
 * @typedef {object} Proto_CMsgCREGetUserPublishedItemVoteDetails
 * @property {Proto_CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId[]} published_file_ids
 */

/**
 * @typedef {object} Proto_CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId
 * @property {string} [published_file_id]
 */

/**
 * @typedef {object} Proto_CMsgCREGetUserPublishedItemVoteDetailsResponse
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail[]} user_item_vote_details
 */

/**
 * @typedef {object} Proto_CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail
 * @property {string} [published_file_id]
 * @property {number} [vote=0]
 */

/**
 * @typedef {object} Proto_CMsgCREUpdateUserPublishedItemVote
 * @property {string} [published_file_id]
 * @property {boolean} [vote_up]
 */

/**
 * @typedef {object} Proto_CMsgCREUpdateUserPublishedItemVoteResponse
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgIPAddress
 * @property {number} [v4]
 * @property {Buffer} [v6]
 */

/**
 * @typedef {object} Proto_CMsgMulti
 * @property {number} [size_unzipped]
 * @property {Buffer} [message_body]
 */

/**
 * @typedef {object} Proto_CMsgProtoBufHeader
 * @property {string} [steamid]
 * @property {number} [client_sessionid]
 * @property {number} [routing_appid]
 * @property {string} [jobid_source=18446744073709552000]
 * @property {string} [jobid_target=18446744073709552000]
 * @property {string} [target_job_name]
 * @property {number} [seq_num]
 * @property {EResult} [eresult=2]
 * @property {string} [error_message]
 * @property {number} [ip]
 * @property {Buffer} [ip_v6]
 * @property {number} [auth_account_flags]
 * @property {number} [token_source]
 * @property {boolean} [admin_spoofing_user]
 * @property {number} [transport_error=1]
 * @property {string} [messageid=18446744073709552000]
 * @property {number} [publisher_group_id]
 * @property {number} [sysid]
 * @property {string} [trace_tag]
 * @property {number} [webapi_key_id]
 * @property {boolean} [is_from_external_source]
 * @property {number[]} forward_to_sysid
 * @property {number} [cm_sysid]
 * @property {string} [wg_token]
 * @property {number} [launcher_type=0]
 * @property {number} [realm=0]
 */

/**
 * @typedef {object} Proto_CProductImpressionsFromClient_Notification
 * @property {Proto_CProductImpressionsFromClient_Notification_Impression[]} impressions
 */

/**
 * @typedef {object} Proto_CProductImpressionsFromClient_Notification_Impression
 * @property {number} [type]
 * @property {number} [appid]
 * @property {number} [num_impressions]
 */

/**
 * @typedef {object} Proto_CStoreQueryFilters
 * @property {boolean} [released_only]
 * @property {boolean} [coming_soon_only]
 * @property {Proto_CStoreQueryFilters_TypeFilters} [type_filters]
 * @property {Proto_CStoreQueryFilters_TagFilter[]} tagids_must_match
 * @property {number[]} tagids_exclude
 * @property {number[]} content_descriptors_must_match
 * @property {number[]} content_descriptors_excluded
 * @property {number} [regional_top_n_sellers]
 * @property {number} [global_top_n_sellers]
 * @property {number} [regional_long_term_top_n_sellers]
 * @property {number} [global_long_term_top_n_sellers]
 */

/**
 * @typedef {object} Proto_CStoreQueryFilters_TagFilter
 * @property {number[]} tagids
 */

/**
 * @typedef {object} Proto_CStoreQueryFilters_TypeFilters
 * @property {boolean} [include_apps]
 * @property {boolean} [include_packages]
 * @property {boolean} [include_bundles]
 * @property {boolean} [include_games]
 * @property {boolean} [include_demos]
 * @property {boolean} [include_mods]
 * @property {boolean} [include_dlc]
 * @property {boolean} [include_software]
 * @property {boolean} [include_video]
 * @property {boolean} [include_hardware]
 * @property {boolean} [include_series]
 * @property {boolean} [include_music]
 */

/**
 * @typedef {object} Proto_LoyaltyRewardDefinition
 * @property {number} [appid]
 * @property {number} [defid]
 * @property {number} [type]
 * @property {number} [community_item_class]
 * @property {number} [community_item_type]
 * @property {string} [point_cost]
 * @property {number} [timestamp_created]
 * @property {number} [timestamp_updated]
 * @property {number} [timestamp_available]
 * @property {number} [timestamp_available_end]
 * @property {string} [quantity]
 * @property {string} [internal_description]
 * @property {boolean} [active]
 * @property {Proto_LoyaltyRewardDefinition_CommunityItemData} [community_item_data]
 * @property {number[]} bundle_defids
 * @property {number} [usable_duration]
 * @property {number} [bundle_discount]
 */

/**
 * @typedef {object} Proto_LoyaltyRewardDefinition_BadgeData
 * @property {number} [level]
 * @property {string} [image]
 */

/**
 * @typedef {object} Proto_LoyaltyRewardDefinition_CommunityItemData
 * @property {string} [item_name]
 * @property {string} [item_title]
 * @property {string} [item_description]
 * @property {string} [item_image_small]
 * @property {string} [item_image_large]
 * @property {string} [item_movie_webm]
 * @property {string} [item_movie_mp4]
 * @property {string} [item_movie_webm_small]
 * @property {string} [item_movie_mp4_small]
 * @property {boolean} [animated]
 * @property {Proto_LoyaltyRewardDefinition_BadgeData[]} badge_data
 * @property {string} [profile_theme_id]
 */

/**
 * @typedef {object} Proto_NotImplemented
 */

/**
 * @typedef {object} Proto_StoreGameRating
 * @property {string} [type]
 * @property {string} [rating]
 * @property {string[]} descriptors
 * @property {string} [interactive_elements]
 * @property {number} [required_age]
 * @property {boolean} [use_age_gate]
 * @property {string} [image_url]
 * @property {string} [image_target]
 */

/**
 * @typedef {object} Proto_StoreItem
 * @property {number} [item_type]
 * @property {number} [id]
 * @property {number} [success]
 * @property {boolean} [visible]
 * @property {boolean} [unvailable_for_country_restriction]
 * @property {string} [name]
 * @property {string} [store_url_path]
 * @property {number} [appid]
 * @property {number} [type]
 * @property {number[]} included_types
 * @property {number[]} included_appids
 * @property {boolean} [is_free]
 * @property {boolean} [is_early_access]
 * @property {Proto_StoreItem_RelatedItems} [related_items]
 * @property {number[]} content_descriptorids
 * @property {number[]} tagids
 * @property {Proto_StoreItem_Categories} [categories]
 * @property {Proto_StoreItem_Reviews} [reviews]
 * @property {Proto_StoreItem_BasicInfo} [basic_info]
 * @property {Proto_StoreItem_Tag[]} tags
 * @property {Proto_StoreItem_Assets} [assets]
 * @property {Proto_StoreItem_ReleaseInfo} [release]
 * @property {Proto_StoreItem_Platforms} [platforms]
 * @property {Proto_StoreGameRating} [game_rating]
 * @property {Proto_StoreItem_PurchaseOption} [best_purchase_option]
 * @property {Proto_StoreItem_PurchaseOption[]} purchase_options
 * @property {Proto_StoreItem_PurchaseOption[]} accessories
 * @property {Proto_StoreItem_Screenshots} [screenshots]
 * @property {Proto_StoreItem_Trailers} [trailers]
 */

/**
 * @typedef {object} Proto_StoreItem_Assets
 * @property {string} [asset_url_format]
 * @property {string} [main_capsule]
 * @property {string} [small_capsule]
 * @property {string} [header]
 * @property {string} [package_header]
 * @property {string} [page_background]
 * @property {string} [hero_capsule]
 * @property {string} [hero_capsule_2x]
 * @property {string} [library_capsule]
 * @property {string} [library_capsule_2x]
 * @property {string} [library_hero]
 * @property {string} [library_hero_2x]
 */

/**
 * @typedef {object} Proto_StoreItem_BasicInfo
 * @property {string} [short_description]
 * @property {string[]} publishers
 * @property {string[]} developers
 * @property {string[]} franchises
 */

/**
 * @typedef {object} Proto_StoreItem_Categories
 * @property {number[]} supported_player_categoryids
 * @property {number[]} feature_categoryids
 * @property {number[]} controller_categoryids
 */

/**
 * @typedef {object} Proto_StoreItem_Platforms
 * @property {boolean} [windows]
 * @property {boolean} [mac]
 * @property {boolean} [linux]
 * @property {Proto_StoreItem_Platforms_VRSupport} [vr_support]
 */

/**
 * @typedef {object} Proto_StoreItem_Platforms_VRSupport
 * @property {boolean} [vrhmd]
 * @property {boolean} [vrhmd_only]
 * @property {boolean} [htc_vive]
 * @property {boolean} [oculus_rift]
 * @property {boolean} [windows_mr]
 * @property {boolean} [valve_index]
 */

/**
 * @typedef {object} Proto_StoreItem_PurchaseOption
 * @property {number} [packageid]
 * @property {number} [bundleid]
 * @property {string} [purchase_option_name]
 * @property {string} [final_price_in_cents]
 * @property {string} [original_price_in_cents]
 * @property {string} [user_final_price_in_cents]
 * @property {number} [discount_pct]
 * @property {number} [user_discount_pct]
 * @property {number} [bundle_discount_pct]
 * @property {Proto_StoreItem_PurchaseOption_Discount[]} active_discounts
 * @property {Proto_StoreItem_PurchaseOption_Discount[]} user_active_discounts
 * @property {Proto_StoreItem_PurchaseOption_Discount[]} inactive_discounts
 * @property {boolean} [user_can_purchase]
 * @property {boolean} [user_can_purchase_as_gift]
 * @property {boolean} [is_commercial_license]
 */

/**
 * @typedef {object} Proto_StoreItem_PurchaseOption_Discount
 * @property {string} [discount_amount]
 * @property {string} [discount_description]
 * @property {number} [discount_end_date]
 */

/**
 * @typedef {object} Proto_StoreItem_RelatedItems
 * @property {number} [parent_appid]
 */

/**
 * @typedef {object} Proto_StoreItem_ReleaseInfo
 * @property {number} [steam_release_date]
 * @property {number} [original_release_date]
 * @property {number} [original_steam_release_date]
 * @property {boolean} [is_coming_soon]
 * @property {boolean} [is_preload]
 * @property {string} [custom_release_date_message]
 * @property {boolean} [is_abridged_release_date]
 * @property {boolean} [is_early_access]
 * @property {number} [mac_release_date]
 * @property {number} [linux_release_date]
 */

/**
 * @typedef {object} Proto_StoreItem_Reviews
 * @property {Proto_StoreItem_Reviews_StoreReviewSummary} [summary_filtered]
 * @property {Proto_StoreItem_Reviews_StoreReviewSummary} [summary_unfiltered]
 */

/**
 * @typedef {object} Proto_StoreItem_Reviews_StoreReviewSummary
 * @property {number} [review_count]
 * @property {number} [percent_positive]
 * @property {number} [review_score]
 * @property {string} [review_score_label]
 */

/**
 * @typedef {object} Proto_StoreItem_Screenshots
 * @property {Proto_StoreItem_Screenshots_Screenshot[]} all_ages_screenshots
 * @property {Proto_StoreItem_Screenshots_Screenshot[]} mature_content_screenshots
 */

/**
 * @typedef {object} Proto_StoreItem_Screenshots_Screenshot
 * @property {string} [filename]
 * @property {number} [ordinal]
 */

/**
 * @typedef {object} Proto_StoreItem_Tag
 * @property {number} [tagid]
 * @property {number} [weight]
 */

/**
 * @typedef {object} Proto_StoreItem_Trailers
 * @property {Proto_StoreItem_Trailers_Trailer[]} highlights
 * @property {Proto_StoreItem_Trailers_Trailer[]} other_trailers
 */

/**
 * @typedef {object} Proto_StoreItem_Trailers_Trailer
 * @property {string} [trailer_name]
 * @property {string} [trailer_url_format]
 * @property {Proto_StoreItem_Trailers_VideoSource[]} trailer_480p
 * @property {Proto_StoreItem_Trailers_VideoSource[]} trailer_max
 * @property {Proto_StoreItem_Trailers_VideoSource[]} microtrailer
 * @property {string} [screenshot_medium]
 * @property {string} [screenshot_full]
 * @property {number} [trailer_base_id]
 */

/**
 * @typedef {object} Proto_StoreItem_Trailers_VideoSource
 * @property {string} [filename]
 * @property {string} [type]
 */

/**
 * @typedef {object} Proto_StoreItemID
 * @property {number} [appid]
 * @property {number} [packageid]
 * @property {number} [bundleid]
 */

/**
 * @typedef {object} Proto_NoResponse
 */

///////////////////////////////////////////////
// content_manifest.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_ContentManifestPayload
 * @property {Proto_ContentManifestPayload_FileMapping[]} mappings
 */

/**
 * @typedef {object} Proto_ContentManifestPayload_FileMapping
 * @property {string} [filename]
 * @property {string} [size]
 * @property {number} [flags]
 * @property {Buffer} [sha_filename]
 * @property {Buffer} [sha_content]
 * @property {Proto_ContentManifestPayload_FileMapping_ChunkData[]} chunks
 * @property {string} [linktarget]
 */

/**
 * @typedef {object} Proto_ContentManifestPayload_FileMapping_ChunkData
 * @property {Buffer} [sha]
 * @property {number} [crc]
 * @property {string} [offset]
 * @property {number} [cb_original]
 * @property {number} [cb_compressed]
 */

/**
 * @typedef {object} Proto_ContentManifestMetadata
 * @property {number} [depot_id]
 * @property {string} [gid_manifest]
 * @property {number} [creation_time]
 * @property {boolean} [filenames_encrypted]
 * @property {string} [cb_disk_original]
 * @property {string} [cb_disk_compressed]
 * @property {number} [unique_chunks]
 * @property {number} [crc_encrypted]
 * @property {number} [crc_clear]
 */

/**
 * @typedef {object} Proto_ContentManifestSignature
 * @property {Buffer} [signature]
 */

/**
 * @typedef {object} Proto_ContentDeltaChunks
 * @property {number} [depot_id]
 * @property {string} [manifest_id_source]
 * @property {string} [manifest_id_target]
 * @property {Proto_ContentDeltaChunks_DeltaChunk[]} deltaChunks
 * @property {EContentDeltaChunkDataLocation} [chunk_data_location]
 */

/**
 * @typedef {object} Proto_ContentDeltaChunks_DeltaChunk
 * @property {Buffer} [sha_source]
 * @property {Buffer} [sha_target]
 * @property {number} [size_original]
 * @property {number} [patch_method]
 * @property {Buffer} [chunk]
 * @property {number} [size_delta]
 */

///////////////////////////////////////////////
// encrypted_app_ticket.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_EncryptedAppTicket
 * @property {number} [ticket_version_no]
 * @property {number} [crc_encryptedticket]
 * @property {number} [cb_encrypteduserdata]
 * @property {number} [cb_encrypted_appownershipticket]
 * @property {Buffer} [encrypted_ticket]
 */

///////////////////////////////////////////////
// enums.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgIPAddressBucket
 * @property {Proto_CMsgIPAddress} [original_ip_address]
 * @property {string} [bucket]
 */

/**
 * @typedef {object} Proto_CMsgProtobufWrapped
 * @property {Buffer} [message_body]
 */

/**
 * @typedef {object} Proto_CCDDBAppDetailCommon
 * @property {number} [appid]
 * @property {string} [name]
 * @property {string} [icon]
 * @property {string} [logo]
 * @property {string} [logo_small]
 * @property {boolean} [tool]
 * @property {boolean} [demo]
 * @property {boolean} [media]
 * @property {boolean} [community_visible_stats]
 * @property {string} [friendly_name]
 * @property {string} [propagation]
 * @property {boolean} [has_adult_content]
 * @property {boolean} [is_visible_in_steam_china]
 */

/**
 * @typedef {object} Proto_CMsgAppRights
 * @property {boolean} [edit_info]
 * @property {boolean} [publish]
 * @property {boolean} [view_error_data]
 * @property {boolean} [download]
 * @property {boolean} [upload_cdkeys]
 * @property {boolean} [generate_cdkeys]
 * @property {boolean} [view_financials]
 * @property {boolean} [manage_ceg]
 * @property {boolean} [manage_signing]
 * @property {boolean} [manage_cdkeys]
 * @property {boolean} [edit_marketing]
 * @property {boolean} [economy_support]
 * @property {boolean} [economy_support_supervisor]
 * @property {boolean} [manage_pricing]
 * @property {boolean} [broadcast_live]
 * @property {boolean} [view_marketing_traffic]
 * @property {boolean} [edit_store_display_content]
 */

/**
 * @typedef {object} Proto_CCuratorPreferences
 * @property {number} [supported_languages]
 * @property {boolean} [platform_windows]
 * @property {boolean} [platform_mac]
 * @property {boolean} [platform_linux]
 * @property {boolean} [vr_content]
 * @property {boolean} [adult_content_violence]
 * @property {boolean} [adult_content_sex]
 * @property {number} [timestamp_updated]
 * @property {number[]} tagids_curated
 * @property {number[]} tagids_filtered
 * @property {string} [website_title]
 * @property {string} [website_url]
 * @property {string} [discussion_url]
 * @property {boolean} [show_broadcast]
 */

/**
 * @typedef {object} Proto_CLocalizationToken
 * @property {number} [language]
 * @property {string} [localized_string]
 */

/**
 * @typedef {object} Proto_CClanEventUserNewsTuple
 * @property {number} [clanid]
 * @property {string} [event_gid]
 * @property {string} [announcement_gid]
 * @property {number} [rtime_start]
 * @property {number} [rtime_end]
 * @property {number} [priority_score]
 * @property {number} [type]
 * @property {number} [clamp_range_slot]
 * @property {number} [appid]
 * @property {number} [rtime32_last_modified]
 */

/**
 * @typedef {object} Proto_CClanMatchEventByRange
 * @property {number} [rtime_before]
 * @property {number} [rtime_after]
 * @property {number} [qualified]
 * @property {Proto_CClanEventUserNewsTuple[]} events
 */

/**
 * @typedef {object} Proto_CCommunity_ClanAnnouncementInfo
 * @property {string} [gid]
 * @property {string} [clanid]
 * @property {string} [posterid]
 * @property {string} [headline]
 * @property {number} [posttime]
 * @property {number} [updatetime]
 * @property {string} [body]
 * @property {number} [commentcount]
 * @property {string[]} tags
 * @property {number} [language]
 * @property {boolean} [hidden]
 * @property {string} [forum_topic_id]
 * @property {string} [event_gid]
 * @property {number} [voteupcount]
 * @property {number} [votedowncount]
 */

/**
 * @typedef {object} Proto_CClanEventData
 * @property {string} [gid]
 * @property {string} [clan_steamid]
 * @property {string} [event_name]
 * @property {EProtoClanEventType} [event_type]
 * @property {number} [appid]
 * @property {string} [server_address]
 * @property {string} [server_password]
 * @property {number} [rtime32_start_time]
 * @property {number} [rtime32_end_time]
 * @property {number} [comment_count]
 * @property {string} [creator_steamid]
 * @property {string} [last_update_steamid]
 * @property {string} [event_notes]
 * @property {string} [jsondata]
 * @property {Proto_CCommunity_ClanAnnouncementInfo} [announcement_body]
 * @property {boolean} [published]
 * @property {boolean} [hidden]
 * @property {number} [rtime32_visibility_start]
 * @property {number} [rtime32_visibility_end]
 * @property {number} [broadcaster_accountid]
 * @property {number} [follower_count]
 * @property {number} [ignore_count]
 * @property {string} [forum_topic_id]
 * @property {number} [rtime32_last_modified]
 * @property {string} [news_post_gid]
 * @property {number} [rtime_mod_reviewed]
 * @property {number} [featured_app_tagid]
 * @property {number[]} referenced_appids
 * @property {number} [build_id]
 * @property {string} [build_branch]
 */

/**
 * @typedef {object} Proto_CBilling_Address
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [us_state]
 * @property {string} [country_code]
 * @property {string} [postcode]
 * @property {number} [zip_plus4]
 * @property {string} [phone]
 */

/**
 * @typedef {object} Proto_CPackageReservationStatus
 * @property {number} [packageid]
 * @property {number} [reservation_state]
 * @property {number} [queue_position]
 * @property {number} [total_queue_size]
 * @property {string} [reservation_country_code]
 * @property {boolean} [expired]
 * @property {number} [time_expires]
 * @property {number} [time_reserved]
 */

///////////////////////////////////////////////
// enums_clientserver.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// friends_mobile.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CHelpRequestLogs_UploadUserApplicationLog_Request
 * @property {number} [appid]
 * @property {string} [log_type]
 * @property {string} [version_string]
 * @property {string} [log_contents]
 */

/**
 * @typedef {object} Proto_CHelpRequestLogs_UploadUserApplicationLog_Response
 * @property {string} [id]
 */

/**
 * @typedef {object} Proto_CMsgClientAppMinutesPlayedData
 * @property {Proto_CMsgClientAppMinutesPlayedData_AppMinutesPlayedData[]} minutes_played
 */

/**
 * @typedef {object} Proto_CMsgClientAppMinutesPlayedData_AppMinutesPlayedData
 * @property {number} [app_id]
 * @property {number} [forever]
 * @property {number} [last_two_weeks]
 */

/**
 * @typedef {object} Proto_CCommunity_GetApps_Request
 * @property {number[]} appids
 * @property {number} [language]
 */

/**
 * @typedef {object} Proto_CCommunity_GetApps_Response
 * @property {Proto_CCDDBAppDetailCommon[]} apps
 */

/**
 * @typedef {object} Proto_CCommunity_GetAppRichPresenceLocalization_Request
 * @property {number} [appid]
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CCommunity_GetAppRichPresenceLocalization_Response
 * @property {number} [appid]
 * @property {Proto_CCommunity_GetAppRichPresenceLocalization_Response_TokenList[]} token_lists
 */

/**
 * @typedef {object} Proto_CCommunity_GetAppRichPresenceLocalization_Response_Token
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CCommunity_GetAppRichPresenceLocalization_Response_TokenList
 * @property {string} [language]
 * @property {Proto_CCommunity_GetAppRichPresenceLocalization_Response_Token[]} tokens
 */

/**
 * @typedef {object} Proto_CCommunity_GetCommentThread_Request
 * @property {string} [steamid]
 * @property {number} [comment_thread_type]
 * @property {string} [gidfeature]
 * @property {string} [gidfeature2]
 * @property {string} [commentthreadid]
 * @property {number} [start]
 * @property {number} [count]
 * @property {number} [upvoters]
 * @property {boolean} [include_deleted]
 * @property {string} [gidcomment]
 * @property {number} [time_oldest]
 * @property {boolean} [oldest_first]
 */

/**
 * @typedef {object} Proto_CCommunity_Comment
 * @property {string} [gidcomment]
 * @property {string} [steamid]
 * @property {number} [timestamp]
 * @property {string} [text]
 * @property {number} [upvotes]
 * @property {boolean} [hidden]
 * @property {boolean} [hidden_by_user]
 * @property {boolean} [deleted]
 * @property {Proto_CMsgIPAddress} [ipaddress]
 * @property {number} [total_hidden]
 * @property {boolean} [upvoted_by_user]
 */

/**
 * @typedef {object} Proto_CCommunity_GetCommentThread_Response
 * @property {Proto_CCommunity_Comment[]} comments
 * @property {Proto_CCommunity_Comment[]} deleted_comments
 * @property {string} [steamid]
 * @property {string} [commentthreadid]
 * @property {number} [start]
 * @property {number} [count]
 * @property {number} [total_count]
 * @property {number} [upvotes]
 * @property {number[]} upvoters
 * @property {boolean} [user_subscribed]
 * @property {boolean} [user_upvoted]
 * @property {string} [answer_commentid]
 * @property {number} [answer_actor]
 * @property {number} [answer_actor_rank]
 * @property {boolean} [can_post]
 */

/**
 * @typedef {object} Proto_CCommunity_PostCommentToThread_Request
 * @property {string} [steamid]
 * @property {number} [comment_thread_type]
 * @property {string} [gidfeature]
 * @property {string} [gidfeature2]
 * @property {string} [text]
 * @property {string} [gidparentcomment]
 * @property {boolean} [suppress_notifications]
 */

/**
 * @typedef {object} Proto_CCommunity_PostCommentToThread_Response
 * @property {string} [gidcomment]
 * @property {string} [commentthreadid]
 * @property {number} [count]
 * @property {number} [upvotes]
 */

/**
 * @typedef {object} Proto_CCommunity_DeleteCommentFromThread_Request
 * @property {string} [steamid]
 * @property {number} [comment_thread_type]
 * @property {string} [gidfeature]
 * @property {string} [gidfeature2]
 * @property {string} [gidcomment]
 * @property {boolean} [undelete]
 */

/**
 * @typedef {object} Proto_CCommunity_DeleteCommentFromThread_Response
 */

/**
 * @typedef {object} Proto_CCommunity_RateCommentThread_Request
 * @property {string} [commentthreadtype]
 * @property {string} [steamid]
 * @property {string} [gidfeature]
 * @property {string} [gidfeature2]
 * @property {string} [gidcomment]
 * @property {boolean} [rate_up]
 * @property {boolean} [suppress_notifications]
 */

/**
 * @typedef {object} Proto_CCommunity_RateCommentThread_Response
 * @property {string} [gidcomment]
 * @property {string} [commentthreadid]
 * @property {number} [count]
 * @property {number} [upvotes]
 * @property {boolean} [has_upvoted]
 */

/**
 * @typedef {object} Proto_CCommunity_GetCommentThreadRatings_Request
 * @property {string} [commentthreadtype]
 * @property {string} [steamid]
 * @property {string} [gidfeature]
 * @property {string} [gidfeature2]
 * @property {string} [gidcomment]
 * @property {number} [max_results]
 */

/**
 * @typedef {object} Proto_CCommunity_GetCommentThreadRatings_Response
 * @property {string} [commentthreadid]
 * @property {string} [gidcomment]
 * @property {number} [upvotes]
 * @property {boolean} [has_upvoted]
 * @property {number[]} upvoter_accountids
 */

/**
 * @typedef {object} Proto_CCommunity_RateClanAnnouncement_Request
 * @property {string} [announcementid]
 * @property {boolean} [vote_up]
 */

/**
 * @typedef {object} Proto_CCommunity_RateClanAnnouncement_Response
 */

/**
 * @typedef {object} Proto_CCommunity_GetClanAnnouncementVoteForUser_Request
 * @property {string} [announcementid]
 */

/**
 * @typedef {object} Proto_CCommunity_GetClanAnnouncementVoteForUser_Response
 * @property {boolean} [voted_up]
 * @property {boolean} [voted_down]
 */

/**
 * @typedef {object} Proto_CAppPriority
 * @property {number} [priority]
 * @property {number[]} appid
 */

/**
 * @typedef {object} Proto_CCommunity_GetUserPartnerEventNews_Request
 * @property {number} [count]
 * @property {number} [offset]
 * @property {number} [rtime32_start_time]
 * @property {number} [rtime32_end_time]
 * @property {number[]} language_preference
 * @property {number[]} filter_event_type
 * @property {boolean} [filter_to_appid]
 * @property {Proto_CAppPriority[]} app_list
 * @property {number} [count_after=0]
 * @property {number} [count_before=0]
 */

/**
 * @typedef {object} Proto_CCommunity_GetUserPartnerEventNews_Response
 * @property {Proto_CClanMatchEventByRange[]} results
 */

/**
 * @typedef {object} Proto_CCommunity_GetBestEventsForUser_Request
 * @property {boolean} [include_steam_blog]
 * @property {number} [filter_to_played_within_days]
 */

/**
 * @typedef {object} Proto_CCommunity_PartnerEventResult
 * @property {number} [clanid]
 * @property {string} [event_gid]
 * @property {string} [announcement_gid]
 * @property {number} [appid]
 * @property {boolean} [possible_takeover]
 * @property {number} [rtime32_last_modified=0]
 * @property {number} [user_app_priority]
 */

/**
 * @typedef {object} Proto_CCommunity_GetBestEventsForUser_Response
 * @property {Proto_CCommunity_PartnerEventResult[]} results
 */

/**
 * @typedef {object} Proto_CCommunity_ClearUserPartnerEventsAppPriorities_Request
 */

/**
 * @typedef {object} Proto_CCommunity_ClearUserPartnerEventsAppPriorities_Response
 */

/**
 * @typedef {object} Proto_CCommunity_PartnerEventsAppPriority
 * @property {number} [appid]
 * @property {number} [user_app_priority]
 */

/**
 * @typedef {object} Proto_CCommunity_GetUserPartnerEventsAppPriorities_Request
 */

/**
 * @typedef {object} Proto_CCommunity_GetUserPartnerEventsAppPriorities_Response
 * @property {Proto_CCommunity_PartnerEventsAppPriority[]} priorities
 */

/**
 * @typedef {object} Proto_CCommunity_ClearSinglePartnerEventsAppPriority_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CCommunity_ClearSinglePartnerEventsAppPriority_Response
 */

/**
 * @typedef {object} Proto_CCommunity_PartnerEventsShowMoreForApp_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CCommunity_PartnerEventsShowMoreForApp_Response
 */

/**
 * @typedef {object} Proto_CCommunity_PartnerEventsShowLessForApp_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CCommunity_PartnerEventsShowLessForApp_Response
 */

/**
 * @typedef {object} Proto_CCommunity_MarkPartnerEventsForUser_Request
 * @property {Proto_CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking[]} markings
 */

/**
 * @typedef {object} Proto_CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking
 * @property {number} [clanid]
 * @property {string} [event_gid]
 * @property {number} [display_location]
 * @property {boolean} [mark_shown]
 * @property {boolean} [mark_read]
 */

/**
 * @typedef {object} Proto_CCommunity_MarkPartnerEventsForUser_Response
 */

/**
 * @typedef {object} Proto_CFriendsListCategory
 * @property {number} [groupid]
 * @property {string} [name]
 * @property {number[]} accountid_members
 */

/**
 * @typedef {object} Proto_CFriendsList_GetCategories_Request
 */

/**
 * @typedef {object} Proto_CFriendsList_GetCategories_Response
 * @property {Proto_CFriendsListCategory[]} categories
 */

/**
 * @typedef {object} Proto_CFriendsListFavoriteEntry
 * @property {number} [accountid]
 * @property {number} [clanid]
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CFriendsList_GetFavorites_Request
 */

/**
 * @typedef {object} Proto_CFriendsList_GetFavorites_Response
 * @property {Proto_CFriendsListFavoriteEntry[]} favorites
 */

/**
 * @typedef {object} Proto_CFriendsList_SetFavorites_Request
 * @property {Proto_CFriendsListFavoriteEntry[]} favorites
 */

/**
 * @typedef {object} Proto_CFriendsList_SetFavorites_Response
 */

/**
 * @typedef {object} Proto_CFriendsList_FavoritesChanged_Notification
 * @property {Proto_CFriendsListFavoriteEntry[]} favorites
 */

/**
 * @typedef {object} Proto_CFriendsList_GetFriendsList_Request
 */

/**
 * @typedef {object} Proto_CFriendsList_GetFriendsList_Response
 * @property {Proto_CMsgClientFriendsList} [friendslist]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumerateUserPublishedFiles
 * @property {number} [app_id]
 * @property {number} [start_index]
 * @property {number} [sort_order]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumerateUserPublishedFilesResponse
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgClientUCMEnumerateUserPublishedFilesResponse_PublishedFileId[]} published_files
 * @property {number} [total_results]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumerateUserPublishedFilesResponse_PublishedFileId
 * @property {string} [published_file_id]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumerateUserSubscribedFiles
 * @property {number} [app_id]
 * @property {number} [start_index]
 * @property {number} [list_type=1]
 * @property {number} [matching_file_type=0]
 * @property {number} [count=50]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumerateUserSubscribedFilesResponse
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgClientUCMEnumerateUserSubscribedFilesResponse_PublishedFileId[]} subscribed_files
 * @property {number} [total_results]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumerateUserSubscribedFilesResponse_PublishedFileId
 * @property {string} [published_file_id]
 * @property {number} [rtime32_subscribed=0]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMPublishedFileDeleted
 * @property {string} [published_file_id]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CMsgClientWorkshopItemInfoRequest
 * @property {number} [app_id]
 * @property {number} [last_time_updated]
 * @property {Proto_CMsgClientWorkshopItemInfoRequest_WorkshopItem[]} workshop_items
 */

/**
 * @typedef {object} Proto_CMsgClientWorkshopItemInfoRequest_WorkshopItem
 * @property {string} [published_file_id]
 * @property {number} [time_updated]
 */

/**
 * @typedef {object} Proto_CMsgClientWorkshopItemInfoResponse
 * @property {EResult} [eresult=2]
 * @property {number} [update_time]
 * @property {Proto_CMsgClientWorkshopItemInfoResponse_WorkshopItemInfo[]} workshop_items
 * @property {string[]} private_items
 */

/**
 * @typedef {object} Proto_CMsgClientWorkshopItemInfoResponse_WorkshopItemInfo
 * @property {string} [published_file_id]
 * @property {number} [time_updated]
 * @property {string} [manifest_id]
 * @property {boolean} [is_legacy]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMGetPublishedFilesForUser
 * @property {number} [app_id]
 * @property {string} [creator_steam_id]
 * @property {string[]} required_tags
 * @property {string[]} excluded_tags
 * @property {number} [start_index]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMGetPublishedFilesForUserResponse
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgClientUCMGetPublishedFilesForUserResponse_PublishedFileId[]} published_files
 * @property {number} [total_results]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMGetPublishedFilesForUserResponse_PublishedFileId
 * @property {string} [published_file_id]
 */

/**
 * @typedef {object} Proto_CMsgCREEnumeratePublishedFiles
 * @property {number} [app_id]
 * @property {number} [query_type]
 * @property {number} [start_index]
 * @property {number} [days]
 * @property {number} [count]
 * @property {string[]} tags
 * @property {string[]} user_tags
 * @property {number} [matching_file_type=13]
 */

/**
 * @typedef {object} Proto_CMsgCREEnumeratePublishedFilesResponse
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgCREEnumeratePublishedFilesResponse_PublishedFileId[]} published_files
 * @property {number} [total_results]
 */

/**
 * @typedef {object} Proto_CMsgCREEnumeratePublishedFilesResponse_PublishedFileId
 * @property {string} [published_file_id]
 * @property {number} [votes_for]
 * @property {number} [votes_against]
 * @property {number} [reports]
 * @property {number} [score]
 */

/**
 * @typedef {object} Proto_CMsgGameServerPingSample
 * @property {number} [my_ip]
 * @property {number} [gs_app_id]
 * @property {Proto_CMsgGameServerPingSample_Sample[]} gs_samples
 */

/**
 * @typedef {object} Proto_CMsgGameServerPingSample_Sample
 * @property {number} [ip]
 * @property {number} [avg_ping_ms]
 * @property {number} [stddev_ping_ms_x10]
 */

/**
 * @typedef {object} Proto_CClan_RespondToClanInvite_Request
 * @property {string} [steamid]
 * @property {boolean} [accept]
 */

/**
 * @typedef {object} Proto_CClan_RespondToClanInvite_Response
 */

/**
 * @typedef {object} Proto_CVoiceChat_RequestOneOnOneChat_Request
 * @property {string} [steamid_partner]
 */

/**
 * @typedef {object} Proto_CVoiceChat_RequestOneOnOneChat_Response
 * @property {string} [voice_chatid]
 */

/**
 * @typedef {object} Proto_CVoiceChat_OneOnOneChatRequested_Notification
 * @property {string} [voice_chatid]
 * @property {string} [steamid_partner]
 */

/**
 * @typedef {object} Proto_CVoiceChat_AnswerOneOnOneChat_Request
 * @property {string} [voice_chatid]
 * @property {string} [steamid_partner]
 * @property {boolean} [accepted_request]
 */

/**
 * @typedef {object} Proto_CVoiceChat_AnswerOneOnOneChat_Response
 */

/**
 * @typedef {object} Proto_CVoiceChat_OneOnOneChatRequestResponse_Notification
 * @property {string} [voicechat_id]
 * @property {string} [steamid_partner]
 * @property {boolean} [accepted_request]
 */

/**
 * @typedef {object} Proto_CVoiceChat_EndOneOnOneChat_Request
 * @property {string} [steamid_partner]
 */

/**
 * @typedef {object} Proto_CVoiceChat_EndOneOnOneChat_Response
 */

/**
 * @typedef {object} Proto_CVoiceChat_LeaveOneOnOneChat_Request
 * @property {string} [steamid_partner]
 * @property {string} [voice_chatid]
 */

/**
 * @typedef {object} Proto_CVoiceChat_LeaveOneOnOneChat_Response
 */

/**
 * @typedef {object} Proto_CVoiceChat_UserJoinedVoiceChat_Notification
 * @property {string} [voice_chatid]
 * @property {string} [user_steamid]
 * @property {string} [chatid]
 * @property {string} [one_on_one_steamid_lower]
 * @property {string} [one_on_one_steamid_higher]
 * @property {string} [chat_group_id]
 * @property {number} [user_sessionid]
 */

/**
 * @typedef {object} Proto_CVoiceChat_UserVoiceStatus_Notification
 * @property {string} [voice_chatid]
 * @property {string} [user_steamid]
 * @property {boolean} [user_muted_mic_locally]
 * @property {boolean} [user_muted_output_locally]
 * @property {boolean} [user_has_no_mic_for_session]
 * @property {number} [user_webaudio_sample_rate]
 */

/**
 * @typedef {object} Proto_CVoiceChat_AllMembersStatus_Notification
 * @property {string} [voice_chatid]
 * @property {Proto_CVoiceChat_UserVoiceStatus_Notification[]} users
 */

/**
 * @typedef {object} Proto_CVoiceChat_UpdateVoiceChatWebRTCData_Request
 * @property {string} [voice_chatid]
 * @property {number} [ip_webrtc_server]
 * @property {number} [port_webrtc_server]
 * @property {number} [ip_webrtc_client]
 * @property {number} [port_webrtc_client]
 * @property {number} [ssrc_my_sending_stream]
 * @property {string} [user_agent]
 * @property {boolean} [has_audio_worklets_support]
 */

/**
 * @typedef {object} Proto_CVoiceChat_UpdateVoiceChatWebRTCData_Response
 * @property {boolean} [send_client_voice_logs]
 */

/**
 * @typedef {object} Proto_CVoiceChat_UploadClientVoiceChatLogs_Request
 * @property {string} [voice_chatid]
 * @property {string} [client_voice_logs_new_lines]
 */

/**
 * @typedef {object} Proto_CVoiceChat_UploadClientVoiceChatLogs_Response
 */

/**
 * @typedef {object} Proto_CVoiceChat_LeaveVoiceChat_Request
 * @property {string} [voice_chatid]
 */

/**
 * @typedef {object} Proto_CVoiceChat_LeaveVoiceChat_Response
 */

/**
 * @typedef {object} Proto_CVoiceChat_UserLeftVoiceChat_Notification
 * @property {string} [voice_chatid]
 * @property {string} [user_steamid]
 * @property {string} [chatid]
 * @property {string} [one_on_one_steamid_lower]
 * @property {string} [one_on_one_steamid_higher]
 * @property {string} [chat_group_id]
 * @property {number} [user_sessionid]
 */

/**
 * @typedef {object} Proto_CVoiceChat_VoiceChatEnded_Notification
 * @property {string} [voice_chatid]
 * @property {string} [one_on_one_steamid_lower]
 * @property {string} [one_on_one_steamid_higher]
 * @property {string} [chatid]
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CWebRTCClient_InitiateWebRTCConnection_Request
 * @property {string} [sdp]
 */

/**
 * @typedef {object} Proto_CWebRTCClient_InitiateWebRTCConnection_Response
 * @property {string} [remote_description]
 */

/**
 * @typedef {object} Proto_CWebRTC_WebRTCSessionConnected_Notification
 * @property {number} [ssrc]
 * @property {number} [client_ip]
 * @property {number} [client_port]
 * @property {number} [server_ip]
 * @property {number} [server_port]
 */

/**
 * @typedef {object} Proto_CWebRTC_WebRTCUpdateRemoteDescription_Notification
 * @property {string} [remote_description]
 * @property {string} [remote_description_version]
 * @property {Proto_CWebRTC_WebRTCUpdateRemoteDescription_Notification_CSSRCToAccountIDMapping[]} ssrcs_to_accountids
 */

/**
 * @typedef {object} Proto_CWebRTC_WebRTCUpdateRemoteDescription_Notification_CSSRCToAccountIDMapping
 * @property {number} [ssrc]
 * @property {number} [accountid]
 */

/**
 * @typedef {object} Proto_CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Request
 * @property {number} [ip_webrtc_server]
 * @property {number} [port_webrtc_server]
 * @property {number} [ip_webrtc_session_client]
 * @property {number} [port_webrtc_session_client]
 * @property {string} [remote_description_version]
 */

/**
 * @typedef {object} Proto_CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Response
 */

/**
 * @typedef {object} Proto_CMobilePerAccount_GetSettings_Request
 */

/**
 * @typedef {object} Proto_CMobilePerAccount_GetSettings_Response
 * @property {boolean} [has_settings]
 * @property {boolean} [allow_sale_push]
 * @property {boolean} [allow_wishlist_push]
 * @property {number} [chat_notification_level]
 * @property {boolean} [notify_direct_chat]
 * @property {boolean} [notify_group_chat]
 * @property {boolean} [allow_event_push=true]
 */

/**
 * @typedef {object} Proto_CMobilePerAccount_SetSettings_Request
 * @property {boolean} [allow_sale_push]
 * @property {boolean} [allow_wishlist_push]
 * @property {number} [chat_notification_level]
 * @property {boolean} [notify_direct_chat]
 * @property {boolean} [notify_group_chat]
 * @property {boolean} [allow_event_push=true]
 */

/**
 * @typedef {object} Proto_CMobilePerAccount_SetSettings_Response
 */

/**
 * @typedef {object} Proto_CMobileDevice_RegisterMobileDevice_Request
 * @property {string} [deviceid]
 * @property {string} [language]
 * @property {boolean} [push_enabled]
 * @property {string} [app_version]
 * @property {string} [os_version]
 * @property {string} [device_model]
 * @property {string} [twofactor_device_identifier]
 * @property {number} [mobile_app]
 */

/**
 * @typedef {object} Proto_CMobileDevice_RegisterMobileDevice_Response
 * @property {number} [unique_deviceid]
 */

/**
 * @typedef {object} Proto_CMobileDevice_DeregisterMobileDevice_Notification
 * @property {string} [deviceid]
 */

/**
 * @typedef {object} Proto_UnknownProto
 */

/**
 * @typedef {object} Proto_HelpRequestLogs
 */

/**
 * @typedef {object} Proto_Community
 */

/**
 * @typedef {object} Proto_ExperimentService
 */

/**
 * @typedef {object} Proto_FriendsList
 */

/**
 * @typedef {object} Proto_FriendsListClient
 */

/**
 * @typedef {object} Proto_Clan
 */

/**
 * @typedef {object} Proto_VoiceChat
 */

/**
 * @typedef {object} Proto_VoiceChatClient
 */

/**
 * @typedef {object} Proto_WebRTCClient
 */

/**
 * @typedef {object} Proto_WebRTCClientNotifications
 */

/**
 * @typedef {object} Proto_MobilePerAccount
 */

/**
 * @typedef {object} Proto_MobileDevice
 */

/**
 * @typedef {object} Proto_CMsgClientFriendMsg
 * @property {string} [steamid]
 * @property {number} [chat_entry_type]
 * @property {Buffer} [message]
 * @property {number} [rtime32_server_timestamp]
 * @property {boolean} [echo_to_sender]
 */

/**
 * @typedef {object} Proto_CMsgClientFriendMsgIncoming
 * @property {string} [steamid_from]
 * @property {number} [chat_entry_type]
 * @property {boolean} [from_limited_account]
 * @property {Buffer} [message]
 * @property {number} [rtime32_server_timestamp]
 */

/**
 * @typedef {object} Proto_CMsgClientAddFriend
 * @property {string} [steamid_to_add]
 * @property {string} [accountname_or_email_to_add]
 */

/**
 * @typedef {object} Proto_CMsgClientAddFriendResponse
 * @property {EResult} [eresult=2]
 * @property {string} [steam_id_added]
 * @property {string} [persona_name_added]
 */

/**
 * @typedef {object} Proto_CMsgClientRemoveFriend
 * @property {string} [friendid]
 */

/**
 * @typedef {object} Proto_CMsgClientHideFriend
 * @property {string} [friendid]
 * @property {boolean} [hide]
 */

/**
 * @typedef {object} Proto_CMsgClientFriendsList
 * @property {boolean} [bincremental]
 * @property {Proto_CMsgClientFriendsList_Friend[]} friends
 * @property {number} [max_friend_count]
 * @property {number} [active_friend_count]
 * @property {boolean} [friends_limit_hit]
 */

/**
 * @typedef {object} Proto_CMsgClientFriendsList_Friend
 * @property {string} [ulfriendid]
 * @property {number} [efriendrelationship]
 */

/**
 * @typedef {object} Proto_CMsgClientFriendsGroupsList
 * @property {boolean} [bremoval]
 * @property {boolean} [bincremental]
 * @property {Proto_CMsgClientFriendsGroupsList_FriendGroup[]} friendGroups
 * @property {Proto_CMsgClientFriendsGroupsList_FriendGroupsMembership[]} memberships
 */

/**
 * @typedef {object} Proto_CMsgClientFriendsGroupsList_FriendGroup
 * @property {number} [nGroupID]
 * @property {string} [strGroupName]
 */

/**
 * @typedef {object} Proto_CMsgClientFriendsGroupsList_FriendGroupsMembership
 * @property {string} [ulSteamID]
 * @property {number} [nGroupID]
 */

/**
 * @typedef {object} Proto_CMsgClientPlayerNicknameList
 * @property {boolean} [removal]
 * @property {boolean} [incremental]
 * @property {Proto_CMsgClientPlayerNicknameList_PlayerNickname[]} nicknames
 */

/**
 * @typedef {object} Proto_CMsgClientPlayerNicknameList_PlayerNickname
 * @property {string} [steamid]
 * @property {string} [nickname]
 */

/**
 * @typedef {object} Proto_CMsgClientSetPlayerNickname
 * @property {string} [steamid]
 * @property {string} [nickname]
 */

/**
 * @typedef {object} Proto_CMsgClientSetPlayerNicknameResponse
 * @property {EResult} [eresult]
 */

/**
 * @typedef {object} Proto_CMsgPersonaChangeResponse
 * @property {EResult} [result]
 * @property {string} [player_name]
 */

/**
 * @typedef {object} Proto_CMsgClientFriendProfileInfo
 * @property {string} [steamid_friend]
 */

/**
 * @typedef {object} Proto_CMsgClientFriendProfileInfoResponse
 * @property {EResult} [eresult=2]
 * @property {string} [steamid_friend]
 * @property {number} [time_created]
 * @property {string} [real_name]
 * @property {string} [city_name]
 * @property {string} [state_name]
 * @property {string} [country_name]
 * @property {string} [headline]
 * @property {string} [summary]
 */

///////////////////////////////////////////////
// htmlmessages.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgKeyUp
 * @property {number} [browser_handle]
 * @property {number} [keyCode]
 * @property {number} [modifiers]
 * @property {number} [nativeKeyCode]
 */

/**
 * @typedef {object} Proto_CMsgKeyDown
 * @property {number} [browser_handle]
 * @property {number} [keyCode]
 * @property {number} [modifiers]
 * @property {boolean} [is_system_key]
 * @property {number} [nativeKeyCode]
 */

/**
 * @typedef {object} Proto_CMsgKeyChar
 * @property {number} [browser_handle]
 * @property {number} [unichar]
 * @property {number} [modifiers]
 * @property {number} [keyCode]
 * @property {number} [nativeKeyCode]
 */

/**
 * @typedef {object} Proto_CMsgMouseDown
 * @property {number} [browser_handle]
 * @property {number} [mouse_button]
 * @property {number} [modifiers]
 */

/**
 * @typedef {object} Proto_CMsgMouseUp
 * @property {number} [browser_handle]
 * @property {number} [mouse_button]
 * @property {number} [modifiers]
 * @property {boolean} [is_off_panel]
 * @property {number} [x]
 * @property {number} [y]
 */

/**
 * @typedef {object} Proto_CMsgMouseDblClick
 * @property {number} [browser_handle]
 * @property {number} [mouse_button]
 * @property {number} [modifiers]
 */

/**
 * @typedef {object} Proto_CMsgMouseWheel
 * @property {number} [browser_handle]
 * @property {number} [deltax]
 * @property {number} [deltay]
 * @property {number} [modifiers]
 */

/**
 * @typedef {object} Proto_CMsgMouseMove
 * @property {number} [browser_handle]
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [modifiers]
 */

/**
 * @typedef {object} Proto_CMsgMouseLeave
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgBrowserCreate
 * @property {number} [request_id]
 * @property {string} [useragent]
 * @property {string} [user_css]
 * @property {boolean} [native_dropdowns]
 * @property {number} [dpi_scaling]
 * @property {boolean} [offscreen=true]
 * @property {number} [initial_width=0]
 * @property {number} [initial_height=0]
 * @property {string} [window_icon]
 * @property {boolean} [borderless=false]
 * @property {string} [vroverlay_key]
 * @property {number} [browser_type=0]
 * @property {number} [initial_top=-2147483648]
 * @property {number} [initial_left=-2147483648]
 * @property {boolean} [only_allow_trusted_popups=false]
 * @property {string} [initial_url]
 * @property {string} [hwnd_parent]
 * @property {number} [creation_flags=0]
 */

/**
 * @typedef {object} Proto_CMsgBrowserCreateResponse
 * @property {number} [browser_handle]
 * @property {number} [request_id]
 */

/**
 * @typedef {object} Proto_CMsgBrowserRemove
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgSetLocalFileRequestMapping
 * @property {number} [browser_handle]
 * @property {string} [request_url]
 * @property {string} [default_local_path]
 * @property {Proto_CMsgSetLocalFileRequestMapping_AdditionalRoute[]} routes
 */

/**
 * @typedef {object} Proto_CMsgSetLocalFileRequestMapping_AdditionalRoute
 * @property {string} [relative_url]
 * @property {string} [local_path]
 * @property {string} [allowed_extensions]
 */

/**
 * @typedef {object} Proto_CMsgBrowserErrorStrings
 * @property {number} [browser_handle]
 * @property {string} [title]
 * @property {string} [header]
 * @property {string} [cache_miss]
 * @property {string} [bad_url]
 * @property {string} [connection_problem]
 * @property {string} [proxy_problem]
 * @property {string} [unknown]
 */

/**
 * @typedef {object} Proto_CMsgBrowserSize
 * @property {number} [browser_handle]
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef {object} Proto_CMsgBrowserSetMinSize
 * @property {number} [browser_handle]
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef {object} Proto_CMsgBrowserPosition
 * @property {number} [browser_handle]
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [x_local]
 * @property {number} [y_local]
 */

/**
 * @typedef {object} Proto_CMsgBrowserResized
 * @property {number} [browser_handle]
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef {object} Proto_CMsgPostURL
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {string} [post]
 * @property {number} [pageserial]
 */

/**
 * @typedef {object} Proto_CMsgAddHeader
 * @property {number} [browser_handle]
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CMsgStopLoad
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgReload
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgGoForward
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgGoBack
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgWasHidden
 * @property {number} [browser_handle]
 * @property {boolean} [hidden]
 */

/**
 * @typedef {object} Proto_CMsgBrowserViewSetVisible
 * @property {number} [browser_handle]
 * @property {boolean} [visible]
 */

/**
 * @typedef {object} Proto_CMsgClearHistory
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgClearAllBrowsingData
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgCopy
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgPaste
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgExecuteJavaScript
 * @property {number} [browser_handle]
 * @property {string} [script]
 */

/**
 * @typedef {object} Proto_CMsgSetFocus
 * @property {number} [browser_handle]
 * @property {boolean} [focus]
 */

/**
 * @typedef {object} Proto_CMsgHorizontalScrollBarSize
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgHorizontalScrollBarSizeResponse
 * @property {number} [browser_handle]
 * @property {number} [scroll_max]
 * @property {number} [scroll]
 * @property {number} [zoom]
 * @property {boolean} [visible]
 * @property {number} [page_size]
 */

/**
 * @typedef {object} Proto_CMsgVerticalScrollBarSize
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgVerticalScrollBarSizeResponse
 * @property {number} [browser_handle]
 * @property {number} [scroll_max]
 * @property {number} [scroll]
 * @property {number} [zoom]
 * @property {boolean} [visible]
 * @property {number} [page_size]
 */

/**
 * @typedef {object} Proto_CMsgFind
 * @property {number} [browser_handle]
 * @property {string} [find]
 * @property {boolean} [infind]
 * @property {boolean} [reverse=false]
 */

/**
 * @typedef {object} Proto_CMsgStopFind
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgSetHorizontalScroll
 * @property {number} [browser_handle]
 * @property {number} [scroll]
 */

/**
 * @typedef {object} Proto_CMsgSetVerticalScroll
 * @property {number} [browser_handle]
 * @property {number} [scroll]
 */

/**
 * @typedef {object} Proto_CMsgSetZoomLevel
 * @property {number} [browser_handle]
 * @property {number} [zoom]
 */

/**
 * @typedef {object} Proto_CMsgViewSource
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgBrowserReady
 * @property {number} [browser_handle]
 * @property {string} [vr_overlay_key]
 * @property {string} [hwnd_browser]
 */

/**
 * @typedef {object} Proto_CMsgURLChanged
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {string} [postData]
 * @property {boolean} [bIsRedirect]
 * @property {string} [pagetitle]
 * @property {boolean} [bNewNavigation]
 */

/**
 * @typedef {object} Proto_CHTMLHeader
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CHTMLPageSecurityInfo
 * @property {boolean} [bIsSecure=false]
 * @property {boolean} [bHasCertError=false]
 * @property {string} [issuerName]
 * @property {string} [certName]
 * @property {number} [certExpiry=0]
 * @property {number} [nCertBits=0]
 * @property {boolean} [bIsEVCert=false]
 */

/**
 * @typedef {object} Proto_CMsgFinishedRequest
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {string} [pageTitle]
 */

/**
 * @typedef {object} Proto_CMsgLoadedRequest
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {string} [pageTitle]
 * @property {Proto_CHTMLHeader[]} headers
 */

/**
 * @typedef {object} Proto_CMsgPageSecurity
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {Proto_CHTMLPageSecurityInfo} [security_info]
 */

/**
 * @typedef {object} Proto_CMsgStartRequest
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {string} [target]
 * @property {string} [postData]
 * @property {boolean} [bIsRedirect]
 */

/**
 * @typedef {object} Proto_CMsgStartRequestResponse
 * @property {number} [browser_handle]
 * @property {boolean} [bAllow]
 */

/**
 * @typedef {object} Proto_CMsgShowPopup
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgHidePopup
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgSizePopup
 * @property {number} [browser_handle]
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [wide]
 * @property {number} [tall]
 */

/**
 * @typedef {object} Proto_CMsgOpenNewTab
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {boolean} [bForeground]
 */

/**
 * @typedef {object} Proto_CMsgPopupHTMLWindow
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {number} [x=-2147483648]
 * @property {number} [y=-2147483648]
 * @property {number} [wide]
 * @property {number} [tall]
 * @property {number} [popup_index]
 * @property {boolean} [trusted_creator]
 */

/**
 * @typedef {object} Proto_CMsgPopupHTMLWindowResponse
 * @property {number} [browser_handle]
 * @property {boolean} [bAllow]
 */

/**
 * @typedef {object} Proto_CMsgSetHTMLTitle
 * @property {number} [browser_handle]
 * @property {string} [title]
 */

/**
 * @typedef {object} Proto_CMsgLoadingResource
 * @property {number} [browser_handle]
 * @property {string} [url]
 */

/**
 * @typedef {object} Proto_CMsgStatusText
 * @property {number} [browser_handle]
 * @property {string} [text]
 */

/**
 * @typedef {object} Proto_CMsgSetCursor
 * @property {number} [browser_handle]
 * @property {number} [cursor]
 * @property {Buffer} [custom_data]
 * @property {number} [wide]
 * @property {number} [tall]
 * @property {number} [xhotspot]
 * @property {number} [yhotspot]
 */

/**
 * @typedef {object} Proto_CMsgFileLoadDialog
 * @property {number} [browser_handle]
 * @property {string} [title]
 * @property {string} [initialFile]
 * @property {string[]} accept_types
 * @property {boolean} [is_save]
 */

/**
 * @typedef {object} Proto_CMsgFileLoadDialogResponse
 * @property {number} [browser_handle]
 * @property {string[]} files
 */

/**
 * @typedef {object} Proto_CMsgShowToolTip
 * @property {number} [browser_handle]
 * @property {string} [text]
 */

/**
 * @typedef {object} Proto_CMsgUpdateToolTip
 * @property {number} [browser_handle]
 * @property {string} [text]
 */

/**
 * @typedef {object} Proto_CMsgHideToolTip
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgSearchResults
 * @property {number} [browser_handle]
 * @property {number} [activeMatch]
 * @property {number} [results]
 */

/**
 * @typedef {object} Proto_CMsgClose
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgSetSharedPaintBuffers
 * @property {number} [browser_handle]
 * @property {number} [wide]
 * @property {number} [tall]
 * @property {string} [source_pid]
 * @property {string} [source_handle]
 * @property {string} [handle]
 */

/**
 * @typedef {object} Proto_CMsgAckSharedPaintBuffers
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgNeedsPaint
 * @property {number} [browser_handle]
 * @property {number} [scrollx]
 * @property {number} [scrolly]
 * @property {number} [pagescale]
 * @property {number} [pageserial]
 * @property {number} [avg_frame_ms]
 * @property {number} [stddev_sum_frame_ms]
 * @property {number} [long_frame_ms]
 */

/**
 * @typedef {object} Proto_CMsgComboNeedsPaint
 * @property {number} [browser_handle]
 * @property {string} [rgba]
 * @property {number} [combobox_wide=0]
 * @property {number} [combobox_tall=0]
 * @property {string} [shared_memory_handle=0]
 * @property {string} [shared_memory_size=0]
 */

/**
 * @typedef {object} Proto_CMsgNeedsSharedTexturePaint
 * @property {number} [browser_handle]
 * @property {number} [share_handle]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [scrollx]
 * @property {number} [scrolly]
 * @property {number} [pagescale]
 * @property {number} [pageserial]
 */

/**
 * @typedef {object} Proto_CMsgGameOverlayTexturePaint
 * @property {number} [browser_handle]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [scrollx]
 * @property {number} [scrolly]
 * @property {number} [pagescale]
 * @property {number} [pageserial]
 */

/**
 * @typedef {object} Proto_CMsgGetZoom
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgGetZoomResponse
 * @property {number} [browser_handle]
 * @property {number} [zoom]
 */

/**
 * @typedef {object} Proto_CMsgLinkAtPosition
 * @property {number} [browser_handle]
 * @property {number} [x]
 * @property {number} [y]
 */

/**
 * @typedef {object} Proto_CMsgLinkAtPositionResponse
 * @property {number} [browser_handle]
 * @property {number} [x]
 * @property {number} [y]
 * @property {string} [url]
 * @property {boolean} [blivelink]
 * @property {boolean} [binput]
 */

/**
 * @typedef {object} Proto_CMsgZoomToElementAtPosition
 * @property {number} [browser_handle]
 * @property {number} [x]
 * @property {number} [y]
 */

/**
 * @typedef {object} Proto_CMsgZoomToElementAtPositionResponse
 * @property {number} [browser_handle]
 * @property {number} [scale]
 * @property {number} [duration]
 */

/**
 * @typedef {object} Proto_CMsgScalePageToValue
 * @property {number} [browser_handle]
 * @property {number} [scale]
 * @property {number} [x]
 * @property {number} [y]
 */

/**
 * @typedef {object} Proto_CMsgForcePopupsToDirectHWND
 * @property {number} [browser_handle]
 * @property {boolean} [force_direct_hwnd_popups]
 */

/**
 * @typedef {object} Proto_CMsgScalePageToValueResponse
 * @property {number} [browser_handle]
 * @property {number} [zoom]
 */

/**
 * @typedef {object} Proto_CMsgSavePageToJPEG
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {string} [filename]
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef {object} Proto_CMsgSavePageToJPEGResponse
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {string} [filename]
 */

/**
 * @typedef {object} Proto_CMsgJSAlert
 * @property {number} [browser_handle]
 * @property {string} [message]
 */

/**
 * @typedef {object} Proto_CMsgJSConfirm
 * @property {number} [browser_handle]
 * @property {string} [message]
 */

/**
 * @typedef {object} Proto_CMsgJSDialogResponse
 * @property {number} [browser_handle]
 * @property {boolean} [result]
 */

/**
 * @typedef {object} Proto_CMsgCanGoBackAndForward
 * @property {number} [browser_handle]
 * @property {boolean} [bgoback]
 * @property {boolean} [bgoforward]
 */

/**
 * @typedef {object} Proto_CMsgOpenSteamURL
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {string} [referrer]
 */

/**
 * @typedef {object} Proto_CMsgSetCookie
 * @property {string} [key]
 * @property {string} [value]
 * @property {string} [path]
 * @property {string} [host]
 * @property {number} [expires]
 * @property {boolean} [secure]
 * @property {boolean} [httponly]
 */

/**
 * @typedef {object} Proto_CMsgSetTargetFrameRate
 * @property {number} [browser_handle]
 * @property {number} [nTargetFrameRate]
 */

/**
 * @typedef {object} Proto_CMsgPauseRepaint
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgFullRepaint
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgRequestFullScreen
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgExitFullScreen
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgToggleFindInPageDialog
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgSetPIDShuttingDown
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgDisableBackgroundThrottling
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgAckPIDShuttingDown
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgGetCookiesForURL
 * @property {number} [browser_handle]
 * @property {string} [url]
 */

/**
 * @typedef {object} Proto_CCookie
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} [domain]
 * @property {string} [path]
 */

/**
 * @typedef {object} Proto_CMsgGetCookiesForURLResponse
 * @property {number} [browser_handle]
 * @property {string} [url]
 * @property {Proto_CCookie[]} cookies
 */

/**
 * @typedef {object} Proto_CMsgNodeHasFocus
 * @property {number} [browser_handle]
 * @property {boolean} [bInput]
 * @property {string} [name]
 * @property {string} [elementtagname]
 * @property {string} [searchbuttontext]
 * @property {boolean} [bHasMultipleInputs]
 * @property {string} [input_type]
 */

/**
 * @typedef {object} Proto_CMsgZoomToFocusedElement
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgCloseFullScreenFlashIfOpen
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgPauseFullScreenFlashMovieIfOpen
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgFocusedNodeText
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgFocusedNodeTextResponse
 * @property {number} [browser_handle]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CMsgBuildID
 * @property {string} [build_id]
 */

/**
 * @typedef {object} Proto_CMsgOpenDevTools
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgCloseDevTools
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgUnlockH264
 * @property {number} [browser_handle]
 * @property {string} [unlock_code]
 */

/**
 * @typedef {object} Proto_CMsgScreenInformationChanged
 * @property {number} [browser_handle]
 * @property {number} [override_width]
 * @property {number} [override_height]
 * @property {number} [monitor_left]
 * @property {number} [monitor_top]
 * @property {number} [monitor_right]
 * @property {number} [monitor_bottom]
 * @property {number} [usable_left]
 * @property {number} [usable_top]
 * @property {number} [usable_right]
 * @property {number} [usable_bottom]
 */

/**
 * @typedef {object} Proto_CMsgClearAllCookies
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgScreenDPI
 * @property {number} [browser_handle]
 * @property {number} [dpi_scaling]
 */

/**
 * @typedef {object} Proto_CMsgAuthedSteamDomains
 * @property {string[]} domains
 */

/**
 * @typedef {object} Proto_CMsgSteamAuthNeeded
 * @property {boolean} [filler]
 */

/**
 * @typedef {object} Proto_CMsgSteamAuthCookiesSet
 * @property {boolean} [success]
 */

/**
 * @typedef {object} Proto_CMsgJSRegisterMethod
 * @property {number} [browser_handle]
 * @property {string} [name]
 * @property {EJSRegisterMethodType} [method_type]
 */

/**
 * @typedef {object} Proto_CJSMethodArgument
 * @property {string} [json_data]
 * @property {string} [function_handle]
 */

/**
 * @typedef {object} Proto_CMsgJSValue
 * @property {boolean} [bool_value]
 * @property {number} [int_value]
 * @property {number} [uint_value]
 * @property {number} [double_value]
 * @property {string} [string_value]
 * @property {string} [function_handle]
 * @property {Buffer} [bytes_value]
 * @property {boolean} [is_array]
 * @property {Proto_CMsgJSValue[]} array_values
 * @property {boolean} [is_object]
 * @property {Proto_CMsgJSValue_JSObjectProperty[]} object_properties
 */

/**
 * @typedef {object} Proto_CMsgJSValue_JSObjectProperty
 * @property {string} [name]
 * @property {Proto_CMsgJSValue} [value]
 */

/**
 * @typedef {object} Proto_CMsgJSMethodCall
 * @property {number} [browser_handle]
 * @property {string} [name]
 * @property {Proto_CMsgJSValue[]} arguments
 */

/**
 * @typedef {object} Proto_CMsgJSExecuteCallback
 * @property {number} [browser_handle]
 * @property {string} [function_handle]
 * @property {Proto_CMsgJSValue[]} arguments
 */

/**
 * @typedef {object} Proto_CMsgJSReleaseCallback
 * @property {number} [browser_handle]
 * @property {string} [function_handle]
 */

/**
 * @typedef {object} Proto_CMsgJSRaiseException
 * @property {number} [browser_handle]
 * @property {string} [exception]
 */

/**
 * @typedef {object} Proto_CMsgLoadLocalization
 * @property {number} [browser_handle]
 * @property {string} [localization_path]
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CMsgJumpListLink
 * @property {string} [display_name]
 * @property {string} [url_link]
 * @property {string} [icon_path]
 */

/**
 * @typedef {object} Proto_CMSgJumpListMRUApp
 * @property {number} [appid]
 * @property {string} [display_name]
 * @property {string} [url_link]
 * @property {string} [icon_path]
 */

/**
 * @typedef {object} Proto_CMsgSetJumpList
 * @property {string} [steam_path]
 * @property {string} [mru_title]
 * @property {Proto_CMSgJumpListMRUApp[]} apps
 * @property {Proto_CMsgJumpListLink[]} links
 */

/**
 * @typedef {object} Proto_CMsgSetGameOverlayTargetPIDs
 * @property {number} [browser_handle]
 * @property {number[]} target_pid
 */

/**
 * @typedef {object} Proto_CMsgGameOverlayTargetTextureID
 * @property {number} [browser_handle]
 * @property {number} [target_pid]
 * @property {number} [texture_handle]
 */

/**
 * @typedef {object} Proto_CMsgDraggableRegionsChanged
 * @property {number} [browser_handle]
 * @property {Proto_CMsgDraggableRegionsChanged_DraggableRects[]} rects
 */

/**
 * @typedef {object} Proto_CMsgDraggableRegionsChanged_DraggableRects
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [width]
 * @property {number} [height]
 * @property {boolean} [draggable]
 */

/**
 * @typedef {object} Proto_CMsgResizeGripChanged
 * @property {number} [browser_handle]
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef {object} Proto_CMsgSetWindowPosition
 * @property {number} [browser_handle]
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [min_width]
 * @property {number} [min_height]
 */

/**
 * @typedef {object} Proto_CMsgShowWindow
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgHideWindow
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgBringWindowToFront
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgSetForegroundWindow
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgMaximizeRestoreWindow
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgMinimizeWindow
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgShowBrowserContextMenu
 * @property {number} [browser_handle]
 * @property {Proto_CMsgShowBrowserContextMenu_ContextCommand[]} custom_commands
 */

/**
 * @typedef {object} Proto_CMsgShowBrowserContextMenu_ContextCommand
 * @property {number} [id]
 * @property {string} [label]
 */

/**
 * @typedef {object} Proto_CMsgHandleContextMenuCommand
 * @property {number} [browser_handle]
 * @property {number} [command_id]
 */

/**
 * @typedef {object} Proto_CMsgTouchGesture
 * @property {number} [browser_handle]
 * @property {number} [id]
 * @property {number} [gesture]
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [tap_count]
 */

/**
 * @typedef {object} Proto_CMsgSetTouchGesturesToCancel
 * @property {number} [browser_handle]
 * @property {number[]} gestures
 */

/**
 * @typedef {object} Proto_CMsgImeSetComposition
 * @property {number} [browser_handle]
 * @property {string} [text]
 */

/**
 * @typedef {object} Proto_CMsgImeCommitText
 * @property {number} [browser_handle]
 * @property {string} [text]
 */

/**
 * @typedef {object} Proto_CMsgImeCancelComposition
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgImeCompositionRangeChanged
 * @property {number} [browser_handle]
 * @property {number} [x]
 * @property {number} [y]
 */

/**
 * @typedef {object} Proto_CMsgInspectElement
 * @property {number} [browser_handle]
 * @property {number} [x]
 * @property {number} [y]
 */

/**
 * @typedef {object} Proto_CMsgDisableF5
 * @property {number} [browser_handle]
 * @property {boolean} [disable]
 */

/**
 * @typedef {object} Proto_CMsgStartDownload
 * @property {number} [browser_handle]
 * @property {string} [url]
 */

/**
 * @typedef {object} Proto_CMsgSetTopWindow
 * @property {number} [browser_handle]
 */

/**
 * @typedef {object} Proto_CMsgBrowserViewPostMessageToParentRequest
 * @property {number} [browser_handle]
 * @property {string} [message]
 * @property {string} [args]
 * @property {string} [requesting_url]
 */

///////////////////////////////////////////////
// service_accountlinking.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CAccountLinking_GetLinkedAccountInfo_Response
 * @property {Proto_CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response[]} external_accounts
 */

/**
 * @typedef {object} Proto_CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response
 * @property {number} [external_type]
 * @property {string} [external_id]
 * @property {string} [external_user_name]
 * @property {string} [external_url]
 * @property {string} [access_token]
 * @property {string} [access_token_secret]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef {object} Proto_AccountLinking
 */

///////////////////////////////////////////////
// service_accountprivacy.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CAccountPrivacy_GetCookiePreferences_Request
 */

/**
 * @typedef {object} Proto_CAccountPrivacy_GetCookiePreferences_Response
 * @property {Proto_CAccountPrivacyCookiePreferences} [preferences]
 */

/**
 * @typedef {object} Proto_CAccountPrivacyCookiePreferences
 * @property {number} [version]
 * @property {number} [preference_state]
 * @property {Proto_CAccountPrivacyCookiePreferences_ContentCustomization} [content_customization]
 * @property {Proto_CAccountPrivacyCookiePreferences_ValveAnalytics} [valve_analytics]
 * @property {Proto_CAccountPrivacyCookiePreferences_ThirdPartyAnalytics} [third_party_analytics]
 * @property {Proto_CAccountPrivacyCookiePreferences_ThirdPartyContent} [third_party_content]
 * @property {boolean} [utm_enabled=true]
 */

/**
 * @typedef {object} Proto_CAccountPrivacyCookiePreferences_ContentCustomization
 * @property {boolean} [recentapps]
 */

/**
 * @typedef {object} Proto_CAccountPrivacyCookiePreferences_ValveAnalytics
 * @property {boolean} [product_impressions_tracking]
 */

/**
 * @typedef {object} Proto_CAccountPrivacyCookiePreferences_ThirdPartyAnalytics
 * @property {boolean} [google_analytics]
 */

/**
 * @typedef {object} Proto_CAccountPrivacyCookiePreferences_ThirdPartyContent
 * @property {boolean} [youtube]
 * @property {boolean} [vimeo]
 * @property {boolean} [sketchfab]
 * @property {boolean} [twitter]
 */

/**
 * @typedef {object} Proto_AccountPrivacy
 */

///////////////////////////////////////////////
// service_auction.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CAuction_PlaceBid_Response
 */

/**
 * @typedef {object} Proto_CAuction_CancelBid_Response
 * @property {string} [amount_returned]
 */

/**
 * @typedef {object} Proto_CAuction_GetBidsForUser_Response
 * @property {Proto_CAuction_Bid[]} bids
 */

/**
 * @typedef {object} Proto_CAuction_Bid
 * @property {number} [accountid]
 * @property {string} [auctiondescriptionid]
 * @property {number} [state]
 * @property {number} [time_created]
 * @property {number} [time_updated]
 * @property {string} [amount_bid]
 * @property {string} [amount_paid]
 * @property {string} [auctionbidid]
 */

/**
 * @typedef {object} Proto_CAuction_GetBidsForItem_Response
 * @property {Proto_CAuction_Item} [item]
 * @property {number} [count_total]
 * @property {number} [current_user_position]
 * @property {Proto_CAuction_Bid[]} winning_bids
 */

/**
 * @typedef {object} Proto_CAuction_Item
 * @property {string} [auctiondescriptionid]
 * @property {number} [time_start]
 * @property {number} [time_end]
 * @property {string} [amount_total]
 * @property {string} [amount_remaining]
 * @property {string} [highest_amount]
 * @property {number} [highest_bidder_accountid]
 * @property {number} [community_item_appid]
 * @property {number} [community_item_type]
 * @property {number} [store_appid]
 * @property {number[]} store_packageids
 * @property {string} [reserve_price]
 */

/**
 * @typedef {object} Proto_CAuction_GetUserBidForItem_Response
 * @property {Proto_CAuction_Bid} [bid]
 */

/**
 * @typedef {object} Proto_CAuction_GetItemDetails_Response
 * @property {Proto_CAuction_Item} [item]
 */

/**
 * @typedef {object} Proto_CAuction_GetAllItems_Response
 * @property {Proto_CAuction_Item[]} items
 */

/**
 * @typedef {object} Proto_Auction
 */

///////////////////////////////////////////////
// service_broadcast.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CBroadcast_BeginBroadcastSession_Response
 * @property {string} [broadcast_id]
 * @property {string} [thumbnail_upload_address]
 * @property {string} [thumbnail_upload_token]
 * @property {number} [thumbnail_interval_seconds]
 * @property {number} [heartbeat_interval_seconds]
 */

/**
 * @typedef {object} Proto_CBroadcast_EndBroadcastSession_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_StartBroadcastUpload_Response
 * @property {string} [upload_token]
 * @property {string} [upload_address]
 * @property {string} [broadcast_upload_id]
 * @property {boolean} [enable_replay]
 * @property {string} [http_address]
 */

/**
 * @typedef {object} Proto_CBroadcast_WatchBroadcast_Response
 * @property {number} [response]
 * @property {string} [mpd_url]
 * @property {string} [broadcast_id]
 * @property {string} [gameid]
 * @property {string} [title]
 * @property {number} [num_viewers]
 * @property {number} [permission]
 * @property {boolean} [is_rtmp]
 * @property {number} [seconds_delay]
 * @property {string} [viewer_token]
 * @property {string} [hls_m3u8_master_url]
 * @property {number} [heartbeat_interval]
 * @property {string} [thumbnail_url]
 * @property {boolean} [is_webrtc]
 * @property {string} [webrtc_session_id]
 * @property {string} [webrtc_offer_sdp]
 * @property {string} [webrtc_turn_server]
 * @property {boolean} [is_replay]
 * @property {number} [duration]
 * @property {string} [cdn_auth_url_parameters]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastStatus_Request
 * @property {string} [steamid]
 * @property {string} [broadcast_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastStatus_Response
 * @property {string} [gameid]
 * @property {string} [title]
 * @property {number} [num_viewers]
 * @property {number} [permission]
 * @property {boolean} [is_rtmp]
 * @property {number} [seconds_delay]
 * @property {boolean} [is_publisher]
 * @property {string} [thumbnail_url]
 * @property {number} [update_interval]
 * @property {boolean} [is_uploading]
 * @property {number} [duration]
 * @property {boolean} [is_replay]
 * @property {boolean} [is_capturing_vod]
 * @property {boolean} [is_store_whitelisted]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastThumbnail_Request
 * @property {string} [steamid]
 * @property {string} [broadcast_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastThumbnail_Response
 * @property {string} [thumbnail_url]
 * @property {number} [update_interval]
 * @property {number} [num_viewers]
 * @property {number} [duration]
 */

/**
 * @typedef {object} Proto_CBroadcast_InviteToBroadcast_Response
 * @property {boolean} [success]
 */

/**
 * @typedef {object} Proto_CBroadcast_SendBroadcastStateToServer_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastChatInfo_Response
 * @property {string} [chat_id]
 * @property {string} [view_url_template]
 * @property {number[]} flair_group_ids
 */

/**
 * @typedef {object} Proto_CBroadcast_PostChatMessage_Request
 * @property {string} [chat_id]
 * @property {string} [message]
 * @property {number} [instance_id]
 * @property {number} [language=0]
 * @property {string} [country_code]
 */

/**
 * @typedef {object} Proto_CBroadcast_PostChatMessage_Response
 * @property {string} [persona_name]
 * @property {boolean} [in_game]
 * @property {EResult} [result]
 * @property {number} [cooldown_time_seconds]
 */

/**
 * @typedef {object} Proto_CBroadcast_UpdateChatMessageFlair_Request
 * @property {string} [chat_id]
 * @property {string} [flair]
 */

/**
 * @typedef {object} Proto_CBroadcast_UpdateChatMessageFlair_Response
 * @property {EResult} [result]
 * @property {string} [chat_id]
 * @property {string} [flair]
 */

/**
 * @typedef {object} Proto_CBroadcast_MuteBroadcastChatUser_Request
 * @property {string} [chat_id]
 * @property {string} [user_steamid]
 * @property {boolean} [muted]
 */

/**
 * @typedef {object} Proto_CBroadcast_MuteBroadcastChatUser_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_RemoveUserChatText_Request
 * @property {string} [chat_id]
 * @property {string} [user_steamid]
 */

/**
 * @typedef {object} Proto_CBroadcast_RemoveUserChatText_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastChatUserNames_Response
 * @property {Proto_CBroadcast_GetBroadcastChatUserNames_Response_PersonaName[]} persona_names
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastChatUserNames_Response_PersonaName
 * @property {string} [steam_id]
 * @property {string} [persona]
 */

/**
 * @typedef {object} Proto_CBroadcast_StartBuildClip_Response
 * @property {string} [broadcast_clip_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBuildClipStatus_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_SetClipDetails_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_GetClipDetails_Response
 * @property {string} [broadcast_clip_id]
 * @property {string} [video_id]
 * @property {string} [channel_id]
 * @property {number} [app_id]
 * @property {number} [accountid_broadcaster]
 * @property {number} [accountid_clipmaker]
 * @property {string} [video_description]
 * @property {number} [start_time]
 * @property {number} [length_milliseconds]
 * @property {string} [thumbnail_path]
 */

/**
 * @typedef {object} Proto_CBroadcast_SetRTMPInfo_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_GetRTMPInfo_Response
 * @property {number} [broadcast_permission]
 * @property {string} [rtmp_host]
 * @property {string} [rtmp_token]
 * @property {number} [broadcast_delay]
 * @property {number} [app_id]
 * @property {number} [required_app_id]
 * @property {number} [broadcast_chat_permission]
 * @property {number} [broadcast_buffer]
 * @property {string} [steamid]
 * @property {number} [chat_rate_limit]
 * @property {boolean} [enable_replay]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCStartResult_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCStopped_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCSetAnswer_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCLookupTURNServer_Response
 * @property {string} [turn_server]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCAddHostCandidate_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCAddViewerCandidate_Response
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCGetHostCandidates_Response
 * @property {number} [candidate_generation]
 * @property {Proto_CBroadcast_WebRTC_Candidate[]} candidates
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTC_Candidate
 * @property {string} [sdp_mid]
 * @property {number} [sdp_mline_index]
 * @property {string} [candidate]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastUploadStats_Response
 * @property {Proto_CBroadcast_GetBroadcastUploadStats_Response_UploadStats[]} upload_stats
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastUploadStats_Response_UploadStats
 * @property {number} [upload_result]
 * @property {number} [time_stopped]
 * @property {number} [seconds_uploaded]
 * @property {number} [max_viewers]
 * @property {number} [resolution_x]
 * @property {number} [resolution_y]
 * @property {number} [avg_bandwidth]
 * @property {string} [total_bytes]
 * @property {number} [app_id]
 * @property {number} [total_unique_viewers]
 * @property {string} [total_seconds_watched]
 * @property {number} [time_started]
 * @property {string} [upload_id]
 * @property {string} [local_address]
 * @property {string} [remote_address]
 * @property {number} [frames_per_second]
 * @property {number} [num_representations]
 * @property {string} [app_name]
 * @property {boolean} [is_replay]
 * @property {string} [session_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastViewerStats_Response
 * @property {Proto_CBroadcast_GetBroadcastViewerStats_Response_ViewerStats[]} viewer_stats
 * @property {Proto_CBroadcast_GetBroadcastViewerStats_Response_CountryStats[]} country_stats
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastViewerStats_Response_ViewerStats
 * @property {number} [time]
 * @property {number} [num_viewers]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastViewerStats_Response_CountryStats
 * @property {string} [country_code]
 * @property {number} [num_viewers]
 */

/**
 * @typedef {object} Proto_CBroadcast_BroadcastViewerState_Notification
 * @property {string} [steamid]
 * @property {number} [state]
 */

/**
 * @typedef {object} Proto_CBroadcast_WaitingBroadcastViewer_Notification
 * @property {string} [broadcast_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_BroadcastUploadStarted_Notification
 * @property {string} [broadcast_id]
 * @property {string} [upload_token]
 * @property {string} [upload_address]
 * @property {string} [http_address]
 * @property {string} [broadcast_upload_id]
 * @property {number} [heartbeat_interval_seconds]
 * @property {boolean} [is_rtmp]
 */

/**
 * @typedef {object} Proto_CBroadcast_StopBroadcastUpload_Notification
 * @property {string} [broadcast_id]
 * @property {string} [broadcast_relay_id]
 * @property {number} [upload_result]
 * @property {boolean} [too_many_poor_uploads]
 */

/**
 * @typedef {object} Proto_CBroadcast_SessionClosed_Notification
 * @property {string} [broadcast_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_ViewerBroadcastInvite_Notification
 * @property {string} [broadcaster_steamid]
 */

/**
 * @typedef {object} Proto_CBroadcast_BroadcastStatus_Notification
 * @property {string} [broadcast_id]
 * @property {number} [num_viewers]
 */

/**
 * @typedef {object} Proto_CBroadcast_BroadcastChannelLive_Notification
 * @property {string} [broadcast_channel_id]
 * @property {string} [broadcast_channel_name]
 * @property {string} [broadcast_channel_avatar]
 */

/**
 * @typedef {object} Proto_CBroadcast_SendThumbnailToRelay_Notification
 * @property {string} [thumbnail_upload_token]
 * @property {string} [thumbnail_broadcast_session_id]
 * @property {Buffer} [thumbnail_data]
 * @property {number} [thumbnail_width]
 * @property {number} [thumbnail_height]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCNeedTURNServer_Notification
 * @property {string} [broadcast_session_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCStart_Notification
 * @property {string} [broadcast_session_id]
 * @property {string} [webrtc_session_id]
 * @property {string} [viewer_steamid]
 * @property {string} [viewer_token]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCSetAnswer_Notification
 * @property {string} [broadcast_session_id]
 * @property {string} [webrtc_session_id]
 * @property {string} [answer]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCAddViewerCandidate_Notification
 * @property {string} [broadcast_session_id]
 * @property {string} [webrtc_session_id]
 * @property {Proto_CBroadcast_WebRTC_Candidate} [candidate]
 */

/**
 * @typedef {object} Proto_Broadcast
 */

/**
 * @typedef {object} Proto_BroadcastClient
 */

///////////////////////////////////////////////
// service_chat.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CChat_RequestFriendPersonaStates_Request
 */

/**
 * @typedef {object} Proto_CChat_RequestFriendPersonaStates_Response
 */

/**
 * @typedef {object} Proto_Chat
 */

///////////////////////////////////////////////
// service_chatroom.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CChatRoom_CreateChatRoomGroup_Request
 * @property {string} [steamid_partner]
 * @property {string} [steamid_invited]
 * @property {string} [name]
 * @property {string[]} steamid_invitees
 * @property {number} [watching_broadcast_accountid]
 * @property {string} [watching_broadcast_channel_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_CreateChatRoomGroup_Response
 * @property {string} [chat_group_id]
 * @property {Proto_CChatRoomGroupState} [state]
 * @property {Proto_CUserChatRoomGroupState} [user_chat_state]
 */

/**
 * @typedef {object} Proto_CChatRoomGroupState
 * @property {Proto_CChatRoomGroupHeaderState} [header_state]
 * @property {Proto_CChatRoomMember[]} members
 * @property {string} [default_chat_id]
 * @property {Proto_CChatRoomState[]} chat_rooms
 * @property {Proto_CChatRoomMember[]} kicked
 */

/**
 * @typedef {object} Proto_CChatRoomGroupHeaderState
 * @property {string} [chat_group_id]
 * @property {string} [chat_name]
 * @property {number} [clanid]
 * @property {number} [accountid_owner]
 * @property {number} [appid]
 * @property {string} [tagline]
 * @property {Buffer} [avatar_sha]
 * @property {string} [default_role_id]
 * @property {Proto_CChatRole[]} roles
 * @property {Proto_CChatRoleActions[]} role_actions
 * @property {number} [watching_broadcast_accountid]
 * @property {Proto_CChatPartyBeacon[]} party_beacons
 * @property {string} [watching_broadcast_channel_id]
 * @property {string} [active_minigame_id]
 * @property {string} [avatar_ugc_url]
 * @property {boolean} [disabled]
 */

/**
 * @typedef {object} Proto_CChatRole
 * @property {string} [role_id]
 * @property {string} [name]
 * @property {number} [ordinal]
 */

/**
 * @typedef {object} Proto_CChatRoomMember
 * @property {number} [accountid]
 * @property {number} [state]
 * @property {number} [rank]
 * @property {number} [time_kick_expire]
 * @property {string[]} role_ids
 */

/**
 * @typedef {object} Proto_CUserChatRoomGroupState
 * @property {string} [chat_group_id]
 * @property {number} [time_joined]
 * @property {Proto_CUserChatRoomState[]} user_chat_room_state
 * @property {number} [desktop_notification_level=0]
 * @property {number} [mobile_notification_level=0]
 * @property {number} [time_last_group_ack]
 * @property {boolean} [unread_indicator_muted=false]
 */

/**
 * @typedef {object} Proto_CUserChatRoomState
 * @property {string} [chat_id]
 * @property {number} [time_joined]
 * @property {number} [time_last_ack]
 * @property {number} [desktop_notification_level=0]
 * @property {number} [mobile_notification_level=0]
 * @property {number} [time_last_mention]
 * @property {boolean} [unread_indicator_muted=false]
 * @property {number} [time_first_unread]
 */

/**
 * @typedef {object} Proto_CChatRoom_SaveChatRoomGroup_Request
 * @property {string} [chat_group_id]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CChatRoom_SaveChatRoomGroup_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_RenameChatRoomGroup_Request
 * @property {string} [chat_group_id]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CChatRoom_RenameChatRoomGroup_Response
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetChatRoomGroupTagline_Request
 * @property {string} [chat_group_id]
 * @property {string} [tagline]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetChatRoomGroupTagline_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_SetChatRoomGroupAvatar_Request
 * @property {string} [chat_group_id]
 * @property {Buffer} [avatar_sha]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetChatRoomGroupAvatar_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_SetChatRoomGroupWatchingBroadcast_Request
 * @property {string} [chat_group_id]
 * @property {number} [watching_broadcast_accountid]
 * @property {string} [watching_broadcast_channel_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetChatRoomGroupWatchingBroadcast_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_JoinMiniGameForChatRoomGroup_Response
 * @property {string} [minigame_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_EndMiniGameForChatRoomGroup_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_MuteUser_Request
 * @property {string} [chat_group_id]
 * @property {string} [steamid]
 * @property {number} [expiration]
 */

/**
 * @typedef {object} Proto_CChatRoom_MuteUser_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_KickUser_Request
 * @property {string} [chat_group_id]
 * @property {string} [steamid]
 * @property {number} [expiration]
 */

/**
 * @typedef {object} Proto_CChatRoom_KickUser_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_SetUserBanState_Request
 * @property {string} [chat_group_id]
 * @property {string} [steamid]
 * @property {boolean} [ban_state]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetUserBanState_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_RevokeInvite_Request
 * @property {string} [chat_group_id]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CChatRoom_RevokeInvite_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_CreateRole_Request
 * @property {string} [chat_group_id]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CChatRoom_CreateRole_Response
 * @property {Proto_CChatRoleActions} [actions]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetRoles_Response
 * @property {Proto_CChatRole[]} roles
 */

/**
 * @typedef {object} Proto_CChatRoom_RenameRole_Request
 * @property {string} [chat_group_id]
 * @property {string} [role_id]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CChatRoom_RenameRole_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_ReorderRole_Request
 * @property {string} [chat_group_id]
 * @property {string} [role_id]
 * @property {number} [ordinal]
 */

/**
 * @typedef {object} Proto_CChatRoom_ReorderRole_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteRole_Request
 * @property {string} [chat_group_id]
 * @property {string} [role_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteRole_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_GetRoleActions_Response
 * @property {Proto_CChatRoleActions[]} actions
 */

/**
 * @typedef {object} Proto_CChatRoom_ReplaceRoleActions_Request
 * @property {string} [chat_group_id]
 * @property {string} [role_id]
 * @property {Proto_CChatRoleActions} [actions]
 */

/**
 * @typedef {object} Proto_CChatRoom_ReplaceRoleActions_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_AddRoleToUser_Request
 * @property {string} [chat_group_id]
 * @property {string} [role_id]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CChatRoom_AddRoleToUser_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_GetRolesForUser_Response
 * @property {string[]} role_ids
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteRoleFromUser_Request
 * @property {string} [chat_group_id]
 * @property {string} [role_id]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteRoleFromUser_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_JoinChatRoomGroup_Request
 * @property {string} [chat_group_id]
 * @property {string} [invite_code]
 * @property {string} [chat_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_JoinChatRoomGroup_Response
 * @property {Proto_CChatRoomGroupState} [state]
 * @property {Proto_CUserChatRoomGroupState} [user_chat_state]
 * @property {string} [join_chat_id]
 * @property {number} [time_expire]
 */

/**
 * @typedef {object} Proto_CChatRoom_InviteFriendToChatRoomGroup_Request
 * @property {string} [chat_group_id]
 * @property {string} [steamid]
 * @property {string} [chat_id]
 * @property {boolean} [skip_friendsui_check]
 */

/**
 * @typedef {object} Proto_CChatRoom_InviteFriendToChatRoomGroup_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_LeaveChatRoomGroup_Request
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_LeaveChatRoomGroup_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_CreateChatRoom_Request
 * @property {string} [chat_group_id]
 * @property {string} [name]
 * @property {boolean} [allow_voice]
 */

/**
 * @typedef {object} Proto_CChatRoom_CreateChatRoom_Response
 * @property {Proto_CChatRoomState} [chat_room]
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteChatRoom_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteChatRoom_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_RenameChatRoom_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CChatRoom_RenameChatRoom_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_ReorderChatRoom_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {string} [move_after_chat_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_ReorderChatRoom_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_SendChatMessage_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {string} [message]
 * @property {boolean} [echo_to_sender]
 */

/**
 * @typedef {object} Proto_CChatRoom_SendChatMessage_Response
 * @property {string} [modified_message]
 * @property {number} [server_timestamp]
 * @property {number} [ordinal]
 * @property {string} [message_without_bb_code]
 */

/**
 * @typedef {object} Proto_CChatRoom_JoinVoiceChat_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_JoinVoiceChat_Response
 * @property {string} [voice_chatid]
 */

/**
 * @typedef {object} Proto_CChatRoom_LeaveVoiceChat_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_LeaveVoiceChat_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_GetMessageHistory_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {number} [last_time]
 * @property {number} [last_ordinal]
 * @property {number} [start_time]
 * @property {number} [start_ordinal]
 * @property {number} [max_count]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetMessageHistory_Response
 * @property {Proto_CChatRoom_GetMessageHistory_Response_ChatMessage[]} messages
 * @property {boolean} [more_available]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetMessageHistory_Response_ChatMessage
 * @property {number} [sender]
 * @property {number} [server_timestamp]
 * @property {string} [message]
 * @property {number} [ordinal]
 * @property {Proto_ServerMessage} [server_message]
 * @property {boolean} [deleted]
 * @property {Proto_CChatRoom_GetMessageHistory_Response_ChatMessage_MessageReaction[]} reactions
 */

/**
 * @typedef {object} Proto_ServerMessage
 * @property {number} [message]
 * @property {string} [string_param]
 * @property {number} [accountid_param]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetMessageHistory_Response_ChatMessage_MessageReaction
 * @property {number} [reaction_type]
 * @property {string} [reaction]
 * @property {number} [num_reactors]
 * @property {boolean} [has_user_reacted]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetMyChatRoomGroups_Request
 */

/**
 * @typedef {object} Proto_CChatRoom_GetMyChatRoomGroups_Response
 * @property {Proto_CChatRoomSummaryPair[]} chat_room_groups
 */

/**
 * @typedef {object} Proto_CChatRoomSummaryPair
 * @property {Proto_CUserChatRoomGroupState} [user_chat_group_state]
 * @property {Proto_CChatRoom_GetChatRoomGroupSummary_Response} [group_summary]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetChatRoomGroupState_Response
 * @property {Proto_CChatRoomGroupState} [state]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetAppChatRoomGroupForceActive_Response
 * @property {EResult} [result]
 * @property {number[]} accounts_in_channel
 */

/**
 * @typedef {object} Proto_CChatRoom_AckChatMessage_Notification
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {number} [timestamp]
 */

/**
 * @typedef {object} Proto_CChatRoom_CreateInviteLink_Request
 * @property {string} [chat_group_id]
 * @property {number} [seconds_valid]
 * @property {string} [chat_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_CreateInviteLink_Response
 * @property {string} [invite_code]
 * @property {number} [seconds_valid]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetInviteLinkInfo_Request
 * @property {string} [invite_code]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetInviteLinkInfo_Response
 * @property {string} [steamid_sender]
 * @property {number} [time_expires]
 * @property {string} [chat_id]
 * @property {Proto_CChatRoom_GetChatRoomGroupSummary_Response} [group_summary]
 * @property {Proto_CUserChatRoomGroupState} [user_chat_group_state]
 * @property {number} [time_kick_expire]
 * @property {boolean} [banned]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetInviteInfo_Request
 * @property {string} [steamid_invitee]
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {string} [invite_code]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetInviteInfo_Response
 * @property {Proto_CChatRoom_GetChatRoomGroupSummary_Response} [group_summary]
 * @property {number} [time_kick_expire]
 * @property {boolean} [banned]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetInviteLinksForGroup_Request
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetInviteLinksForGroup_Response
 * @property {Proto_CChatRoom_GetInviteLinksForGroup_Response_LinkInfo[]} invite_links
 */

/**
 * @typedef {object} Proto_CChatRoom_GetInviteLinksForGroup_Response_LinkInfo
 * @property {string} [invite_code]
 * @property {string} [steamid_creator]
 * @property {number} [time_expires]
 * @property {string} [chat_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetBanList_Request
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetBanList_Response
 * @property {Proto_CChatRoom_GetBanList_Response_BanInfo[]} bans
 */

/**
 * @typedef {object} Proto_CChatRoom_GetBanList_Response_BanInfo
 * @property {number} [accountid]
 * @property {number} [accountid_actor]
 * @property {number} [time_banned]
 * @property {string} [ban_reason]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetInviteList_Request
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetInviteList_Response
 * @property {Proto_CChatRoomGroupInvite[]} invites
 */

/**
 * @typedef {object} Proto_CChatRoomGroupInvite
 * @property {number} [accountid]
 * @property {number} [accountid_actor]
 * @property {number} [time_invited]
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteInviteLink_Request
 * @property {string} [chat_group_id]
 * @property {string} [invite_code]
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteInviteLink_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_SetSessionActiveChatRoomGroups_Request
 * @property {string[]} chat_group_ids
 * @property {string[]} chat_groups_data_requested
 * @property {number} [virtualize_members_threshold]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetSessionActiveChatRoomGroups_Response
 * @property {Proto_CChatRoomGroupState[]} chat_states
 * @property {string[]} virtualize_members_chat_group_ids
 */

/**
 * @typedef {object} Proto_CChatRoom_SetUserChatGroupPreferences_Request
 * @property {string} [chat_group_id]
 * @property {Proto_CChatRoom_SetUserChatGroupPreferences_Request_ChatGroupPreferences} [chat_group_preferences]
 * @property {Proto_CChatRoom_SetUserChatGroupPreferences_Request_ChatRoomPreferences[]} chat_room_preferences
 */

/**
 * @typedef {object} Proto_CChatRoom_SetUserChatGroupPreferences_Request_ChatGroupPreferences
 * @property {number} [desktop_notification_level]
 * @property {number} [mobile_notification_level]
 * @property {boolean} [unread_indicator_muted]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetUserChatGroupPreferences_Request_ChatRoomPreferences
 * @property {string} [chat_id]
 * @property {number} [desktop_notification_level]
 * @property {number} [mobile_notification_level]
 * @property {boolean} [unread_indicator_muted]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetUserChatGroupPreferences_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteChatMessages_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {Proto_CChatRoom_DeleteChatMessages_Request_Message[]} messages
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteChatMessages_Request_Message
 * @property {number} [server_timestamp]
 * @property {number} [ordinal]
 */

/**
 * @typedef {object} Proto_CChatRoom_DeleteChatMessages_Response
 */

/**
 * @typedef {object} Proto_CChatRoom_UpdateMemberListView_Notification
 * @property {string} [chat_group_id]
 * @property {string} [view_id]
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [client_changenumber]
 * @property {boolean} [delete_view]
 * @property {number[]} persona_subscribe_accountids
 * @property {number[]} persona_unsubscribe_accountids
 */

/**
 * @typedef {object} Proto_CChatRoom_SearchMembers_Request
 * @property {string} [chat_group_id]
 * @property {string} [search_id]
 * @property {string} [search_text]
 * @property {number} [max_results]
 */

/**
 * @typedef {object} Proto_CChatRoom_SearchMembers_Response
 * @property {Proto_CChatRoom_SearchMembers_Response_MemberMatch[]} matching_members
 * @property {number} [status_flags]
 */

/**
 * @typedef {object} Proto_CChatRoom_SearchMembers_Response_MemberMatch
 * @property {number} [accountid]
 * @property {Proto_CMsgClientPersonaState_Friend} [persona]
 */

/**
 * @typedef {object} Proto_CChatRoom_UpdateMessageReaction_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {number} [server_timestamp]
 * @property {number} [ordinal]
 * @property {number} [reaction_type]
 * @property {string} [reaction]
 * @property {boolean} [is_add]
 */

/**
 * @typedef {object} Proto_CChatRoom_UpdateMessageReaction_Response
 * @property {number} [num_reactors]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetMessageReactionReactors_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {number} [server_timestamp]
 * @property {number} [ordinal]
 * @property {number} [reaction_type]
 * @property {string} [reaction]
 * @property {number} [limit]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetMessageReactionReactors_Response
 * @property {number[]} reactors
 */

/**
 * @typedef {object} Proto_CChatRoom_IncomingChatMessage_Notification
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {string} [steamid_sender]
 * @property {string} [message]
 * @property {number} [timestamp]
 * @property {Proto_CChatMentions} [mentions]
 * @property {number} [ordinal]
 * @property {Proto_ServerMessage} [server_message]
 * @property {string} [message_no_bbcode]
 * @property {string} [chat_name]
 */

/**
 * @typedef {object} Proto_CChatMentions
 * @property {boolean} [mention_all]
 * @property {boolean} [mention_here]
 * @property {number[]} mention_accountids
 */

/**
 * @typedef {object} Proto_CChatRoom_ChatMessageModified_Notification
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {Proto_CChatRoom_ChatMessageModified_Notification_ChatMessage[]} messages
 */

/**
 * @typedef {object} Proto_CChatRoom_ChatMessageModified_Notification_ChatMessage
 * @property {number} [server_timestamp]
 * @property {number} [ordinal]
 * @property {boolean} [deleted]
 */

/**
 * @typedef {object} Proto_CChatRoom_MemberStateChange_Notification
 * @property {string} [chat_group_id]
 * @property {Proto_CChatRoomMember} [member]
 * @property {number} [change]
 */

/**
 * @typedef {object} Proto_CChatRoom_ChatRoomHeaderState_Notification
 * @property {Proto_CChatRoomGroupHeaderState} [header_state]
 */

/**
 * @typedef {object} Proto_CChatRoom_ChatRoomGroupRoomsChange_Notification
 * @property {string} [chat_group_id]
 * @property {string} [default_chat_id]
 * @property {Proto_CChatRoomState[]} chat_rooms
 */

/**
 * @typedef {object} Proto_CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification
 * @property {string} [chat_id]
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_ChatRoomClient_NotifyChatGroupUserStateChanged_Notification
 * @property {string} [chat_group_id]
 * @property {Proto_CUserChatRoomGroupState} [user_chat_group_state]
 * @property {Proto_CChatRoom_GetChatRoomGroupSummary_Response} [group_summary]
 * @property {number} [user_action]
 */

/**
 * @typedef {object} Proto_ChatRoomClient_NotifyChatRoomDisconnect_Notification
 * @property {string[]} chat_group_ids
 */

/**
 * @typedef {object} Proto_CChatRoomClient_MemberListViewUpdated_Notification
 * @property {string} [chat_group_id]
 * @property {string} [view_id]
 * @property {Proto_CChatRoomMemberListView} [view]
 * @property {Proto_CChatRoomClient_MemberListViewUpdated_Notification_MemberListViewEntry[]} members
 * @property {number} [status_flags]
 * @property {Proto_CChatRoomMemberSummaryCounts} [member_summary]
 * @property {Proto_CMsgClientPersonaState_Friend[]} subscribed_personas
 */

/**
 * @typedef {object} Proto_CChatRoomMemberListView
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [total_count]
 * @property {number} [client_changenumber]
 * @property {number} [server_changenumber]
 */

/**
 * @typedef {object} Proto_CChatRoomClient_MemberListViewUpdated_Notification_MemberListViewEntry
 * @property {number} [rank]
 * @property {number} [accountid]
 * @property {Proto_CMsgClientPersonaState_Friend} [persona]
 */

/**
 * @typedef {object} Proto_CChatRoomMemberSummaryCounts
 * @property {number} [ingame]
 * @property {number} [online]
 * @property {number} [offline]
 */

/**
 * @typedef {object} Proto_CChatRoom_MessageReaction_Notification
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {number} [server_timestamp]
 * @property {number} [ordinal]
 * @property {string} [reactor]
 * @property {number} [reaction_type]
 * @property {string} [reaction]
 * @property {boolean} [is_add]
 */

/**
 * @typedef {object} Proto_ChatRoom
 */

/**
 * @typedef {object} Proto_ChatRoomClient
 */

///////////////////////////////////////////////
// service_chatusability.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CChatUsability_ClientUsabilityMetrics_Notification
 * @property {number} [metrics_run_id]
 * @property {number} [client_build]
 * @property {number} [metrics_version]
 * @property {boolean} [in_web]
 * @property {Proto_CChatUsability_ClientUsabilityMetrics_Notification_Settings} [settings]
 * @property {Proto_CChatUsability_ClientUsabilityMetrics_Notification_VoiceSettings} [voice_settings]
 * @property {Proto_CChatUsability_ClientUsabilityMetrics_Notification_UIState} [ui_state]
 * @property {Proto_CChatUsability_ClientUsabilityMetrics_Notification_Metrics} [metrics]
 */

/**
 * @typedef {object} Proto_CChatUsability_ClientUsabilityMetrics_Notification_Settings
 * @property {boolean} [notifications_show_ingame]
 * @property {boolean} [notifications_show_online]
 * @property {boolean} [notifications_show_message]
 * @property {boolean} [notifications_events_and_announcements]
 * @property {boolean} [sounds_play_ingame]
 * @property {boolean} [sounds_play_online]
 * @property {boolean} [sounds_play_message]
 * @property {boolean} [sounds_events_and_announcements]
 * @property {boolean} [always_new_chat_window]
 * @property {boolean} [force_alphabetic_friend_sorting]
 * @property {number} [chat_flash_mode]
 * @property {boolean} [remember_open_chats]
 * @property {boolean} [compact_quick_access]
 * @property {boolean} [compact_friends_list]
 * @property {boolean} [notifications_show_chat_room_notification]
 * @property {boolean} [sounds_play_chat_room_notification]
 * @property {boolean} [hide_offline_friends_in_tag_groups]
 * @property {boolean} [hide_categorized_friends]
 * @property {boolean} [categorize_in_game_friends_by_game]
 * @property {number} [chat_font_size]
 * @property {boolean} [use24hour_clock]
 * @property {boolean} [do_not_disturb_mode]
 * @property {boolean} [disable_embed_inlining]
 * @property {boolean} [sign_into_friends]
 * @property {boolean} [animated_avatars]
 */

/**
 * @typedef {object} Proto_CChatUsability_ClientUsabilityMetrics_Notification_VoiceSettings
 * @property {number} [voice_input_gain]
 * @property {number} [voice_output_gain]
 * @property {number} [noise_gate_level]
 * @property {boolean} [voice_use_echo_cancellation]
 * @property {boolean} [voice_use_noise_cancellation]
 * @property {boolean} [voice_use_auto_gain_control]
 * @property {boolean} [selected_non_default_mic]
 * @property {boolean} [selected_non_default_output]
 * @property {boolean} [push_to_talk_enabled]
 * @property {boolean} [push_to_mute_enabled]
 * @property {boolean} [play_ptt_sounds]
 */

/**
 * @typedef {object} Proto_CChatUsability_ClientUsabilityMetrics_Notification_UIState
 * @property {number} [friends_list_height]
 * @property {number} [friends_list_width]
 * @property {boolean} [friends_list_docked]
 * @property {boolean} [friends_list_collapsed]
 * @property {number} [friends_list_group_chats_height]
 * @property {boolean} [friends_list_visible]
 * @property {number} [chat_popups_opened]
 * @property {number} [group_chat_tabs_opened]
 * @property {number} [friend_chat_tabs_opened]
 * @property {number} [chat_window_width]
 * @property {number} [chat_window_height]
 * @property {Proto_CChatUsability_ClientUsabilityMetrics_Notification_UIState_CategoryCollapseState} [category_collapse]
 * @property {number} [group_chat_left_col_collapsed]
 * @property {number} [group_chat_right_col_collapsed]
 * @property {boolean} [in_one_on_one_voice_chat]
 * @property {boolean} [in_group_voice_chat]
 */

/**
 * @typedef {object} Proto_CChatUsability_ClientUsabilityMetrics_Notification_UIState_CategoryCollapseState
 * @property {boolean} [in_game_collapsed]
 * @property {boolean} [online_collapsed]
 * @property {boolean} [offline_collapsed]
 * @property {number} [game_groups_collapsed]
 * @property {number} [categories_collapsed]
 */

/**
 * @typedef {object} Proto_CChatUsability_ClientUsabilityMetrics_Notification_Metrics
 * @property {number} [friends_count]
 * @property {number} [friends_category_count]
 * @property {number} [friends_categorized_count]
 * @property {number} [friends_online_count]
 * @property {number} [friends_in_game_count]
 * @property {number} [friends_in_game_singleton_count]
 * @property {number} [game_group_count]
 * @property {number} [friends_favorite_count]
 * @property {number} [group_chat_count]
 * @property {number} [group_chat_favorite_count]
 */

/**
 * @typedef {object} Proto_CChatUsability_RequestClientUsabilityMetrics_Notification
 * @property {number} [metrics_run_id]
 */

/**
 * @typedef {object} Proto_ChatUsability
 */

/**
 * @typedef {object} Proto_ChatUsabilityClient
 */

///////////////////////////////////////////////
// service_clan.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CClan_GetPartnerEventsByBuildIDRange_Response
 * @property {Proto_CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc[]} matches
 * @property {number} [num_total_results]
 * @property {string} [next_cursor]
 */

/**
 * @typedef {object} Proto_CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc
 * @property {number} [appid]
 * @property {number} [build_id]
 * @property {string} [branch]
 * @property {string} [clan_event_gid]
 * @property {number} [clan_account_id]
 */

///////////////////////////////////////////////
// service_clanchatrooms.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CClanChatRooms_GetClanChatRoomInfo_Request
 * @property {string} [steamid]
 * @property {boolean} [autocreate=true]
 */

/**
 * @typedef {object} Proto_CClanChatRooms_GetClanChatRoomInfo_Response
 * @property {Proto_CChatRoom_GetChatRoomGroupSummary_Response} [chat_group_summary]
 */

/**
 * @typedef {object} Proto_CClanChatRooms_SetClanChatRoomPrivate_Response
 * @property {boolean} [chat_room_private]
 */

/**
 * @typedef {object} Proto_ClanChatRooms
 */

///////////////////////////////////////////////
// service_clanfaqs.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CClanFAQS_Create_Request
 * @property {string} [steamid]
 * @property {string} [internal_name]
 * @property {string} [json_data]
 */

/**
 * @typedef {object} Proto_CClanFAQS_Create_Response
 * @property {string} [faq_id]
 */

/**
 * @typedef {object} Proto_CClanFAQS_Delete_Request
 * @property {string} [steamid]
 * @property {string} [faq_id]
 */

/**
 * @typedef {object} Proto_CClanFAQS_Delete_Response
 */

/**
 * @typedef {object} Proto_CClanFAQS_UpdateInternalName_Request
 * @property {string} [steamid]
 * @property {string} [faq_id]
 * @property {string} [internal_name]
 */

/**
 * @typedef {object} Proto_CClanFAQS_UpdateInternalName_Response
 */

/**
 * @typedef {object} Proto_CClanFAQS_UpdateJsonData_Request
 * @property {string} [steamid]
 * @property {string} [faq_id]
 * @property {string} [json_data]
 */

/**
 * @typedef {object} Proto_CClanFAQS_UpdateJsonData_Response
 */

/**
 * @typedef {object} Proto_CClanFAQS_SetVisibility_Request
 * @property {string} [steamid]
 * @property {string} [faq_id]
 * @property {boolean} [visible_in_global_realm]
 * @property {boolean} [visible_in_china_realm]
 */

/**
 * @typedef {object} Proto_CClanFAQS_SetVisibility_Response
 */

/**
 * @typedef {object} Proto_CClanFAQS_UpdateDraft_Request
 * @property {string} [steamid]
 * @property {string} [faq_id]
 * @property {number} [language]
 * @property {string} [content]
 * @property {string} [title]
 */

/**
 * @typedef {object} Proto_CClanFAQS_UpdateDraft_Response
 * @property {number} [last_update_timestamp]
 */

/**
 * @typedef {object} Proto_CClanFAQS_PublishDraft_Request
 * @property {string} [steamid]
 * @property {string} [faq_id]
 * @property {number[]} language
 */

/**
 * @typedef {object} Proto_CClanFAQS_PublishDraft_Response
 * @property {number} [last_publish_timestamp]
 */

/**
 * @typedef {object} Proto_CClanFAQS_PreviewDraft_Response
 * @property {Proto_CClanFAQContent} [faq]
 */

/**
 * @typedef {object} Proto_CClanFAQContent
 * @property {string} [faq_id]
 * @property {number} [language]
 * @property {string} [version]
 * @property {string} [content]
 * @property {string} [title]
 * @property {number} [timestamp]
 * @property {string} [author_account_id]
 */

/**
 * @typedef {object} Proto_CClanFAQS_GetFAQ_Response
 * @property {Proto_CClanFAQContent} [faq]
 */

/**
 * @typedef {object} Proto_CClanFAQS_GetFAQVersion_Request
 * @property {string} [steamid]
 * @property {string} [faq_id]
 * @property {number} [language]
 * @property {string} [version]
 */

/**
 * @typedef {object} Proto_CClanFAQS_GetFAQVersion_Response
 * @property {Proto_CClanFAQContent} [faq]
 */

/**
 * @typedef {object} Proto_CClanFAQS_GetAllDrafts_Request
 * @property {string} [steamid]
 * @property {string} [faq_id]
 */

/**
 * @typedef {object} Proto_CClanFAQS_GetAllDrafts_Response
 * @property {Proto_CClanFAQSummary} [summary]
 * @property {Proto_CClanFAQContent[]} draft
 */

/**
 * @typedef {object} Proto_CClanFAQSummary
 * @property {string} [faq_id]
 * @property {string} [internal_name]
 * @property {boolean} [visible_in_global_realm]
 * @property {boolean} [visible_in_china_realm]
 * @property {string} [json_data]
 * @property {Proto_CClanFAQSummary_CLanguageInfo[]} per_language_info
 * @property {string} [url_code]
 */

/**
 * @typedef {object} Proto_CClanFAQSummary_CLanguageInfo
 * @property {number} [language]
 * @property {number} [last_update_timestamp]
 * @property {number} [last_publish_timestamp]
 */

/**
 * @typedef {object} Proto_CClanFAQS_GetAllFAQsForClan_Response
 * @property {Proto_CClanFAQSummary[]} faq
 */

/**
 * @typedef {object} Proto_CClanFAQS_GetAllLatestVersionPublishedFAQS_Response
 * @property {Proto_CClanFAQContent[]} faqs
 */

/**
 * @typedef {object} Proto_CClanFAQS_CheckFAQPermissions_Response
 */

/**
 * @typedef {object} Proto_CClanFAQS_SearchFAQs_Response
 * @property {Proto_CClanFAQS_SearchFAQs_Response_CFAQSearchResult[]} faqs
 * @property {number} [num_total_results]
 * @property {string} [next_cursor]
 */

/**
 * @typedef {object} Proto_CClanFAQS_SearchFAQs_Response_CFAQSearchResult
 * @property {string} [articleid]
 * @property {string} [name]
 * @property {string} [content]
 * @property {number} [clan_accountid]
 * @property {string} [url_code]
 */

/**
 * @typedef {object} Proto_ClanFAQS
 */

///////////////////////////////////////////////
// service_clientmetrics.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CClientMetrics_ReportClientError_Notification
 * @property {string} [product]
 * @property {string} [version]
 * @property {Proto_CClientMetrics_ReportClientError_Notification_Error[]} errors
 */

/**
 * @typedef {object} Proto_CClientMetrics_ReportClientError_Notification_Error
 * @property {string} [identifier]
 * @property {string} [message]
 * @property {number} [count]
 */

/**
 * @typedef {object} Proto_ClientMetrics
 */

///////////////////////////////////////////////
// service_cloudconfigstore.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CCloudConfigStore_Download_Request
 * @property {Proto_CCloudConfigStore_NamespaceVersion[]} versions
 */

/**
 * @typedef {object} Proto_CCloudConfigStore_NamespaceVersion
 * @property {number} [enamespace]
 * @property {string} [version]
 */

/**
 * @typedef {object} Proto_CCloudConfigStore_Download_Response
 * @property {Proto_CCloudConfigStore_NamespaceData[]} data
 */

/**
 * @typedef {object} Proto_CCloudConfigStore_NamespaceData
 * @property {number} [enamespace]
 * @property {string} [version]
 * @property {Proto_CCloudConfigStore_Entry[]} entries
 */

/**
 * @typedef {object} Proto_CCloudConfigStore_Entry
 * @property {string} [key]
 * @property {boolean} [is_deleted]
 * @property {string} [value]
 * @property {number} [timestamp]
 * @property {string} [version]
 */

/**
 * @typedef {object} Proto_CCloudConfigStore_Upload_Request
 * @property {Proto_CCloudConfigStore_NamespaceData[]} data
 */

/**
 * @typedef {object} Proto_CCloudConfigStore_Upload_Response
 * @property {Proto_CCloudConfigStore_NamespaceVersion[]} versions
 */

/**
 * @typedef {object} Proto_CCloudConfigStore_Change_Notification
 * @property {Proto_CCloudConfigStore_NamespaceVersion[]} versions
 */

/**
 * @typedef {object} Proto_CloudConfigStore
 */

/**
 * @typedef {object} Proto_CloudConfigStoreClient
 */

///////////////////////////////////////////////
// service_community.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CCommunity_Comment_Reaction
 * @property {number} [reactionid]
 * @property {number} [count]
 */

/**
 * @typedef {object} Proto_CCommunity_GetAvatarHistory_Request
 * @property {string} [steamid]
 * @property {boolean} [filter_user_uploaded_only]
 */

/**
 * @typedef {object} Proto_CCommunity_GetAvatarHistory_Response
 * @property {Proto_CCommunity_GetAvatarHistory_Response_AvatarData[]} avatars
 */

/**
 * @typedef {object} Proto_CCommunity_GetAvatarHistory_Response_AvatarData
 * @property {string} [avatar_sha1]
 * @property {boolean} [user_uploaded]
 * @property {number} [timestamp]
 */

/**
 * @typedef {object} Proto_CCommunity_GetUserPartnerEventViewStatus_Response
 * @property {Proto_CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent[]} events
 */

/**
 * @typedef {object} Proto_CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent
 * @property {string} [event_gid]
 * @property {number} [last_shown_time]
 * @property {number} [last_read_time]
 * @property {number} [clan_account_id]
 */

///////////////////////////////////////////////
// service_econ.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CEcon_GetTradeOfferAccessToken_Request
 * @property {boolean} [generate_new_token]
 */

/**
 * @typedef {object} Proto_CEcon_GetTradeOfferAccessToken_Response
 * @property {string} [trade_offer_access_token]
 */

/**
 * @typedef {object} Proto_CEcon_ClientGetItemShopOverlayAuthURL_Response
 * @property {string} [url]
 */

/**
 * @typedef {object} Proto_CEcon_GetAssetClassInfo_Request
 * @property {string} [language]
 * @property {number} [appid]
 * @property {Proto_CEcon_GetAssetClassInfo_Request_Class[]} classes
 */

/**
 * @typedef {object} Proto_CEcon_GetAssetClassInfo_Request_Class
 * @property {string} [classid]
 * @property {string} [instanceid]
 */

/**
 * @typedef {object} Proto_CEcon_GetAssetClassInfo_Response
 * @property {Proto_CEconItem_Description[]} descriptions
 */

/**
 * @typedef {object} Proto_CEconItem_Description
 * @property {number} [appid]
 * @property {string} [classid]
 * @property {string} [instanceid]
 * @property {boolean} [currency]
 * @property {string} [background_color]
 * @property {string} [icon_url]
 * @property {string} [icon_url_large]
 * @property {Proto_CEconItem_DescriptionLine[]} descriptions
 * @property {boolean} [tradable]
 * @property {Proto_CEconItem_Action[]} actions
 * @property {Proto_CEconItem_DescriptionLine[]} owner_descriptions
 * @property {Proto_CEconItem_Action[]} owner_actions
 * @property {string[]} fraudwarnings
 * @property {string} [name]
 * @property {string} [name_color]
 * @property {string} [type]
 * @property {string} [market_name]
 * @property {string} [market_hash_name]
 * @property {string} [market_fee]
 * @property {number} [market_fee_app]
 * @property {Proto_CEconItem_Description} [contained_item]
 * @property {Proto_CEconItem_Action[]} market_actions
 * @property {boolean} [commodity]
 * @property {number} [market_tradable_restriction]
 * @property {number} [market_marketable_restriction]
 * @property {boolean} [marketable]
 * @property {Proto_CEconItem_Tag[]} tags
 * @property {string} [item_expiration]
 * @property {string} [market_buy_country_restriction]
 * @property {string} [market_sell_country_restriction]
 */

/**
 * @typedef {object} Proto_CEconItem_DescriptionLine
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [color]
 * @property {string} [label]
 */

/**
 * @typedef {object} Proto_CEconItem_Action
 * @property {string} [link]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CEconItem_Tag
 * @property {number} [appid]
 * @property {string} [category]
 * @property {string} [internal_name]
 * @property {string} [localized_category_name]
 * @property {string} [localized_tag_name]
 * @property {string} [color]
 */

/**
 * @typedef {object} Proto_Econ
 */

///////////////////////////////////////////////
// service_embedded.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CEmbeddedClient_AuthorizeDevice_Response
 * @property {EResult} [result]
 * @property {Proto_CEmbeddedClient_Token} [token]
 */

/**
 * @typedef {object} Proto_CEmbeddedClient_Token
 * @property {string} [steamid]
 * @property {Buffer} [client_token]
 * @property {number} [expiry]
 * @property {number} [deviceid]
 */

/**
 * @typedef {object} Proto_EmbeddedClient
 */

///////////////////////////////////////////////
// service_experimentservice.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// service_fovasvideo.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CFovasVideo_ClientGetOPFSettings_Response
 * @property {number} [app_id]
 * @property {string} [opf_settings]
 */

/**
 * @typedef {object} Proto_FovasVideo
 */

///////////////////////////////////////////////
// service_friendmessages.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CFriendMessages_GetRecentMessages_Request
 * @property {string} [steamid1]
 * @property {string} [steamid2]
 * @property {number} [count]
 * @property {boolean} [most_recent_conversation]
 * @property {number} [rtime32_start_time]
 * @property {boolean} [bbcode_format]
 * @property {number} [start_ordinal]
 * @property {number} [time_last]
 * @property {number} [ordinal_last]
 */

/**
 * @typedef {object} Proto_CFriendMessages_GetRecentMessages_Response
 * @property {Proto_CFriendMessages_GetRecentMessages_Response_FriendMessage[]} messages
 * @property {boolean} [more_available]
 */

/**
 * @typedef {object} Proto_CFriendMessages_GetRecentMessages_Response_FriendMessage
 * @property {number} [accountid]
 * @property {number} [timestamp]
 * @property {string} [message]
 * @property {number} [ordinal]
 * @property {Proto_CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction[]} reactions
 */

/**
 * @typedef {object} Proto_CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction
 * @property {number} [reaction_type]
 * @property {string} [reaction]
 * @property {number[]} reactors
 */

/**
 * @typedef {object} Proto_CFriendsMessages_GetActiveMessageSessions_Request
 * @property {number} [lastmessage_since]
 * @property {boolean} [only_sessions_with_messages]
 */

/**
 * @typedef {object} Proto_CFriendsMessages_GetActiveMessageSessions_Response
 * @property {Proto_CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession[]} message_sessions
 * @property {number} [timestamp]
 */

/**
 * @typedef {object} Proto_CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession
 * @property {number} [accountid_friend]
 * @property {number} [last_message]
 * @property {number} [last_view]
 * @property {number} [unread_message_count]
 */

/**
 * @typedef {object} Proto_CFriendMessages_SendMessage_Request
 * @property {string} [steamid]
 * @property {number} [chat_entry_type]
 * @property {string} [message]
 * @property {boolean} [contains_bbcode]
 * @property {boolean} [echo_to_sender]
 * @property {boolean} [low_priority]
 * @property {string} [client_message_id]
 */

/**
 * @typedef {object} Proto_CFriendMessages_SendMessage_Response
 * @property {string} [modified_message]
 * @property {number} [server_timestamp]
 * @property {number} [ordinal]
 * @property {string} [message_without_bb_code]
 */

/**
 * @typedef {object} Proto_CFriendMessages_AckMessage_Notification
 * @property {string} [steamid_partner]
 * @property {number} [timestamp]
 */

/**
 * @typedef {object} Proto_CFriendMessages_IsInFriendsUIBeta_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CFriendMessages_IsInFriendsUIBeta_Response
 * @property {boolean} [online_in_friendsui]
 * @property {boolean} [has_used_friendsui]
 */

/**
 * @typedef {object} Proto_CFriendMessages_UpdateMessageReaction_Request
 * @property {string} [steamid]
 * @property {number} [server_timestamp]
 * @property {number} [ordinal]
 * @property {number} [reaction_type]
 * @property {string} [reaction]
 * @property {boolean} [is_add]
 */

/**
 * @typedef {object} Proto_CFriendMessages_UpdateMessageReaction_Response
 * @property {number[]} reactors
 */

/**
 * @typedef {object} Proto_CFriendMessages_IncomingMessage_Notification
 * @property {string} [steamid_friend]
 * @property {number} [chat_entry_type]
 * @property {boolean} [from_limited_account]
 * @property {string} [message]
 * @property {number} [rtime32_server_timestamp]
 * @property {number} [ordinal]
 * @property {boolean} [local_echo]
 * @property {string} [message_no_bbcode]
 * @property {boolean} [low_priority]
 */

/**
 * @typedef {object} Proto_CFriendMessages_MessageReaction_Notification
 * @property {string} [steamid_friend]
 * @property {number} [server_timestamp]
 * @property {number} [ordinal]
 * @property {string} [reactor]
 * @property {number} [reaction_type]
 * @property {string} [reaction]
 * @property {boolean} [is_add]
 */

/**
 * @typedef {object} Proto_FriendMessages
 */

/**
 * @typedef {object} Proto_FriendMessagesClient
 */

///////////////////////////////////////////////
// service_friendslist.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientFriendsList_Friend
 * @property {string} [ulfriendid]
 * @property {number} [efriendrelationship]
 */

///////////////////////////////////////////////
// service_loyaltyrewards.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetPointsForSpend_Response
 * @property {string} [points]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetSummary_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetSummary_Response
 * @property {Proto_CLoyaltyRewards_GetSummary_Response_Summary} [summary]
 * @property {number} [timestamp_updated]
 * @property {string} [auditid_highwater]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetSummary_Response_Summary
 * @property {string} [points]
 * @property {string} [points_earned]
 * @property {string} [points_spent]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_RedeemPoints_Request
 * @property {number} [defid]
 * @property {string} [expected_points_cost]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_RedeemPoints_Response
 * @property {string} [communityitemid]
 * @property {string[]} bundle_community_item_ids
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_RedeemPointsForBadgeLevel_Request
 * @property {number} [defid]
 * @property {number} [num_levels=1]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_RedeemPointsForProfileCustomization_Request
 * @property {number} [customization_type]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_RedeemPointsForProfileCustomization_Response
 * @property {string} [purchaseid]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request
 * @property {number} [customization_type]
 * @property {number} [new_level]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_AddReaction_Request
 * @property {number} [target_type]
 * @property {string} [targetid]
 * @property {number} [reactionid]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_AddReaction_Response
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetReactions_Request
 * @property {number} [target_type]
 * @property {string} [targetid]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetReactions_Response
 * @property {number[]} reactionids
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetReactionsSummaryForUser_Response
 * @property {Proto_CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[]} total
 * @property {Proto_CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[]} user_reviews
 * @property {Proto_CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[]} ugc
 * @property {Proto_CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[]} profile
 * @property {Proto_CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[]} forum_topics
 * @property {Proto_CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[]} comments
 * @property {number} [total_given]
 * @property {number} [total_received]
 * @property {string} [total_points_given]
 * @property {string} [total_points_received]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown
 * @property {number} [reactionid]
 * @property {number} [given]
 * @property {number} [received]
 * @property {string} [points_given]
 * @property {string} [points_received]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetReactionConfig_Request
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetReactionConfig_Response
 * @property {Proto_CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig[]} reactions
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig
 * @property {number} [reactionid]
 * @property {number} [points_cost]
 * @property {number} [points_transferred]
 * @property {number[]} valid_target_types
 * @property {number[]} valid_ugc_types
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetProfileCustomizationsConfig_Response
 * @property {number} [points_cost]
 * @property {number} [upgrade_points_cost]
 * @property {number[]} purchasable_customization_types
 * @property {number[]} upgradable_customization_types
 * @property {number} [max_slots_per_type]
 * @property {number} [max_upgradable_level]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetEligibleApps_Request
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetEligibleApps_Response
 * @property {Proto_CLoyaltyRewards_GetEligibleApps_Response_EligibleApp[]} apps
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetEligibleApps_Response_EligibleApp
 * @property {number} [appid]
 * @property {boolean} [has_items_anyone_can_purchase]
 * @property {boolean} [event_app]
 * @property {string} [hero_carousel_image]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetActivePurchaseBonuses_Request
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_GetActivePurchaseBonuses_Response
 * @property {Proto_LoyaltyRewardPurchaseBonus[]} bonuses
 */

/**
 * @typedef {object} Proto_LoyaltyRewardPurchaseBonus
 * @property {string} [bonusid]
 * @property {number} [appid]
 * @property {boolean} [active]
 * @property {number} [points]
 * @property {number} [timestamp_start]
 * @property {number} [timestamp_end]
 * @property {string} [internal_description]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_QueryRewardItems_Request
 * @property {number[]} appids
 * @property {number} [time_available]
 * @property {number[]} community_item_classes
 * @property {string} [language]
 * @property {number} [count]
 * @property {string} [cursor]
 * @property {number} [sort=1]
 * @property {boolean} [sort_descending=true]
 * @property {number[]} reward_types
 * @property {number[]} excluded_community_item_classes
 * @property {number[]} definitionids
 * @property {number[]} filters
 * @property {string[]} filter_match_all_category_tags
 * @property {string[]} filter_match_any_category_tags
 * @property {number[]} contains_definitionids
 * @property {boolean} [include_direct_purchase_disabled]
 * @property {number[]} excluded_content_descriptors
 * @property {number[]} excluded_appids
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_QueryRewardItems_Response
 * @property {Proto_LoyaltyRewardDefinition[]} definitions
 * @property {number} [total_count]
 * @property {number} [count]
 * @property {string} [next_cursor]
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_BatchedQueryRewardItems_Request
 * @property {Proto_CLoyaltyRewards_QueryRewardItems_Request[]} requests
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_BatchedQueryRewardItems_Response
 * @property {Proto_CLoyaltyRewards_BatchedQueryRewardItems_Response_Response[]} responses
 */

/**
 * @typedef {object} Proto_CLoyaltyRewards_BatchedQueryRewardItems_Response_Response
 * @property {EResult} [eresult]
 * @property {Proto_CLoyaltyRewards_QueryRewardItems_Response} [response]
 */

/**
 * @typedef {object} Proto_LoyaltyRewards
 */

///////////////////////////////////////////////
// service_news.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CNews_ConvertHTMLToBBCode_Response
 * @property {string} [converted_content]
 * @property {boolean} [found_html]
 */

/**
 * @typedef {object} Proto_CNews_PreviewPartnerEvents_Request
 * @property {string} [rss_url]
 * @property {number} [lang]
 */

/**
 * @typedef {object} Proto_CNews_PreviewPartnerEvents_Response
 * @property {string} [rss_url]
 * @property {Proto_CNewsPartnerEventPreview[]} results
 * @property {string} [error_msg]
 */

/**
 * @typedef {object} Proto_CNewsPartnerEventPreview
 * @property {string} [rss_message]
 * @property {string} [unique_id]
 * @property {string} [title]
 * @property {string} [desc]
 * @property {string} [jsondata]
 * @property {Proto_CNewsFeedPostDef} [post]
 * @property {boolean} [valid_post]
 * @property {string} [post_error_msg]
 */

/**
 * @typedef {object} Proto_CNewsFeedPostDef
 * @property {string} [gid]
 * @property {string} [news_feed_gid]
 * @property {string} [title]
 * @property {string} [url]
 * @property {string} [author]
 * @property {number} [rtime_date]
 * @property {string} [contents]
 * @property {boolean} [commited]
 * @property {boolean} [deleted]
 * @property {string} [tags]
 * @property {number[]} appids
 * @property {number} [recommendation_state]
 * @property {boolean} [received_compensation]
 * @property {boolean} [received_for_free]
 * @property {string} [blurb]
 * @property {string} [event_subtitle]
 * @property {string} [event_summary]
 */

/**
 * @typedef {object} Proto_CNews_GetNewsFeedByRepublishClan_Response
 * @property {Proto_CNewsFeedDef[]} feeds
 */

/**
 * @typedef {object} Proto_CNewsFeedDef
 * @property {string} [gid]
 * @property {string} [name]
 * @property {number} [type=0]
 * @property {string} [url]
 * @property {number[]} associated_apps
 * @property {number} [poll_interval=300]
 * @property {string} [kv_description]
 * @property {string} [kv_filter]
 * @property {number} [publish_to_clan_account_id]
 * @property {number} [language]
 * @property {number} [last_error]
 * @property {number} [last_update]
 * @property {number} [last_checked]
 */

/**
 * @typedef {object} Proto_CNews_PublishPartnerEvent_Request
 * @property {Proto_CNewsFeedPostDef} [post]
 * @property {boolean} [draft]
 */

/**
 * @typedef {object} Proto_CNews_PublishPartnerEvent_Response
 * @property {string} [clan_event_gid]
 * @property {string} [news_post_gid]
 */

/**
 * @typedef {object} Proto_CNews_GetBatchPublishedPartnerEvent_Request
 * @property {string} [news_feed_gid]
 * @property {number} [start_index=0]
 * @property {number} [amount=100]
 */

/**
 * @typedef {object} Proto_CNews_GetBatchPublishedPartnerEvent_Response
 * @property {number} [clan_account_id]
 * @property {string} [news_feed_gid]
 * @property {string[]} clan_event_gid
 * @property {string[]} news_post_gid
 * @property {string[]} news_url
 */

/**
 * @typedef {object} Proto_News
 */

///////////////////////////////////////////////
// service_parental.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CParental_EnableParentalSettings_Response
 */

/**
 * @typedef {object} Proto_CParental_DisableParentalSettings_Response
 */

/**
 * @typedef {object} Proto_CParental_GetParentalSettings_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CParental_GetParentalSettings_Response
 * @property {Proto_ParentalSettings} [settings]
 */

/**
 * @typedef {object} Proto_ParentalSettings
 * @property {string} [steamid]
 * @property {number} [applist_base_id]
 * @property {string} [applist_base_description]
 * @property {Proto_ParentalApp[]} applist_base
 * @property {Proto_ParentalApp[]} applist_custom
 * @property {number} [passwordhashtype]
 * @property {Buffer} [salt]
 * @property {Buffer} [passwordhash]
 * @property {boolean} [is_enabled]
 * @property {number} [enabled_features]
 * @property {string} [recovery_email]
 * @property {boolean} [is_site_license_lock]
 */

/**
 * @typedef {object} Proto_ParentalApp
 * @property {number} [appid]
 * @property {boolean} [is_allowed]
 */

/**
 * @typedef {object} Proto_CParental_GetSignedParentalSettings_Response
 * @property {Buffer} [serialized_settings]
 * @property {Buffer} [signature]
 */

/**
 * @typedef {object} Proto_CParental_SetParentalSettings_Response
 */

/**
 * @typedef {object} Proto_CParental_ValidateToken_Request
 * @property {string} [unlock_token]
 */

/**
 * @typedef {object} Proto_CParental_ValidateToken_Response
 */

/**
 * @typedef {object} Proto_CParental_ValidatePassword_Request
 * @property {string} [password]
 * @property {string} [session]
 * @property {boolean} [send_unlock_on_success]
 */

/**
 * @typedef {object} Proto_CParental_ValidatePassword_Response
 * @property {string} [token]
 */

/**
 * @typedef {object} Proto_CParental_LockClient_Response
 */

/**
 * @typedef {object} Proto_CParental_RequestRecoveryCode_Response
 */

/**
 * @typedef {object} Proto_CParental_DisableWithRecoveryCode_Response
 */

/**
 * @typedef {object} Proto_CParental_ParentalSettingsChange_Notification
 * @property {Buffer} [serialized_settings]
 * @property {Buffer} [signature]
 * @property {string} [password]
 * @property {string} [sessionid]
 */

/**
 * @typedef {object} Proto_CParental_ParentalUnlock_Notification
 * @property {string} [password]
 * @property {string} [sessionid]
 */

/**
 * @typedef {object} Proto_CParental_ParentalLock_Notification
 * @property {string} [sessionid]
 */

/**
 * @typedef {object} Proto_Parental
 */

/**
 * @typedef {object} Proto_ParentalClient
 */

///////////////////////////////////////////////
// service_player.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CPlayer_GetMutualFriendsForIncomingInvites_Request
 */

/**
 * @typedef {object} Proto_CPlayer_GetMutualFriendsForIncomingInvites_Response
 * @property {Proto_CPlayer_IncomingInviteMutualFriendList[]} incoming_invite_mutual_friends_lists
 */

/**
 * @typedef {object} Proto_CPlayer_IncomingInviteMutualFriendList
 * @property {string} [steamid]
 * @property {number[]} mutual_friend_account_ids
 */

/**
 * @typedef {object} Proto_CPlayer_GetOwnedGames_Response
 * @property {number} [game_count]
 * @property {Proto_CPlayer_GetOwnedGames_Response_Game[]} games
 */

/**
 * @typedef {object} Proto_CPlayer_GetOwnedGames_Response_Game
 * @property {number} [appid]
 * @property {string} [name]
 * @property {number} [playtime_2weeks]
 * @property {number} [playtime_forever]
 * @property {string} [img_icon_url]
 * @property {string} [img_logo_url]
 * @property {boolean} [has_community_visible_stats]
 * @property {number} [playtime_windows_forever]
 * @property {number} [playtime_mac_forever]
 * @property {number} [playtime_linux_forever]
 */

/**
 * @typedef {object} Proto_CPlayer_GetPlayNext_Response
 * @property {number} [last_update_time]
 * @property {number[]} appids
 */

/**
 * @typedef {object} Proto_CPlayer_GetFriendsGameplayInfo_Response
 * @property {Proto_CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo} [your_info]
 * @property {Proto_CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo[]} in_game
 * @property {Proto_CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo[]} played_recently
 * @property {Proto_CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo[]} played_ever
 * @property {Proto_CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo[]} owns
 * @property {Proto_CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo[]} in_wishlist
 */

/**
 * @typedef {object} Proto_CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo
 * @property {string} [steamid]
 * @property {number} [minutes_played]
 * @property {number} [minutes_played_forever]
 * @property {boolean} [in_wishlist]
 * @property {boolean} [owned]
 */

/**
 * @typedef {object} Proto_CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo
 * @property {string} [steamid]
 * @property {number} [minutes_played]
 * @property {number} [minutes_played_forever]
 */

/**
 * @typedef {object} Proto_CPlayer_GetFriendsAppsActivity_Response
 * @property {Proto_CPlayer_GetFriendsAppsActivity_Response_AppFriendsInfo[]} trending
 * @property {Proto_CPlayer_GetFriendsAppsActivity_Response_AppFriendsInfo[]} recent_purchases
 * @property {Proto_CPlayer_GetFriendsAppsActivity_Response_AppFriendsInfo[]} unowned
 * @property {Proto_CPlayer_GetFriendsAppsActivity_Response_AppFriendsInfo[]} popular
 * @property {Proto_CPlayer_GetFriendsAppsActivity_Response_AppFriendsInfo[]} dont_forget
 * @property {Proto_CPlayer_GetFriendsAppsActivity_Response_AppFriendsInfo[]} being_discussed
 * @property {Proto_CPlayer_GetFriendsAppsActivity_Response_AppFriendsInfo[]} new_to_group
 * @property {Proto_CPlayer_GetFriendsAppsActivity_Response_AppFriendsInfo[]} returned_to_group
 * @property {number} [active_friend_count=0]
 */

/**
 * @typedef {object} Proto_CPlayer_GetFriendsAppsActivity_Response_AppFriendsInfo
 * @property {number} [appid]
 * @property {Proto_CPlayer_GetFriendsAppsActivity_Response_FriendPlayTime[]} friends
 * @property {number} [display_order]
 */

/**
 * @typedef {object} Proto_CPlayer_GetFriendsAppsActivity_Response_FriendPlayTime
 * @property {string} [steamid]
 * @property {number} [minutes_played_this_week]
 * @property {number} [minutes_played_two_weeks]
 * @property {number} [minutes_played_forever]
 * @property {number} [event_count]
 */

/**
 * @typedef {object} Proto_CPlayer_GetGameBadgeLevels_Response
 * @property {number} [player_level]
 * @property {Proto_CPlayer_GetGameBadgeLevels_Response_Badge[]} badges
 */

/**
 * @typedef {object} Proto_CPlayer_GetGameBadgeLevels_Response_Badge
 * @property {number} [level]
 * @property {number} [series]
 * @property {number} [border_color]
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileBackground_Response
 * @property {Proto_ProfileItem} [profile_background]
 */

/**
 * @typedef {object} Proto_ProfileItem
 * @property {string} [communityitemid]
 * @property {string} [image_small]
 * @property {string} [image_large]
 * @property {string} [name]
 * @property {string} [item_title]
 * @property {string} [item_description]
 * @property {number} [appid]
 * @property {number} [item_type]
 * @property {number} [item_class]
 * @property {string} [movie_webm]
 * @property {string} [movie_mp4]
 * @property {string} [movie_webm_small]
 * @property {string} [movie_mp4_small]
 * @property {number} [equipped_flags]
 */

/**
 * @typedef {object} Proto_CPlayer_SetProfileBackground_Request
 * @property {string} [communityitemid]
 */

/**
 * @typedef {object} Proto_CPlayer_SetProfileBackground_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetMiniProfileBackground_Response
 * @property {Proto_ProfileItem} [profile_background]
 */

/**
 * @typedef {object} Proto_CPlayer_SetMiniProfileBackground_Request
 * @property {string} [communityitemid]
 */

/**
 * @typedef {object} Proto_CPlayer_SetMiniProfileBackground_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetAvatarFrame_Response
 * @property {Proto_ProfileItem} [avatar_frame]
 */

/**
 * @typedef {object} Proto_CPlayer_SetAvatarFrame_Request
 * @property {string} [communityitemid]
 */

/**
 * @typedef {object} Proto_CPlayer_SetAvatarFrame_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetAnimatedAvatar_Response
 * @property {Proto_ProfileItem} [avatar]
 */

/**
 * @typedef {object} Proto_CPlayer_SetAnimatedAvatar_Request
 * @property {string} [communityitemid]
 */

/**
 * @typedef {object} Proto_CPlayer_SetAnimatedAvatar_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileItemsOwned_Request
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileItemsOwned_Response
 * @property {Proto_ProfileItem[]} profile_backgrounds
 * @property {Proto_ProfileItem[]} mini_profile_backgrounds
 * @property {Proto_ProfileItem[]} avatar_frames
 * @property {Proto_ProfileItem[]} animated_avatars
 * @property {Proto_ProfileItem[]} profile_modifiers
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileItemsEquipped_Request
 * @property {string} [steamid]
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileItemsEquipped_Response
 * @property {Proto_ProfileItem} [profile_background]
 * @property {Proto_ProfileItem} [mini_profile_background]
 * @property {Proto_ProfileItem} [avatar_frame]
 * @property {Proto_ProfileItem} [animated_avatar]
 * @property {Proto_ProfileItem} [profile_modifier]
 */

/**
 * @typedef {object} Proto_CPlayer_SetEquippedProfileItemFlags_Request
 * @property {string} [communityitemid]
 * @property {number} [flags]
 */

/**
 * @typedef {object} Proto_CPlayer_SetEquippedProfileItemFlags_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetEmoticonList_Response
 * @property {Proto_CPlayer_GetEmoticonList_Response_Emoticon[]} emoticons
 */

/**
 * @typedef {object} Proto_CPlayer_GetEmoticonList_Response_Emoticon
 * @property {string} [name]
 * @property {number} [count]
 * @property {number} [time_last_used]
 * @property {number} [use_count]
 * @property {number} [time_received]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CPlayer_GetAchievementsProgress_Response
 * @property {Proto_CPlayer_GetAchievementsProgress_Response_AchievementProgress[]} achievement_progress
 */

/**
 * @typedef {object} Proto_CPlayer_GetAchievementsProgress_Response_AchievementProgress
 * @property {number} [appid]
 * @property {number} [unlocked]
 * @property {number} [total]
 * @property {number} [percentage]
 * @property {boolean} [all_unlocked]
 * @property {number} [cache_time]
 */

/**
 * @typedef {object} Proto_CPlayer_GetFavoriteBadge_Response
 * @property {boolean} [has_favorite_badge]
 * @property {number} [badgeid]
 * @property {string} [communityitemid]
 * @property {number} [item_type]
 * @property {number} [border_color]
 * @property {number} [appid]
 * @property {number} [level]
 */

/**
 * @typedef {object} Proto_CPlayer_SetFavoriteBadge_Request
 * @property {string} [communityitemid]
 * @property {number} [badgeid]
 */

/**
 * @typedef {object} Proto_CPlayer_SetFavoriteBadge_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileCustomization_Response
 * @property {Proto_ProfileCustomization[]} customizations
 * @property {number} [slots_available]
 * @property {Proto_ProfileTheme} [profile_theme]
 * @property {Proto_CPlayer_GetProfileCustomization_Response_PurchasedCustomization[]} purchased_customizations
 * @property {Proto_ProfilePreferences} [profile_preferences]
 */

/**
 * @typedef {object} Proto_ProfileCustomization
 * @property {number} [customization_type]
 * @property {boolean} [large]
 * @property {Proto_ProfileCustomizationSlot[]} slots
 * @property {boolean} [active]
 * @property {number} [customization_style]
 * @property {string} [purchaseid]
 * @property {number} [level]
 */

/**
 * @typedef {object} Proto_ProfileCustomizationSlot
 * @property {number} [slot]
 * @property {number} [appid]
 * @property {string} [publishedfileid]
 * @property {string} [item_assetid]
 * @property {string} [item_contextid]
 * @property {string} [notes]
 * @property {string} [title]
 * @property {number} [accountid]
 * @property {number} [badgeid]
 * @property {number} [border_color]
 * @property {string} [item_classid]
 * @property {string} [item_instanceid]
 * @property {number} [ban_check_result]
 */

/**
 * @typedef {object} Proto_ProfileTheme
 * @property {string} [theme_id]
 * @property {string} [title]
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileCustomization_Response_PurchasedCustomization
 * @property {string} [purchaseid]
 * @property {number} [customization_type]
 * @property {number} [level]
 */

/**
 * @typedef {object} Proto_ProfilePreferences
 * @property {boolean} [hide_profile_awards]
 */

/**
 * @typedef {object} Proto_CPlayer_GetPurchasedProfileCustomizations_Response
 * @property {Proto_CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization[]} purchased_customizations
 */

/**
 * @typedef {object} Proto_CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization
 * @property {string} [purchaseid]
 * @property {number} [customization_type]
 */

/**
 * @typedef {object} Proto_CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response
 * @property {Proto_CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization[]} purchased_customizations
 * @property {Proto_CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization[]} upgraded_customizations
 */

/**
 * @typedef {object} Proto_CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization
 * @property {number} [customization_type]
 * @property {number} [count]
 */

/**
 * @typedef {object} Proto_CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization
 * @property {number} [customization_type]
 * @property {number} [level]
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileThemesAvailable_Response
 * @property {Proto_ProfileTheme[]} profile_themes
 */

/**
 * @typedef {object} Proto_CPlayer_SetProfileTheme_Request
 * @property {string} [theme_id]
 */

/**
 * @typedef {object} Proto_CPlayer_SetProfileTheme_Response
 */

/**
 * @typedef {object} Proto_CPlayer_SetProfilePreferences_Response
 */

/**
 * @typedef {object} Proto_CPlayer_PostStatusToFriends_Request
 * @property {number} [appid]
 * @property {string} [status_text]
 */

/**
 * @typedef {object} Proto_CPlayer_PostStatusToFriends_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetPostedStatus_Response
 * @property {number} [accountid]
 * @property {string} [postid]
 * @property {string} [status_text]
 * @property {boolean} [deleted]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CPlayer_DeletePostedStatus_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetLastPlayedTimes_Request
 * @property {number} [min_last_played]
 */

/**
 * @typedef {object} Proto_CPlayer_GetLastPlayedTimes_Response
 * @property {Proto_CPlayer_GetLastPlayedTimes_Response_Game[]} games
 */

/**
 * @typedef {object} Proto_CPlayer_GetLastPlayedTimes_Response_Game
 * @property {number} [appid]
 * @property {number} [last_playtime]
 * @property {number} [playtime_2weeks]
 * @property {number} [playtime_forever]
 * @property {number} [first_playtime]
 * @property {number} [playtime_windows_forever]
 * @property {number} [playtime_mac_forever]
 * @property {number} [playtime_linux_forever]
 * @property {number} [first_windows_playtime]
 * @property {number} [first_mac_playtime]
 * @property {number} [first_linux_playtime]
 * @property {number} [last_windows_playtime]
 * @property {number} [last_mac_playtime]
 * @property {number} [last_linux_playtime]
 */

/**
 * @typedef {object} Proto_CPlayer_AcceptSSA_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetNicknameList_Response
 * @property {Proto_CPlayer_GetNicknameList_Response_PlayerNickname[]} nicknames
 */

/**
 * @typedef {object} Proto_CPlayer_GetNicknameList_Response_PlayerNickname
 * @property {number} [accountid]
 * @property {string} [nickname]
 */

/**
 * @typedef {object} Proto_CPlayer_GetPerFriendPreferences_Request
 */

/**
 * @typedef {object} Proto_CPlayer_GetPerFriendPreferences_Response
 * @property {Proto_PerFriendPreferences[]} preferences
 */

/**
 * @typedef {object} Proto_PerFriendPreferences
 * @property {number} [accountid]
 * @property {string} [nickname]
 * @property {number} [notifications_showingame]
 * @property {number} [notifications_showonline]
 * @property {number} [notifications_showmessages]
 * @property {number} [sounds_showingame]
 * @property {number} [sounds_showonline]
 * @property {number} [sounds_showmessages]
 * @property {number} [notifications_sendmobile]
 */

/**
 * @typedef {object} Proto_CPlayer_SetPerFriendPreferences_Request
 * @property {Proto_PerFriendPreferences} [preferences]
 */

/**
 * @typedef {object} Proto_CPlayer_SetPerFriendPreferences_Response
 */

/**
 * @typedef {object} Proto_CPlayer_AddFriend_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CPlayer_AddFriend_Response
 * @property {boolean} [invite_sent]
 * @property {number} [friend_relationship]
 * @property {EResult} [result]
 */

/**
 * @typedef {object} Proto_CPlayer_RemoveFriend_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CPlayer_RemoveFriend_Response
 * @property {number} [friend_relationship]
 */

/**
 * @typedef {object} Proto_CPlayer_IgnoreFriend_Request
 * @property {string} [steamid]
 * @property {boolean} [unignore]
 */

/**
 * @typedef {object} Proto_CPlayer_IgnoreFriend_Response
 * @property {number} [friend_relationship]
 */

/**
 * @typedef {object} Proto_CPlayer_GetCommunityPreferences_Request
 */

/**
 * @typedef {object} Proto_CPlayer_GetCommunityPreferences_Response
 * @property {Proto_CPlayer_CommunityPreferences} [preferences]
 */

/**
 * @typedef {object} Proto_CPlayer_CommunityPreferences
 * @property {boolean} [hide_adult_content_violence=true]
 * @property {boolean} [hide_adult_content_sex=true]
 * @property {boolean} [parenthesize_nicknames=false]
 * @property {number} [text_filter_setting]
 * @property {boolean} [text_filter_ignore_friends=true]
 * @property {number} [text_filter_words_revision]
 * @property {number} [timestamp_updated]
 */

/**
 * @typedef {object} Proto_CPlayer_SetCommunityPreferences_Request
 * @property {Proto_CPlayer_CommunityPreferences} [preferences]
 */

/**
 * @typedef {object} Proto_CPlayer_SetCommunityPreferences_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetTextFilterWords_Request
 */

/**
 * @typedef {object} Proto_CPlayer_GetTextFilterWords_Response
 * @property {Proto_CPlayer_TextFilterWords} [words]
 */

/**
 * @typedef {object} Proto_CPlayer_TextFilterWords
 * @property {string[]} text_filter_custom_banned_words
 * @property {string[]} text_filter_custom_clean_words
 * @property {number} [text_filter_words_revision]
 */

/**
 * @typedef {object} Proto_CPlayer_GetNewSteamAnnouncementState_Response
 * @property {number} [state]
 * @property {string} [announcement_headline]
 * @property {string} [announcement_url]
 * @property {number} [time_posted]
 * @property {string} [announcement_gid]
 */

/**
 * @typedef {object} Proto_CPlayer_UpdateSteamAnnouncementLastRead_Response
 */

/**
 * @typedef {object} Proto_CPlayer_GetPrivacySettings_Request
 */

/**
 * @typedef {object} Proto_CPlayer_GetPrivacySettings_Response
 * @property {Proto_CPrivacySettings} [privacy_settings]
 */

/**
 * @typedef {object} Proto_CPrivacySettings
 * @property {number} [privacy_state]
 * @property {number} [privacy_state_inventory]
 * @property {number} [privacy_state_gifts]
 * @property {number} [privacy_state_ownedgames]
 * @property {number} [privacy_state_playtime]
 * @property {number} [privacy_state_friendslist]
 */

/**
 * @typedef {object} Proto_CPlayer_GetDurationControl_Response
 * @property {boolean} [is_enabled]
 * @property {number} [seconds]
 * @property {number} [seconds_today]
 * @property {boolean} [is_steamchina_account]
 * @property {boolean} [is_age_verified]
 * @property {number} [seconds_allowed_today]
 */

/**
 * @typedef {object} Proto_CPlayer_LastPlayedTimes_Notification
 * @property {Proto_CPlayer_GetLastPlayedTimes_Response_Game[]} games
 */

/**
 * @typedef {object} Proto_CPlayer_FriendNicknameChanged_Notification
 * @property {number} [accountid]
 * @property {string} [nickname]
 * @property {boolean} [is_echo_to_self]
 */

/**
 * @typedef {object} Proto_CPlayer_FriendEquippedProfileItemsChanged_Notification
 * @property {number} [accountid]
 */

/**
 * @typedef {object} Proto_CPlayer_NewSteamAnnouncementState_Notification
 * @property {number} [state]
 * @property {string} [announcement_headline]
 * @property {string} [announcement_url]
 * @property {number} [time_posted]
 * @property {string} [announcement_gid]
 */

/**
 * @typedef {object} Proto_CPlayer_CommunityPreferencesChanged_Notification
 * @property {Proto_CPlayer_CommunityPreferences} [preferences]
 */

/**
 * @typedef {object} Proto_CPlayer_TextFilterWordsChanged_Notification
 * @property {Proto_CPlayer_TextFilterWords} [words]
 */

/**
 * @typedef {object} Proto_CPlayer_PerFriendPreferencesChanged_Notification
 * @property {number} [accountid]
 * @property {Proto_PerFriendPreferences} [preferences]
 */

/**
 * @typedef {object} Proto_CPlayer_PrivacySettingsChanged_Notification
 * @property {Proto_CPrivacySettings} [privacy_settings]
 */

/**
 * @typedef {object} Proto_Player
 */

/**
 * @typedef {object} Proto_PlayerClient
 */

///////////////////////////////////////////////
// service_publishedfile.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CPublishedFile_Subscribe_Request
 * @property {string} [publishedfileid]
 * @property {number} [list_type]
 * @property {number} [appid]
 * @property {boolean} [notify_client]
 */

/**
 * @typedef {object} Proto_CPublishedFile_Subscribe_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_Unsubscribe_Request
 * @property {string} [publishedfileid]
 * @property {number} [list_type]
 * @property {number} [appid]
 * @property {boolean} [notify_client]
 */

/**
 * @typedef {object} Proto_CPublishedFile_Unsubscribe_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_CanSubscribe_Response
 * @property {boolean} [can_subscribe]
 */

/**
 * @typedef {object} Proto_CPublishedFile_Publish_Response
 * @property {string} [publishedfileid]
 * @property {string} [redirect_uri]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetDetails_Request
 * @property {string[]} publishedfileids
 * @property {boolean} [includetags]
 * @property {boolean} [includeadditionalpreviews]
 * @property {boolean} [includechildren]
 * @property {boolean} [includekvtags]
 * @property {boolean} [includevotes]
 * @property {boolean} [short_description]
 * @property {boolean} [includeforsaledata]
 * @property {boolean} [includemetadata]
 * @property {number} [language=0]
 * @property {number} [return_playtime_stats]
 * @property {number} [appid]
 * @property {boolean} [strip_description_bbcode]
 * @property {number} [desired_revision=0]
 * @property {boolean} [includereactions=false]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetDetails_Response
 * @property {Proto_PublishedFileDetails[]} publishedfiledetails
 */

/**
 * @typedef {object} Proto_PublishedFileDetails
 * @property {EResult} [result]
 * @property {string} [publishedfileid]
 * @property {string} [creator]
 * @property {number} [creator_appid]
 * @property {number} [consumer_appid]
 * @property {number} [consumer_shortcutid]
 * @property {string} [filename]
 * @property {string} [file_size]
 * @property {string} [preview_file_size]
 * @property {string} [file_url]
 * @property {string} [preview_url]
 * @property {string} [youtubevideoid]
 * @property {string} [url]
 * @property {string} [hcontent_file]
 * @property {string} [hcontent_preview]
 * @property {string} [title]
 * @property {string} [file_description]
 * @property {string} [short_description]
 * @property {number} [time_created]
 * @property {number} [time_updated]
 * @property {number} [visibility]
 * @property {number} [flags]
 * @property {boolean} [workshop_file]
 * @property {boolean} [workshop_accepted]
 * @property {boolean} [show_subscribe_all]
 * @property {number} [num_comments_developer]
 * @property {number} [num_comments_public]
 * @property {boolean} [banned]
 * @property {string} [ban_reason]
 * @property {string} [banner]
 * @property {boolean} [can_be_deleted]
 * @property {boolean} [incompatible]
 * @property {string} [app_name]
 * @property {number} [file_type]
 * @property {boolean} [can_subscribe]
 * @property {number} [subscriptions]
 * @property {number} [favorited]
 * @property {number} [followers]
 * @property {number} [lifetime_subscriptions]
 * @property {number} [lifetime_favorited]
 * @property {number} [lifetime_followers]
 * @property {string} [lifetime_playtime]
 * @property {string} [lifetime_playtime_sessions]
 * @property {number} [views]
 * @property {number} [image_width]
 * @property {number} [image_height]
 * @property {string} [image_url]
 * @property {boolean} [spoiler_tag]
 * @property {number} [shortcutid]
 * @property {string} [shortcutname]
 * @property {number} [num_children]
 * @property {number} [num_reports]
 * @property {Proto_PublishedFileDetails_Preview[]} previews
 * @property {Proto_PublishedFileDetails_Tag[]} tags
 * @property {Proto_PublishedFileDetails_Child[]} children
 * @property {Proto_PublishedFileDetails_KVTag[]} kvtags
 * @property {Proto_PublishedFileDetails_VoteData} [vote_data]
 * @property {Proto_PublishedFileDetails_PlaytimeStats} [playtime_stats]
 * @property {number} [time_subscribed]
 * @property {Proto_PublishedFileDetails_ForSaleData} [for_sale_data]
 * @property {string} [metadata]
 * @property {number} [language=0]
 * @property {boolean} [maybe_inappropriate_sex]
 * @property {boolean} [maybe_inappropriate_violence]
 * @property {string} [revision_change_number]
 * @property {number} [revision]
 * @property {number[]} available_revisions
 * @property {Proto_PublishedFileDetails_Reaction[]} reactions
 * @property {number} [ban_text_check_result]
 */

/**
 * @typedef {object} Proto_PublishedFileDetails_Preview
 * @property {string} [previewid]
 * @property {number} [sortorder]
 * @property {string} [url]
 * @property {number} [size]
 * @property {string} [filename]
 * @property {string} [youtubevideoid]
 * @property {number} [preview_type]
 * @property {string} [external_reference]
 */

/**
 * @typedef {object} Proto_PublishedFileDetails_Tag
 * @property {string} [tag]
 * @property {boolean} [adminonly]
 * @property {string} [display_name]
 */

/**
 * @typedef {object} Proto_PublishedFileDetails_Child
 * @property {string} [publishedfileid]
 * @property {number} [sortorder]
 * @property {number} [file_type]
 */

/**
 * @typedef {object} Proto_PublishedFileDetails_KVTag
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_PublishedFileDetails_VoteData
 * @property {number} [score]
 * @property {number} [votes_up]
 * @property {number} [votes_down]
 */

/**
 * @typedef {object} Proto_PublishedFileDetails_PlaytimeStats
 * @property {string} [playtime_seconds]
 * @property {string} [num_sessions]
 */

/**
 * @typedef {object} Proto_PublishedFileDetails_ForSaleData
 * @property {boolean} [is_for_sale]
 * @property {number} [price_category]
 * @property {number} [estatus]
 * @property {number} [price_category_floor]
 * @property {boolean} [price_is_pay_what_you_want]
 * @property {number} [discount_percentage]
 */

/**
 * @typedef {object} Proto_PublishedFileDetails_Reaction
 * @property {number} [reactionid]
 * @property {number} [count]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetItemInfo_Response
 * @property {number} [update_time]
 * @property {Proto_CPublishedFile_GetItemInfo_Response_WorkshopItemInfo[]} workshop_items
 * @property {string[]} private_items
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetItemInfo_Response_WorkshopItemInfo
 * @property {string} [published_file_id]
 * @property {number} [time_updated]
 * @property {string} [manifest_id]
 * @property {number} [flags]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetUserFiles_Response
 * @property {number} [total]
 * @property {number} [startindex]
 * @property {Proto_PublishedFileDetails[]} publishedfiledetails
 * @property {Proto_CPublishedFile_GetUserFiles_Response_App[]} apps
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetUserFiles_Response_App
 * @property {number} [appid]
 * @property {string} [name]
 * @property {number} [shortcutid]
 * @property {boolean} [private]
 */

/**
 * @typedef {object} Proto_CPublishedFile_AreFilesInSubscriptionList_Request
 * @property {number} [appid]
 * @property {string[]} publishedfileids
 * @property {number} [listtype]
 * @property {number} [filetype]
 * @property {number} [workshopfiletype]
 */

/**
 * @typedef {object} Proto_CPublishedFile_AreFilesInSubscriptionList_Response
 * @property {Proto_CPublishedFile_AreFilesInSubscriptionList_Response_InList[]} files
 */

/**
 * @typedef {object} Proto_CPublishedFile_AreFilesInSubscriptionList_Response_InList
 * @property {string} [publishedfileid]
 * @property {boolean} [inlist]
 */

/**
 * @typedef {object} Proto_CPublishedFile_Update_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetChangeHistoryEntry_Response
 * @property {string} [change_description]
 * @property {number} [language]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetChangeHistory_Response
 * @property {Proto_CPublishedFile_GetChangeHistory_Response_ChangeLog[]} changes
 * @property {number} [total]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetChangeHistory_Response_ChangeLog
 * @property {number} [timestamp]
 * @property {string} [change_description]
 * @property {number} [language]
 */

/**
 * @typedef {object} Proto_CPublishedFile_RefreshVotingQueue_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_QueryFiles_Request
 * @property {number} [query_type]
 * @property {number} [page]
 * @property {string} [cursor]
 * @property {number} [numperpage=1]
 * @property {number} [creator_appid]
 * @property {number} [appid]
 * @property {string[]} requiredtags
 * @property {string[]} excludedtags
 * @property {boolean} [match_all_tags=true]
 * @property {string[]} required_flags
 * @property {string[]} omitted_flags
 * @property {string} [search_text]
 * @property {number} [filetype]
 * @property {string} [child_publishedfileid]
 * @property {number} [days]
 * @property {boolean} [include_recent_votes_only]
 * @property {number} [cache_max_age_seconds=0]
 * @property {number} [language=0]
 * @property {Proto_CPublishedFile_QueryFiles_Request_KVTag[]} required_kv_tags
 * @property {Proto_CPublishedFile_QueryFiles_Request_TagGroup[]} taggroups
 * @property {boolean} [totalonly]
 * @property {boolean} [ids_only]
 * @property {boolean} [return_vote_data]
 * @property {boolean} [return_tags]
 * @property {boolean} [return_kv_tags]
 * @property {boolean} [return_previews]
 * @property {boolean} [return_children]
 * @property {boolean} [return_short_description]
 * @property {boolean} [return_for_sale_data]
 * @property {boolean} [return_metadata=false]
 * @property {number} [return_playtime_stats]
 * @property {boolean} [return_details]
 * @property {boolean} [strip_description_bbcode]
 * @property {number} [desired_revision=0]
 * @property {boolean} [return_reactions=false]
 */

/**
 * @typedef {object} Proto_CPublishedFile_QueryFiles_Request_KVTag
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CPublishedFile_QueryFiles_Request_TagGroup
 * @property {string[]} tags
 */

/**
 * @typedef {object} Proto_CPublishedFile_QueryFiles_Response
 * @property {number} [total]
 * @property {Proto_PublishedFileDetails[]} publishedfiledetails
 * @property {string} [next_cursor]
 */

/**
 * @typedef {object} Proto_CPublishedFile_AddAppRelationship_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_RemoveAppRelationship_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetAppRelationships_Response
 * @property {Proto_CPublishedFile_GetAppRelationships_Response_AppRelationship[]} app_relationships
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetAppRelationships_Response_AppRelationship
 * @property {number} [appid]
 * @property {number} [relationship]
 */

/**
 * @typedef {object} Proto_CPublishedFile_StartPlaytimeTracking_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_StopPlaytimeTracking_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_StopPlaytimeTrackingForAllAppItems_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_SetPlaytimeForControllerConfigs_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_AddChild_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_RemoveChild_Response
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetUserVoteSummary_Request
 * @property {string[]} publishedfileids
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetUserVoteSummary_Response
 * @property {Proto_CPublishedFile_GetUserVoteSummary_Response_VoteSummary[]} summaries
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetUserVoteSummary_Response_VoteSummary
 * @property {string} [publishedfileid]
 * @property {boolean} [vote_for]
 * @property {boolean} [vote_against]
 * @property {boolean} [reported]
 */

/**
 * @typedef {object} Proto_CPublishedFile_FileSubscribed_Notification
 * @property {string} [published_file_id]
 * @property {number} [app_id]
 * @property {string} [file_hcontent]
 * @property {number} [file_size]
 * @property {number} [rtime_subscribed]
 * @property {boolean} [is_depot_content]
 * @property {number} [rtime_updated]
 * @property {Proto_CPublishedFile_FileSubscribed_Notification_RevisionData[]} revisions
 */

/**
 * @typedef {object} Proto_CPublishedFile_FileSubscribed_Notification_RevisionData
 * @property {number} [revision]
 * @property {string} [file_hcontent]
 * @property {number} [rtime_updated]
 */

/**
 * @typedef {object} Proto_CPublishedFile_FileUnsubscribed_Notification
 * @property {string} [published_file_id]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CPublishedFile_FileDeleted_Client_Notification
 * @property {string} [published_file_id]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_PublishedFile
 */

/**
 * @typedef {object} Proto_PublishedFileClient
 */

///////////////////////////////////////////////
// service_quest.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CQuest_GetCommunityInventory_Response
 * @property {Proto_CQuest_CommunityItem[]} items
 */

/**
 * @typedef {object} Proto_CQuest_CommunityItem
 * @property {string} [communityitemid]
 * @property {number} [item_type]
 * @property {number} [appid]
 * @property {number} [owner]
 * @property {Proto_CQuest_CommunityItem_Attribute[]} attributes
 * @property {boolean} [used]
 * @property {number} [owner_origin]
 * @property {string} [amount]
 */

/**
 * @typedef {object} Proto_CQuest_CommunityItem_Attribute
 * @property {number} [attributeid]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CQuest_GetCommunityItemDefinitions_Response
 * @property {Proto_CQuest_GetCommunityItemDefinitions_Response_ItemDefinition[]} item_definitions
 */

/**
 * @typedef {object} Proto_CQuest_GetCommunityItemDefinitions_Response_ItemDefinition
 * @property {number} [item_type]
 * @property {number} [appid]
 * @property {string} [item_name]
 * @property {string} [item_title]
 * @property {string} [item_description]
 * @property {string} [item_image_small]
 * @property {string} [item_image_large]
 * @property {string} [item_key_values]
 * @property {number} [item_series]
 * @property {number} [item_class]
 * @property {number} [editor_accountid]
 * @property {boolean} [active]
 * @property {string} [item_image_composed]
 * @property {string} [item_image_composed_foil]
 * @property {boolean} [deleted]
 * @property {number} [item_last_changed]
 * @property {string} [broadcast_channel_id]
 * @property {string} [item_movie_webm]
 * @property {string} [item_movie_mp4]
 * @property {string} [item_movie_webm_small]
 * @property {string} [item_movie_mp4_small]
 */

/**
 * @typedef {object} Proto_CQuest_ActivateProfileModifierItem_Request
 * @property {number} [appid]
 * @property {string} [communityitemid]
 * @property {boolean} [activate]
 */

/**
 * @typedef {object} Proto_CQuest_ActivateProfileModifierItem_Response
 */

/**
 * @typedef {object} Proto_Quest
 */

///////////////////////////////////////////////
// service_saleitemrewards.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CSaleItemRewards_ClaimItem_Request
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CSaleItemRewards_ClaimItem_Response
 * @property {string} [communityitemid]
 * @property {number} [next_claim_time]
 * @property {Proto_LoyaltyRewardDefinition} [reward_item]
 */

/**
 * @typedef {object} Proto_CSaleItemRewards_CanClaimItem_Request
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CSaleItemRewards_CanClaimItem_Response
 * @property {boolean} [can_claim]
 * @property {number} [next_claim_time]
 * @property {Proto_LoyaltyRewardDefinition} [reward_item]
 */

/**
 * @typedef {object} Proto_SaleItemRewards
 */

///////////////////////////////////////////////
// service_steamtv.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CSteamTV_CreateBroadcastChannel_Response
 * @property {string} [broadcast_channel_id]
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelID_Response
 * @property {string} [broadcast_channel_id]
 * @property {string} [unique_name]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CSteamTV_SetBroadcastChannelProfile_Response
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelProfile_Response
 * @property {string} [unique_name]
 * @property {string} [owner_steamid]
 * @property {string} [name]
 * @property {string} [language]
 * @property {string} [headline]
 * @property {string} [summary]
 * @property {string} [schedule]
 * @property {string} [rules]
 * @property {string} [panels]
 * @property {boolean} [is_partnered]
 */

/**
 * @typedef {object} Proto_CSteamTV_SetBroadcastChannelImage_Response
 * @property {string} [replace_image_hash]
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelImages_Response
 * @property {Proto_CSteamTV_GetBroadcastChannelImages_Response_Images[]} images
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelImages_Response_Images
 * @property {number} [image_type]
 * @property {string} [image_path]
 * @property {number} [image_index]
 */

/**
 * @typedef {object} Proto_CSteamTV_SetBroadcastChannelLinkRegions_Response
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelLinks_Response
 * @property {Proto_CSteamTV_GetBroadcastChannelLinks_Response_Links[]} links
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelLinks_Response_Links
 * @property {number} [link_index]
 * @property {string} [url]
 * @property {string} [link_description]
 * @property {number} [left]
 * @property {number} [top]
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelBroadcasters_Response
 * @property {Proto_CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster[]} broadcasters
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster
 * @property {string} [steamid]
 * @property {string} [name]
 * @property {string} [rtmp_token]
 */

/**
 * @typedef {object} Proto_CSteamTV_GetFollowedChannels_Response
 * @property {Proto_GetBroadcastChannelEntry[]} results
 */

/**
 * @typedef {object} Proto_GetBroadcastChannelEntry
 * @property {string} [broadcast_channel_id]
 * @property {string} [unique_name]
 * @property {string} [name]
 * @property {number} [appid]
 * @property {string} [viewers]
 * @property {string} [views]
 * @property {string} [thumbnail_url]
 * @property {string} [followers]
 * @property {string} [headline]
 * @property {string} [avatar_url]
 * @property {string} [broadcaster_steamid]
 * @property {string} [subscribers]
 * @property {string} [background_url]
 * @property {boolean} [is_featured]
 * @property {boolean} [is_disabled]
 * @property {boolean} [is_live]
 * @property {string} [language]
 * @property {number} [reports]
 * @property {boolean} [is_partnered]
 */

/**
 * @typedef {object} Proto_CSteamTV_GetSubscribedChannels_Response
 * @property {Proto_GetBroadcastChannelEntry[]} results
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelStatus_Response
 * @property {boolean} [is_live]
 * @property {boolean} [is_disabled]
 * @property {number} [appid]
 * @property {string} [viewers]
 * @property {string} [views]
 * @property {string} [broadcaster_steamid]
 * @property {string} [thumbnail_url]
 * @property {string} [followers]
 * @property {string} [subscribers]
 * @property {string} [unique_name]
 * @property {string} [broadcast_session_id]
 */

/**
 * @typedef {object} Proto_CSteamTV_FollowBroadcastChannel_Response
 * @property {boolean} [is_followed]
 */

/**
 * @typedef {object} Proto_CSteamTV_SubscribeBroadcastChannel_Response
 * @property {boolean} [is_subscribed]
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelClips_Response
 * @property {Proto_CSteamTV_BroadcastClipInfo[]} clips
 * @property {string} [thumbnail_host]
 */

/**
 * @typedef {object} Proto_CSteamTV_BroadcastClipInfo
 * @property {string} [broadcast_clip_id]
 * @property {string} [channel_id]
 * @property {number} [app_id]
 * @property {string} [broadcaster_steamid]
 * @property {string} [creator_steamid]
 * @property {string} [video_description]
 * @property {number} [live_time]
 * @property {number} [length_ms]
 * @property {string} [thumbnail_path]
 */

/**
 * @typedef {object} Proto_CSteamTV_ReportBroadcastChannel_Response
 */

/**
 * @typedef {object} Proto_CSteamTV_GetBroadcastChannelInteraction_Response
 * @property {boolean} [is_followed]
 * @property {boolean} [is_subscribed]
 */

/**
 * @typedef {object} Proto_CSteamTV_GetGames_Response
 * @property {Proto_CSteamTV_Game[]} results
 */

/**
 * @typedef {object} Proto_CSteamTV_Game
 * @property {number} [appid]
 * @property {string} [name]
 * @property {string} [image]
 * @property {string} [viewers]
 * @property {Proto_GetBroadcastChannelEntry[]} channels
 * @property {string} [release_date]
 * @property {string} [developer]
 * @property {string} [publisher]
 */

/**
 * @typedef {object} Proto_CSteamTV_GetChannels_Response
 * @property {Proto_GetBroadcastChannelEntry[]} results
 */

/**
 * @typedef {object} Proto_CSteamTV_AddChatBan_Request
 * @property {string} [broadcast_channel_id]
 * @property {string} [chatter_steamid]
 * @property {number} [duration]
 * @property {boolean} [permanent]
 * @property {boolean} [undo]
 */

/**
 * @typedef {object} Proto_CSteamTV_AddChatBan_Response
 */

/**
 * @typedef {object} Proto_CSteamTV_GetChatBans_Response
 * @property {Proto_CSteamTV_ChatBan[]} results
 */

/**
 * @typedef {object} Proto_CSteamTV_ChatBan
 * @property {string} [issuer_steamid]
 * @property {string} [chatter_steamid]
 * @property {string} [time_expires]
 * @property {boolean} [permanent]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CSteamTV_AddChatModerator_Request
 * @property {string} [broadcast_channel_id]
 * @property {string} [moderator_steamid]
 * @property {boolean} [undo]
 */

/**
 * @typedef {object} Proto_CSteamTV_AddChatModerator_Response
 */

/**
 * @typedef {object} Proto_CSteamTV_GetChatModerators_Request
 * @property {string} [broadcast_channel_id]
 */

/**
 * @typedef {object} Proto_CSteamTV_GetChatModerators_Response
 * @property {Proto_CSteamTV_ChatModerator[]} results
 */

/**
 * @typedef {object} Proto_CSteamTV_ChatModerator
 * @property {string} [steamid]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CSteamTV_AddWordBan_Response
 */

/**
 * @typedef {object} Proto_CSteamTV_GetWordBans_Response
 * @property {string[]} results
 */

/**
 * @typedef {object} Proto_CSteamTV_JoinChat_Request
 * @property {string} [broadcast_channel_id]
 */

/**
 * @typedef {object} Proto_CSteamTV_JoinChat_Response
 * @property {string} [chat_id]
 * @property {string} [view_url_template]
 * @property {string[]} flair_group_ids
 */

/**
 * @typedef {object} Proto_CSteamTV_Search_Response
 * @property {Proto_GetBroadcastChannelEntry[]} results
 */

/**
 * @typedef {object} Proto_CSteamTV_GetSteamTVUserSettings_Response
 * @property {boolean} [stream_live_email]
 * @property {boolean} [stream_live_notification]
 */

/**
 * @typedef {object} Proto_CSteamTV_SetSteamTVUserSettings_Response
 */

/**
 * @typedef {object} Proto_CSteamTV_GetMyBroadcastChannels_Response
 * @property {Proto_GetBroadcastChannelEntry[]} results
 */

/**
 * @typedef {object} Proto_CSteamTV_GetHomePageContents_Response
 * @property {Proto_CSteamTV_HomePageContentRow[]} rows
 */

/**
 * @typedef {object} Proto_CSteamTV_HomePageContentRow
 * @property {number} [template_type]
 * @property {Proto_CSteamTV_HomePageTemplate_Takeover} [takeover]
 * @property {Proto_CSteamTV_HomePageTemplate_SingleGame} [single_game]
 * @property {Proto_CSteamTV_HomePageTemplate_GameList} [game_list]
 * @property {Proto_CSteamTV_HomePageTemplate_QuickExplore} [quick_explore]
 * @property {Proto_CSteamTV_HomePageTemplate_ConveyorBelt} [conveyor_belt]
 * @property {Proto_CSteamTV_HomePageTemplate_WatchParty} [watch_party]
 * @property {Proto_CSteamTV_HomePageTemplate_Developer} [developer]
 * @property {Proto_CSteamTV_HomePageTemplate_Event} [event]
 */

/**
 * @typedef {object} Proto_CSteamTV_HomePageTemplate_Takeover
 * @property {Proto_GetBroadcastChannelEntry[]} broadcasts
 */

/**
 * @typedef {object} Proto_CSteamTV_HomePageTemplate_SingleGame
 * @property {Proto_GetBroadcastChannelEntry[]} broadcasts
 * @property {number} [appid]
 * @property {string} [title]
 */

/**
 * @typedef {object} Proto_CSteamTV_HomePageTemplate_GameList
 * @property {Proto_GameListEntry[]} entries
 * @property {string} [title]
 */

/**
 * @typedef {object} Proto_GameListEntry
 * @property {number} [appid]
 * @property {string} [game_name]
 * @property {Proto_GetBroadcastChannelEntry} [broadcast]
 */

/**
 * @typedef {object} Proto_CSteamTV_HomePageTemplate_QuickExplore
 * @property {Proto_GetBroadcastChannelEntry[]} broadcasts
 * @property {string} [title]
 */

/**
 * @typedef {object} Proto_CSteamTV_HomePageTemplate_ConveyorBelt
 * @property {Proto_GetBroadcastChannelEntry[]} broadcasts
 * @property {string} [title]
 */

/**
 * @typedef {object} Proto_CSteamTV_HomePageTemplate_WatchParty
 * @property {Proto_GetBroadcastChannelEntry} [broadcast]
 * @property {string} [title]
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CSteamTV_HomePageTemplate_Developer
 * @property {Proto_GetBroadcastChannelEntry} [broadcast]
 * @property {string} [title]
 */

/**
 * @typedef {object} Proto_CSteamTV_HomePageTemplate_Event
 * @property {string} [title]
 */

/**
 * @typedef {object} Proto_SteamTV
 */

///////////////////////////////////////////////
// service_store.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CStore_GetMostPopularTags_Response
 * @property {Proto_CStore_GetMostPopularTags_Response_Tag[]} tags
 */

/**
 * @typedef {object} Proto_CStore_GetMostPopularTags_Response_Tag
 * @property {number} [tagid]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CStore_GetLocalizedNameForTags_Response
 * @property {Proto_CStore_GetLocalizedNameForTags_Response_Tag[]} tags
 */

/**
 * @typedef {object} Proto_CStore_GetLocalizedNameForTags_Response_Tag
 * @property {number} [tagid]
 * @property {string} [english_name]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CStore_GetStorePreferences_Request
 */

/**
 * @typedef {object} Proto_CStore_GetStorePreferences_Response
 * @property {Proto_CStore_UserPreferences} [preferences]
 * @property {Proto_CStore_UserTagPreferences} [tag_preferences]
 * @property {Proto_CStore_UserContentDescriptorPreferences} [content_descriptor_preferences]
 */

/**
 * @typedef {object} Proto_CStore_UserPreferences
 * @property {number} [primary_language]
 * @property {number} [secondary_languages]
 * @property {boolean} [platform_windows]
 * @property {boolean} [platform_mac]
 * @property {boolean} [platform_linux]
 * @property {boolean} [hide_adult_content_violence]
 * @property {boolean} [hide_adult_content_sex]
 * @property {number} [timestamp_updated]
 * @property {boolean} [hide_store_broadcast]
 * @property {number} [review_score_preference]
 * @property {number} [timestamp_content_descriptor_preferences_updated]
 */

/**
 * @typedef {object} Proto_CStore_UserTagPreferences
 * @property {Proto_CStore_UserTagPreferences_Tag[]} tags_to_exclude
 */

/**
 * @typedef {object} Proto_CStore_UserTagPreferences_Tag
 * @property {number} [tagid]
 * @property {string} [name]
 * @property {number} [timestamp_added]
 */

/**
 * @typedef {object} Proto_CStore_UserContentDescriptorPreferences
 * @property {Proto_CStore_UserContentDescriptorPreferences_ContentDescriptor[]} content_descriptors_to_exclude
 */

/**
 * @typedef {object} Proto_CStore_UserContentDescriptorPreferences_ContentDescriptor
 * @property {number} [content_descriptorid]
 * @property {number} [timestamp_added]
 */

/**
 * @typedef {object} Proto_CStore_StorePreferencesChanged_Notification
 * @property {Proto_CStore_UserPreferences} [preferences]
 * @property {Proto_CStore_UserTagPreferences} [tag_preferences]
 * @property {Proto_CStore_UserContentDescriptorPreferences} [content_descriptor_preferences]
 */

/**
 * @typedef {object} Proto_Store
 */

/**
 * @typedef {object} Proto_StoreClient
 */

///////////////////////////////////////////////
// service_storebrowse.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CStoreBrowse_GetItems_Request
 * @property {Proto_StoreItemID[]} ids
 * @property {Proto_StoreBrowseContext} [context]
 * @property {Proto_StoreBrowseItemDataRequest} [data_request]
 */

/**
 * @typedef {object} Proto_StoreBrowseContext
 * @property {string} [language]
 * @property {number} [elanguage]
 * @property {string} [country_code]
 * @property {number} [steam_realm]
 */

/**
 * @typedef {object} Proto_StoreBrowseItemDataRequest
 * @property {boolean} [include_assets]
 * @property {boolean} [include_release]
 * @property {boolean} [include_platforms]
 * @property {boolean} [include_all_purchase_options]
 * @property {boolean} [include_screenshots]
 * @property {boolean} [include_trailers]
 * @property {boolean} [include_ratings]
 * @property {number} [include_tag_count]
 * @property {boolean} [include_reviews]
 * @property {boolean} [include_basic_info]
 */

/**
 * @typedef {object} Proto_CStoreBrowse_GetItems_Response
 * @property {Proto_StoreItem[]} store_items
 */

/**
 * @typedef {object} Proto_CStoreBrowse_GetStoreCategories_Response
 * @property {Proto_CStoreBrowse_GetStoreCategories_Response_Category[]} categories
 */

/**
 * @typedef {object} Proto_CStoreBrowse_GetStoreCategories_Response_Category
 * @property {number} [categoryid]
 * @property {number} [type]
 * @property {string} [internal_name]
 * @property {string} [display_name]
 * @property {string} [image_url]
 * @property {boolean} [show_in_search]
 */

/**
 * @typedef {object} Proto_StoreBrowse
 */

///////////////////////////////////////////////
// service_storequery.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CStoreQuery_Query_Response
 * @property {Proto_CStoreQueryResultMetadata} [metadata]
 * @property {Proto_StoreItemID[]} ids
 * @property {Proto_StoreItem[]} store_items
 */

/**
 * @typedef {object} Proto_CStoreQueryResultMetadata
 * @property {number} [total_matching_records]
 * @property {number} [start]
 * @property {number} [count]
 */

/**
 * @typedef {object} Proto_CStoreQuery_SearchSuggestions_Response
 * @property {Proto_CStoreQueryResultMetadata} [metadata]
 * @property {Proto_StoreItemID[]} ids
 * @property {Proto_StoreItem[]} store_items
 */

/**
 * @typedef {object} Proto_StoreQuery
 */

///////////////////////////////////////////////
// service_summersale2020.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CSummerSale2020_ClaimItem_Response
 * @property {string} [item_name]
 * @property {string} [item_title]
 * @property {string} [item_description]
 * @property {string} [item_image_small]
 * @property {string} [item_image_large]
 * @property {boolean} [animated]
 * @property {string} [communityitemid]
 */

/**
 * @typedef {object} Proto_CSummerSale2020_CanClaimItem_Response
 * @property {boolean} [can_claim]
 * @property {string} [item_name]
 * @property {string} [item_title]
 * @property {string} [item_description]
 * @property {string} [item_image_small]
 * @property {string} [item_image_large]
 * @property {boolean} [animated]
 * @property {string} [communityitemid]
 */

/**
 * @typedef {object} Proto_SummerSale2020
 */

///////////////////////////////////////////////
// service_useraccount.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CUserAccount_GetAvailableValveDiscountPromotions_Request
 * @property {string} [country_code]
 */

/**
 * @typedef {object} Proto_CUserAccount_GetAvailableValveDiscountPromotions_Response
 * @property {Proto_CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails[]} promotions
 */

/**
 * @typedef {object} Proto_CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails
 * @property {number} [promotionid]
 * @property {string} [promotion_description]
 * @property {string} [minimum_cart_amount]
 * @property {string} [minimum_cart_amount_for_display]
 * @property {string} [discount_amount]
 * @property {number} [currency_code]
 * @property {number} [available_use_count]
 * @property {number} [promotional_discount_type]
 * @property {number} [loyalty_reward_id]
 * @property {string} [localized_name_token]
 * @property {number} [max_use_count]
 */

/**
 * @typedef {object} Proto_CUserAccount_GetAccountLinkStatus_Response
 * @property {number} [pwid]
 * @property {number} [identity_verification]
 * @property {boolean} [performed_age_verification]
 */

/**
 * @typedef {object} Proto_CUserAccount_CancelLicenseForApp_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CUserAccount_CancelLicenseForApp_Response
 */

/**
 * @typedef {object} Proto_CUserAccount_CreateFriendInviteToken_Response
 * @property {string} [invite_token]
 * @property {string} [invite_limit]
 * @property {string} [invite_duration]
 * @property {number} [time_created]
 * @property {boolean} [valid]
 */

/**
 * @typedef {object} Proto_CUserAccount_GetFriendInviteTokens_Response
 * @property {Proto_CUserAccount_CreateFriendInviteToken_Response[]} tokens
 */

/**
 * @typedef {object} Proto_CUserAccount_ViewFriendInviteToken_Response
 * @property {boolean} [valid]
 * @property {string} [steamid]
 * @property {string} [invite_duration]
 */

/**
 * @typedef {object} Proto_CUserAccount_RedeemFriendInviteToken_Response
 */

/**
 * @typedef {object} Proto_CUserAccount_RevokeFriendInviteToken_Response
 */

/**
 * @typedef {object} Proto_CUserAccount_RegisterCompatTool_Response
 */

/**
 * @typedef {object} Proto_UserAccount
 */

///////////////////////////////////////////////
// service_usergameactivity.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CUserGameActivity_GetActivity_Request
 * @property {string} [steamid]
 * @property {number} [appid]
 * @property {number} [count]
 * @property {number} [starttime]
 * @property {number} [endtime]
 */

/**
 * @typedef {object} Proto_CUserGameActivity_GetActivity_Response
 * @property {string} [steamid]
 * @property {number} [appid]
 * @property {Proto_CUserGameActivity_Event[]} events
 */

/**
 * @typedef {object} Proto_CUserGameActivity_Event
 * @property {number} [timestamp]
 * @property {number} [event_type]
 * @property {number} [event_sub_type]
 * @property {string} [data1]
 * @property {string} [data2]
 * @property {string} [data3]
 * @property {string} [data4]
 * @property {number} [item_appid]
 * @property {string} [item_contextid]
 * @property {string} [item_assetid]
 * @property {Buffer} [proto_data]
 */

/**
 * @typedef {object} Proto_UserGameActivity
 */

///////////////////////////////////////////////
// service_usernews.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CUserNews_GetUserNews_Request
 * @property {number} [count]
 * @property {number} [starttime]
 * @property {number} [endtime]
 * @property {string} [language]
 * @property {number} [filterflags]
 * @property {number} [filterappid]
 */

/**
 * @typedef {object} Proto_CUserNews_GetUserNews_Response
 * @property {Proto_CUserNews_Event[]} news
 * @property {Proto_CUserNewsAchievementDisplayData[]} achievement_display_data
 */

/**
 * @typedef {object} Proto_CUserNews_Event
 * @property {number} [eventtype]
 * @property {number} [eventtime]
 * @property {string} [steamid_actor]
 * @property {string} [steamid_target]
 * @property {string} [gameid]
 * @property {number} [packageid]
 * @property {number} [shortcutid]
 * @property {string[]} achievement_names
 * @property {string} [clan_eventid]
 * @property {string} [clan_announcementid]
 * @property {string} [publishedfileid]
 * @property {number} [event_last_mod_time]
 */

/**
 * @typedef {object} Proto_CUserNewsAchievementDisplayData
 * @property {number} [appid]
 * @property {Proto_CUserNewsAchievementDisplayData_CAchievement[]} achievements
 */

/**
 * @typedef {object} Proto_CUserNewsAchievementDisplayData_CAchievement
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [display_description]
 * @property {string} [icon]
 * @property {number} [unlocked_pct]
 * @property {boolean} [hidden]
 */

/**
 * @typedef {object} Proto_CUserNews_GetAppDetailsSpotlight_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CUserNews_GetAppDetailsSpotlight_Response
 * @property {Proto_CUserNews_GetAppDetailsSpotlight_Response_FeaturedEvent[]} events
 */

/**
 * @typedef {object} Proto_CUserNews_GetAppDetailsSpotlight_Response_FeaturedEvent
 * @property {number} [event_type]
 * @property {number} [event_time]
 * @property {string} [clan_id]
 * @property {string} [clan_announcementid]
 * @property {number} [appid]
 * @property {number} [rtime32_last_modified]
 */

/**
 * @typedef {object} Proto_UserNews
 */

///////////////////////////////////////////////
// service_userreviews.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CUserReviews_Update_Request
 * @property {string} [recommendationid]
 * @property {string} [review_text]
 * @property {boolean} [voted_up]
 * @property {boolean} [is_public]
 * @property {string} [language]
 * @property {boolean} [is_in_early_access]
 * @property {boolean} [received_compensation]
 * @property {boolean} [comments_disabled]
 */

/**
 * @typedef {object} Proto_CUserReviews_Update_Response
 */

/**
 * @typedef {object} Proto_CUserReviews_GetIndividualRecommendations_Request
 * @property {Proto_CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest[]} requests
 */

/**
 * @typedef {object} Proto_CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest
 * @property {string} [steamid]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CUserReviews_GetIndividualRecommendations_Response
 * @property {Proto_RecommendationDetails[]} recommendations
 */

/**
 * @typedef {object} Proto_RecommendationDetails
 * @property {string} [recommendationid]
 * @property {string} [steamid]
 * @property {number} [appid]
 * @property {string} [review]
 * @property {number} [time_created]
 * @property {number} [time_updated]
 * @property {number} [votes_up]
 * @property {number} [votes_down]
 * @property {number} [vote_score]
 * @property {string} [language]
 * @property {number} [comment_count]
 * @property {boolean} [voted_up]
 * @property {boolean} [is_public]
 * @property {boolean} [moderator_hidden]
 * @property {number} [flagged_by_developer]
 * @property {number} [report_score]
 * @property {string} [steamid_moderator]
 * @property {string} [steamid_developer]
 * @property {string} [steamid_dev_responder]
 * @property {string} [developer_response]
 * @property {number} [time_developer_responded]
 * @property {boolean} [developer_flag_cleared]
 * @property {boolean} [written_during_early_access]
 * @property {number} [votes_funny]
 * @property {boolean} [received_compensation]
 * @property {boolean} [unverified_purchase]
 * @property {number} [review_quality]
 * @property {number} [weighted_vote_score]
 * @property {string} [moderation_note]
 * @property {number} [payment_method]
 * @property {number} [playtime_2weeks]
 * @property {number} [playtime_forever]
 * @property {number} [last_playtime]
 * @property {boolean} [comments_disabled]
 * @property {number} [playtime_at_review]
 * @property {boolean} [approved_for_china]
 * @property {number} [ban_check_result]
 * @property {boolean} [refunded]
 * @property {number} [account_score_spend]
 * @property {Proto_CUserReviews_Recommendation_LoyaltyReaction[]} reactions
 * @property {string} [ipaddress]
 */

/**
 * @typedef {object} Proto_CUserReviews_Recommendation_LoyaltyReaction
 * @property {number} [reaction_type]
 * @property {number} [count]
 */

/**
 * @typedef {object} Proto_UserReviews
 */

///////////////////////////////////////////////
// service_video.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CVideo_ClientGetVideoURL_Response
 * @property {string} [video_id]
 * @property {string} [video_url]
 */

/**
 * @typedef {object} Proto_CVideo_SetVideoBookmark_Notification
 * @property {Proto_VideoBookmark[]} bookmarks
 */

/**
 * @typedef {object} Proto_VideoBookmark
 * @property {number} [app_id]
 * @property {number} [playback_position_in_seconds]
 * @property {string} [video_track_id]
 * @property {string} [audio_track_id]
 * @property {string} [timedtext_track_id]
 * @property {number} [last_modified]
 * @property {boolean} [hide_from_watch_history=false]
 * @property {boolean} [hide_from_library=false]
 */

/**
 * @typedef {object} Proto_CVideo_GetVideoBookmarks_Response
 * @property {Proto_VideoBookmark[]} bookmarks
 */

/**
 * @typedef {object} Proto_CVideo_UnlockedH264_Notification
 * @property {Buffer} [encryption_key]
 */

/**
 * @typedef {object} Proto_Video
 */

/**
 * @typedef {object} Proto_VideoClient
 */

///////////////////////////////////////////////
// service_voicechat.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// service_webrtc.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// steamdatagram_messages_auth.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgSteamDatagramRelayAuthTicket
 * @property {number} [time_expiry]
 * @property {string} [authorized_client_identity_string]
 * @property {string} [gameserver_identity_string]
 * @property {number} [authorized_public_ip]
 * @property {Buffer} [gameserver_address]
 * @property {number} [app_id]
 * @property {number} [virtual_port]
 * @property {Proto_CMsgSteamDatagramRelayAuthTicket_ExtraField[]} extra_fields
 * @property {string} [legacy_authorized_steam_id]
 * @property {string} [legacy_gameserver_steam_id]
 * @property {string} [legacy_gameserver_net_id]
 * @property {number} [legacy_gameserver_pop_id]
 * @property {Buffer} [legacy_authorized_client_identity_binary]
 * @property {Buffer} [legacy_gameserver_identity_binary]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramRelayAuthTicket_ExtraField
 * @property {string} [name]
 * @property {string} [string_value]
 * @property {string} [int64_value]
 * @property {string} [fixed64_value]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramSignedRelayAuthTicket
 * @property {string} [reserved_do_not_use]
 * @property {Buffer} [ticket]
 * @property {Buffer} [signature]
 * @property {string} [key_id]
 * @property {Proto_CMsgSteamDatagramCertificateSigned[]} certs
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramCachedCredentialsForApp
 * @property {Buffer} [private_key]
 * @property {Buffer} [cert]
 * @property {Buffer[]} relay_tickets
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramGameCoordinatorServerLogin
 * @property {number} [time_generated]
 * @property {number} [appid]
 * @property {Buffer} [routing]
 * @property {Buffer} [appdata]
 * @property {Buffer} [legacy_identity_binary]
 * @property {string} [identity_string]
 * @property {string} [dummy_steam_id]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramSignedGameCoordinatorServerLogin
 * @property {Proto_CMsgSteamDatagramCertificateSigned} [cert]
 * @property {Buffer} [login]
 * @property {Buffer} [signature]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramHostedServerAddressPlaintext
 * @property {number} [ipv4]
 * @property {Buffer} [ipv6]
 * @property {number} [port]
 * @property {string} [routing_secret]
 */

/**
 * @typedef {object} Proto_CMsgSteamNetworkingIdentityLegacyBinary
 * @property {string} [steam_id]
 * @property {string} [xbox_pairwise_id]
 * @property {Buffer} [generic_bytes]
 * @property {string} [generic_string]
 * @property {Buffer} [ipv6_and_port]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramCertificate
 * @property {Proto_CMsgSteamDatagramCertificate_EKeyType} [key_type]
 * @property {Buffer} [key_data]
 * @property {string} [legacy_steam_id]
 * @property {Proto_CMsgSteamNetworkingIdentityLegacyBinary} [legacy_identity_binary]
 * @property {string} [identity_string]
 * @property {number[]} gameserver_datacenter_ids
 * @property {number} [time_created]
 * @property {number} [time_expiry]
 * @property {number[]} app_ids
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramCertificateSigned
 * @property {Buffer} [cert]
 * @property {string} [ca_key_id]
 * @property {Buffer} [ca_signature]
 * @property {Buffer} [private_key_data]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramCertificateRequest
 * @property {Proto_CMsgSteamDatagramCertificate} [cert]
 */

///////////////////////////////////////////////
// steamdatagram_messages_sdr.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgSteamDatagramRouterPingReply
 * @property {number} [client_timestamp]
 * @property {number[]} latency_datacenter_ids
 * @property {number[]} latency_ping_ms
 * @property {number[]} latency_datacenter_ids_p2p
 * @property {number[]} latency_ping_ms_p2p
 * @property {number} [your_public_ip]
 * @property {number} [your_public_port]
 * @property {number} [server_time]
 * @property {string} [challenge]
 * @property {number} [seconds_until_shutdown]
 * @property {number} [client_cookie]
 * @property {number} [scoring_penalty_relay_cluster]
 * @property {number} [flags]
 * @property {Proto_CMsgSteamDatagramRouterPingReply_RouteException[]} route_exceptions
 * @property {Proto_CMsgSteamDatagramRouterPingReply_AltAddress[]} alt_addresses
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramRouterPingReply_RouteException
 * @property {number} [data_center_id]
 * @property {number} [flags]
 * @property {number} [penalty]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramRouterPingReply_AltAddress
 * @property {number} [ipv4]
 * @property {number} [port]
 * @property {number} [penalty]
 * @property {Proto_CMsgSteamDatagramRouterPingReply_AltAddress_Protocol} [protocol]
 * @property {string} [id]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramGameserverPingRequest
 * @property {number} [your_public_ip]
 * @property {number} [your_public_port]
 * @property {number} [server_time]
 * @property {string} [challenge]
 * @property {number} [router_timestamp]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramLegacyGameserverPingReply
 * @property {number} [router_timestamp]
 * @property {string} [dummy_pad]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramGameserverPingReply
 * @property {Proto_CMsgSteamDatagramCertificateSigned} [cert]
 * @property {Buffer} [signed_data]
 * @property {Buffer} [signature]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramGameserverPingReply_SignedData
 * @property {number} [challenge_time]
 * @property {string} [challenge]
 * @property {number} [router_timestamp]
 * @property {number} [data_center_id]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramNoSessionRelayToClient
 * @property {number} [connection_id]
 * @property {number} [your_public_ip]
 * @property {number} [your_public_port]
 * @property {number} [server_time]
 * @property {string} [challenge]
 * @property {number} [seconds_until_shutdown]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramNoSessionRelayToPeer
 * @property {number} [legacy_relay_session_id]
 * @property {number} [from_relay_session_id]
 * @property {number} [from_connection_id]
 * @property {string} [kludge_pad]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramClientPingSampleRequest
 * @property {number} [connection_id]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramClientPingSampleReply
 * @property {number} [connection_id]
 * @property {boolean} [override_active]
 * @property {Proto_CMsgSteamDatagramClientPingSampleReply_POP[]} pops
 * @property {Proto_CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter[]} legacy_data_centers
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramClientPingSampleReply_POP
 * @property {number} [pop_id]
 * @property {number} [default_front_ping_ms]
 * @property {number} [cluster_penalty]
 * @property {Proto_CMsgSteamDatagramClientPingSampleReply_POP_AltAddress[]} alt_addresses
 * @property {number} [default_e2e_ping_ms]
 * @property {number} [default_e2e_score]
 * @property {number} [p2p_via_peer_relay_pop_id]
 * @property {number} [best_dc_ping_ms]
 * @property {number} [best_dc_score]
 * @property {number} [best_dc_via_relay_pop_id]
 * @property {number} [default_dc_ping_ms]
 * @property {number} [default_dc_score]
 * @property {number} [default_dc_via_relay_pop_id]
 * @property {number} [test_dc_ping_ms]
 * @property {number} [test_dc_score]
 * @property {number} [test_dc_via_relay_pop_id]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramClientPingSampleReply_POP_AltAddress
 * @property {string} [id]
 * @property {number} [front_ping_ms]
 * @property {number} [penalty]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter
 * @property {number} [data_center_id]
 * @property {number} [best_dc_via_relay_pop_id]
 * @property {number} [best_dc_ping_ms]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramClientSwitchedPrimary
 * @property {number} [connection_id]
 * @property {number} [from_ip]
 * @property {number} [from_port]
 * @property {number} [from_router_cluster]
 * @property {number} [from_active_time]
 * @property {number} [from_active_packets_recv]
 * @property {string} [from_dropped_reason]
 * @property {number} [gap_ms]
 * @property {Proto_CMsgSteamDatagramClientSwitchedPrimary_RouterQuality} [from_quality_now]
 * @property {Proto_CMsgSteamDatagramClientSwitchedPrimary_RouterQuality} [to_quality_now]
 * @property {Proto_CMsgSteamDatagramClientSwitchedPrimary_RouterQuality} [from_quality_then]
 * @property {Proto_CMsgSteamDatagramClientSwitchedPrimary_RouterQuality} [to_quality_then]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramClientSwitchedPrimary_RouterQuality
 * @property {number} [score]
 * @property {number} [front_ping]
 * @property {number} [back_ping]
 * @property {number} [seconds_until_down]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramConnectRequest
 * @property {number} [connection_id]
 * @property {string} [my_timestamp]
 * @property {number} [ping_est_ms]
 * @property {number} [virtual_port]
 * @property {number} [gameserver_relay_session_id]
 * @property {Proto_CMsgSteamDatagramSessionCryptInfoSigned} [crypt]
 * @property {Proto_CMsgSteamDatagramCertificateSigned} [cert]
 * @property {string} [routing_secret]
 * @property {string} [legacy_client_steam_id]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramConnectOK
 * @property {number} [client_connection_id]
 * @property {number} [server_connection_id]
 * @property {string} [your_timestamp]
 * @property {number} [delay_time_usec]
 * @property {number} [gameserver_relay_session_id]
 * @property {Proto_CMsgSteamDatagramSessionCryptInfoSigned} [crypt]
 * @property {Proto_CMsgSteamDatagramCertificateSigned} [cert]
 */

/**
 * @typedef {object} Proto_CMsgSteamNetworkingP2PSDRRoutingSummary
 * @property {number} [initial_ping]
 * @property {number} [initial_ping_front_local]
 * @property {number} [initial_ping_front_remote]
 * @property {number} [initial_score]
 * @property {number} [initial_pop_local]
 * @property {number} [initial_pop_remote]
 * @property {number} [best_ping]
 * @property {number} [best_ping_front_local]
 * @property {number} [best_ping_front_remote]
 * @property {number} [best_score]
 * @property {number} [best_pop_local]
 * @property {number} [best_pop_remote]
 * @property {number} [best_time]
 * @property {number} [negotiation_ms]
 * @property {number} [selected_seconds]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramP2PRoutingSummary
 * @property {Proto_CMsgSteamNetworkingICESessionSummary} [ice]
 * @property {Proto_CMsgSteamNetworkingP2PSDRRoutingSummary} [sdr]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramConnectionClosed
 * @property {number} [to_connection_id]
 * @property {number} [from_connection_id]
 * @property {string} [from_identity_string]
 * @property {Proto_CMsgSteamNetworkingIdentityLegacyBinary} [legacy_from_identity_binary]
 * @property {string} [legacy_from_steam_id]
 * @property {number} [legacy_gameserver_relay_session_id]
 * @property {number} [to_relay_session_id]
 * @property {number} [from_relay_session_id]
 * @property {Buffer} [forward_target_relay_routing_token]
 * @property {number} [forward_target_revision]
 * @property {Proto_CMsgSteamDatagramConnectionClosed_ERelayMode} [relay_mode]
 * @property {string} [debug]
 * @property {number} [reason_code]
 * @property {string} [routing_secret]
 * @property {boolean} [not_primary_session]
 * @property {boolean} [not_primary_transport]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_relay]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_e2e]
 * @property {Proto_CMsgSteamDatagramP2PRoutingSummary} [p2p_routing_summary]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramNoConnection
 * @property {number} [to_connection_id]
 * @property {number} [from_connection_id]
 * @property {number} [legacy_gameserver_relay_session_id]
 * @property {number} [to_relay_session_id]
 * @property {number} [from_relay_session_id]
 * @property {string} [from_identity_string]
 * @property {string} [legacy_from_steam_id]
 * @property {boolean} [end_to_end]
 * @property {boolean} [not_primary_session]
 * @property {boolean} [not_primary_transport]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_relay]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_e2e]
 * @property {Proto_CMsgSteamDatagramP2PRoutingSummary} [p2p_routing_summary]
 * @property {string} [routing_secret]
 * @property {number} [dummy_pad]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramGameserverSessionRequest
 * @property {Buffer} [ticket]
 * @property {number} [challenge_time]
 * @property {string} [challenge]
 * @property {number} [client_connection_id]
 * @property {number} [server_connection_id]
 * @property {number} [network_config_version]
 * @property {number} [protocol_version]
 * @property {string} [platform]
 * @property {string} [build]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramGameserverSessionEstablished
 * @property {number} [connection_id]
 * @property {string} [gameserver_identity_string]
 * @property {number} [seconds_until_shutdown]
 * @property {number} [seq_num_r2c]
 * @property {Buffer} [dummy_legacy_identity_binary]
 * @property {string} [legacy_gameserver_steamid]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramConnectionStatsClientToRouter
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_relay]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_e2e]
 * @property {number[]} ack_relay
 * @property {number[]} legacy_ack_e2e
 * @property {number} [flags]
 * @property {number} [client_connection_id]
 * @property {number} [seq_num_c2r]
 * @property {number} [seq_num_e2e]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramConnectionStatsRouterToClient
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_relay]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_e2e]
 * @property {number} [seconds_until_shutdown]
 * @property {number} [migrate_request_ip]
 * @property {number} [migrate_request_port]
 * @property {number} [scoring_penalty_relay_cluster]
 * @property {number[]} ack_relay
 * @property {number[]} legacy_ack_e2e
 * @property {number} [flags]
 * @property {number} [client_connection_id]
 * @property {number} [seq_num_r2c]
 * @property {number} [seq_num_e2e]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramConnectionStatsRouterToServer
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_relay]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_e2e]
 * @property {number[]} ack_relay
 * @property {number[]} legacy_ack_e2e
 * @property {number} [flags]
 * @property {number} [seq_num_r2s]
 * @property {number} [seq_num_e2e]
 * @property {string} [client_identity_string]
 * @property {string} [legacy_client_steam_id]
 * @property {number} [relay_session_id]
 * @property {number} [client_connection_id]
 * @property {number} [server_connection_id]
 * @property {string} [routing_secret]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramConnectionStatsServerToRouter
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_relay]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_e2e]
 * @property {number[]} ack_relay
 * @property {number[]} legacy_ack_e2e
 * @property {number} [flags]
 * @property {number} [seq_num_s2r]
 * @property {number} [seq_num_e2e]
 * @property {number} [relay_session_id]
 * @property {number} [client_connection_id]
 * @property {number} [server_connection_id]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramP2PSessionRequestBody
 * @property {number} [challenge_time]
 * @property {string} [challenge]
 * @property {number} [client_connection_id]
 * @property {string} [legacy_peer_steam_id]
 * @property {string} [peer_identity_string]
 * @property {number} [peer_connection_id]
 * @property {number} [protocol_version]
 * @property {number} [network_config_version]
 * @property {number} [unused_public_ip]
 * @property {string} [platform]
 * @property {string} [build]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramP2PSessionRequest
 * @property {Proto_CMsgSteamDatagramCertificateSigned} [cert]
 * @property {Buffer} [body]
 * @property {Buffer} [signature]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramP2PSessionEstablished
 * @property {number} [connection_id]
 * @property {number} [seconds_until_shutdown]
 * @property {Buffer} [relay_routing_token]
 * @property {number} [seq_num_r2c]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramConnectionStatsP2PClientToRouter
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_relay]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_e2e]
 * @property {Proto_CMsgSteamDatagramP2PRoutingSummary} [p2p_routing_summary]
 * @property {number[]} ack_relay
 * @property {number[]} legacy_ack_e2e
 * @property {number} [flags]
 * @property {Buffer} [forward_target_relay_routing_token]
 * @property {number} [forward_target_revision]
 * @property {Buffer} [routes]
 * @property {number} [ack_peer_routes_revision]
 * @property {number} [connection_id]
 * @property {number} [seq_num_c2r]
 * @property {number} [seq_num_e2e]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramConnectionStatsP2PRouterToClient
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_relay]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [quality_e2e]
 * @property {number} [seconds_until_shutdown]
 * @property {number} [migrate_request_ip]
 * @property {number} [migrate_request_port]
 * @property {number} [scoring_penalty_relay_cluster]
 * @property {number[]} ack_relay
 * @property {number[]} legacy_ack_e2e
 * @property {number} [flags]
 * @property {number} [ack_forward_target_revision]
 * @property {Buffer} [routes]
 * @property {number} [ack_peer_routes_revision]
 * @property {number} [connection_id]
 * @property {number} [seq_num_r2c]
 * @property {number} [seq_num_e2e]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramP2PBadRouteRouterToClient
 * @property {number} [connection_id]
 * @property {Buffer} [failed_relay_routing_token]
 * @property {number} [ack_forward_target_revision]
 * @property {string} [kludge_pad]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramP2PRoutes
 * @property {Proto_CMsgSteamDatagramP2PRoutes_RelayCluster[]} relay_clusters
 * @property {Proto_CMsgSteamDatagramP2PRoutes_Route[]} routes
 * @property {number} [revision]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramP2PRoutes_RelayCluster
 * @property {number} [pop_id]
 * @property {number} [ping_ms]
 * @property {number} [score_penalty]
 * @property {Buffer} [session_relay_routing_token]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramP2PRoutes_Route
 * @property {number} [my_pop_id]
 * @property {number} [your_pop_id]
 * @property {number} [legacy_score]
 * @property {number} [interior_score]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramSetSecondaryAddressRequest
 * @property {number} [client_main_ip]
 * @property {number} [client_main_port]
 * @property {number} [client_connection_id]
 * @property {string} [client_identity]
 * @property {boolean} [request_send_duplication]
 * @property {Buffer} [kludge_pad]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramSetSecondaryAddressResult
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramSessionCryptInfo
 * @property {Proto_CMsgSteamDatagramSessionCryptInfo_EKeyType} [key_type]
 * @property {Buffer} [key_data]
 * @property {string} [nonce]
 * @property {number} [protocol_version]
 * @property {ESteamNetworkingSocketsCipher[]} ciphers
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramSessionCryptInfoSigned
 * @property {Buffer} [info]
 * @property {Buffer} [signature]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramDiagnostic
 * @property {number} [severity]
 * @property {string} [text]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramLinkInstantaneousStats
 * @property {number} [out_packets_per_sec_x10]
 * @property {number} [out_bytes_per_sec]
 * @property {number} [in_packets_per_sec_x10]
 * @property {number} [in_bytes_per_sec]
 * @property {number} [ping_ms]
 * @property {number} [packets_dropped_pct]
 * @property {number} [packets_weird_sequence_pct]
 * @property {number} [peak_jitter_usec]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramLinkLifetimeStats
 * @property {number} [connected_seconds]
 * @property {string} [packets_sent]
 * @property {string} [kb_sent]
 * @property {string} [packets_recv]
 * @property {string} [kb_recv]
 * @property {string} [packets_recv_sequenced]
 * @property {string} [packets_recv_dropped]
 * @property {string} [packets_recv_out_of_order]
 * @property {string} [packets_recv_duplicate]
 * @property {string} [packets_recv_lurch]
 * @property {string[]} multipath_packets_recv_sequenced
 * @property {string[]} multipath_packets_recv_later
 * @property {number} [multipath_send_enabled]
 * @property {number} [quality_histogram_100]
 * @property {number} [quality_histogram_99]
 * @property {number} [quality_histogram_97]
 * @property {number} [quality_histogram_95]
 * @property {number} [quality_histogram_90]
 * @property {number} [quality_histogram_75]
 * @property {number} [quality_histogram_50]
 * @property {number} [quality_histogram_1]
 * @property {number} [quality_histogram_dead]
 * @property {number} [quality_ntile_2nd]
 * @property {number} [quality_ntile_5th]
 * @property {number} [quality_ntile_25th]
 * @property {number} [quality_ntile_50th]
 * @property {number} [ping_histogram_25]
 * @property {number} [ping_histogram_50]
 * @property {number} [ping_histogram_75]
 * @property {number} [ping_histogram_100]
 * @property {number} [ping_histogram_125]
 * @property {number} [ping_histogram_150]
 * @property {number} [ping_histogram_200]
 * @property {number} [ping_histogram_300]
 * @property {number} [ping_histogram_max]
 * @property {number} [ping_ntile_5th]
 * @property {number} [ping_ntile_50th]
 * @property {number} [ping_ntile_75th]
 * @property {number} [ping_ntile_95th]
 * @property {number} [ping_ntile_98th]
 * @property {number} [jitter_histogram_negligible]
 * @property {number} [jitter_histogram_1]
 * @property {number} [jitter_histogram_2]
 * @property {number} [jitter_histogram_5]
 * @property {number} [jitter_histogram_10]
 * @property {number} [jitter_histogram_20]
 * @property {number} [txspeed_max]
 * @property {number} [txspeed_histogram_16]
 * @property {number} [txspeed_histogram_32]
 * @property {number} [txspeed_histogram_64]
 * @property {number} [txspeed_histogram_128]
 * @property {number} [txspeed_histogram_256]
 * @property {number} [txspeed_histogram_512]
 * @property {number} [txspeed_histogram_1024]
 * @property {number} [txspeed_histogram_max]
 * @property {number} [txspeed_ntile_5th]
 * @property {number} [txspeed_ntile_50th]
 * @property {number} [txspeed_ntile_75th]
 * @property {number} [txspeed_ntile_95th]
 * @property {number} [txspeed_ntile_98th]
 * @property {number} [rxspeed_max]
 * @property {number} [rxspeed_histogram_16]
 * @property {number} [rxspeed_histogram_32]
 * @property {number} [rxspeed_histogram_64]
 * @property {number} [rxspeed_histogram_128]
 * @property {number} [rxspeed_histogram_256]
 * @property {number} [rxspeed_histogram_512]
 * @property {number} [rxspeed_histogram_1024]
 * @property {number} [rxspeed_histogram_max]
 * @property {number} [rxspeed_ntile_5th]
 * @property {number} [rxspeed_ntile_50th]
 * @property {number} [rxspeed_ntile_75th]
 * @property {number} [rxspeed_ntile_95th]
 * @property {number} [rxspeed_ntile_98th]
 */

/**
 * @typedef {object} Proto_CMsgSteamDatagramConnectionQuality
 * @property {Proto_CMsgSteamDatagramLinkInstantaneousStats} [instantaneous]
 * @property {Proto_CMsgSteamDatagramLinkLifetimeStats} [lifetime]
 */

/**
 * @typedef {object} Proto_CMsgICERendezvous
 * @property {Proto_CMsgICERendezvous_Auth} [auth]
 * @property {Proto_CMsgICERendezvous_Candidate} [add_candidate]
 */

/**
 * @typedef {object} Proto_CMsgICERendezvous_Auth
 * @property {string} [pwd_frag]
 */

/**
 * @typedef {object} Proto_CMsgICERendezvous_Candidate
 * @property {string} [candidate]
 */

/**
 * @typedef {object} Proto_CMsgSteamNetworkingP2PRendezvous
 * @property {string} [from_identity]
 * @property {number} [from_connection_id]
 * @property {string} [to_identity]
 * @property {number} [to_connection_id]
 * @property {Buffer} [sdr_routes]
 * @property {number} [ack_peer_routes_revision]
 * @property {boolean} [ice_enabled]
 * @property {Buffer} [hosted_server_ticket]
 * @property {Proto_CMsgSteamNetworkingP2PRendezvous_ConnectRequest} [connect_request]
 * @property {Proto_CMsgSteamNetworkingP2PRendezvous_ConnectOK} [connect_ok]
 * @property {Proto_CMsgSteamNetworkingP2PRendezvous_ConnectionClosed} [connection_closed]
 * @property {number} [ack_reliable_msg]
 * @property {number} [first_reliable_msg]
 * @property {Proto_CMsgSteamNetworkingP2PRendezvous_ReliableMessage[]} reliable_messages
 * @property {Proto_CMsgSteamNetworkingP2PRendezvous_ApplicationMessage[]} application_messages
 */

/**
 * @typedef {object} Proto_CMsgSteamNetworkingP2PRendezvous_ConnectRequest
 * @property {Proto_CMsgSteamDatagramSessionCryptInfoSigned} [crypt]
 * @property {Proto_CMsgSteamDatagramCertificateSigned} [cert]
 * @property {number} [to_virtual_port]
 * @property {number} [from_virtual_port]
 * @property {string} [from_fakeip]
 */

/**
 * @typedef {object} Proto_CMsgSteamNetworkingP2PRendezvous_ConnectOK
 * @property {Proto_CMsgSteamDatagramSessionCryptInfoSigned} [crypt]
 * @property {Proto_CMsgSteamDatagramCertificateSigned} [cert]
 */

/**
 * @typedef {object} Proto_CMsgSteamNetworkingP2PRendezvous_ConnectionClosed
 * @property {string} [debug]
 * @property {number} [reason_code]
 */

/**
 * @typedef {object} Proto_CMsgSteamNetworkingP2PRendezvous_ReliableMessage
 * @property {Proto_CMsgICERendezvous} [ice]
 */

/**
 * @typedef {object} Proto_CMsgSteamNetworkingP2PRendezvous_ApplicationMessage
 * @property {Buffer} [data]
 * @property {string} [msg_num]
 * @property {number} [flags]
 */

/**
 * @typedef {object} Proto_CMsgSteamNetworkingICESessionSummary
 * @property {number} [failure_reason_code]
 * @property {number} [local_candidate_types]
 * @property {number} [remote_candidate_types]
 * @property {number} [initial_route_kind]
 * @property {number} [initial_ping]
 * @property {number} [initial_score]
 * @property {number} [negotiation_ms]
 * @property {number} [best_route_kind]
 * @property {number} [best_ping]
 * @property {number} [best_score]
 * @property {number} [best_time]
 * @property {number} [selected_seconds]
 * @property {number} [user_settings]
 * @property {number} [ice_enable_var]
 * @property {number} [local_candidate_types_allowed]
 */

///////////////////////////////////////////////
// steammessages_accounthardware.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CAccountHardware_RegisterSteamController_Request
 * @property {string} [serial_number]
 * @property {string} [controller_code]
 */

/**
 * @typedef {object} Proto_CAccountHardware_RegisterSteamController_Response
 */

/**
 * @typedef {object} Proto_CAccountHardware_CompleteSteamControllerRegistration_Request
 * @property {string} [serial_number]
 * @property {string} [controller_code]
 */

/**
 * @typedef {object} Proto_CAccountHardware_CompleteSteamControllerRegistration_Response
 */

/**
 * @typedef {object} Proto_CAccountHardware_QueryAccountsRegisteredToSerial_Request
 * @property {string} [serial_number]
 * @property {string} [controller_code]
 */

/**
 * @typedef {object} Proto_CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
 * @property {number} [accountid]
 * @property {boolean} [registration_complete]
 */

/**
 * @typedef {object} Proto_CAccountHardware_QueryAccountsRegisteredToSerial_Response
 * @property {Proto_CAccountHardware_QueryAccountsRegisteredToSerial_Accounts[]} accounts
 */

/**
 * @typedef {object} Proto_CAccountHardware_SteamControllerSetConfig_ControllerConfig
 * @property {string} [appidorname]
 * @property {string} [publishedfileid]
 * @property {string} [templatename]
 */

/**
 * @typedef {object} Proto_CAccountHardware_SteamControllerSetConfig_Request
 * @property {string} [serial_number]
 * @property {string} [controller_code]
 * @property {number} [accountid]
 * @property {Proto_CAccountHardware_SteamControllerSetConfig_ControllerConfig[]} configurations
 * @property {number} [controller_type=2]
 * @property {boolean} [only_for_this_serial=false]
 */

/**
 * @typedef {object} Proto_CAccountHardware_SteamControllerSetConfig_Response
 */

/**
 * @typedef {object} Proto_CAccountHardware_SteamControllerGetConfig_Request
 * @property {string} [serial_number]
 * @property {string} [controller_code]
 * @property {number} [accountid]
 * @property {string} [appidorname]
 * @property {number} [controller_type=2]
 * @property {boolean} [only_for_this_serial=false]
 */

/**
 * @typedef {object} Proto_CAccountHardware_SteamControllerGetConfig_ControllerConfig
 * @property {string} [appidorname]
 * @property {string} [publishedfileid]
 * @property {string} [templatename]
 * @property {string} [serial_number]
 */

/**
 * @typedef {object} Proto_CAccountHardware_SteamControllerGetConfig_Response
 * @property {Proto_CAccountHardware_SteamControllerGetConfig_ControllerConfig[]} configurations
 */

/**
 * @typedef {object} Proto_CAccountHardware_DeRegisterSteamController_Request
 * @property {string} [serial_number]
 * @property {string} [controller_code]
 * @property {number} [accountid]
 */

/**
 * @typedef {object} Proto_CAccountHardware_DeRegisterSteamController_Response
 */

/**
 * @typedef {object} Proto_CAccountHardware_SetPersonalizationFile_Request
 * @property {string} [serial_number]
 * @property {string} [publishedfileid]
 * @property {number} [accountid]
 */

/**
 * @typedef {object} Proto_CAccountHardware_SetPersonalizationFile_Response
 */

/**
 * @typedef {object} Proto_CAccountHardware_GetPersonalizationFile_Request
 * @property {string} [serial_number]
 * @property {number} [accountid]
 */

/**
 * @typedef {object} Proto_CAccountHardware_GetPersonalizationFile_Response
 * @property {string} [publishedfileid]
 */

/**
 * @typedef {object} Proto_CAccountHardware_VRCompatibilityCheck_Request
 * @property {string} [product_name]
 * @property {Proto_CAccountHardware_VRCompatibilityCheck_Request_Pair[]} values
 */

/**
 * @typedef {object} Proto_CAccountHardware_VRCompatibilityCheck_Request_Pair
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CAccountHardware_VRCompatibilityCheck_Response
 * @property {Proto_CAccountHardware_VRCompatibilityCheck_Response_Pair[]} values
 * @property {Proto_CAccountHardware_VRCompatibilityCheck_Response_ComponentDisplay[]} components
 */

/**
 * @typedef {object} Proto_CAccountHardware_VRCompatibilityCheck_Response_Pair
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CAccountHardware_VRCompatibilityCheck_Response_ComponentDisplay
 * @property {string} [name]
 * @property {string} [image]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CAccountHardware_RegisterValveIndexComponent_Request
 * @property {string} [serial_number]
 * @property {string} [manufacturer_serial_number]
 * @property {string} [component_code]
 * @property {EValveIndexComponent} [component_type]
 * @property {number} [estimated_time_registered]
 */

/**
 * @typedef {object} Proto_CAccountHardware_RegisterValveIndexComponent_Response
 */

/**
 * @typedef {object} Proto_AccountHardware
 */

///////////////////////////////////////////////
// steammessages_appoverview.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CAppOverview_AppAssociation
 * @property {EAppAssociationType} [type]
 * @property {string} [name]
 */

/**
 * @typedef {object} Proto_CAppOverview_PerClientData
 * @property {string} [clientid]
 * @property {string} [client_name]
 * @property {EDisplayStatus} [display_status]
 * @property {number} [status_percentage=0]
 * @property {string} [active_beta]
 * @property {boolean} [installed]
 * @property {string} [bytes_downloaded=0]
 * @property {string} [bytes_total=0]
 * @property {boolean} [streaming_to_local_client]
 * @property {boolean} [is_available_on_current_platform]
 * @property {boolean} [is_invalid_os_type]
 * @property {number} [playtime_left]
 */

/**
 * @typedef {object} Proto_CAppOverview
 * @property {number} [appid]
 * @property {string} [display_name]
 * @property {boolean} [visible_in_game_list]
 * @property {string} [sort_as]
 * @property {EProtoAppType} [app_type]
 * @property {number} [mru_index]
 * @property {number} [rt_recent_activity_time=0]
 * @property {number} [minutes_playtime_forever=0]
 * @property {number} [minutes_playtime_last_two_weeks=0]
 * @property {number} [rt_last_time_played=0]
 * @property {number[]} store_tag
 * @property {Proto_CAppOverview_AppAssociation[]} association
 * @property {number[]} store_category
 * @property {number} [rt_original_release_date=0]
 * @property {number} [rt_steam_release_date=0]
 * @property {string} [icon_hash]
 * @property {string} [logo_hash]
 * @property {EAppControllerSupportLevel} [controller_support]
 * @property {boolean} [vr_supported]
 * @property {number} [metacritic_score]
 * @property {string} [size_on_disk]
 * @property {boolean} [third_party_mod]
 * @property {string} [icon_data]
 * @property {string} [icon_data_format]
 * @property {string} [gameid]
 * @property {string} [library_capsule_filename]
 * @property {Proto_CAppOverview_PerClientData[]} per_client_data
 * @property {string} [most_available_clientid]
 * @property {string} [selected_clientid]
 * @property {number} [rt_store_asset_mtime]
 * @property {number} [rt_custom_image_mtime]
 * @property {number} [optional_parent_app_id]
 * @property {number} [owner_account_id]
 * @property {boolean} [compat_mapping_enabled]
 * @property {number} [compat_mapping_priority]
 * @property {string} [compat_mapping_tool_name]
 * @property {number} [review_score_with_bombs]
 * @property {number} [review_percentage_with_bombs]
 * @property {number} [review_score_without_bombs]
 * @property {number} [review_percentage_without_bombs]
 * @property {string} [library_id]
 * @property {boolean} [vr_only]
 * @property {number} [mastersub_appid]
 * @property {string} [mastersub_includedwith_logo]
 * @property {number} [compat_allowlist_setting=0]
 * @property {string} [site_license_site_name]
 * @property {number} [shortcut_override_appid]
 */

/**
 * @typedef {object} Proto_CAppOverview_Change
 * @property {Proto_CAppOverview[]} app_overview
 * @property {number[]} removed_appid
 */

/**
 * @typedef {object} Proto_CAppBootstrapData
 * @property {number} [appid]
 * @property {boolean} [hidden]
 * @property {string[]} user_tag
 */

/**
 * @typedef {object} Proto_CLibraryBootstrapData
 * @property {Proto_CAppBootstrapData[]} app_data
 */

///////////////////////////////////////////////
// steammessages_auth.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CAuthentication_GetPasswordRSAPublicKey_Request
 * @property {string} [account_name]
 */

/**
 * @typedef {object} Proto_CAuthentication_GetPasswordRSAPublicKey_Response
 * @property {string} [publickey_mod]
 * @property {string} [publickey_exp]
 * @property {string} [timestamp]
 */

/**
 * @typedef {object} Proto_CAuthentication_BeginAuthSessionViaQR_Request
 * @property {string} [device_friendly_name]
 * @property {EAuthTokenPlatformType} [platform_type]
 */

/**
 * @typedef {object} Proto_CAuthentication_AllowedConfirmation
 * @property {EAuthSessionGuardType} [confirmation_type]
 * @property {string} [associated_message]
 */

/**
 * @typedef {object} Proto_CAuthentication_BeginAuthSessionViaQR_Response
 * @property {string} [client_id]
 * @property {string} [challenge_url]
 * @property {Buffer} [request_id]
 * @property {number} [interval]
 * @property {Proto_CAuthentication_AllowedConfirmation[]} allowed_confirmations
 * @property {number} [version]
 */

/**
 * @typedef {object} Proto_CAuthentication_BeginAuthSessionViaCredentials_Request
 * @property {string} [device_friendly_name]
 * @property {string} [account_name]
 * @property {string} [encrypted_password]
 * @property {string} [encryption_timestamp]
 * @property {boolean} [remember_login]
 * @property {EAuthTokenPlatformType} [platform_type]
 */

/**
 * @typedef {object} Proto_CAuthentication_BeginAuthSessionViaCredentials_Response
 * @property {string} [client_id]
 * @property {Buffer} [request_id]
 * @property {number} [interval]
 * @property {Proto_CAuthentication_AllowedConfirmation[]} allowed_confirmations
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CAuthentication_PollAuthSessionStatus_Request
 * @property {string} [client_id]
 * @property {Buffer} [request_id]
 */

/**
 * @typedef {object} Proto_CAuthentication_PollAuthSessionStatus_Response
 * @property {string} [new_client_id]
 * @property {string} [new_challenge_url]
 * @property {string} [refresh_token]
 * @property {string} [access_token]
 */

/**
 * @typedef {object} Proto_CAuthentication_GetAuthSessionInfo_Request
 * @property {string} [client_id]
 */

/**
 * @typedef {object} Proto_CAuthentication_GetAuthSessionInfo_Response
 * @property {string} [ip]
 * @property {string} [geoloc]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {EAuthTokenPlatformType} [platform_type]
 * @property {string} [device_friendly_name]
 */

/**
 * @typedef {object} Proto_CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
 * @property {number} [version]
 * @property {string} [client_id]
 * @property {string} [steamid]
 * @property {Buffer} [signature]
 * @property {boolean} [confirm=false]
 */

/**
 * @typedef {object} Proto_CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
 */

/**
 * @typedef {object} Proto_CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
 * @property {string} [client_id]
 * @property {string} [steamid]
 * @property {string} [code]
 * @property {EAuthSessionGuardType} [code_type]
 */

/**
 * @typedef {object} Proto_CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
 */

/**
 * @typedef {object} Proto_CCloudGaming_CreateNonce_Request
 * @property {string} [platform]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CCloudGaming_CreateNonce_Response
 * @property {string} [nonce]
 * @property {number} [expiry]
 */

/**
 * @typedef {object} Proto_CCloudGaming_GetTimeRemaining_Request
 * @property {string} [platform]
 * @property {number[]} appid_list
 */

/**
 * @typedef {object} Proto_CCloudGaming_TimeRemaining
 * @property {number} [appid]
 * @property {number} [minutes_remaining]
 */

/**
 * @typedef {object} Proto_CCloudGaming_GetTimeRemaining_Response
 * @property {Proto_CCloudGaming_TimeRemaining[]} entries
 */

/**
 * @typedef {object} Proto_Authentication
 */

/**
 * @typedef {object} Proto_CloudGaming
 */

///////////////////////////////////////////////
// steammessages_base.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// steammessages_broadcast.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CBroadcast_BeginBroadcastSession_Request
 * @property {number} [permission]
 * @property {string} [gameid]
 * @property {string} [client_instance_id]
 * @property {string} [title]
 * @property {number} [cellid]
 * @property {string} [rtmp_token]
 * @property {boolean} [thumbnail_upload]
 * @property {string} [client_beta]
 * @property {number} [sysid]
 * @property {boolean} [allow_webrtc]
 */

/**
 * @typedef {object} Proto_CBroadcast_EndBroadcastSession_Request
 * @property {string} [broadcast_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_StartBroadcastUpload_Request
 * @property {string} [broadcast_id]
 * @property {number} [cellid]
 * @property {boolean} [as_rtmp]
 * @property {number} [delay_seconds]
 * @property {string} [rtmp_token=0]
 * @property {number} [upload_ip_address]
 * @property {boolean} [is_replay]
 * @property {number} [sysid]
 */

/**
 * @typedef {object} Proto_CBroadcast_NotifyBroadcastUploadStop_Notification
 * @property {string} [broadcast_upload_id]
 * @property {number} [upload_result]
 */

/**
 * @typedef {object} Proto_CBroadcast_WatchBroadcast_Request
 * @property {string} [steamid]
 * @property {string} [existing_broadcast_id]
 * @property {string} [viewer_token]
 * @property {number} [client_cell]
 * @property {EBroadcastWatchLocation} [watch_location]
 * @property {boolean} [is_webrtc]
 */

/**
 * @typedef {object} Proto_CBroadcast_HeartbeatBroadcast_Notification
 * @property {string} [steamid]
 * @property {string} [broadcast_id]
 * @property {string} [viewer_token]
 * @property {number} [representation]
 */

/**
 * @typedef {object} Proto_CBroadcast_StopWatchingBroadcast_Notification
 * @property {string} [steamid]
 * @property {string} [broadcast_id]
 * @property {string} [viewer_token]
 */

/**
 * @typedef {object} Proto_CBroadcast_InviteToBroadcast_Request
 * @property {string} [steamid]
 * @property {boolean} [approval_response]
 */

/**
 * @typedef {object} Proto_CBroadcast_SendBroadcastStateToServer_Request
 * @property {number} [permission]
 * @property {string} [gameid]
 * @property {string} [title]
 * @property {string} [game_data_config]
 */

/**
 * @typedef {object} Proto_CBroadcast_NotifyBroadcastSessionHeartbeat_Notification
 * @property {string} [broadcast_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastChatInfo_Request
 * @property {string} [steamid]
 * @property {string} [broadcast_id]
 * @property {number} [client_ip]
 * @property {number} [client_cell]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastChatUserNames_Request
 * @property {string} [chat_id]
 * @property {string[]} user_steamid
 */

/**
 * @typedef {object} Proto_CBroadcast_StartBuildClip_Request
 * @property {string} [steamid]
 * @property {string} [broadcast_session_id]
 * @property {number} [first_segment]
 * @property {number} [num_segments]
 * @property {string} [clip_description]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBuildClipStatus_Request
 * @property {string} [broadcast_clip_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_SetClipDetails_Request
 * @property {string} [broadcast_clip_id]
 * @property {number} [start_time]
 * @property {number} [end_time]
 * @property {string} [video_description]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetClipDetails_Request
 * @property {string} [broadcast_clip_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_SetRTMPInfo_Request
 * @property {number} [broadcast_permission]
 * @property {boolean} [update_token]
 * @property {number} [broadcast_delay]
 * @property {number} [app_id]
 * @property {number} [required_app_id]
 * @property {EBroadcastChatPermission} [broadcast_chat_permission]
 * @property {number} [broadcast_buffer]
 * @property {string} [steamid]
 * @property {number} [chat_rate_limit]
 * @property {boolean} [enable_replay]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetRTMPInfo_Request
 * @property {number} [ip]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCHaveTURNServer_Notification
 * @property {string} [broadcast_session_id]
 * @property {string} [turn_server]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCStartResult_Request
 * @property {string} [webrtc_session_id]
 * @property {boolean} [started]
 * @property {string} [offer]
 * @property {number} [resolution_x]
 * @property {number} [resolution_y]
 * @property {number} [fps]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCStopped_Request
 * @property {string} [webrtc_session_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCSetAnswer_Request
 * @property {string} [broadcaster_steamid]
 * @property {string} [webrtc_session_id]
 * @property {string} [answer]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCLookupTURNServer_Request
 * @property {number} [cellid]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCAddHostCandidate_Request
 * @property {string} [webrtc_session_id]
 * @property {Proto_CBroadcast_WebRTC_Candidate} [candidate]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCAddViewerCandidate_Request
 * @property {string} [broadcaster_steamid]
 * @property {string} [webrtc_session_id]
 * @property {Proto_CBroadcast_WebRTC_Candidate} [candidate]
 */

/**
 * @typedef {object} Proto_CBroadcast_WebRTCGetHostCandidates_Request
 * @property {string} [broadcaster_steamid]
 * @property {string} [webrtc_session_id]
 * @property {number} [candidate_generation]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastUploadStats_Request
 * @property {number} [row_limit=100]
 * @property {number} [start_time=0]
 * @property {string} [upload_id]
 * @property {string} [steamid]
 * @property {string} [session_id]
 */

/**
 * @typedef {object} Proto_CBroadcast_GetBroadcastViewerStats_Request
 * @property {string} [upload_id]
 * @property {string} [steamid]
 */

///////////////////////////////////////////////
// steammessages_chat.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CChatRoom_JoinMiniGameForChatRoomGroup_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_EndMiniGameForChatRoomGroup_Request
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {string} [minigame_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetRoles_Request
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetRoleActions_Request
 * @property {string} [chat_group_id]
 * @property {string} [role_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetRolesForUser_Request
 * @property {string} [chat_group_id]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetChatRoomGroupState_Request
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_GetChatRoomGroupSummary_Request
 * @property {string} [chat_group_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetAppChatRoomGroupForceActive_Request
 * @property {string} [chat_group_id]
 * @property {number} [requesting_app_id]
 */

/**
 * @typedef {object} Proto_CChatRoom_SetAppChatRoomGroupStopForceActive_Notification
 * @property {string} [chat_group_id]
 * @property {number} [requesting_app_id]
 */

/**
 * @typedef {object} Proto_CClanChatRooms_SetClanChatRoomPrivate_Request
 * @property {string} [steamid]
 * @property {boolean} [chat_room_private]
 */

///////////////////////////////////////////////
// steammessages_clientlanp2p.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientLANP2PRequestChunks
 * @property {Proto_CMsgClientLANP2PRequestChunks_ChunkKey[]} chunk_keys
 */

/**
 * @typedef {object} Proto_CMsgClientLANP2PRequestChunks_ChunkKey
 * @property {number} [depot_id]
 * @property {Buffer} [sha]
 */

/**
 * @typedef {object} Proto_CMsgClientLANP2PRequestChunksResponse
 * @property {Proto_CMsgClientLANP2PRequestChunksResponse_ChunkData[]} chunk_responses
 */

/**
 * @typedef {object} Proto_CMsgClientLANP2PRequestChunksResponse_ChunkData
 * @property {EResult} [result]
 * @property {number} [depot_id]
 * @property {Buffer} [sha]
 * @property {Buffer} [chunk_data]
 * @property {boolean} [encrypted]
 * @property {boolean} [compressed]
 */

///////////////////////////////////////////////
// steammessages_clientmetrics.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CClientMetrics_AppInterfaceCreation
 * @property {string} [raw_version]
 * @property {string} [requested_interface_type]
 */

/**
 * @typedef {object} Proto_CClientMetrics_AppInterfaceMethodCounts
 * @property {string} [interface_name]
 * @property {string} [method_name]
 * @property {number} [call_count]
 */

/**
 * @typedef {object} Proto_CClientMetrics_AppInterfaceStats_Notification
 * @property {string} [game_id]
 * @property {Proto_CClientMetrics_AppInterfaceCreation[]} interfaces_created
 * @property {Proto_CClientMetrics_AppInterfaceMethodCounts[]} methods_called
 * @property {number} [session_length_seconds]
 */

/**
 * @typedef {object} Proto_CClientMetrics_IPv6Connectivity_Result
 * @property {number} [protocol_tested]
 * @property {number} [connectivity_state]
 */

/**
 * @typedef {object} Proto_CClientMetrics_IPv6Connectivity_Notification
 * @property {number} [cell_id]
 * @property {Proto_CClientMetrics_IPv6Connectivity_Result[]} results
 * @property {boolean} [private_ip_is_rfc6598]
 */

/**
 * @typedef {object} Proto_CClientMetrics_SteamPipeWorkStats_Operation
 * @property {ESteamPipeOperationType} [type]
 * @property {number} [num_ops]
 * @property {string} [num_bytes]
 * @property {string} [busy_time_ms]
 * @property {string} [idle_time_ms]
 * @property {string} [sum_run_time_ms]
 * @property {string} [sum_wait_time_ms]
 */

/**
 * @typedef {object} Proto_CClientMetrics_SteamPipeWorkStats_Notification
 * @property {number} [appid]
 * @property {number} [depotid]
 * @property {ESteamPipeWorkType} [work_type]
 * @property {Proto_CClientMetrics_SteamPipeWorkStats_Operation[]} operations
 */

/**
 * @typedef {object} Proto_CClientMetrics_ClientBootstrap_Notification
 * @property {Proto_CClientMetrics_ClientBootstrap_Summary} [summary]
 */

/**
 * @typedef {object} Proto_CClientMetrics_DownloadRates_Notification
 * @property {number} [cell_id]
 * @property {Proto_CClientMetrics_DownloadRates_Notification_StatsInfo[]} stats
 * @property {number} [throttling_kbps]
 */

/**
 * @typedef {object} Proto_CClientMetrics_DownloadRates_Notification_StatsInfo
 * @property {number} [source_type]
 * @property {number} [source_id]
 * @property {string} [bytes]
 * @property {string} [host_name]
 * @property {string} [microseconds]
 * @property {boolean} [used_ipv6]
 * @property {boolean} [proxied]
 */

/**
 * @typedef {object} Proto_CClientMetrics_ContentValidation_Notification
 * @property {number} [validation_result]
 * @property {number} [app_id]
 * @property {boolean} [staged_files]
 * @property {boolean} [user_initiated]
 * @property {boolean} [early_out]
 * @property {number} [chunks_scanned]
 * @property {number} [chunks_corrupt]
 * @property {string} [bytes_scanned]
 * @property {string} [chunk_bytes_corrupt]
 * @property {string} [total_file_size_corrupt]
 */

/**
 * @typedef {object} Proto_CClientMetrics_CloudAppSyncStats_Notification
 * @property {number} [app_id]
 * @property {number} [platform_type]
 * @property {boolean} [preload]
 * @property {boolean} [blocking_app_launch]
 * @property {number} [files_uploaded]
 * @property {number} [files_downloaded]
 * @property {number} [files_deleted]
 * @property {string} [bytes_uploaded]
 * @property {string} [bytes_downloaded]
 * @property {string} [microsec_total]
 * @property {string} [microsec_init_caches]
 * @property {string} [microsec_validate_state]
 * @property {string} [microsec_ac_launch]
 * @property {string} [microsec_ac_prep_user_files]
 * @property {string} [microsec_ac_exit]
 * @property {string} [microsec_build_sync_list]
 * @property {string} [microsec_delete_files]
 * @property {string} [microsec_download_files]
 * @property {string} [microsec_upload_files]
 * @property {number} [hardware_type]
 * @property {number} [files_managed]
 */

/**
 * @typedef {object} Proto_CClientMetrics_ContentDownloadResponse_Counts_Notification
 * @property {number} [cell_id]
 * @property {Proto_CClientMetrics_ContentDownloadResponse_Hosts} [data]
 */

///////////////////////////////////////////////
// steammessages_clientnotificationtypes.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CClientNotificationDownloadCompleted
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CClientNotificationFriendInvite
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CClientNotificationFriendInGame
 * @property {string} [steamid]
 * @property {string} [game_name]
 */

/**
 * @typedef {object} Proto_CClientNotificationFriendOnline
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CClientNotificationAchievement
 * @property {string} [achievement_id]
 * @property {number} [appid]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [image_url]
 * @property {boolean} [achieved]
 * @property {number} [rtime_unlocked]
 * @property {number} [min_progress]
 * @property {number} [current_progress]
 * @property {number} [max_progress]
 * @property {number} [global_achieved_pct]
 */

/**
 * @typedef {object} Proto_CClientNotificationLowBattery
 * @property {number} [pct_remaining]
 */

/**
 * @typedef {object} Proto_CClientNotificationSystemUpdate
 * @property {ESystemUpdateNotificationType} [type]
 */

/**
 * @typedef {object} Proto_CClientNotificationFriendMessage
 * @property {string} [tag]
 * @property {string} [steamid]
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [icon]
 * @property {number} [notificationid]
 */

/**
 * @typedef {object} Proto_CClientNotificationGroupChatMessage
 * @property {string} [tag]
 * @property {string} [steamid_sender]
 * @property {string} [chat_group_id]
 * @property {string} [chat_id]
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [rawbody]
 * @property {string} [icon]
 * @property {number} [notificationid]
 */

///////////////////////////////////////////////
// steammessages_clientserver.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientRegisterAuthTicketWithCM
 * @property {number} [protocol_version]
 * @property {Buffer} [ticket]
 * @property {string} [client_instance_id]
 */

/**
 * @typedef {object} Proto_CMsgClientTicketAuthComplete
 * @property {string} [steam_id]
 * @property {string} [game_id]
 * @property {number} [estate]
 * @property {number} [eauth_session_response]
 * @property {Buffer} [DEPRECATED_ticket]
 * @property {number} [ticket_crc]
 * @property {number} [ticket_sequence]
 * @property {string} [owner_steam_id]
 */

/**
 * @typedef {object} Proto_CMsgClientCMList
 * @property {number[]} cm_addresses
 * @property {number[]} cm_ports
 * @property {string[]} cm_websocket_addresses
 * @property {number} [percent_default_to_websocket]
 */

/**
 * @typedef {object} Proto_CMsgClientP2PConnectionInfo
 * @property {string} [steam_id_dest]
 * @property {string} [steam_id_src]
 * @property {number} [app_id]
 * @property {Buffer} [candidate]
 * @property {string} [legacy_connection_id_src]
 * @property {Buffer} [rendezvous]
 */

/**
 * @typedef {object} Proto_CMsgClientP2PConnectionFailInfo
 * @property {string} [steam_id_dest]
 * @property {string} [steam_id_src]
 * @property {number} [app_id]
 * @property {number} [ep2p_session_error]
 * @property {string} [connection_id_dest]
 * @property {number} [close_reason]
 * @property {string} [close_message]
 */

/**
 * @typedef {object} Proto_CMsgClientNetworkingCertRequest
 * @property {Buffer} [key_data]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CMsgClientNetworkingCertReply
 * @property {Buffer} [cert]
 * @property {string} [ca_key_id]
 * @property {Buffer} [ca_signature]
 */

/**
 * @typedef {object} Proto_CMsgClientNetworkingMobileCertRequest
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CMsgClientNetworkingMobileCertReply
 * @property {string} [encoded_cert]
 */

/**
 * @typedef {object} Proto_CMsgClientGetAppOwnershipTicket
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CMsgClientGetAppOwnershipTicketResponse
 * @property {EResult} [eresult=2]
 * @property {number} [app_id]
 * @property {Buffer} [ticket]
 */

/**
 * @typedef {object} Proto_CMsgClientSessionToken
 * @property {string} [token]
 */

/**
 * @typedef {object} Proto_CMsgClientGameConnectTokens
 * @property {number} [max_tokens_to_keep=10]
 * @property {Buffer[]} tokens
 */

/**
 * @typedef {object} Proto_CMsgClientGamesPlayed
 * @property {Proto_CMsgClientGamesPlayed_GamePlayed[]} games_played
 * @property {number} [client_os_type]
 * @property {number} [cloud_gaming_platform]
 */

/**
 * @typedef {object} Proto_CMsgClientGamesPlayed_GamePlayed
 * @property {string} [steam_id_gs]
 * @property {string} [game_id]
 * @property {number} [deprecated_game_ip_address]
 * @property {number} [game_port]
 * @property {boolean} [is_secure]
 * @property {Buffer} [token]
 * @property {string} [game_extra_info]
 * @property {Buffer} [game_data_blob]
 * @property {number} [process_id]
 * @property {number} [streaming_provider_id]
 * @property {number} [game_flags]
 * @property {number} [owner_id]
 * @property {string} [vr_hmd_vendor]
 * @property {string} [vr_hmd_model]
 * @property {number} [launch_option_type=0]
 * @property {number} [primary_controller_type=-1]
 * @property {string} [primary_steam_controller_serial]
 * @property {number} [total_steam_controller_count=0]
 * @property {number} [total_non_steam_controller_count=0]
 * @property {string} [controller_workshop_file_id=0]
 * @property {number} [launch_source=0]
 * @property {number} [vr_hmd_runtime]
 * @property {Proto_CMsgIPAddress} [game_ip_address]
 * @property {number} [controller_connection_type=0]
 */

/**
 * @typedef {object} Proto_CMsgGSApprove
 * @property {string} [steam_id]
 * @property {string} [owner_steam_id]
 */

/**
 * @typedef {object} Proto_CMsgGSDeny
 * @property {string} [steam_id]
 * @property {number} [edeny_reason]
 * @property {string} [deny_string]
 */

/**
 * @typedef {object} Proto_CMsgGSKick
 * @property {string} [steam_id]
 * @property {number} [edeny_reason]
 */

/**
 * @typedef {object} Proto_CMsgClientAuthList
 * @property {number} [tokens_left]
 * @property {number} [last_request_seq]
 * @property {number} [last_request_seq_from_server]
 * @property {Proto_CMsgAuthTicket[]} tickets
 * @property {number[]} app_ids
 * @property {number} [message_sequence]
 */

/**
 * @typedef {object} Proto_CMsgClientAuthListAck
 * @property {number[]} ticket_crc
 * @property {number[]} app_ids
 * @property {number} [message_sequence]
 */

/**
 * @typedef {object} Proto_CMsgClientLicenseList
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgClientLicenseList_License[]} licenses
 */

/**
 * @typedef {object} Proto_CMsgClientLicenseList_License
 * @property {number} [package_id]
 * @property {number} [time_created]
 * @property {number} [time_next_process]
 * @property {number} [minute_limit]
 * @property {number} [minutes_used]
 * @property {EPaymentMethod} [payment_method]
 * @property {number} [flags]
 * @property {string} [purchase_country_code]
 * @property {number} [license_type]
 * @property {number} [territory_code]
 * @property {number} [change_number]
 * @property {number} [owner_id]
 * @property {number} [initial_period]
 * @property {number} [initial_time_unit]
 * @property {number} [renewal_period]
 * @property {number} [renewal_time_unit]
 * @property {string} [access_token]
 * @property {number} [master_package_id]
 */

/**
 * @typedef {object} Proto_CMsgClientIsLimitedAccount
 * @property {boolean} [bis_limited_account]
 * @property {boolean} [bis_community_banned]
 * @property {boolean} [bis_locked_account]
 * @property {boolean} [bis_limited_account_allowed_to_invite_friends]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestedClientStats
 * @property {Proto_CMsgClientRequestedClientStats_StatsToSend[]} stats_to_send
 */

/**
 * @typedef {object} Proto_CMsgClientRequestedClientStats_StatsToSend
 * @property {number} [client_stat]
 * @property {number} [stat_aggregate_method]
 */

/**
 * @typedef {object} Proto_CMsgClientStat2
 * @property {Proto_CMsgClientStat2_StatDetail[]} stat_detail
 */

/**
 * @typedef {object} Proto_CMsgClientStat2_StatDetail
 * @property {number} [client_stat]
 * @property {string} [ll_value]
 * @property {number} [time_of_day]
 * @property {number} [cell_id]
 * @property {number} [depot_id]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CMsgClientChatInvite
 * @property {string} [steam_id_invited]
 * @property {string} [steam_id_chat]
 * @property {string} [steam_id_patron]
 * @property {number} [chatroom_type]
 * @property {string} [steam_id_friend_chat]
 * @property {string} [chat_name]
 * @property {string} [game_id]
 */

/**
 * @typedef {object} Proto_CMsgClientConnectionStats
 * @property {Proto_CMsgClientConnectionStats_Stats_Logon} [stats_logon]
 * @property {Proto_CMsgClientConnectionStats_Stats_VConn} [stats_vconn]
 */

/**
 * @typedef {object} Proto_CMsgClientConnectionStats_Stats_Logon
 * @property {number} [connect_attempts]
 * @property {number} [connect_successes]
 * @property {number} [connect_failures]
 * @property {number} [connections_dropped]
 * @property {number} [seconds_running]
 * @property {number} [msec_tologonthistime]
 * @property {number} [count_bad_cms]
 */

/**
 * @typedef {object} Proto_CMsgClientConnectionStats_Stats_UDP
 * @property {string} [pkts_sent]
 * @property {string} [bytes_sent]
 * @property {string} [pkts_recv]
 * @property {string} [pkts_processed]
 * @property {string} [bytes_recv]
 */

/**
 * @typedef {object} Proto_CMsgClientConnectionStats_Stats_VConn
 * @property {number} [connections_udp]
 * @property {number} [connections_tcp]
 * @property {Proto_CMsgClientConnectionStats_Stats_UDP} [stats_udp]
 * @property {string} [pkts_abandoned]
 * @property {string} [conn_req_received]
 * @property {string} [pkts_resent]
 * @property {string} [msgs_sent]
 * @property {string} [msgs_sent_failed]
 * @property {string} [msgs_recv]
 * @property {string} [datagrams_sent]
 * @property {string} [datagrams_recv]
 * @property {string} [bad_pkts_recv]
 * @property {string} [unknown_conn_pkts_recv]
 * @property {string} [missed_pkts_recv]
 * @property {string} [dup_pkts_recv]
 * @property {string} [failed_connect_challenges]
 * @property {number} [micro_sec_avg_latency]
 * @property {number} [micro_sec_min_latency]
 * @property {number} [micro_sec_max_latency]
 * @property {number} [mem_pool_msg_in_use]
 */

/**
 * @typedef {object} Proto_CMsgClientReportOverlayDetourFailure
 * @property {string[]} failure_strings
 */

/**
 * @typedef {object} Proto_CMsgClientRequestEncryptedAppTicket
 * @property {number} [app_id]
 * @property {Buffer} [userdata]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestEncryptedAppTicketResponse
 * @property {number} [app_id]
 * @property {EResult} [eresult=2]
 * @property {EncryptedAppTicket} [encrypted_app_ticket]
 */

/**
 * @typedef {object} Proto_CMsgClientWalletInfoUpdate
 * @property {boolean} [has_wallet]
 * @property {number} [balance]
 * @property {number} [currency]
 * @property {number} [balance_delayed]
 * @property {string} [balance64]
 * @property {string} [balance64_delayed]
 * @property {number} [realm]
 */

/**
 * @typedef {object} Proto_CMsgClientAMGetClanOfficers
 * @property {string} [steamid_clan]
 */

/**
 * @typedef {object} Proto_CMsgClientAMGetClanOfficersResponse
 * @property {EResult} [eresult=2]
 * @property {string} [steamid_clan]
 * @property {number} [officer_count]
 */

/**
 * @typedef {object} Proto_CMsgClientDeregisterWithServer
 * @property {number} [eservertype]
 * @property {number} [app_id]
 */

///////////////////////////////////////////////
// steammessages_clientserver_2.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientUpdateUserGameInfo
 * @property {string} [steamid_idgs]
 * @property {string} [gameid]
 * @property {number} [game_ip]
 * @property {number} [game_port]
 * @property {Buffer} [token]
 */

/**
 * @typedef {object} Proto_CMsgClientRichPresenceUpload
 * @property {Buffer} [rich_presence_kv]
 * @property {string[]} steamid_broadcast
 */

/**
 * @typedef {object} Proto_CMsgClientRichPresenceRequest
 * @property {string[]} steamid_request
 */

/**
 * @typedef {object} Proto_CMsgClientRichPresenceInfo
 * @property {Proto_CMsgClientRichPresenceInfo_RichPresence[]} rich_presence
 */

/**
 * @typedef {object} Proto_CMsgClientRichPresenceInfo_RichPresence
 * @property {string} [steamid_user]
 * @property {Buffer} [rich_presence_kv]
 */

/**
 * @typedef {object} Proto_CMsgClientCheckFileSignature
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CMsgClientCheckFileSignatureResponse
 * @property {number} [app_id]
 * @property {number} [pid]
 * @property {EResult} [eresult]
 * @property {string} [filename]
 * @property {number} [esignatureresult]
 * @property {Buffer} [sha_file]
 * @property {Buffer} [signatureheader]
 * @property {number} [filesize]
 * @property {number} [getlasterror]
 * @property {number} [evalvesignaturecheckdetail]
 */

/**
 * @typedef {object} Proto_CMsgClientReadMachineAuth
 * @property {string} [filename]
 * @property {number} [offset]
 * @property {number} [cubtoread]
 */

/**
 * @typedef {object} Proto_CMsgClientReadMachineAuthResponse
 * @property {string} [filename]
 * @property {EResult} [eresult]
 * @property {number} [filesize]
 * @property {Buffer} [sha_file]
 * @property {number} [getlasterror]
 * @property {number} [offset]
 * @property {number} [cubread]
 * @property {Buffer} [bytes_read]
 * @property {string} [filename_sentry]
 */

/**
 * @typedef {object} Proto_CMsgClientUpdateMachineAuth
 * @property {string} [filename]
 * @property {number} [offset]
 * @property {number} [cubtowrite]
 * @property {Buffer} [bytes]
 * @property {number} [otp_type]
 * @property {string} [otp_identifier]
 * @property {Buffer} [otp_sharedsecret]
 * @property {number} [otp_timedrift]
 */

/**
 * @typedef {object} Proto_CMsgClientUpdateMachineAuthResponse
 * @property {string} [filename]
 * @property {EResult} [eresult]
 * @property {number} [filesize]
 * @property {Buffer} [sha_file]
 * @property {number} [getlasterror]
 * @property {number} [offset]
 * @property {number} [cubwrote]
 * @property {number} [otp_type]
 * @property {number} [otp_value]
 * @property {string} [otp_identifier]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestMachineAuth
 * @property {string} [filename]
 * @property {number} [eresult_sentryfile]
 * @property {number} [filesize]
 * @property {Buffer} [sha_sentryfile]
 * @property {number} [lock_account_action]
 * @property {number} [otp_type]
 * @property {string} [otp_identifier]
 * @property {Buffer} [otp_sharedsecret]
 * @property {number} [otp_value]
 * @property {string} [machine_name]
 * @property {string} [machine_name_userchosen]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestMachineAuthResponse
 * @property {EResult} [eresult]
 */

/**
 * @typedef {object} Proto_CMsgClientRegisterKey
 * @property {string} [key]
 */

/**
 * @typedef {object} Proto_CMsgClientPurchaseResponse
 * @property {EResult} [eresult=2]
 * @property {number} [purchase_result_details]
 * @property {Buffer} [purchase_receipt_info]
 */

/**
 * @typedef {object} Proto_CMsgClientActivateOEMLicense
 * @property {string} [bios_manufacturer]
 * @property {string} [bios_serialnumber]
 * @property {Buffer} [license_file]
 * @property {string} [mainboard_manufacturer]
 * @property {string} [mainboard_product]
 * @property {string} [mainboard_serialnumber]
 */

/**
 * @typedef {object} Proto_CMsgClientRegisterOEMMachine
 * @property {Buffer} [oem_register_file]
 */

/**
 * @typedef {object} Proto_CMsgClientRegisterOEMMachineResponse
 * @property {EResult} [eresult]
 */

/**
 * @typedef {object} Proto_CMsgClientPurchaseWithMachineID
 * @property {number} [package_id]
 * @property {Buffer} [machine_info]
 */

/**
 * @typedef {object} Proto_CMsgTrading_InitiateTradeRequest
 * @property {number} [trade_request_id]
 * @property {string} [other_steamid]
 * @property {string} [other_name]
 */

/**
 * @typedef {object} Proto_CMsgTrading_InitiateTradeResponse
 * @property {number} [response]
 * @property {number} [trade_request_id]
 * @property {string} [other_steamid]
 * @property {number} [steamguard_required_days]
 * @property {number} [new_device_cooldown_days]
 * @property {number} [default_password_reset_probation_days]
 * @property {number} [password_reset_probation_days]
 * @property {number} [default_email_change_probation_days]
 * @property {number} [email_change_probation_days]
 */

/**
 * @typedef {object} Proto_CMsgTrading_CancelTradeRequest
 * @property {string} [other_steamid]
 */

/**
 * @typedef {object} Proto_CMsgTrading_StartSession
 * @property {string} [other_steamid]
 */

/**
 * @typedef {object} Proto_CMsgClientGetCDNAuthToken
 * @property {number} [depot_id]
 * @property {string} [host_name]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CMsgClientGetDepotDecryptionKey
 * @property {number} [depot_id]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CMsgClientGetDepotDecryptionKeyResponse
 * @property {EResult} [eresult=2]
 * @property {number} [depot_id]
 * @property {Buffer} [depot_encryption_key]
 */

/**
 * @typedef {object} Proto_CMsgClientCheckAppBetaPassword
 * @property {number} [app_id]
 * @property {string} [betapassword]
 * @property {number} [language]
 */

/**
 * @typedef {object} Proto_CMsgClientCheckAppBetaPasswordResponse
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgClientCheckAppBetaPasswordResponse_BetaPassword[]} betapasswords
 */

/**
 * @typedef {object} Proto_CMsgClientCheckAppBetaPasswordResponse_BetaPassword
 * @property {string} [betaname]
 * @property {string} [betapassword]
 * @property {string} [betadescription]
 */

/**
 * @typedef {object} Proto_CMsgClientUpdateAppJobReport
 * @property {number} [app_id]
 * @property {number[]} depot_ids
 * @property {number} [app_state]
 * @property {number} [job_app_error]
 * @property {string} [error_details]
 * @property {number} [job_duration]
 * @property {number} [files_validation_failed]
 * @property {string} [job_bytes_downloaded]
 * @property {string} [job_bytes_staged]
 * @property {string} [bytes_comitted]
 * @property {number} [start_app_state]
 * @property {string} [stats_machine_id]
 * @property {string} [branch_name]
 * @property {string} [total_bytes_downloaded]
 * @property {string} [total_bytes_staged]
 * @property {string} [total_bytes_restored]
 * @property {boolean} [is_borrowed]
 * @property {boolean} [is_free_weekend]
 * @property {string} [total_bytes_legacy]
 * @property {string} [total_bytes_patched]
 * @property {string} [total_bytes_saved]
 * @property {number} [cell_id]
 */

/**
 * @typedef {object} Proto_CMsgClientDPContentStatsReport
 * @property {string} [stats_machine_id]
 * @property {string} [country_code]
 * @property {number} [os_type]
 * @property {number} [language]
 * @property {number} [num_install_folders]
 * @property {number} [num_installed_games]
 * @property {string} [size_installed_games]
 */

/**
 * @typedef {object} Proto_CMsgClientGetCDNAuthTokenResponse
 * @property {EResult} [eresult=2]
 * @property {string} [token]
 * @property {number} [expiration_time]
 */

/**
 * @typedef {object} Proto_CMsgDownloadRateStatistics
 * @property {number} [cell_id]
 * @property {Proto_CMsgDownloadRateStatistics_StatsInfo[]} stats
 * @property {number} [throttling_kbps]
 * @property {number} [steam_realm]
 */

/**
 * @typedef {object} Proto_CMsgDownloadRateStatistics_StatsInfo
 * @property {number} [source_type]
 * @property {number} [source_id]
 * @property {number} [seconds]
 * @property {string} [bytes]
 * @property {string} [host_name]
 * @property {string} [microseconds]
 * @property {boolean} [used_ipv6]
 * @property {boolean} [proxied]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestAccountData
 * @property {string} [account_or_email]
 * @property {number} [action]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestAccountDataResponse
 * @property {number} [action]
 * @property {EResult} [eresult]
 * @property {string} [account_name]
 * @property {number} [ct_matches]
 * @property {string} [account_name_suggestion1]
 * @property {string} [account_name_suggestion2]
 * @property {string} [account_name_suggestion3]
 */

/**
 * @typedef {object} Proto_CMsgClientUGSGetGlobalStats
 * @property {string} [gameid]
 * @property {number} [history_days_requested]
 * @property {number} [time_last_requested]
 * @property {number} [first_day_cached]
 * @property {number} [days_cached]
 */

/**
 * @typedef {object} Proto_CMsgClientUGSGetGlobalStatsResponse
 * @property {EResult} [eresult=2]
 * @property {number} [timestamp]
 * @property {number} [day_current]
 * @property {Proto_CMsgClientUGSGetGlobalStatsResponse_Day[]} days
 */

/**
 * @typedef {object} Proto_CMsgClientUGSGetGlobalStatsResponse_Day
 * @property {number} [day_id]
 * @property {Proto_CMsgClientUGSGetGlobalStatsResponse_Day_Stat[]} stats
 */

/**
 * @typedef {object} Proto_CMsgClientUGSGetGlobalStatsResponse_Day_Stat
 * @property {number} [stat_id]
 * @property {string} [data]
 */

/**
 * @typedef {object} Proto_CMsgClientRedeemGuestPass
 * @property {string} [guest_pass_id]
 */

/**
 * @typedef {object} Proto_CMsgClientRedeemGuestPassResponse
 * @property {EResult} [eresult=2]
 * @property {number} [package_id]
 * @property {number} [must_own_appid]
 */

/**
 * @typedef {object} Proto_CMsgClientGetClanActivityCountsResponse
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientOGSReportString
 * @property {boolean} [accumulated]
 * @property {string} [sessionid]
 * @property {number} [severity]
 * @property {string} [formatter]
 * @property {Buffer} [varargs]
 */

/**
 * @typedef {object} Proto_CMsgClientOGSReportBug
 * @property {string} [sessionid]
 * @property {string} [bugtext]
 * @property {Buffer} [screenshot]
 */

/**
 * @typedef {object} Proto_CMsgClientSentLogs
 */

/**
 * @typedef {object} Proto_CMsgGCClient
 * @property {number} [appid]
 * @property {number} [msgtype]
 * @property {Buffer} [payload]
 * @property {string} [steamid]
 * @property {string} [gcname]
 * @property {number} [ip]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestFreeLicense
 * @property {number[]} appids
 */

/**
 * @typedef {object} Proto_CMsgClientRequestFreeLicenseResponse
 * @property {EResult} [eresult=2]
 * @property {number[]} granted_packageids
 * @property {number[]} granted_appids
 */

/**
 * @typedef {object} Proto_CMsgDRMDownloadRequestWithCrashData
 * @property {number} [download_flags]
 * @property {number} [download_types_known]
 * @property {Buffer} [guid_drm]
 * @property {Buffer} [guid_split]
 * @property {Buffer} [guid_merge]
 * @property {string} [module_name]
 * @property {string} [module_path]
 * @property {Buffer} [crash_data]
 */

/**
 * @typedef {object} Proto_CMsgDRMDownloadResponse
 * @property {EResult} [eresult=2]
 * @property {number} [app_id]
 * @property {number} [blob_download_type]
 * @property {Buffer} [merge_guid]
 * @property {number} [download_file_dfs_ip]
 * @property {number} [download_file_dfs_port]
 * @property {string} [download_file_url]
 * @property {string} [module_path]
 */

/**
 * @typedef {object} Proto_CMsgDRMFinalResult
 * @property {EResult} [eResult=2]
 * @property {number} [app_id]
 * @property {number} [blob_download_type]
 * @property {number} [error_detail]
 * @property {Buffer} [merge_guid]
 * @property {number} [download_file_dfs_ip]
 * @property {number} [download_file_dfs_port]
 * @property {string} [download_file_url]
 */

/**
 * @typedef {object} Proto_CMsgClientDPCheckSpecialSurvey
 * @property {number} [survey_id]
 */

/**
 * @typedef {object} Proto_CMsgClientDPCheckSpecialSurveyResponse
 * @property {EResult} [eResult=2]
 * @property {number} [state]
 * @property {string} [name]
 * @property {string} [custom_url]
 * @property {boolean} [include_software]
 * @property {Buffer} [token]
 */

/**
 * @typedef {object} Proto_CMsgClientDPSendSpecialSurveyResponse
 * @property {number} [survey_id]
 * @property {Buffer} [data]
 */

/**
 * @typedef {object} Proto_CMsgClientDPSendSpecialSurveyResponseReply
 * @property {EResult} [eResult=2]
 * @property {Buffer} [token]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestForgottenPasswordEmail
 * @property {string} [account_name]
 * @property {string} [password_tried]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestForgottenPasswordEmailResponse
 * @property {EResult} [eResult]
 * @property {boolean} [use_secret_question]
 */

/**
 * @typedef {object} Proto_CMsgClientItemAnnouncements
 * @property {number} [count_new_items]
 * @property {Proto_CMsgClientItemAnnouncements_UnseenItem[]} unseen_items
 */

/**
 * @typedef {object} Proto_CMsgClientItemAnnouncements_UnseenItem
 * @property {number} [appid]
 * @property {string} [context_id]
 * @property {string} [asset_id]
 * @property {string} [amount]
 * @property {number} [rtime32_gained]
 * @property {number} [source_appid]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestItemAnnouncements
 */

/**
 * @typedef {object} Proto_CMsgClientUserNotifications
 * @property {Proto_CMsgClientUserNotifications_Notification[]} notifications
 */

/**
 * @typedef {object} Proto_CMsgClientUserNotifications_Notification
 * @property {number} [user_notification_type]
 * @property {number} [count]
 */

/**
 * @typedef {object} Proto_CMsgClientCommentNotifications
 * @property {number} [count_new_comments]
 * @property {number} [count_new_comments_owner]
 * @property {number} [count_new_comments_subscriptions]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestCommentNotifications
 */

/**
 * @typedef {object} Proto_CMsgClientOfflineMessageNotification
 * @property {number} [offline_messages]
 * @property {number[]} friends_with_offline_messages
 */

/**
 * @typedef {object} Proto_CMsgClientRequestOfflineMessageCount
 */

/**
 * @typedef {object} Proto_CMsgClientChatGetFriendMessageHistory
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CMsgClientChatGetFriendMessageHistoryResponse
 * @property {string} [steamid]
 * @property {number} [success]
 * @property {Proto_CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage[]} messages
 */

/**
 * @typedef {object} Proto_CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage
 * @property {number} [accountid]
 * @property {number} [timestamp]
 * @property {string} [message]
 * @property {boolean} [unread]
 */

/**
 * @typedef {object} Proto_CMsgClientChatGetFriendMessageHistoryForOfflineMessages
 */

/**
 * @typedef {object} Proto_CMsgClientFSGetFriendsSteamLevels
 * @property {number[]} accountids
 */

/**
 * @typedef {object} Proto_CMsgClientFSGetFriendsSteamLevelsResponse
 * @property {Proto_CMsgClientFSGetFriendsSteamLevelsResponse_Friend[]} friends
 */

/**
 * @typedef {object} Proto_CMsgClientFSGetFriendsSteamLevelsResponse_Friend
 * @property {number} [accountid]
 * @property {number} [level]
 */

/**
 * @typedef {object} Proto_CMsgClientEmailAddrInfo
 * @property {string} [email_address]
 * @property {boolean} [email_is_validated]
 * @property {boolean} [email_validation_changed]
 * @property {boolean} [credential_change_requires_code]
 * @property {boolean} [password_or_secretqa_change_requires_code]
 * @property {boolean} [remind_user_about_email]
 */

/**
 * @typedef {object} Proto_CMsgCREItemVoteSummary
 * @property {Proto_CMsgCREItemVoteSummary_PublishedFileId[]} published_file_ids
 */

/**
 * @typedef {object} Proto_CMsgCREItemVoteSummary_PublishedFileId
 * @property {string} [published_file_id]
 */

/**
 * @typedef {object} Proto_CMsgCREItemVoteSummaryResponse
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgCREItemVoteSummaryResponse_ItemVoteSummary[]} item_vote_summaries
 */

/**
 * @typedef {object} Proto_CMsgCREItemVoteSummaryResponse_ItemVoteSummary
 * @property {string} [published_file_id]
 * @property {number} [votes_for]
 * @property {number} [votes_against]
 * @property {number} [reports]
 * @property {number} [score]
 */

/**
 * @typedef {object} Proto_CMsgFSGetFollowerCount
 * @property {string} [steam_id]
 */

/**
 * @typedef {object} Proto_CMsgFSGetFollowerCountResponse
 * @property {EResult} [eresult=2]
 * @property {number} [count=0]
 */

/**
 * @typedef {object} Proto_CMsgFSGetIsFollowing
 * @property {string} [steam_id]
 */

/**
 * @typedef {object} Proto_CMsgFSGetIsFollowingResponse
 * @property {EResult} [eresult=2]
 * @property {boolean} [is_following=false]
 */

/**
 * @typedef {object} Proto_CMsgFSEnumerateFollowingList
 * @property {number} [start_index]
 */

/**
 * @typedef {object} Proto_CMsgFSEnumerateFollowingListResponse
 * @property {EResult} [eresult=2]
 * @property {number} [total_results]
 * @property {string[]} steam_ids
 */

/**
 * @typedef {object} Proto_CMsgDPGetNumberOfCurrentPlayers
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CMsgDPGetNumberOfCurrentPlayersResponse
 * @property {EResult} [eresult=2]
 * @property {number} [player_count]
 */

/**
 * @typedef {object} Proto_CMsgClientFriendUserStatusPublished
 * @property {string} [friend_steamid]
 * @property {number} [appid]
 * @property {string} [status_text]
 */

/**
 * @typedef {object} Proto_CMsgClientServiceMethodLegacy
 * @property {string} [method_name]
 * @property {Buffer} [serialized_method]
 * @property {boolean} [is_notification]
 */

/**
 * @typedef {object} Proto_CMsgClientServiceMethodLegacyResponse
 * @property {string} [method_name]
 * @property {Buffer} [serialized_method_response]
 */

/**
 * @typedef {object} Proto_CMsgClientUIMode
 * @property {number} [uimode]
 * @property {number} [chat_mode]
 */

/**
 * @typedef {object} Proto_CMsgClientVanityURLChangedNotification
 * @property {string} [vanity_url]
 */

/**
 * @typedef {object} Proto_CMsgClientAuthorizeLocalDeviceRequest
 * @property {string} [device_description]
 * @property {number} [owner_account_id]
 * @property {string} [local_device_token]
 */

/**
 * @typedef {object} Proto_CMsgClientAuthorizeLocalDevice
 * @property {EResult} [eresult=2]
 * @property {number} [owner_account_id]
 * @property {string} [authed_device_token]
 */

/**
 * @typedef {object} Proto_CMsgClientAuthorizeLocalDeviceNotification
 * @property {EResult} [eresult=2]
 * @property {number} [owner_account_id]
 * @property {string} [local_device_token]
 */

/**
 * @typedef {object} Proto_CMsgClientDeauthorizeDeviceRequest
 * @property {number} [deauthorization_account_id]
 * @property {string} [deauthorization_device_token]
 */

/**
 * @typedef {object} Proto_CMsgClientDeauthorizeDevice
 * @property {EResult} [eresult=2]
 * @property {number} [deauthorization_account_id]
 */

/**
 * @typedef {object} Proto_CMsgClientUseLocalDeviceAuthorizations
 * @property {number[]} authorization_account_id
 * @property {Proto_CMsgClientUseLocalDeviceAuthorizations_DeviceToken[]} device_tokens
 */

/**
 * @typedef {object} Proto_CMsgClientUseLocalDeviceAuthorizations_DeviceToken
 * @property {number} [owner_account_id]
 * @property {string} [token_id]
 */

/**
 * @typedef {object} Proto_CMsgClientGetAuthorizedDevices
 */

/**
 * @typedef {object} Proto_CMsgClientGetAuthorizedDevicesResponse
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice[]} authorized_device
 */

/**
 * @typedef {object} Proto_CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice
 * @property {string} [auth_device_token]
 * @property {string} [device_name]
 * @property {number} [last_access_time]
 * @property {number} [borrower_id]
 * @property {boolean} [is_pending]
 * @property {number} [app_played]
 */

/**
 * @typedef {object} Proto_CMsgClientSharedLibraryLockStatus
 * @property {Proto_CMsgClientSharedLibraryLockStatus_LockedLibrary[]} locked_library
 * @property {number} [own_library_locked_by]
 */

/**
 * @typedef {object} Proto_CMsgClientSharedLibraryLockStatus_LockedLibrary
 * @property {number} [owner_id]
 * @property {number} [locked_by]
 */

/**
 * @typedef {object} Proto_CMsgClientSharedLibraryStopPlaying
 * @property {number} [seconds_left]
 * @property {Proto_CMsgClientSharedLibraryStopPlaying_StopApp[]} stop_apps
 */

/**
 * @typedef {object} Proto_CMsgClientSharedLibraryStopPlaying_StopApp
 * @property {number} [app_id]
 * @property {number} [owner_id]
 */

/**
 * @typedef {object} Proto_CMsgClientServiceCall
 * @property {Buffer} [sysid_routing]
 * @property {number} [call_handle]
 * @property {number} [module_crc]
 * @property {Buffer} [module_hash]
 * @property {number} [function_id]
 * @property {number} [cub_output_max]
 * @property {number} [flags]
 * @property {Buffer} [callparameter]
 * @property {boolean} [ping_only]
 * @property {number} [max_outstanding_calls]
 */

/**
 * @typedef {object} Proto_CMsgClientServiceModule
 * @property {number} [module_crc]
 * @property {Buffer} [module_hash]
 * @property {Buffer} [module_content]
 */

/**
 * @typedef {object} Proto_CMsgClientServiceCallResponse
 * @property {Buffer} [sysid_routing]
 * @property {number} [call_handle]
 * @property {number} [module_crc]
 * @property {Buffer} [module_hash]
 * @property {number} [ecallresult]
 * @property {Buffer} [result_content]
 * @property {Buffer} [os_version_info]
 * @property {Buffer} [system_info]
 * @property {string} [load_address]
 * @property {Buffer} [exception_record]
 * @property {Buffer} [portable_os_version_info]
 * @property {Buffer} [portable_system_info]
 * @property {boolean} [was_converted]
 * @property {number} [internal_result]
 * @property {number} [current_count]
 * @property {number} [last_call_handle]
 * @property {number} [last_call_module_crc]
 * @property {Buffer} [last_call_sysid_routing]
 * @property {number} [last_ecallresult]
 * @property {number} [last_callissue_delta]
 * @property {number} [last_callcomplete_delta]
 */

/**
 * @typedef {object} Proto_CMsgAMUnlockStreaming
 */

/**
 * @typedef {object} Proto_CMsgAMUnlockStreamingResponse
 * @property {EResult} [eresult=2]
 * @property {Buffer} [encryption_key]
 */

/**
 * @typedef {object} Proto_CMsgAMUnlockHEVC
 */

/**
 * @typedef {object} Proto_CMsgAMUnlockHEVCResponse
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientPlayingSessionState
 * @property {boolean} [playing_blocked]
 * @property {number} [playing_app]
 */

/**
 * @typedef {object} Proto_CMsgClientKickPlayingSession
 * @property {boolean} [only_stop_game]
 */

/**
 * @typedef {object} Proto_CMsgClientVoiceCallPreAuthorize
 * @property {string} [caller_steamid]
 * @property {string} [receiver_steamid]
 * @property {number} [caller_id]
 * @property {boolean} [hangup]
 */

/**
 * @typedef {object} Proto_CMsgClientVoiceCallPreAuthorizeResponse
 * @property {string} [caller_steamid]
 * @property {string} [receiver_steamid]
 * @property {EResult} [eresult=2]
 * @property {number} [caller_id]
 */

/**
 * @typedef {object} Proto_CMsgBadgeCraftedNotification
 * @property {number} [appid]
 * @property {number} [badge_level]
 */

///////////////////////////////////////////////
// steammessages_clientserver_appinfo.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientAppInfoUpdate
 * @property {number} [last_changenumber]
 * @property {boolean} [send_changelist]
 */

/**
 * @typedef {object} Proto_CMsgClientAppInfoChanges
 * @property {number} [current_change_number]
 * @property {boolean} [force_full_update]
 * @property {number[]} appIDs
 */

/**
 * @typedef {object} Proto_CMsgClientAppInfoRequest
 * @property {Proto_CMsgClientAppInfoRequest_App[]} apps
 * @property {boolean} [supports_batches=false]
 */

/**
 * @typedef {object} Proto_CMsgClientAppInfoRequest_App
 * @property {number} [app_id]
 * @property {number} [section_flags]
 * @property {number[]} section_CRC
 */

/**
 * @typedef {object} Proto_CMsgClientAppInfoResponse
 * @property {Proto_CMsgClientAppInfoResponse_App[]} apps
 * @property {number[]} apps_unknown
 * @property {number} [apps_pending]
 */

/**
 * @typedef {object} Proto_CMsgClientAppInfoResponse_App
 * @property {number} [app_id]
 * @property {number} [change_number]
 * @property {Proto_CMsgClientAppInfoResponse_App_Section[]} sections
 */

/**
 * @typedef {object} Proto_CMsgClientAppInfoResponse_App_Section
 * @property {number} [section_id]
 * @property {Buffer} [section_kv]
 */

/**
 * @typedef {object} Proto_CMsgClientPackageInfoRequest
 * @property {number[]} package_ids
 * @property {boolean} [meta_data_only]
 */

/**
 * @typedef {object} Proto_CMsgClientPackageInfoResponse
 * @property {Proto_CMsgClientPackageInfoResponse_Package[]} packages
 * @property {number[]} packages_unknown
 * @property {number} [packages_pending]
 */

/**
 * @typedef {object} Proto_CMsgClientPackageInfoResponse_Package
 * @property {number} [package_id]
 * @property {number} [change_number]
 * @property {Buffer} [sha]
 * @property {Buffer} [buffer]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSChangesSinceRequest
 * @property {number} [since_change_number]
 * @property {boolean} [send_app_info_changes]
 * @property {boolean} [send_package_info_changes]
 * @property {number} [num_app_info_cached]
 * @property {number} [num_package_info_cached]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSChangesSinceResponse
 * @property {number} [current_change_number]
 * @property {number} [since_change_number]
 * @property {boolean} [force_full_update]
 * @property {Proto_CMsgClientPICSChangesSinceResponse_PackageChange[]} package_changes
 * @property {Proto_CMsgClientPICSChangesSinceResponse_AppChange[]} app_changes
 * @property {boolean} [force_full_app_update]
 * @property {boolean} [force_full_package_update]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSChangesSinceResponse_PackageChange
 * @property {number} [packageid]
 * @property {number} [change_number]
 * @property {boolean} [needs_token]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSChangesSinceResponse_AppChange
 * @property {number} [appid]
 * @property {number} [change_number]
 * @property {boolean} [needs_token]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSProductInfoRequest
 * @property {Proto_CMsgClientPICSProductInfoRequest_PackageInfo[]} packages
 * @property {Proto_CMsgClientPICSProductInfoRequest_AppInfo[]} apps
 * @property {boolean} [meta_data_only]
 * @property {number} [num_prev_failed]
 * @property {number} [supports_package_tokens]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSProductInfoRequest_AppInfo
 * @property {number} [appid]
 * @property {string} [access_token]
 * @property {boolean} [only_public_obsolete]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSProductInfoRequest_PackageInfo
 * @property {number} [packageid]
 * @property {string} [access_token]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSProductInfoResponse
 * @property {Proto_CMsgClientPICSProductInfoResponse_AppInfo[]} apps
 * @property {number[]} unknown_appids
 * @property {Proto_CMsgClientPICSProductInfoResponse_PackageInfo[]} packages
 * @property {number[]} unknown_packageids
 * @property {boolean} [meta_data_only]
 * @property {boolean} [response_pending]
 * @property {number} [http_min_size]
 * @property {string} [http_host]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSProductInfoResponse_AppInfo
 * @property {number} [appid]
 * @property {number} [change_number]
 * @property {boolean} [missing_token]
 * @property {Buffer} [sha]
 * @property {Buffer} [buffer]
 * @property {boolean} [only_public]
 * @property {number} [size]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSProductInfoResponse_PackageInfo
 * @property {number} [packageid]
 * @property {number} [change_number]
 * @property {boolean} [missing_token]
 * @property {Buffer} [sha]
 * @property {Buffer} [buffer]
 * @property {number} [size]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSAccessTokenRequest
 * @property {number[]} packageids
 * @property {number[]} appids
 */

/**
 * @typedef {object} Proto_CMsgClientPICSAccessTokenResponse
 * @property {Proto_CMsgClientPICSAccessTokenResponse_PackageToken[]} package_access_tokens
 * @property {number[]} package_denied_tokens
 * @property {Proto_CMsgClientPICSAccessTokenResponse_AppToken[]} app_access_tokens
 * @property {number[]} app_denied_tokens
 */

/**
 * @typedef {object} Proto_CMsgClientPICSAccessTokenResponse_PackageToken
 * @property {number} [packageid]
 * @property {string} [access_token]
 */

/**
 * @typedef {object} Proto_CMsgClientPICSAccessTokenResponse_AppToken
 * @property {number} [appid]
 * @property {string} [access_token]
 */

///////////////////////////////////////////////
// steammessages_clientserver_friends.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// steammessages_clientserver_gameservers.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgGSServerType
 * @property {number} [app_id_served]
 * @property {number} [flags]
 * @property {number} [deprecated_game_ip_address]
 * @property {number} [game_port]
 * @property {string} [game_dir]
 * @property {string} [game_version]
 * @property {number} [game_query_port]
 * @property {Buffer} [sdr_logon]
 * @property {number} [fake_ip]
 */

/**
 * @typedef {object} Proto_CMsgGSStatusReply
 * @property {boolean} [is_secure]
 */

/**
 * @typedef {object} Proto_CMsgGSPlayerList
 * @property {Proto_CMsgGSPlayerList_Player[]} players
 */

/**
 * @typedef {object} Proto_CMsgGSPlayerList_Player
 * @property {string} [steam_id]
 * @property {number} [deprecated_public_ip]
 * @property {Buffer} [token]
 * @property {Proto_CMsgIPAddress} [public_ip]
 */

/**
 * @typedef {object} Proto_CMsgGSUserPlaying
 * @property {string} [steam_id]
 * @property {number} [deprecated_public_ip]
 * @property {Buffer} [token]
 * @property {Proto_CMsgIPAddress} [public_ip]
 */

/**
 * @typedef {object} Proto_CMsgGSDisconnectNotice
 * @property {string} [steam_id]
 */

/**
 * @typedef {object} Proto_CMsgGameServerData
 * @property {number} [revision]
 * @property {string} [steam_id_gs]
 * @property {number} [query_port]
 * @property {number} [game_port]
 * @property {number} [spectator_port]
 * @property {string} [server_name]
 * @property {string} [game_description]
 * @property {string} [spectator_server_name]
 * @property {number} [fake_ip]
 * @property {number} [app_id]
 * @property {string} [gamedir]
 * @property {string} [version]
 * @property {string} [product]
 * @property {string} [region]
 * @property {Proto_CMsgGameServerData_Player[]} players
 * @property {number} [max_players]
 * @property {number} [bot_count]
 * @property {boolean} [password]
 * @property {boolean} [secure]
 * @property {boolean} [dedicated]
 * @property {string} [os]
 * @property {string} [game_data]
 * @property {string} [game_type]
 * @property {string} [map]
 */

/**
 * @typedef {object} Proto_CMsgGameServerData_Player
 * @property {string} [steam_id]
 */

/**
 * @typedef {object} Proto_CMsgGameServerRemove
 * @property {string} [legacy_steam_id_gs]
 * @property {number} [legacy_query_port]
 */

/**
 * @typedef {object} Proto_CMsgClientGMSServerQuery
 * @property {number} [app_id]
 * @property {number} [geo_location_ip]
 * @property {number} [region_code]
 * @property {string} [filter_text]
 * @property {number} [max_servers]
 */

/**
 * @typedef {object} Proto_CMsgGMSClientServerQueryResponse
 * @property {Proto_CMsgGMSClientServerQueryResponse_Server[]} servers
 * @property {string} [error]
 * @property {Proto_CMsgGMSClientServerQueryResponse_Server} [default_server_data]
 * @property {string[]} server_strings
 */

/**
 * @typedef {object} Proto_CMsgGMSClientServerQueryResponse_Server
 * @property {number} [deprecated_server_ip]
 * @property {number} [query_port]
 * @property {number} [auth_players]
 * @property {Proto_CMsgIPAddress} [server_ip]
 * @property {string} [steam_id]
 * @property {number} [revision]
 * @property {number} [players]
 * @property {number} [game_port]
 * @property {number} [sdr_popid]
 * @property {number} [flags]
 * @property {number} [app_id]
 * @property {number} [max_players]
 * @property {number} [bots]
 * @property {number} [spectator_port]
 * @property {string} [gamedir_str]
 * @property {number} [gamedir_strindex]
 * @property {string} [map_str]
 * @property {number} [map_strindex]
 * @property {string} [name_str]
 * @property {number} [name_strindex]
 * @property {string} [game_description_str]
 * @property {number} [game_description_strindex]
 * @property {string} [version_str]
 * @property {number} [version_strindex]
 * @property {string} [gametype_str]
 * @property {number} [gametype_strindex]
 * @property {string} [spectator_name_str]
 * @property {number} [spectator_name_strindex]
 */

/**
 * @typedef {object} Proto_CMsgGameServerOutOfDate
 * @property {string} [steam_id_gs]
 * @property {boolean} [reject]
 * @property {string} [message]
 */

/**
 * @typedef {object} Proto_CMsgGSAssociateWithClan
 * @property {string} [steam_id_clan]
 */

/**
 * @typedef {object} Proto_CMsgGSAssociateWithClanResponse
 * @property {string} [steam_id_clan]
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgGSComputeNewPlayerCompatibility
 * @property {string} [steam_id_candidate]
 */

/**
 * @typedef {object} Proto_CMsgGSComputeNewPlayerCompatibilityResponse
 * @property {string} [steam_id_candidate]
 * @property {EResult} [eresult=2]
 * @property {boolean} [is_clan_member]
 * @property {number} [ct_dont_like_you]
 * @property {number} [ct_you_dont_like]
 * @property {number} [ct_clanmembers_dont_like_you]
 */

///////////////////////////////////////////////
// steammessages_clientserver_lbs.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientLBSSetScore
 * @property {number} [app_id]
 * @property {number} [leaderboard_id]
 * @property {number} [score]
 * @property {Buffer} [details]
 * @property {number} [upload_score_method]
 */

/**
 * @typedef {object} Proto_CMsgClientLBSSetScoreResponse
 * @property {EResult} [eresult=2]
 * @property {number} [leaderboard_entry_count]
 * @property {boolean} [score_changed]
 * @property {number} [global_rank_previous]
 * @property {number} [global_rank_new]
 */

/**
 * @typedef {object} Proto_CMsgClientLBSSetUGC
 * @property {number} [app_id]
 * @property {number} [leaderboard_id]
 * @property {string} [ugc_id]
 */

/**
 * @typedef {object} Proto_CMsgClientLBSSetUGCResponse
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientLBSFindOrCreateLB
 * @property {number} [app_id]
 * @property {number} [leaderboard_sort_method]
 * @property {number} [leaderboard_display_type]
 * @property {boolean} [create_if_not_found]
 * @property {string} [leaderboard_name]
 */

/**
 * @typedef {object} Proto_CMsgClientLBSFindOrCreateLBResponse
 * @property {EResult} [eresult=2]
 * @property {number} [leaderboard_id]
 * @property {number} [leaderboard_entry_count]
 * @property {number} [leaderboard_sort_method=0]
 * @property {number} [leaderboard_display_type=0]
 * @property {string} [leaderboard_name]
 */

/**
 * @typedef {object} Proto_CMsgClientLBSGetLBEntries
 * @property {number} [app_id]
 * @property {number} [leaderboard_id]
 * @property {number} [range_start]
 * @property {number} [range_end]
 * @property {number} [leaderboard_data_request]
 * @property {string[]} steamids
 */

/**
 * @typedef {object} Proto_CMsgClientLBSGetLBEntriesResponse
 * @property {EResult} [eresult=2]
 * @property {number} [leaderboard_entry_count]
 * @property {Proto_CMsgClientLBSGetLBEntriesResponse_Entry[]} entries
 */

/**
 * @typedef {object} Proto_CMsgClientLBSGetLBEntriesResponse_Entry
 * @property {string} [steam_id_user]
 * @property {number} [global_rank]
 * @property {number} [score]
 * @property {Buffer} [details]
 * @property {string} [ugc_id]
 */

///////////////////////////////////////////////
// steammessages_clientserver_login.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientRequestWebAPIAuthenticateUserNonce
 * @property {number} [token_type=-1]
 */

/**
 * @typedef {object} Proto_CMsgClientRequestWebAPIAuthenticateUserNonceResponse
 * @property {EResult} [eresult=2]
 * @property {string} [webapi_authenticate_user_nonce]
 * @property {number} [token_type=-1]
 */

/**
 * @typedef {object} Proto_CMsgClientLogOff
 */

/**
 * @typedef {object} Proto_CMsgClientNewLoginKey
 * @property {number} [unique_id]
 * @property {string} [login_key]
 */

/**
 * @typedef {object} Proto_CMsgClientNewLoginKeyAccepted
 * @property {number} [unique_id]
 */

/**
 * @typedef {object} Proto_CMsgClientChallengeRequest
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CMsgClientChallengeResponse
 * @property {string} [challenge]
 */

///////////////////////////////////////////////
// steammessages_clientserver_mms.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientMMSSetRatelimitPolicyOnClient
 * @property {number} [app_id]
 * @property {boolean} [enable_rate_limits]
 * @property {number} [seconds_per_message]
 * @property {number} [milliseconds_per_data_update]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSCreateLobby
 * @property {number} [app_id]
 * @property {number} [max_members]
 * @property {number} [lobby_type]
 * @property {number} [lobby_flags]
 * @property {number} [cell_id]
 * @property {number} [deprecated_public_ip]
 * @property {Buffer} [metadata]
 * @property {string} [persona_name_owner]
 * @property {Proto_CMsgIPAddress} [public_ip]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSCreateLobbyResponse
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSJoinLobby
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {string} [persona_name]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSJoinLobbyResponse
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {number} [chat_room_enter_response]
 * @property {number} [max_members]
 * @property {number} [lobby_type]
 * @property {number} [lobby_flags]
 * @property {string} [steam_id_owner]
 * @property {Buffer} [metadata]
 * @property {Proto_CMsgClientMMSJoinLobbyResponse_Member[]} members
 */

/**
 * @typedef {object} Proto_CMsgClientMMSJoinLobbyResponse_Member
 * @property {string} [steam_id]
 * @property {string} [persona_name]
 * @property {Buffer} [metadata]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSLeaveLobby
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSLeaveLobbyResponse
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSGetLobbyList
 * @property {number} [app_id]
 * @property {number} [num_lobbies_requested]
 * @property {number} [cell_id]
 * @property {number} [deprecated_public_ip]
 * @property {Proto_CMsgClientMMSGetLobbyList_Filter[]} filters
 * @property {Proto_CMsgIPAddress} [public_ip]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSGetLobbyList_Filter
 * @property {string} [key]
 * @property {string} [value]
 * @property {number} [comparision]
 * @property {number} [filter_type]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSGetLobbyListResponse
 * @property {number} [app_id]
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgClientMMSGetLobbyListResponse_Lobby[]} lobbies
 */

/**
 * @typedef {object} Proto_CMsgClientMMSGetLobbyListResponse_Lobby
 * @property {string} [steam_id]
 * @property {number} [max_members]
 * @property {number} [lobby_type]
 * @property {number} [lobby_flags]
 * @property {Buffer} [metadata]
 * @property {number} [num_members]
 * @property {number} [distance]
 * @property {string} [weight]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSSetLobbyData
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {string} [steam_id_member]
 * @property {number} [max_members]
 * @property {number} [lobby_type]
 * @property {number} [lobby_flags]
 * @property {Buffer} [metadata]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSSetLobbyDataResponse
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSGetLobbyData
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSLobbyData
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {number} [num_members]
 * @property {number} [max_members]
 * @property {number} [lobby_type]
 * @property {number} [lobby_flags]
 * @property {string} [steam_id_owner]
 * @property {Buffer} [metadata]
 * @property {Proto_CMsgClientMMSLobbyData_Member[]} members
 * @property {number} [lobby_cellid]
 * @property {boolean} [owner_should_accept_changes]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSLobbyData_Member
 * @property {string} [steam_id]
 * @property {string} [persona_name]
 * @property {Buffer} [metadata]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSSendLobbyChatMsg
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {string} [steam_id_target]
 * @property {Buffer} [lobby_message]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSLobbyChatMsg
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {string} [steam_id_sender]
 * @property {Buffer} [lobby_message]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSSetLobbyOwner
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {string} [steam_id_new_owner]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSSetLobbyOwnerResponse
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSSetLobbyLinked
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {string} [steam_id_lobby2]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSSetLobbyGameServer
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {number} [deprecated_game_server_ip]
 * @property {number} [game_server_port]
 * @property {string} [game_server_steam_id]
 * @property {Proto_CMsgIPAddress} [game_server_ip]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSLobbyGameServerSet
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {number} [deprecated_game_server_ip]
 * @property {number} [game_server_port]
 * @property {string} [game_server_steam_id]
 * @property {Proto_CMsgIPAddress} [game_server_ip]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSUserJoinedLobby
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {string} [steam_id_user]
 * @property {string} [persona_name]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSUserLeftLobby
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {string} [steam_id_user]
 * @property {string} [persona_name]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSGetLobbyStatus
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {boolean} [claim_membership]
 * @property {boolean} [claim_ownership]
 */

/**
 * @typedef {object} Proto_CMsgClientMMSGetLobbyStatusResponse
 * @property {number} [app_id]
 * @property {string} [steam_id_lobby]
 * @property {EMMSLobbyStatus} [lobby_status]
 */

///////////////////////////////////////////////
// steammessages_clientserver_ucm.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientUCMAddScreenshot
 * @property {number} [appid]
 * @property {string} [filename]
 * @property {string} [thumbname]
 * @property {string} [vr_filename]
 * @property {number} [rtime32_created]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [permissions]
 * @property {string} [caption]
 * @property {string} [shortcut_name]
 * @property {Proto_CMsgClientUCMAddScreenshot_Tag[]} tag
 * @property {string[]} tagged_steamid
 * @property {boolean} [spoiler_tag]
 * @property {string[]} tagged_publishedfileid
 */

/**
 * @typedef {object} Proto_CMsgClientUCMAddScreenshot_Tag
 * @property {string} [tag_name]
 * @property {string} [tag_value]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMAddScreenshotResponse
 * @property {EResult} [eresult=2]
 * @property {string} [screenshotid=18446744073709552000]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMDeleteScreenshot
 * @property {string} [screenshotid=18446744073709552000]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMDeleteScreenshotResponse
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMPublishFile
 * @property {number} [app_id]
 * @property {string} [file_name]
 * @property {string} [preview_file_name]
 * @property {number} [consumer_app_id]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} tags
 * @property {boolean} [workshop_file]
 * @property {number} [visibility]
 * @property {number} [file_type]
 * @property {string} [url]
 * @property {number} [video_provider]
 * @property {string} [video_account_name]
 * @property {string} [video_identifier]
 * @property {boolean} [in_progress]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMPublishFileResponse
 * @property {EResult} [eresult=2]
 * @property {string} [published_file_id=18446744073709552000]
 * @property {boolean} [needs_workshop_legal_agreement_acceptance=false]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMUpdatePublishedFile
 * @property {number} [app_id]
 * @property {string} [published_file_id]
 * @property {string} [file_name]
 * @property {string} [preview_file_name]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} tags
 * @property {number} [visibility]
 * @property {boolean} [update_file]
 * @property {boolean} [update_preview_file]
 * @property {boolean} [update_title]
 * @property {boolean} [update_description]
 * @property {boolean} [update_tags]
 * @property {boolean} [update_visibility]
 * @property {string} [change_description]
 * @property {boolean} [update_url]
 * @property {string} [url]
 * @property {boolean} [update_content_manifest]
 * @property {string} [content_manifest]
 * @property {string} [metadata]
 * @property {boolean} [update_metadata]
 * @property {number} [language=0]
 * @property {string[]} removed_kvtags
 * @property {Proto_CMsgClientUCMUpdatePublishedFile_KeyValueTag[]} kvtags
 * @property {Proto_CMsgClientUCMUpdatePublishedFile_AdditionalPreview[]} previews
 * @property {number[]} previews_to_remove
 * @property {boolean} [clear_in_progress]
 * @property {boolean} [remove_all_kvtags]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMUpdatePublishedFile_KeyValueTag
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMUpdatePublishedFile_AdditionalPreview
 * @property {string} [original_file_name]
 * @property {string} [internal_file_name]
 * @property {string} [videoid]
 * @property {number} [preview_type]
 * @property {number} [update_index=-1]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMUpdatePublishedFileResponse
 * @property {EResult} [eresult=2]
 * @property {boolean} [needs_workshop_legal_agreement_acceptance=false]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMDeletePublishedFile
 * @property {string} [published_file_id]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMDeletePublishedFileResponse
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates
 * @property {number} [app_id]
 * @property {number} [start_index]
 * @property {number} [start_time]
 * @property {number} [desired_revision=0]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId[]} subscribed_files
 * @property {number} [total_results]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId
 * @property {string} [published_file_id]
 * @property {number} [rtime32_subscribed=0]
 * @property {number} [appid]
 * @property {string} [file_hcontent]
 * @property {number} [file_size]
 * @property {number} [rtime32_last_updated]
 * @property {boolean} [is_depot_content]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMPublishedFileUpdated
 * @property {string} [published_file_id]
 * @property {number} [app_id]
 * @property {number} [time_updated]
 * @property {string} [hcontent]
 * @property {number} [file_size]
 * @property {boolean} [is_depot_content]
 * @property {number} [revision]
 */

/**
 * @typedef {object} Proto_CMsgClientWorkshopItemChangesRequest
 * @property {number} [app_id]
 * @property {number} [last_time_updated]
 * @property {number} [num_items_needed]
 */

/**
 * @typedef {object} Proto_CMsgClientWorkshopItemChangesResponse
 * @property {EResult} [eresult=2]
 * @property {number} [update_time]
 * @property {Proto_CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo[]} workshop_items
 */

/**
 * @typedef {object} Proto_CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo
 * @property {string} [published_file_id]
 * @property {number} [time_updated]
 * @property {string} [manifest_id]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMSetUserPublishedFileAction
 * @property {string} [published_file_id]
 * @property {number} [app_id]
 * @property {number} [action]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMSetUserPublishedFileActionResponse
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumeratePublishedFilesByUserAction
 * @property {number} [app_id]
 * @property {number} [start_index]
 * @property {number} [action]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumeratePublishedFilesByUserActionResponse
 * @property {EResult} [eresult=2]
 * @property {Proto_CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId[]} published_files
 * @property {number} [total_results]
 */

/**
 * @typedef {object} Proto_CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId
 * @property {string} [published_file_id]
 * @property {number} [rtime_time_stamp=0]
 */

/**
 * @typedef {object} Proto_CMsgClientScreenshotsChanged
 */

///////////////////////////////////////////////
// steammessages_clientserver_uds.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientUDSP2PSessionStarted
 * @property {string} [steamid_remote]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CMsgClientUDSP2PSessionEnded
 * @property {string} [steamid_remote]
 * @property {number} [appid]
 * @property {number} [session_length_sec]
 * @property {number} [session_error]
 * @property {number} [nattype]
 * @property {number} [bytes_recv]
 * @property {number} [bytes_sent]
 * @property {number} [bytes_sent_relay]
 * @property {number} [bytes_recv_relay]
 * @property {number} [time_to_connect_ms]
 */

/**
 * @typedef {object} Proto_CMsgClientGetClientDetails
 */

/**
 * @typedef {object} Proto_CMsgClientGetClientDetailsResponse
 * @property {number} [package_version]
 * @property {number} [protocol_version]
 * @property {string} [os]
 * @property {string} [machine_name]
 * @property {string} [ip_public]
 * @property {string} [ip_private]
 * @property {string} [bytes_available]
 * @property {Proto_CMsgClientGetClientDetailsResponse_Game[]} games_running
 */

/**
 * @typedef {object} Proto_CMsgClientGetClientDetailsResponse_Game
 * @property {number} [appid]
 * @property {string} [extra_info]
 * @property {number} [time_running_sec]
 */

/**
 * @typedef {object} Proto_CMsgClientGetClientAppList
 * @property {boolean} [media]
 * @property {boolean} [tools]
 * @property {boolean} [games]
 * @property {boolean} [only_installed]
 * @property {boolean} [only_changing]
 * @property {boolean} [comics]
 */

/**
 * @typedef {object} Proto_CMsgClientGetClientAppListResponse
 * @property {Proto_CMsgClientGetClientAppListResponse_App[]} apps
 * @property {string} [bytes_available]
 */

/**
 * @typedef {object} Proto_CMsgClientGetClientAppListResponse_App
 * @property {number} [appid]
 * @property {string} [category]
 * @property {string} [app_type]
 * @property {boolean} [favorite]
 * @property {boolean} [installed]
 * @property {boolean} [auto_update]
 * @property {string} [bytes_downloaded]
 * @property {string} [bytes_needed]
 * @property {number} [bytes_download_rate]
 * @property {boolean} [download_paused]
 * @property {number} [num_downloading]
 * @property {number} [num_paused]
 * @property {boolean} [changing]
 * @property {boolean} [available_on_platform]
 * @property {Proto_CMsgClientGetClientAppListResponse_App_DLC[]} dlcs
 */

/**
 * @typedef {object} Proto_CMsgClientGetClientAppListResponse_App_DLC
 * @property {number} [appid]
 * @property {boolean} [installed]
 */

/**
 * @typedef {object} Proto_CMsgClientInstallClientApp
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CMsgClientInstallClientAppResponse
 * @property {EResult} [result]
 */

/**
 * @typedef {object} Proto_CMsgClientUninstallClientApp
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CMsgClientUninstallClientAppResponse
 * @property {EResult} [result]
 */

/**
 * @typedef {object} Proto_CMsgClientSetClientAppUpdateState
 * @property {number} [appid]
 * @property {boolean} [update]
 */

/**
 * @typedef {object} Proto_CMsgClientSetClientAppUpdateStateResponse
 * @property {EResult} [result]
 */

///////////////////////////////////////////////
// steammessages_clientserver_ufs.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientUFSUploadFileRequest
 * @property {number} [app_id]
 * @property {number} [file_size]
 * @property {number} [raw_file_size]
 * @property {Buffer} [sha_file]
 * @property {string} [time_stamp]
 * @property {string} [file_name]
 * @property {number} [platforms_to_sync_deprecated]
 * @property {number} [platforms_to_sync=4294967295]
 * @property {number} [cell_id]
 * @property {boolean} [can_encrypt]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSUploadFileResponse
 * @property {EResult} [eresult=2]
 * @property {Buffer} [sha_file]
 * @property {boolean} [use_http]
 * @property {string} [http_host]
 * @property {string} [http_url]
 * @property {Buffer} [kv_headers]
 * @property {boolean} [use_https]
 * @property {boolean} [encrypt_file]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSUploadCommit
 * @property {Proto_CMsgClientUFSUploadCommit_File[]} files
 */

/**
 * @typedef {object} Proto_CMsgClientUFSUploadCommit_File
 * @property {EResult} [eresult=2]
 * @property {number} [app_id]
 * @property {Buffer} [sha_file]
 * @property {number} [cub_file]
 * @property {string} [file_name]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSUploadCommitResponse
 * @property {Proto_CMsgClientUFSUploadCommitResponse_File[]} files
 */

/**
 * @typedef {object} Proto_CMsgClientUFSUploadCommitResponse_File
 * @property {EResult} [eresult=2]
 * @property {number} [app_id]
 * @property {Buffer} [sha_file]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSFileChunk
 * @property {Buffer} [sha_file]
 * @property {number} [file_start]
 * @property {Buffer} [data]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSTransferHeartbeat
 */

/**
 * @typedef {object} Proto_CMsgClientUFSUploadFileFinished
 * @property {EResult} [eresult=2]
 * @property {Buffer} [sha_file]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSDeleteFileRequest
 * @property {number} [app_id]
 * @property {string} [file_name]
 * @property {boolean} [is_explicit_delete]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSDeleteFileResponse
 * @property {EResult} [eresult=2]
 * @property {string} [file_name]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSGetFileListForApp
 * @property {number[]} apps_to_query
 * @property {boolean} [send_path_prefixes]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSGetFileListForAppResponse
 * @property {Proto_CMsgClientUFSGetFileListForAppResponse_File[]} files
 * @property {string[]} path_prefixes
 */

/**
 * @typedef {object} Proto_CMsgClientUFSGetFileListForAppResponse_File
 * @property {number} [app_id]
 * @property {string} [file_name]
 * @property {Buffer} [sha_file]
 * @property {string} [time_stamp]
 * @property {number} [raw_file_size]
 * @property {boolean} [is_explicit_delete]
 * @property {number} [platforms_to_sync]
 * @property {number} [path_prefix_index]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSDownloadRequest
 * @property {number} [app_id]
 * @property {string} [file_name]
 * @property {boolean} [can_handle_http]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSDownloadResponse
 * @property {EResult} [eresult=2]
 * @property {number} [app_id]
 * @property {number} [file_size]
 * @property {number} [raw_file_size]
 * @property {Buffer} [sha_file]
 * @property {string} [time_stamp]
 * @property {boolean} [is_explicit_delete]
 * @property {boolean} [use_http]
 * @property {string} [http_host]
 * @property {string} [http_url]
 * @property {Buffer} [kv_headers]
 * @property {boolean} [use_https]
 * @property {boolean} [encrypted]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSLoginRequest
 * @property {number} [protocol_version]
 * @property {string} [am_session_token]
 * @property {number[]} apps
 */

/**
 * @typedef {object} Proto_CMsgClientUFSLoginResponse
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSGetUGCDetails
 * @property {string} [hcontent=18446744073709552000]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSGetUGCDetailsResponse
 * @property {EResult} [eresult=2]
 * @property {string} [url]
 * @property {number} [app_id]
 * @property {string} [filename]
 * @property {string} [steamid_creator]
 * @property {number} [file_size]
 * @property {number} [compressed_file_size]
 * @property {string} [rangecheck_host]
 * @property {string} [file_encoded_sha1]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSGetSingleFileInfo
 * @property {number} [app_id]
 * @property {string} [file_name]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSGetSingleFileInfoResponse
 * @property {EResult} [eresult=2]
 * @property {number} [app_id]
 * @property {string} [file_name]
 * @property {Buffer} [sha_file]
 * @property {string} [time_stamp]
 * @property {number} [raw_file_size]
 * @property {boolean} [is_explicit_delete]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSShareFile
 * @property {number} [app_id]
 * @property {string} [file_name]
 */

/**
 * @typedef {object} Proto_CMsgClientUFSShareFileResponse
 * @property {EResult} [eresult=2]
 * @property {string} [hcontent=18446744073709552000]
 */

///////////////////////////////////////////////
// steammessages_clientserver_userstats.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientGetUserStats
 * @property {string} [game_id]
 * @property {number} [crc_stats]
 * @property {number} [schema_local_version]
 * @property {string} [steam_id_for_user]
 */

/**
 * @typedef {object} Proto_CMsgClientGetUserStatsResponse
 * @property {string} [game_id]
 * @property {EResult} [eresult=2]
 * @property {number} [crc_stats]
 * @property {Buffer} [schema]
 * @property {Proto_CMsgClientGetUserStatsResponse_Stats[]} stats
 * @property {Proto_CMsgClientGetUserStatsResponse_Achievement_Blocks[]} achievement_blocks
 */

/**
 * @typedef {object} Proto_CMsgClientGetUserStatsResponse_Stats
 * @property {number} [stat_id]
 * @property {number} [stat_value]
 */

/**
 * @typedef {object} Proto_CMsgClientGetUserStatsResponse_Achievement_Blocks
 * @property {number} [achievement_id]
 * @property {number[]} unlock_time
 */

/**
 * @typedef {object} Proto_CMsgClientStoreUserStatsResponse
 * @property {string} [game_id]
 * @property {EResult} [eresult=2]
 * @property {number} [crc_stats]
 * @property {Proto_CMsgClientStoreUserStatsResponse_Stats_Failed_Validation[]} stats_failed_validation
 * @property {boolean} [stats_out_of_date]
 */

/**
 * @typedef {object} Proto_CMsgClientStoreUserStatsResponse_Stats_Failed_Validation
 * @property {number} [stat_id]
 * @property {number} [reverted_stat_value]
 */

/**
 * @typedef {object} Proto_CMsgClientStoreUserStats2
 * @property {string} [game_id]
 * @property {string} [settor_steam_id]
 * @property {string} [settee_steam_id]
 * @property {number} [crc_stats]
 * @property {boolean} [explicit_reset]
 * @property {Proto_CMsgClientStoreUserStats2_Stats[]} stats
 */

/**
 * @typedef {object} Proto_CMsgClientStoreUserStats2_Stats
 * @property {number} [stat_id]
 * @property {number} [stat_value]
 */

/**
 * @typedef {object} Proto_CMsgClientStatsUpdated
 * @property {string} [steam_id]
 * @property {string} [game_id]
 * @property {number} [crc_stats]
 * @property {Proto_CMsgClientStatsUpdated_Updated_Stats[]} updated_stats
 */

/**
 * @typedef {object} Proto_CMsgClientStatsUpdated_Updated_Stats
 * @property {number} [stat_id]
 * @property {number} [stat_value]
 */

/**
 * @typedef {object} Proto_CMsgClientStoreUserStats
 * @property {string} [game_id]
 * @property {boolean} [explicit_reset]
 * @property {Proto_CMsgClientStoreUserStats_Stats_To_Store[]} stats_to_store
 */

/**
 * @typedef {object} Proto_CMsgClientStoreUserStats_Stats_To_Store
 * @property {number} [stat_id]
 * @property {number} [stat_value]
 */

///////////////////////////////////////////////
// steammessages_client_objects.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_SteamMessagesClientIClientForcedEnumDependencies
 * @property {EBluetoothDeviceType} [a]
 * @property {EStorageBlockContentType} [b]
 * @property {EStorageBlockFileSystemType} [c]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDeviceIP4Address
 * @property {number} [ip=0]
 * @property {number} [netmask]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDeviceIP4Config
 * @property {Proto_CMsgNetworkDeviceIP4Address[]} addresses
 * @property {number[]} dns_ip
 * @property {number} [gateway_ip]
 * @property {boolean} [is_dhcp_enabled]
 * @property {boolean} [is_default_route]
 * @property {boolean} [is_enabled=false]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDeviceIP6Address
 * @property {string} [ip]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDeviceIP6Config
 * @property {Proto_CMsgNetworkDeviceIP6Address[]} addresses
 * @property {string[]} dns_ip
 * @property {string} [gateway_ip]
 * @property {boolean} [is_dhcp_enabled]
 * @property {boolean} [is_default_route]
 * @property {boolean} [is_enabled=false]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDevicesData
 * @property {Proto_CMsgNetworkDevicesData_Device[]} devices
 * @property {boolean} [is_wifi_enabled]
 * @property {boolean} [is_wifi_scanning_enabled]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDevicesData_Device
 * @property {number} [id=0]
 * @property {number} [etype]
 * @property {number} [estate]
 * @property {string} [mac]
 * @property {string} [vendor]
 * @property {string} [product]
 * @property {Proto_CMsgNetworkDeviceIP4Config} [ip4]
 * @property {Proto_CMsgNetworkDeviceIP6Config} [ip6]
 * @property {Proto_CMsgNetworkDevicesData_Device_Wired} [wired]
 * @property {Proto_CMsgNetworkDevicesData_Device_Wireless} [wireless]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDevicesData_Device_Wired
 * @property {boolean} [is_cable_present=false]
 * @property {number} [speed_mbit]
 * @property {string} [friendly_name]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDevicesData_Device_Wireless
 * @property {Proto_CMsgNetworkDevicesData_Device_Wireless_AP[]} aps
 * @property {number} [esecurity_supported]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDevicesData_Device_Wireless_AP
 * @property {number} [id=0]
 * @property {number} [estrength]
 * @property {string} [ssid]
 * @property {boolean} [is_active]
 * @property {boolean} [is_autoconnect]
 * @property {number} [esecurity]
 * @property {string} [user_name]
 * @property {string} [password]
 * @property {number} [strength_raw]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDeviceConnect
 * @property {number} [device_id=0]
 * @property {Proto_CMsgNetworkDeviceConnect_Credentials} [credentials]
 * @property {Proto_CMsgNetworkDeviceIP4Config} [ip4]
 * @property {Proto_CMsgNetworkDeviceIP6Config} [ip6]
 * @property {Proto_CMsgNetworkDeviceConnect_KnownAP} [ap_known]
 * @property {Proto_CMsgNetworkDeviceConnect_CustomAP} [ap_custom]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDeviceConnect_KnownAP
 * @property {number} [ap_id]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDeviceConnect_CustomAP
 * @property {string} [ssid]
 * @property {number} [esecurity]
 */

/**
 * @typedef {object} Proto_CMsgNetworkDeviceConnect_Credentials
 * @property {string} [username]
 * @property {string} [password]
 */

/**
 * @typedef {object} Proto_CMsgStorageDevicesData
 * @property {Proto_CMsgStorageDevicesData_Drive[]} drives
 * @property {Proto_CMsgStorageDevicesData_BlockDevice[]} block_devices
 */

/**
 * @typedef {object} Proto_CMsgStorageDevicesData_Drive
 * @property {number} [id=0]
 * @property {string} [model]
 * @property {string} [vendor]
 * @property {string} [serial]
 * @property {boolean} [is_ejectable]
 * @property {string} [size_bytes]
 */

/**
 * @typedef {object} Proto_CMsgStorageDevicesData_BlockDevice
 * @property {number} [id=0]
 * @property {number} [drive_id=0]
 * @property {string} [path]
 * @property {string} [friendly_path]
 * @property {string} [label]
 * @property {string} [size_bytes]
 * @property {boolean} [is_formattable]
 * @property {boolean} [is_read_only]
 * @property {boolean} [is_root_device]
 * @property {EStorageBlockContentType} [content_type]
 * @property {EStorageBlockFileSystemType} [filesystem_type]
 * @property {string} [mount_path]
 */

/**
 * @typedef {object} Proto_CCloud_PendingRemoteOperation
 * @property {ECloudPendingRemoteOperation} [operation]
 * @property {string} [machine_name]
 * @property {string} [client_id]
 * @property {number} [time_last_updated]
 */

/**
 * @typedef {object} Proto_CMsgCloudPendingRemoteOperations
 * @property {Proto_CCloud_PendingRemoteOperation[]} operations
 */

/**
 * @typedef {object} Proto_CMsgBluetoothDevicesData
 * @property {Proto_CMsgBluetoothDevicesData_Adapter[]} adapters
 * @property {Proto_CMsgBluetoothDevicesData_Device[]} devices
 */

/**
 * @typedef {object} Proto_CMsgBluetoothDevicesData_Adapter
 * @property {number} [id=0]
 * @property {string} [mac]
 * @property {string} [name]
 * @property {boolean} [is_enabled]
 * @property {boolean} [is_discovering]
 */

/**
 * @typedef {object} Proto_CMsgBluetoothDevicesData_Device
 * @property {number} [id=0]
 * @property {number} [adapter_id=0]
 * @property {EBluetoothDeviceType} [etype]
 * @property {string} [mac]
 * @property {string} [name]
 * @property {boolean} [is_connected]
 * @property {boolean} [is_paired]
 * @property {number} [strength_raw]
 */

/**
 * @typedef {object} Proto_CMsgBluetoothSettings
 * @property {boolean} [is_enabled]
 */

/**
 * @typedef {object} Proto_CMsgSystemPerfDiagnosticEntry
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CMsgSystemPerfDiagnosticInfo
 * @property {Proto_CMsgSystemPerfDiagnosticEntry[]} entries
 */

/**
 * @typedef {object} Proto_CMsgSystemPerfSettings
 * @property {number} [diagnostic_update_rate]
 * @property {boolean} [is_shark_mode]
 */

///////////////////////////////////////////////
// steammessages_cloud.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CCloud_GetUploadServerInfo_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CCloud_GetUploadServerInfo_Response
 * @property {string} [server_url]
 */

/**
 * @typedef {object} Proto_CCloud_BeginHTTPUpload_Request
 * @property {number} [appid]
 * @property {number} [file_size]
 * @property {string} [filename]
 * @property {string} [file_sha]
 * @property {boolean} [is_public]
 * @property {string[]} platforms_to_sync
 * @property {string[]} request_headers_names
 * @property {string[]} request_headers_values
 * @property {string} [upload_batch_id]
 */

/**
 * @typedef {object} Proto_CCloud_BeginHTTPUpload_Response
 * @property {string} [ugcid]
 * @property {number} [timestamp]
 * @property {string} [url_host]
 * @property {string} [url_path]
 * @property {boolean} [use_https]
 * @property {Proto_CCloud_BeginHTTPUpload_Response_HTTPHeaders[]} request_headers
 */

/**
 * @typedef {object} Proto_CCloud_BeginHTTPUpload_Response_HTTPHeaders
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CCloud_CommitHTTPUpload_Request
 * @property {boolean} [transfer_succeeded]
 * @property {number} [appid]
 * @property {string} [file_sha]
 * @property {string} [filename]
 */

/**
 * @typedef {object} Proto_CCloud_CommitHTTPUpload_Response
 * @property {boolean} [file_committed]
 */

/**
 * @typedef {object} Proto_CCloud_BeginUGCUpload_Request
 * @property {number} [appid]
 * @property {number} [file_size]
 * @property {string} [filename]
 * @property {string} [file_sha]
 * @property {string} [content_type]
 */

/**
 * @typedef {object} Proto_CCloud_BeginUGCUpload_Response
 * @property {EPublishedFileStorageSystem} [storage_system]
 * @property {string} [ugcid]
 * @property {number} [timestamp]
 * @property {string} [url_host]
 * @property {string} [url_path]
 * @property {boolean} [use_https]
 * @property {Proto_CCloud_BeginUGCUpload_Response_HTTPHeaders[]} request_headers
 */

/**
 * @typedef {object} Proto_CCloud_BeginUGCUpload_Response_HTTPHeaders
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CCloud_CommitUGCUpload_Request
 * @property {boolean} [transfer_succeeded]
 * @property {number} [appid]
 * @property {string} [ugcid]
 */

/**
 * @typedef {object} Proto_CCloud_CommitUGCUpload_Response
 * @property {boolean} [file_committed]
 */

/**
 * @typedef {object} Proto_CCloud_GetFileDetails_Request
 * @property {string} [ugcid]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CCloud_UserFile
 * @property {number} [appid]
 * @property {string} [ugcid]
 * @property {string} [filename]
 * @property {string} [timestamp]
 * @property {number} [file_size]
 * @property {string} [url]
 * @property {string} [steamid_creator]
 * @property {number} [flags]
 * @property {string[]} platforms_to_sync
 * @property {string} [file_sha]
 */

/**
 * @typedef {object} Proto_CCloud_GetFileDetails_Response
 * @property {Proto_CCloud_UserFile} [details]
 */

/**
 * @typedef {object} Proto_CCloud_EnumerateUserFiles_Request
 * @property {number} [appid]
 * @property {boolean} [extended_details]
 * @property {number} [count]
 * @property {number} [start_index]
 */

/**
 * @typedef {object} Proto_CCloud_EnumerateUserFiles_Response
 * @property {Proto_CCloud_UserFile[]} files
 * @property {number} [total_files]
 */

/**
 * @typedef {object} Proto_CCloud_Delete_Request
 * @property {string} [filename]
 * @property {number} [appid]
 * @property {string} [upload_batch_id]
 */

/**
 * @typedef {object} Proto_CCloud_Delete_Response
 */

/**
 * @typedef {object} Proto_CCloud_GetClientEncryptionKey_Request
 */

/**
 * @typedef {object} Proto_CCloud_GetClientEncryptionKey_Response
 * @property {Buffer} [key]
 * @property {number} [crc]
 */

/**
 * @typedef {object} Proto_CCloud_CDNReport_Notification
 * @property {string} [steamid]
 * @property {string} [url]
 * @property {boolean} [success]
 * @property {number} [http_status_code]
 * @property {string} [expected_bytes]
 * @property {string} [received_bytes]
 * @property {number} [duration]
 */

/**
 * @typedef {object} Proto_CCloud_ExternalStorageTransferReport_Notification
 * @property {string} [host]
 * @property {string} [path]
 * @property {boolean} [is_upload]
 * @property {boolean} [success]
 * @property {number} [http_status_code]
 * @property {string} [bytes_expected]
 * @property {string} [bytes_actual]
 * @property {number} [duration_ms]
 * @property {number} [cellid]
 * @property {boolean} [proxied]
 * @property {boolean} [ipv6_local]
 * @property {boolean} [ipv6_remote]
 */

/**
 * @typedef {object} Proto_CCloud_BeginAppUploadBatch_Request
 * @property {number} [appid]
 * @property {string} [machine_name]
 * @property {string[]} files_to_upload
 * @property {string[]} files_to_delete
 * @property {string} [client_id]
 */

/**
 * @typedef {object} Proto_CCloud_BeginAppUploadBatch_Response
 * @property {string} [batch_id]
 * @property {string} [app_change_number]
 */

/**
 * @typedef {object} Proto_CCloud_CompleteAppUploadBatch_Notification
 * @property {number} [appid]
 * @property {string} [batch_id]
 * @property {number} [batch_eresult]
 */

/**
 * @typedef {object} Proto_CCloud_CompleteAppUploadBatch_Request
 * @property {number} [appid]
 * @property {string} [batch_id]
 * @property {number} [batch_eresult]
 */

/**
 * @typedef {object} Proto_CCloud_CompleteAppUploadBatch_Response
 */

/**
 * @typedef {object} Proto_CCloud_ClientBeginFileUpload_Request
 * @property {number} [appid]
 * @property {number} [file_size]
 * @property {number} [raw_file_size]
 * @property {Buffer} [file_sha]
 * @property {string} [time_stamp]
 * @property {string} [filename]
 * @property {number} [platforms_to_sync=4294967295]
 * @property {number} [cell_id]
 * @property {boolean} [can_encrypt]
 * @property {boolean} [is_shared_file]
 * @property {number} [deprecated_realm]
 * @property {string} [upload_batch_id]
 */

/**
 * @typedef {object} Proto_ClientCloudFileUploadBlockDetails
 * @property {string} [url_host]
 * @property {string} [url_path]
 * @property {boolean} [use_https]
 * @property {number} [http_method]
 * @property {Proto_ClientCloudFileUploadBlockDetails_HTTPHeaders[]} request_headers
 * @property {string} [block_offset]
 * @property {number} [block_length]
 * @property {Buffer} [explicit_body_data]
 * @property {boolean} [may_parallelize]
 */

/**
 * @typedef {object} Proto_ClientCloudFileUploadBlockDetails_HTTPHeaders
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CCloud_ClientBeginFileUpload_Response
 * @property {boolean} [encrypt_file]
 * @property {Proto_ClientCloudFileUploadBlockDetails[]} block_requests
 */

/**
 * @typedef {object} Proto_CCloud_ClientCommitFileUpload_Request
 * @property {boolean} [transfer_succeeded]
 * @property {number} [appid]
 * @property {Buffer} [file_sha]
 * @property {string} [filename]
 */

/**
 * @typedef {object} Proto_CCloud_ClientCommitFileUpload_Response
 * @property {boolean} [file_committed]
 */

/**
 * @typedef {object} Proto_CCloud_ClientFileDownload_Request
 * @property {number} [appid]
 * @property {string} [filename]
 * @property {number} [realm]
 */

/**
 * @typedef {object} Proto_CCloud_ClientFileDownload_Response
 * @property {number} [appid]
 * @property {number} [file_size]
 * @property {number} [raw_file_size]
 * @property {Buffer} [sha_file]
 * @property {string} [time_stamp]
 * @property {boolean} [is_explicit_delete]
 * @property {string} [url_host]
 * @property {string} [url_path]
 * @property {boolean} [use_https]
 * @property {Proto_CCloud_ClientFileDownload_Response_HTTPHeaders[]} request_headers
 * @property {boolean} [encrypted]
 */

/**
 * @typedef {object} Proto_CCloud_ClientFileDownload_Response_HTTPHeaders
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CCloud_ClientDeleteFile_Request
 * @property {number} [appid]
 * @property {string} [filename]
 * @property {boolean} [is_explicit_delete]
 * @property {string} [upload_batch_id]
 */

/**
 * @typedef {object} Proto_CCloud_ClientDeleteFile_Response
 */

/**
 * @typedef {object} Proto_CCloud_ClientConflictResolution_Notification
 * @property {number} [appid]
 * @property {boolean} [chose_local_files]
 */

/**
 * @typedef {object} Proto_CCloud_EnumerateUserApps_Request
 */

/**
 * @typedef {object} Proto_CCloud_EnumerateUserApps_Response
 * @property {Proto_CCloud_EnumerateUserApps_Response_Apps[]} apps
 */

/**
 * @typedef {object} Proto_CCloud_EnumerateUserApps_Response_Apps
 * @property {number} [appid]
 * @property {number} [totalcount]
 * @property {string} [totalsize]
 */

/**
 * @typedef {object} Proto_CCloud_GetAppFileChangelist_Request
 * @property {number} [appid]
 * @property {string} [synced_change_number]
 */

/**
 * @typedef {object} Proto_CCloud_AppFileInfo
 * @property {string} [file_name]
 * @property {Buffer} [sha_file]
 * @property {string} [time_stamp]
 * @property {number} [raw_file_size]
 * @property {ECloudStoragePersistState} [persist_state]
 * @property {number} [platforms_to_sync]
 * @property {number} [path_prefix_index]
 * @property {number} [machine_name_index]
 */

/**
 * @typedef {object} Proto_CCloud_GetAppFileChangelist_Response
 * @property {string} [current_change_number]
 * @property {Proto_CCloud_AppFileInfo[]} files
 * @property {boolean} [is_only_delta]
 * @property {string[]} path_prefixes
 * @property {string[]} machine_names
 */

/**
 * @typedef {object} Proto_CCloud_AppSessionSuspend_Request
 * @property {number} [appid]
 * @property {string} [client_id]
 * @property {string} [machine_name]
 * @property {boolean} [cloud_sync_completed]
 */

/**
 * @typedef {object} Proto_CCloud_AppSessionSuspend_Response
 */

/**
 * @typedef {object} Proto_CCloud_AppSessionResume_Request
 * @property {number} [appid]
 * @property {string} [client_id]
 */

/**
 * @typedef {object} Proto_CCloud_AppSessionResume_Response
 */

/**
 * @typedef {object} Proto_CCloud_AppLaunchIntent_Request
 * @property {number} [appid]
 * @property {string} [client_id]
 * @property {string} [machine_name]
 * @property {boolean} [ignore_pending_operations]
 */

/**
 * @typedef {object} Proto_CCloud_AppLaunchIntent_Response
 * @property {Proto_CCloud_PendingRemoteOperation[]} pending_remote_operations
 */

/**
 * @typedef {object} Proto_CCloud_AppExitSyncDone_Notification
 * @property {number} [appid]
 * @property {string} [client_id]
 * @property {boolean} [uploads_completed]
 */

/**
 * @typedef {object} Proto_CCloud_AppCloudStateChange_Notification
 * @property {number} [appid]
 * @property {string} [app_change_number]
 */

/**
 * @typedef {object} Proto_Cloud
 */

/**
 * @typedef {object} Proto_CloudClient
 */

///////////////////////////////////////////////
// steammessages_contentsystem.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CContentServerDirectory_GetServersForSteamPipe_Request
 * @property {number} [cell_id]
 * @property {number} [max_servers=20]
 * @property {string} [ip_override]
 * @property {number} [launcher_type=0]
 * @property {string} [ipv6_public]
 */

/**
 * @typedef {object} Proto_CContentServerDirectory_ServerInfo
 * @property {string} [type]
 * @property {number} [source_id]
 * @property {number} [cell_id]
 * @property {number} [load]
 * @property {number} [weighted_load]
 * @property {number} [num_entries_in_client_list]
 * @property {boolean} [steam_china_only]
 * @property {string} [host]
 * @property {string} [vhost]
 * @property {boolean} [use_as_proxy]
 * @property {string} [proxy_request_path_template]
 * @property {string} [https_support]
 * @property {number[]} allowed_app_ids
 * @property {boolean} [preferred_server]
 */

/**
 * @typedef {object} Proto_CContentServerDirectory_GetServersForSteamPipe_Response
 * @property {Proto_CContentServerDirectory_ServerInfo[]} servers
 */

/**
 * @typedef {object} Proto_CContentServerDirectory_GetDepotPatchInfo_Request
 * @property {number} [appid]
 * @property {number} [depotid]
 * @property {string} [source_manifestid]
 * @property {string} [target_manifestid]
 */

/**
 * @typedef {object} Proto_CContentServerDirectory_GetDepotPatchInfo_Response
 * @property {boolean} [is_available]
 * @property {string} [patch_size]
 * @property {string} [patched_chunks_size]
 */

/**
 * @typedef {object} Proto_CContentServerDirectory_GetClientUpdateHosts_Request
 * @property {string} [cached_signature]
 */

/**
 * @typedef {object} Proto_CContentServerDirectory_GetClientUpdateHosts_Response
 * @property {string} [hosts_kv]
 * @property {string} [valid_until_time]
 * @property {string} [ip_country]
 */

/**
 * @typedef {object} Proto_CContentServerDirectory_GetManifestRequestCode_Request
 * @property {number} [app_id]
 * @property {number} [depot_id]
 * @property {string} [manifest_id]
 * @property {string} [app_branch]
 * @property {string} [branch_password_hash]
 */

/**
 * @typedef {object} Proto_CContentServerDirectory_GetManifestRequestCode_Response
 * @property {string} [manifest_request_code]
 */

/**
 * @typedef {object} Proto_ContentServerDirectory
 */

///////////////////////////////////////////////
// steammessages_credentials.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CCredentials_TestAvailablePassword_Request
 * @property {string} [password]
 * @property {Buffer} [sha_digest_password]
 * @property {string} [account_name]
 */

/**
 * @typedef {object} Proto_CCredentials_TestAvailablePassword_Response
 * @property {boolean} [is_valid]
 */

/**
 * @typedef {object} Proto_CCredentials_GetSteamGuardDetails_Request
 * @property {boolean} [include_new_authentications=true]
 * @property {string} [webcookie]
 * @property {number} [timestamp_minimum_wanted]
 * @property {number} [deprecated_ipaddress]
 * @property {Proto_CMsgIPAddress} [ip_address]
 */

/**
 * @typedef {object} Proto_CCredentials_GetSteamGuardDetails_Response
 * @property {boolean} [is_steamguard_enabled]
 * @property {number} [timestamp_steamguard_enabled]
 * @property {Proto_CCredentials_GetSteamGuardDetails_Response_NewAuthentication[]} deprecated_newauthentication
 * @property {string} [deprecated_machine_name_userchosen]
 * @property {number} [deprecated_timestamp_machine_steamguard_enabled]
 * @property {boolean} [deprecated_authentication_exists_from_geoloc_before_mintime]
 * @property {string} [deprecated_machine_id]
 * @property {Proto_CCredentials_GetSteamGuardDetails_Response_SessionData[]} session_data
 * @property {boolean} [is_twofactor_enabled]
 * @property {number} [timestamp_twofactor_enabled]
 * @property {boolean} [is_phone_verified]
 */

/**
 * @typedef {object} Proto_CCredentials_GetSteamGuardDetails_Response_NewAuthentication
 * @property {number} [timestamp_steamguard_enabled]
 * @property {boolean} [is_web_cookie]
 * @property {number} [deprecated_ipaddress]
 * @property {string} [geoloc_info]
 * @property {boolean} [is_remembered]
 * @property {string} [machine_name_user_supplied]
 * @property {number} [status]
 * @property {Proto_CMsgIPAddress} [ip_address]
 */

/**
 * @typedef {object} Proto_CCredentials_GetSteamGuardDetails_Response_SessionData
 * @property {string} [machine_id]
 * @property {string} [machine_name_userchosen]
 * @property {number} [timestamp_machine_steamguard_enabled]
 * @property {boolean} [authentication_exists_from_geoloc_before_mintime]
 * @property {Proto_CCredentials_GetSteamGuardDetails_Response_NewAuthentication[]} newauthentication
 * @property {boolean} [authentication_exists_from_same_ip_before_mintime]
 * @property {number} [public_ipv4]
 * @property {string} [public_ip_address]
 */

/**
 * @typedef {object} Proto_CCredentials_NewMachineNotificationDialog_Request
 * @property {boolean} [is_approved]
 * @property {boolean} [is_wizard_complete]
 */

/**
 * @typedef {object} Proto_CCredentials_NewMachineNotificationDialog_Response
 */

/**
 * @typedef {object} Proto_CCredentials_ValidateEmailAddress_Request
 * @property {string} [stoken]
 */

/**
 * @typedef {object} Proto_CCredentials_ValidateEmailAddress_Response
 * @property {boolean} [was_validated]
 */

/**
 * @typedef {object} Proto_CCredentials_SteamGuardPhishingReport_Request
 * @property {string} [param_string]
 * @property {string} [ipaddress_actual]
 */

/**
 * @typedef {object} Proto_CCredentials_SteamGuardPhishingReport_Response
 * @property {string} [ipaddress_loginattempt]
 * @property {string} [countryname_loginattempt]
 * @property {string} [statename_loginattempt]
 * @property {string} [cityname_loginattempt]
 * @property {string} [ipaddress_actual]
 * @property {string} [countryname_actual]
 * @property {string} [statename_actual]
 * @property {string} [cityname_actual]
 * @property {string} [steamguard_code]
 */

/**
 * @typedef {object} Proto_CCredentials_LastCredentialChangeTime_Request
 * @property {boolean} [user_changes_only]
 */

/**
 * @typedef {object} Proto_CCredentials_LastCredentialChangeTime_Response
 * @property {number} [timestamp_last_password_change]
 * @property {number} [timestamp_last_email_change]
 * @property {number} [timestamp_last_password_reset]
 */

/**
 * @typedef {object} Proto_CCredentials_GetAccountAuthSecret_Request
 */

/**
 * @typedef {object} Proto_CCredentials_GetAccountAuthSecret_Response
 * @property {number} [secret_id]
 * @property {Buffer} [secret]
 */

/**
 * @typedef {object} Proto_Credentials
 */

///////////////////////////////////////////////
// steammessages_datapublisher.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CDataPublisher_ClientContentCorruptionReport_Notification
 * @property {number} [appid]
 * @property {number} [depotid]
 * @property {string} [download_source]
 * @property {string} [objectid]
 * @property {number} [cellid]
 * @property {boolean} [is_manifest]
 * @property {string} [object_size]
 * @property {number} [corruption_type]
 * @property {boolean} [used_https]
 * @property {boolean} [oc_proxy_detected]
 */

/**
 * @typedef {object} Proto_CDataPublisher_ClientUpdateAppJob_Notification
 * @property {number} [app_id]
 * @property {number[]} depot_ids
 * @property {number} [app_state]
 * @property {number} [job_app_error]
 * @property {string} [error_details]
 * @property {number} [job_duration]
 * @property {number} [files_validation_failed]
 * @property {string} [job_bytes_downloaded]
 * @property {string} [job_bytes_staged]
 * @property {string} [bytes_comitted]
 * @property {number} [start_app_state]
 * @property {string} [stats_machine_id]
 * @property {string} [branch_name]
 * @property {string} [total_bytes_downloaded]
 * @property {string} [total_bytes_staged]
 * @property {string} [total_bytes_restored]
 * @property {boolean} [is_borrowed]
 * @property {boolean} [is_free_weekend]
 * @property {string} [total_bytes_legacy]
 * @property {string} [total_bytes_patched]
 * @property {string} [total_bytes_saved]
 * @property {number} [cell_id]
 */

/**
 * @typedef {object} Proto_CValveHWSurvey_GetSurveySchedule_Request
 * @property {string} [surveydatetoken]
 * @property {string} [surveydatetokenversion]
 */

/**
 * @typedef {object} Proto_CValveHWSurvey_GetSurveySchedule_Response
 * @property {number} [surveydatetoken]
 * @property {string} [surveydatetokenversion]
 */

/**
 * @typedef {object} Proto_DataPublisher
 */

/**
 * @typedef {object} Proto_ValveHWSurvey
 */

///////////////////////////////////////////////
// steammessages_depotbuilder.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CContentBuilder_InitDepotBuild_Request
 * @property {number} [appid]
 * @property {number} [depotid]
 * @property {string} [workshop_itemid]
 * @property {boolean} [for_local_cs]
 * @property {string} [target_branch]
 */

/**
 * @typedef {object} Proto_CContentBuilder_InitDepotBuild_Response
 * @property {string} [baseline_manifestid]
 * @property {number} [chunk_size]
 * @property {Buffer} [aes_key]
 * @property {Buffer} [rsa_key]
 * @property {string} [url_host]
 * @property {boolean} [offset_detection_enabled]
 * @property {number} [offset_detection_min_clean_chunk]
 * @property {number} [offset_detection_blast_radius_pre]
 * @property {number} [offset_detection_blast_radius_post]
 * @property {number} [offset_detection_max_distance_pre]
 * @property {number} [offset_detection_max_distance_post]
 */

/**
 * @typedef {object} Proto_CContentBuilder_StartDepotUpload_Request
 * @property {number} [appid]
 * @property {number} [depotid]
 * @property {string} [workshop_itemid]
 * @property {boolean} [for_local_cs]
 * @property {string} [baseline_manifestid]
 * @property {number} [manifest_size]
 */

/**
 * @typedef {object} Proto_CContentBuilder_StartDepotUpload_Response
 * @property {string} [depot_build_handle]
 */

/**
 * @typedef {object} Proto_CContentBuilder_GetMissingDepotChunks_Request
 * @property {number} [appid]
 * @property {string} [depot_build_handle]
 */

/**
 * @typedef {object} Proto_CContentBuilder_GetMissingDepotChunks_Response
 * @property {Proto_CContentBuilder_GetMissingDepotChunks_Response_Chunks[]} missing_chunks
 * @property {number} [total_missing_chunks]
 * @property {string} [total_missing_bytes]
 */

/**
 * @typedef {object} Proto_CContentBuilder_GetMissingDepotChunks_Response_Chunks
 * @property {Buffer} [sha]
 */

/**
 * @typedef {object} Proto_CContentBuilder_FinishDepotUpload_Request
 * @property {number} [appid]
 * @property {string} [depot_build_handle]
 */

/**
 * @typedef {object} Proto_CContentBuilder_FinishDepotUpload_Response
 * @property {string} [manifestid]
 * @property {boolean} [prev_reused]
 */

/**
 * @typedef {object} Proto_CContentBuilder_CommitAppBuild_Request
 * @property {number} [appid]
 * @property {Proto_CContentBuilder_CommitAppBuild_Request_Depots[]} depot_manifests
 * @property {string} [build_notes]
 * @property {string} [live_branch]
 */

/**
 * @typedef {object} Proto_CContentBuilder_CommitAppBuild_Request_Depots
 * @property {number} [depotid]
 * @property {string} [manifestid]
 */

/**
 * @typedef {object} Proto_CContentBuilder_CommitAppBuild_Response
 * @property {number} [buildid]
 */

/**
 * @typedef {object} Proto_CContentBuilder_SignInstallScript_Request
 * @property {number} [appid]
 * @property {number} [depotid]
 * @property {string} [install_script]
 */

/**
 * @typedef {object} Proto_CContentBuilder_SignInstallScript_Response
 * @property {string} [signed_install_script]
 */

/**
 * @typedef {object} Proto_ContentBuilder
 */

///////////////////////////////////////////////
// steammessages_deviceauth.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CDeviceAuth_GetOwnAuthorizedDevices_Request
 * @property {string} [steamid]
 * @property {boolean} [include_canceled]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetOwnAuthorizedDevices_Response
 * @property {Proto_CDeviceAuth_GetOwnAuthorizedDevices_Response_Device[]} devices
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetOwnAuthorizedDevices_Response_Device
 * @property {string} [auth_device_token]
 * @property {string} [device_name]
 * @property {boolean} [is_pending]
 * @property {boolean} [is_canceled]
 * @property {number} [last_time_used]
 * @property {string} [last_borrower_id]
 * @property {number} [last_app_played]
 * @property {boolean} [is_limited]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_AcceptAuthorizationRequest_Request
 * @property {string} [steamid]
 * @property {string} [auth_device_token]
 * @property {string} [auth_code]
 * @property {string} [from_steamid]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_AcceptAuthorizationRequest_Response
 */

/**
 * @typedef {object} Proto_CDeviceAuth_AuthorizeRemoteDevice_Request
 * @property {string} [steamid]
 * @property {string} [auth_device_token]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_AuthorizeRemoteDevice_Response
 */

/**
 * @typedef {object} Proto_CDeviceAuth_DeauthorizeRemoteDevice_Request
 * @property {string} [steamid]
 * @property {string} [auth_device_token]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_DeauthorizeRemoteDevice_Response
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetUsedAuthorizedDevices_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetUsedAuthorizedDevices_Response
 * @property {Proto_CDeviceAuth_GetUsedAuthorizedDevices_Response_Device[]} devices
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetUsedAuthorizedDevices_Response_Device
 * @property {string} [auth_device_token]
 * @property {string} [device_name]
 * @property {string} [owner_steamid]
 * @property {number} [last_time_used]
 * @property {number} [last_app_played]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetAuthorizedBorrowers_Request
 * @property {string} [steamid]
 * @property {boolean} [include_canceled]
 * @property {boolean} [include_pending]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetAuthorizedBorrowers_Response
 * @property {Proto_CDeviceAuth_GetAuthorizedBorrowers_Response_Borrower[]} borrowers
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetAuthorizedBorrowers_Response_Borrower
 * @property {string} [steamid]
 * @property {boolean} [is_pending]
 * @property {boolean} [is_canceled]
 * @property {number} [time_created]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_AddAuthorizedBorrowers_Request
 * @property {string} [steamid]
 * @property {string[]} steamid_borrower
 */

/**
 * @typedef {object} Proto_CDeviceAuth_AddAuthorizedBorrowers_Response
 * @property {number} [seconds_to_wait]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_RemoveAuthorizedBorrowers_Request
 * @property {string} [steamid]
 * @property {string[]} steamid_borrower
 */

/**
 * @typedef {object} Proto_CDeviceAuth_RemoveAuthorizedBorrowers_Response
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetAuthorizedAsBorrower_Request
 * @property {string} [steamid]
 * @property {boolean} [include_canceled]
 * @property {boolean} [include_pending]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetAuthorizedAsBorrower_Response
 * @property {Proto_CDeviceAuth_GetAuthorizedAsBorrower_Response_Lender[]} lenders
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetAuthorizedAsBorrower_Response_Lender
 * @property {string} [steamid]
 * @property {number} [time_created]
 * @property {boolean} [is_pending]
 * @property {boolean} [is_canceled]
 * @property {boolean} [is_used]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetExcludedGamesInLibrary_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetExcludedGamesInLibrary_Response
 * @property {Proto_CDeviceAuth_GetExcludedGamesInLibrary_Response_ExcludedGame[]} excluded_games
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetExcludedGamesInLibrary_Response_ExcludedGame
 * @property {number} [appid]
 * @property {string} [game_name]
 * @property {boolean} [vac_banned]
 * @property {boolean} [package_excluded]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetBorrowerPlayHistory_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetBorrowerPlayHistory_Response
 * @property {Proto_CDeviceAuth_GetBorrowerPlayHistory_Response_LenderHistory[]} lender_history
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetBorrowerPlayHistory_Response_GameHistory
 * @property {number} [appid]
 * @property {number} [time_last]
 * @property {number} [time_total]
 */

/**
 * @typedef {object} Proto_CDeviceAuth_GetBorrowerPlayHistory_Response_LenderHistory
 * @property {string} [steamid]
 * @property {Proto_CDeviceAuth_GetBorrowerPlayHistory_Response_GameHistory[]} game_history
 */

/**
 * @typedef {object} Proto_DeviceAuth
 */

///////////////////////////////////////////////
// steammessages_econ.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CEcon_ClientGetItemShopOverlayAuthURL_Request
 * @property {string} [return_url]
 */

///////////////////////////////////////////////
// steammessages_friendmessages.steamclient.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// steammessages_gamenetworking.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CGameNetworking_AllocateFakeIP_Request
 * @property {number} [app_id]
 * @property {number} [num_fake_ports]
 */

/**
 * @typedef {object} Proto_CGameNetworking_AllocateFakeIP_Response
 * @property {number} [fake_ip]
 * @property {number[]} fake_ports
 * @property {number} [renew_seconds]
 */

/**
 * @typedef {object} Proto_CGameNetworking_RenewFakeIP_Request
 * @property {number} [app_id]
 * @property {number} [fake_ip]
 * @property {number[]} fake_ports
 */

/**
 * @typedef {object} Proto_CGameNetworking_ReleaseFakeIP_Notification
 * @property {number} [app_id]
 * @property {number} [fake_ip]
 * @property {number[]} fake_ports
 */

/**
 * @typedef {object} Proto_GameNetworking
 */

///////////////////////////////////////////////
// steammessages_gamenetworkingui.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CGameNetworkingUI_GlobalState
 */

/**
 * @typedef {object} Proto_CGameNetworkingUI_ConnectionState
 * @property {string} [connection_key]
 * @property {number} [appid]
 * @property {number} [connection_id_local]
 * @property {string} [identity_local]
 * @property {string} [identity_remote]
 * @property {number} [connection_state]
 * @property {number} [start_time]
 * @property {number} [close_time]
 * @property {number} [close_reason]
 * @property {string} [close_message]
 * @property {string} [status_loc_token]
 * @property {number} [transport_kind]
 * @property {string} [sdrpopid_local]
 * @property {string} [sdrpopid_remote]
 * @property {string} [address_remote]
 * @property {Proto_CMsgSteamDatagramP2PRoutingSummary} [p2p_routing]
 * @property {number} [ping_interior]
 * @property {number} [ping_remote_front]
 * @property {number} [ping_default_internet_route]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [e2e_quality_local]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [e2e_quality_remote]
 * @property {string} [e2e_quality_remote_instantaneous_time]
 * @property {string} [e2e_quality_remote_lifetime_time]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [front_quality_local]
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [front_quality_remote]
 * @property {string} [front_quality_remote_instantaneous_time]
 * @property {string} [front_quality_remote_lifetime_time]
 */

/**
 * @typedef {object} Proto_CGameNetworkingUI_Message
 * @property {Proto_CGameNetworkingUI_ConnectionState[]} connection_state
 */

///////////////////////////////////////////////
// steammessages_gamenotifications.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CGameNotifications_Variable
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CGameNotifications_LocalizedText
 * @property {string} [token]
 * @property {Proto_CGameNotifications_Variable[]} variables
 * @property {string} [rendered_text]
 */

/**
 * @typedef {object} Proto_CGameNotifications_UserStatus
 * @property {string} [steamid]
 * @property {string} [state]
 * @property {Proto_CGameNotifications_LocalizedText} [title]
 * @property {Proto_CGameNotifications_LocalizedText} [message]
 */

/**
 * @typedef {object} Proto_CGameNotifications_CreateSession_Request
 * @property {number} [appid]
 * @property {string} [context]
 * @property {Proto_CGameNotifications_LocalizedText} [title]
 * @property {Proto_CGameNotifications_UserStatus[]} users
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CGameNotifications_CreateSession_Response
 * @property {string} [sessionid]
 */

/**
 * @typedef {object} Proto_CGameNotifications_DeleteSession_Request
 * @property {string} [sessionid]
 * @property {number} [appid]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CGameNotifications_DeleteSession_Response
 */

/**
 * @typedef {object} Proto_CGameNotifications_UpdateSession_Request
 * @property {string} [sessionid]
 * @property {number} [appid]
 * @property {Proto_CGameNotifications_LocalizedText} [title]
 * @property {Proto_CGameNotifications_UserStatus[]} users
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CGameNotifications_UpdateSession_Response
 */

/**
 * @typedef {object} Proto_CGameNotifications_EnumerateSessions_Request
 * @property {number} [appid]
 * @property {boolean} [include_all_user_messages]
 * @property {boolean} [include_auth_user_message]
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CGameNotifications_Session
 * @property {string} [sessionid]
 * @property {string} [appid]
 * @property {string} [context]
 * @property {Proto_CGameNotifications_LocalizedText} [title]
 * @property {number} [time_created]
 * @property {number} [time_updated]
 * @property {Proto_CGameNotifications_UserStatus[]} user_status
 */

/**
 * @typedef {object} Proto_CGameNotifications_EnumerateSessions_Response
 * @property {Proto_CGameNotifications_Session[]} sessions
 */

/**
 * @typedef {object} Proto_CGameNotifications_GetSessionDetails_Request
 * @property {Proto_CGameNotifications_GetSessionDetails_Request_RequestedSession[]} sessions
 * @property {number} [appid]
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CGameNotifications_GetSessionDetails_Request_RequestedSession
 * @property {string} [sessionid]
 * @property {boolean} [include_auth_user_message]
 */

/**
 * @typedef {object} Proto_CGameNotifications_GetSessionDetails_Response
 * @property {Proto_CGameNotifications_Session[]} sessions
 */

/**
 * @typedef {object} Proto_GameNotificationSettings
 * @property {number} [appid]
 * @property {boolean} [allow_notifications]
 */

/**
 * @typedef {object} Proto_CGameNotifications_UpdateNotificationSettings_Request
 * @property {Proto_GameNotificationSettings[]} game_notification_settings
 */

/**
 * @typedef {object} Proto_CGameNotifications_UpdateNotificationSettings_Response
 */

/**
 * @typedef {object} Proto_CGameNotifications_OnNotificationsRequested_Notification
 * @property {string} [steamid]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CGameNotifications_OnUserStatusChanged_Notification
 * @property {string} [steamid]
 * @property {string} [sessionid]
 * @property {number} [appid]
 * @property {Proto_CGameNotifications_UserStatus} [status]
 * @property {boolean} [removed]
 */

/**
 * @typedef {object} Proto_GameNotifications
 */

/**
 * @typedef {object} Proto_GameNotificationsClient
 */

///////////////////////////////////////////////
// steammessages_gameservers.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CGameServers_GetServerList_Request
 * @property {string} [filter]
 * @property {number} [limit=100]
 */

/**
 * @typedef {object} Proto_CGameServers_GetServerList_Response
 * @property {Proto_CGameServers_GetServerList_Response_Server[]} servers
 */

/**
 * @typedef {object} Proto_CGameServers_GetServerList_Response_Server
 * @property {string} [addr]
 * @property {number} [gameport]
 * @property {number} [specport]
 * @property {string} [steamid]
 * @property {string} [name]
 * @property {number} [appid]
 * @property {string} [gamedir]
 * @property {string} [version]
 * @property {string} [product]
 * @property {number} [region]
 * @property {number} [players]
 * @property {number} [max_players]
 * @property {number} [bots]
 * @property {string} [map]
 * @property {boolean} [secure]
 * @property {boolean} [dedicated]
 * @property {string} [os]
 * @property {string} [gametype]
 */

/**
 * @typedef {object} Proto_CGameServers_GetServerSteamIDsByIP_Request
 * @property {string[]} server_ips
 */

/**
 * @typedef {object} Proto_CGameServers_IPsWithSteamIDs_Response
 * @property {Proto_CGameServers_IPsWithSteamIDs_Response_Server[]} servers
 */

/**
 * @typedef {object} Proto_CGameServers_IPsWithSteamIDs_Response_Server
 * @property {string} [addr]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CGameServers_GetServerIPsBySteamID_Request
 * @property {string[]} server_steamids
 */

/**
 * @typedef {object} Proto_GameServers
 */

///////////////////////////////////////////////
// steammessages_hiddevices.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CHIDDeviceInfo
 * @property {EHIDDeviceLocation} [location]
 * @property {string} [path]
 * @property {number} [vendor_id]
 * @property {number} [product_id]
 * @property {string} [serial_number]
 * @property {number} [release_number]
 * @property {string} [manufacturer_string]
 * @property {string} [product_string]
 * @property {number} [usage_page]
 * @property {number} [usage]
 * @property {number} [interface_number=-1]
 * @property {number} [ostype=-1]
 * @property {boolean} [is_generic_gamepad]
 * @property {boolean} [is_generic_joystick]
 * @property {number} [caps_bits]
 * @property {number} [session_id]
 * @property {number} [eControllerType=0]
 * @property {boolean} [is_xinput_device=false]
 * @property {number} [session_remote_play_together_appid]
 */

/**
 * @typedef {object} Proto_CHIDDeviceInputReport
 * @property {Buffer} [full_report]
 * @property {Buffer} [delta_report]
 * @property {number} [delta_report_size]
 * @property {number} [delta_report_crc]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote
 * @property {number} [request_id]
 * @property {Proto_CHIDMessageToRemote_DeviceOpen} [device_open]
 * @property {Proto_CHIDMessageToRemote_DeviceClose} [device_close]
 * @property {Proto_CHIDMessageToRemote_DeviceWrite} [device_write]
 * @property {Proto_CHIDMessageToRemote_DeviceRead} [device_read]
 * @property {Proto_CHIDMessageToRemote_DeviceSendFeatureReport} [device_send_feature_report]
 * @property {Proto_CHIDMessageToRemote_DeviceGetFeatureReport} [device_get_feature_report]
 * @property {Proto_CHIDMessageToRemote_DeviceGetVendorString} [device_get_vendor_string]
 * @property {Proto_CHIDMessageToRemote_DeviceGetProductString} [device_get_product_string]
 * @property {Proto_CHIDMessageToRemote_DeviceGetSerialNumberString} [device_get_serial_number_string]
 * @property {Proto_CHIDMessageToRemote_DeviceStartInputReports} [device_start_input_reports]
 * @property {Proto_CHIDMessageToRemote_DeviceRequestFullReport} [device_request_full_report]
 * @property {Proto_CHIDMessageToRemote_DeviceDisconnect} [device_disconnect]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceOpen
 * @property {Proto_CHIDDeviceInfo} [info]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceClose
 * @property {number} [device]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceWrite
 * @property {number} [device]
 * @property {Buffer} [data]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceRead
 * @property {number} [device]
 * @property {number} [length]
 * @property {number} [timeout_ms]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceSendFeatureReport
 * @property {number} [device]
 * @property {Buffer} [data]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceGetFeatureReport
 * @property {number} [device]
 * @property {Buffer} [report_number]
 * @property {number} [length]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceGetVendorString
 * @property {number} [device]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceGetProductString
 * @property {number} [device]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceGetSerialNumberString
 * @property {number} [device]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceStartInputReports
 * @property {number} [device]
 * @property {number} [length]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceRequestFullReport
 * @property {number} [device]
 */

/**
 * @typedef {object} Proto_CHIDMessageToRemote_DeviceDisconnect
 * @property {number} [device]
 * @property {EHIDDeviceDisconnectMethod} [disconnectMethod]
 * @property {Buffer} [data]
 */

/**
 * @typedef {object} Proto_CHIDMessageFromRemote
 * @property {Proto_CHIDMessageFromRemote_UpdateDeviceList} [update_device_list]
 * @property {Proto_CHIDMessageFromRemote_RequestResponse} [response]
 * @property {Proto_CHIDMessageFromRemote_DeviceInputReports} [reports]
 * @property {Proto_CHIDMessageFromRemote_CloseDevice} [close_device]
 * @property {Proto_CHIDMessageFromRemote_CloseAllDevices} [close_all_devices]
 */

/**
 * @typedef {object} Proto_CHIDMessageFromRemote_UpdateDeviceList
 * @property {Proto_CHIDDeviceInfo[]} devices
 */

/**
 * @typedef {object} Proto_CHIDMessageFromRemote_RequestResponse
 * @property {number} [request_id]
 * @property {EResult} [result]
 * @property {Buffer} [data]
 */

/**
 * @typedef {object} Proto_CHIDMessageFromRemote_DeviceInputReports
 * @property {Proto_CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport[]} device_reports
 */

/**
 * @typedef {object} Proto_CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport
 * @property {number} [device]
 * @property {Proto_CHIDDeviceInputReport[]} reports
 */

/**
 * @typedef {object} Proto_CHIDMessageFromRemote_CloseDevice
 * @property {number} [device]
 */

/**
 * @typedef {object} Proto_CHIDMessageFromRemote_CloseAllDevices
 */

///////////////////////////////////////////////
// steammessages_inventory.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CInventory_GetInventory_Request
 * @property {number} [appid]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CInventory_Response
 * @property {string} [etag]
 * @property {string[]} removeditemids
 * @property {string} [item_json]
 * @property {string} [itemdef_json]
 * @property {Buffer} [ticket]
 * @property {boolean} [replayed]
 */

/**
 * @typedef {object} Proto_CInventory_ExchangeItem_Request
 * @property {number} [appid]
 * @property {string} [steamid]
 * @property {string[]} materialsitemid
 * @property {number[]} materialsquantity
 * @property {string} [outputitemdefid]
 */

/**
 * @typedef {object} Proto_CInventory_GetEligiblePromoItemDefIDs_Request
 * @property {number} [appid]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CInventory_GetEligiblePromoItemDefIDs_Response
 * @property {string[]} itemdefids
 */

/**
 * @typedef {object} Proto_CInventory_AddItem_Request
 * @property {number} [appid]
 * @property {string[]} itemdefid
 * @property {string[]} itempropsjson
 * @property {string} [steamid]
 * @property {boolean} [notify]
 * @property {string} [requestid]
 * @property {boolean} [trade_restriction]
 * @property {boolean} [is_purchase=false]
 */

/**
 * @typedef {object} Proto_CInventory_ModifyItems_Request
 * @property {number} [appid]
 * @property {string} [steamid]
 * @property {Proto_CInventory_ModifyItems_Request_ItemPropertyUpdate[]} updates
 * @property {number} [timestamp]
 */

/**
 * @typedef {object} Proto_CInventory_ModifyItems_Request_ItemPropertyUpdate
 * @property {string} [itemid]
 * @property {boolean} [remove_property]
 * @property {string} [property_name]
 * @property {boolean} [property_value_bool]
 * @property {string} [property_value_int]
 * @property {string} [property_value_string]
 * @property {number} [property_value_float]
 */

/**
 * @typedef {object} Proto_CInventory_ConsumePlaytime_Request
 * @property {number} [appid]
 * @property {string} [itemdefid]
 */

/**
 * @typedef {object} Proto_CInventory_ConsumeItem_Request
 * @property {number} [appid]
 * @property {string} [itemid]
 * @property {number} [quantity]
 * @property {string} [timestamp]
 * @property {string} [steamid]
 * @property {string} [requestid]
 */

/**
 * @typedef {object} Proto_CInventory_DevSetNextDrop_Request
 * @property {number} [appid]
 * @property {string} [itemdefid]
 * @property {string} [droptime]
 */

/**
 * @typedef {object} Proto_CInventory_SplitItemStack_Request
 * @property {number} [appid]
 * @property {string} [itemid]
 * @property {number} [quantity]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CInventory_CombineItemStacks_Request
 * @property {number} [appid]
 * @property {string} [fromitemid]
 * @property {string} [destitemid]
 * @property {number} [quantity]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CInventory_GetItemDefMeta_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CInventory_GetItemDefMeta_Response
 * @property {number} [modified]
 * @property {string} [digest]
 */

/**
 * @typedef {object} Proto_CInventory_GetUserPurchaseInfo_Request
 */

/**
 * @typedef {object} Proto_CInventory_GetUserPurchaseInfo_Response
 * @property {number} [ecurrency]
 */

/**
 * @typedef {object} Proto_CInventory_PurchaseInit_Request
 * @property {number} [appid]
 * @property {number} [language]
 * @property {Proto_CInventory_PurchaseInit_Request_LineItem[]} line_items
 */

/**
 * @typedef {object} Proto_CInventory_PurchaseInit_Request_LineItem
 * @property {string} [itemdefid]
 * @property {number} [quantity]
 */

/**
 * @typedef {object} Proto_CInventory_PurchaseInit_Response
 * @property {string} [orderid]
 * @property {string} [transid]
 */

/**
 * @typedef {object} Proto_CInventory_PurchaseFinalize_Request
 * @property {number} [appid]
 * @property {number} [language]
 * @property {string} [orderid]
 */

/**
 * @typedef {object} Proto_CInventory_InspectItem_Request
 * @property {string} [itemdefid]
 * @property {string} [itemid]
 * @property {string} [tags]
 */

/**
 * @typedef {object} Proto_CInventoryClient_NewItems_Notification
 * @property {number} [appid]
 * @property {Proto_CInventory_Response} [inventory_response]
 */

/**
 * @typedef {object} Proto_Inventory
 */

/**
 * @typedef {object} Proto_InventoryClient
 */

///////////////////////////////////////////////
// steammessages_linkfilter.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CCommunity_GetLinkFilterHashPrefixes_Request
 * @property {number} [hit_type]
 * @property {number} [count]
 * @property {string} [start]
 */

/**
 * @typedef {object} Proto_CCommunity_GetLinkFilterHashPrefixes_Response
 * @property {number[]} hash_prefixes
 */

/**
 * @typedef {object} Proto_CCommunity_GetLinkFilterHashes_Request
 * @property {number} [hit_type]
 * @property {number} [count]
 * @property {string} [start]
 */

/**
 * @typedef {object} Proto_CCommunity_GetLinkFilterHashes_Response
 * @property {Buffer[]} hashes
 */

/**
 * @typedef {object} Proto_CCommunity_GetLinkFilterListVersion_Request
 * @property {number} [hit_type]
 */

/**
 * @typedef {object} Proto_CCommunity_GetLinkFilterListVersion_Response
 * @property {string} [version]
 * @property {string} [count]
 */

/**
 * @typedef {object} Proto_CommunityLinkFilter
 */

///////////////////////////////////////////////
// steammessages_lobbymatchmaking.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_LobbyMatchmakingLegacy_GetLobbyStatus_Request
 * @property {number} [app_id]
 * @property {string} [steamid_lobby]
 * @property {boolean} [claim_ownership]
 * @property {boolean} [claim_membership]
 * @property {number} [version_num]
 */

/**
 * @typedef {object} Proto_LobbyMatchmakingLegacy_GetLobbyStatus_Response
 * @property {number} [app_id]
 * @property {string} [steamid_lobby]
 * @property {ELobbyStatus} [lobby_status]
 */

/**
 * @typedef {object} Proto_LobbyMatchmakingLegacy
 */

///////////////////////////////////////////////
// steammessages_market.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CEconMarket_IsMarketplaceAllowed_Request
 * @property {string} [webcookie]
 */

/**
 * @typedef {object} Proto_CEconMarket_IsMarketplaceAllowed_Response
 * @property {boolean} [allowed]
 * @property {number} [reason]
 * @property {number} [allowed_at_time]
 * @property {number} [steamguard_required_days]
 * @property {boolean} [forms_requested]
 * @property {boolean} [forms_require_verification]
 * @property {number} [new_device_cooldown_days]
 */

/**
 * @typedef {object} Proto_EconMarket
 */

///////////////////////////////////////////////
// steammessages_offline.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_COffline_GetOfflineLogonTicket_Request
 * @property {number} [priority]
 */

/**
 * @typedef {object} Proto_COffline_GetOfflineLogonTicket_Response
 * @property {Buffer} [serialized_ticket]
 * @property {Buffer} [signature]
 */

/**
 * @typedef {object} Proto_COffline_GetUnsignedOfflineLogonTicket_Request
 */

/**
 * @typedef {object} Proto_COffline_OfflineLogonTicket
 * @property {number} [accountid]
 * @property {number} [rtime32_creation_time]
 */

/**
 * @typedef {object} Proto_COffline_GetUnsignedOfflineLogonTicket_Response
 * @property {Proto_COffline_OfflineLogonTicket} [ticket]
 */

/**
 * @typedef {object} Proto_Offline
 */

///////////////////////////////////////////////
// steammessages_parental.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CParental_EnableParentalSettings_Request
 * @property {string} [password]
 * @property {Proto_ParentalSettings} [settings]
 * @property {string} [sessionid]
 * @property {number} [enablecode]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CParental_DisableParentalSettings_Request
 * @property {string} [password]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CParental_GetSignedParentalSettings_Request
 * @property {number} [priority]
 */

/**
 * @typedef {object} Proto_CParental_SetParentalSettings_Request
 * @property {string} [password]
 * @property {Proto_ParentalSettings} [settings]
 * @property {string} [new_password]
 * @property {string} [sessionid]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CParental_LockClient_Request
 * @property {string} [session]
 */

/**
 * @typedef {object} Proto_CParental_RequestRecoveryCode_Request
 */

/**
 * @typedef {object} Proto_CParental_DisableWithRecoveryCode_Request
 * @property {number} [recovery_code]
 * @property {string} [steamid]
 */

///////////////////////////////////////////////
// steammessages_parties.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CParties_JoinParty_Request
 * @property {string} [steamid]
 * @property {string} [beacon_id]
 */

/**
 * @typedef {object} Proto_CParties_JoinParty_Response
 * @property {string} [beacon_id]
 * @property {string} [connect_string]
 */

/**
 * @typedef {object} Proto_CParties_BeaconLocation
 * @property {number} [location_type]
 * @property {string} [location_id]
 */

/**
 * @typedef {object} Proto_CParties_CreateBeacon_Request
 * @property {number} [appid]
 * @property {number} [num_open_slots]
 * @property {Proto_CParties_BeaconLocation[]} locations
 * @property {string} [connect_string]
 * @property {string} [metadata]
 */

/**
 * @typedef {object} Proto_CParties_CreateBeacon_Response
 * @property {string} [beacon_id]
 */

/**
 * @typedef {object} Proto_CParties_OnReservationCompleted_Request
 * @property {string} [beacon_id]
 * @property {string} [user_steamid]
 */

/**
 * @typedef {object} Proto_CParties_OnReservationCompleted_Response
 * @property {string} [beacon_id]
 */

/**
 * @typedef {object} Proto_CParties_CancelReservation_Request
 * @property {string} [beacon_id]
 * @property {string} [user_steamid]
 */

/**
 * @typedef {object} Proto_CParties_CancelReservation_Response
 * @property {string} [beacon_id]
 */

/**
 * @typedef {object} Proto_CParties_ChangeNumOpenSlots_Request
 * @property {string} [beacon_id]
 * @property {number} [num_open_slots]
 */

/**
 * @typedef {object} Proto_CParties_ChangeNumOpenSlots_Response
 * @property {string} [beacon_id]
 */

/**
 * @typedef {object} Proto_CParties_DestroyBeacon_Request
 * @property {string} [beacon_id]
 */

/**
 * @typedef {object} Proto_CParties_DestroyBeacon_Response
 * @property {string} [beacon_id]
 */

/**
 * @typedef {object} Proto_Parties
 */

///////////////////////////////////////////////
// steammessages_partnerapps.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CPartnerApps_RequestUploadToken_Request
 * @property {string} [filename]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CPartnerApps_RequestUploadToken_Response
 * @property {string} [upload_token]
 * @property {string} [location]
 * @property {string} [routing_id]
 */

/**
 * @typedef {object} Proto_CPartnerApps_FinishUpload_Request
 * @property {string} [upload_token]
 * @property {string} [routing_id]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CPartnerApps_FinishUploadKVSign_Response
 * @property {string} [signed_installscript]
 */

/**
 * @typedef {object} Proto_CPartnerApps_FinishUploadLegacyDRM_Request
 * @property {string} [upload_token]
 * @property {string} [routing_id]
 * @property {number} [app_id]
 * @property {number} [flags]
 * @property {string} [tool_name]
 */

/**
 * @typedef {object} Proto_CPartnerApps_FinishUploadLegacyDRM_Response
 * @property {string} [file_id]
 */

/**
 * @typedef {object} Proto_CPartnerApps_FinishUpload_Response
 */

/**
 * @typedef {object} Proto_CPartnerApps_FinishUploadDepot_Request
 * @property {string} [upload_token]
 * @property {string} [routing_id]
 * @property {number} [app_id]
 * @property {number} [depot_id]
 * @property {number} [build_flags]
 */

/**
 * @typedef {object} Proto_CPartnerApps_FinishUploadDepot_Response
 */

/**
 * @typedef {object} Proto_CPartnerApps_GetDepotBuildResult_Request
 * @property {string} [upload_token]
 * @property {string} [routing_id]
 */

/**
 * @typedef {object} Proto_CPartnerApps_GetDepotBuildResult_Response
 * @property {string} [manifest_id]
 * @property {string} [error_msg]
 */

/**
 * @typedef {object} Proto_CPartnerApps_FindDRMUploads_Request
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CPartnerApps_ExistingDRMUpload
 * @property {string} [file_id]
 * @property {number} [app_id]
 * @property {number} [actor_id]
 * @property {string} [supplied_name]
 * @property {number} [flags]
 * @property {string} [mod_type]
 * @property {number} [timestamp]
 * @property {string} [orig_file_id]
 */

/**
 * @typedef {object} Proto_CPartnerApps_FindDRMUploads_Response
 * @property {Proto_CPartnerApps_ExistingDRMUpload[]} uploads
 */

/**
 * @typedef {object} Proto_CPartnerApps_Download_Request
 * @property {string} [file_id]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_CPartnerApps_Download_Response
 * @property {string} [download_url]
 * @property {number} [app_id]
 */

/**
 * @typedef {object} Proto_PartnerApps
 */

///////////////////////////////////////////////
// steammessages_player.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CPlayer_GetOwnedGames_Request
 * @property {string} [steamid]
 * @property {boolean} [include_appinfo]
 * @property {boolean} [include_played_free_games]
 * @property {number[]} appids_filter
 * @property {boolean} [include_free_sub]
 * @property {boolean} [skip_unvetted_apps=true]
 */

/**
 * @typedef {object} Proto_CPlayer_GetPlayNext_Request
 * @property {number} [max_age_seconds]
 * @property {number[]} ignore_appids
 */

/**
 * @typedef {object} Proto_CPlayer_GetFriendsGameplayInfo_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CPlayer_GetFriendsAppsActivity_Request
 * @property {string} [news_language]
 * @property {number} [request_flags]
 */

/**
 * @typedef {object} Proto_CPlayer_GetGameBadgeLevels_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileBackground_Request
 * @property {string} [steamid]
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CPlayer_GetMiniProfileBackground_Request
 * @property {string} [steamid]
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CPlayer_GetAvatarFrame_Request
 * @property {string} [steamid]
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CPlayer_GetAnimatedAvatar_Request
 * @property {string} [steamid]
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CPlayer_GetEmoticonList_Request
 */

/**
 * @typedef {object} Proto_CPlayer_GetAchievementsProgress_Request
 * @property {string} [steamid]
 * @property {string} [language]
 * @property {number[]} appids
 */

/**
 * @typedef {object} Proto_CPlayer_GetFavoriteBadge_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileCustomization_Request
 * @property {string} [steamid]
 * @property {boolean} [include_inactive_customizations]
 * @property {boolean} [include_purchased_customizations]
 */

/**
 * @typedef {object} Proto_CPlayer_GetPurchasedProfileCustomizations_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CPlayer_GetProfileThemesAvailable_Request
 */

/**
 * @typedef {object} Proto_CPlayer_SetProfilePreferences_Request
 * @property {Proto_ProfilePreferences} [profile_preferences]
 */

/**
 * @typedef {object} Proto_CPlayer_GetPostedStatus_Request
 * @property {string} [steamid]
 * @property {string} [postid]
 */

/**
 * @typedef {object} Proto_CPlayer_DeletePostedStatus_Request
 * @property {string} [postid]
 */

/**
 * @typedef {object} Proto_CPlayer_AcceptSSA_Request
 * @property {EAgreementType} [agreement_type]
 * @property {number} [time_signed_utc]
 */

/**
 * @typedef {object} Proto_CPlayer_GetNicknameList_Request
 */

/**
 * @typedef {object} Proto_CPlayer_GetNewSteamAnnouncementState_Request
 * @property {number} [language]
 */

/**
 * @typedef {object} Proto_CPlayer_UpdateSteamAnnouncementLastRead_Request
 * @property {string} [announcement_gid]
 * @property {number} [time_posted]
 */

/**
 * @typedef {object} Proto_CPlayer_GetDurationControl_Request
 * @property {number} [appid]
 */

///////////////////////////////////////////////
// steammessages_publishedfile.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CPublishedFile_CanSubscribe_Request
 * @property {string} [publishedfileid]
 */

/**
 * @typedef {object} Proto_CPublishedFile_Publish_Request
 * @property {number} [appid]
 * @property {number} [consumer_appid]
 * @property {string} [cloudfilename]
 * @property {string} [preview_cloudfilename]
 * @property {string} [title]
 * @property {string} [file_description]
 * @property {number} [file_type]
 * @property {string} [consumer_shortcut_name]
 * @property {string} [youtube_username]
 * @property {string} [youtube_videoid]
 * @property {number} [visibility]
 * @property {string} [redirect_uri]
 * @property {string[]} tags
 * @property {string} [collection_type]
 * @property {string} [game_type]
 * @property {string} [url]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetItemInfo_Request
 * @property {number} [appid]
 * @property {number} [last_time_updated]
 * @property {Proto_CPublishedFile_GetItemInfo_Request_WorkshopItem[]} workshop_items
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetItemInfo_Request_WorkshopItem
 * @property {string} [published_file_id]
 * @property {number} [time_updated]
 * @property {EPublishedFileRevision} [desired_revision]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetUserFiles_Request
 * @property {string} [steamid]
 * @property {number} [appid]
 * @property {number} [page=1]
 * @property {number} [numperpage=1]
 * @property {string} [type]
 * @property {string} [sortmethod]
 * @property {number} [privacy]
 * @property {string[]} requiredtags
 * @property {string[]} excludedtags
 * @property {Proto_CPublishedFile_GetUserFiles_Request_KVTag[]} required_kv_tags
 * @property {number} [filetype]
 * @property {number} [creator_appid]
 * @property {string} [match_cloud_filename]
 * @property {number} [cache_max_age_seconds=0]
 * @property {number} [language=0]
 * @property {Proto_CPublishedFile_GetUserFiles_Request_TagGroup[]} taggroups
 * @property {boolean} [totalonly]
 * @property {boolean} [ids_only]
 * @property {boolean} [return_vote_data=true]
 * @property {boolean} [return_tags]
 * @property {boolean} [return_kv_tags=true]
 * @property {boolean} [return_previews]
 * @property {boolean} [return_children]
 * @property {boolean} [return_short_description=true]
 * @property {boolean} [return_for_sale_data]
 * @property {boolean} [return_metadata=false]
 * @property {number} [return_playtime_stats]
 * @property {boolean} [strip_description_bbcode]
 * @property {boolean} [return_reactions=false]
 * @property {number} [startindex_override]
 * @property {EPublishedFileRevision} [desired_revision]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetUserFiles_Request_KVTag
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetUserFiles_Request_TagGroup
 * @property {string[]} tags
 */

/**
 * @typedef {object} Proto_CPublishedFile_Update_Request
 * @property {number} [appid]
 * @property {string} [publishedfileid]
 * @property {string} [title]
 * @property {string} [file_description]
 * @property {number} [visibility]
 * @property {string[]} tags
 * @property {string} [filename]
 * @property {string} [preview_filename]
 * @property {number} [image_width]
 * @property {number} [image_height]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetChangeHistoryEntry_Request
 * @property {string} [publishedfileid]
 * @property {number} [timestamp]
 * @property {number} [language]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetChangeHistory_Request
 * @property {string} [publishedfileid]
 * @property {boolean} [total_only]
 * @property {number} [startindex]
 * @property {number} [count]
 * @property {number} [language=0]
 */

/**
 * @typedef {object} Proto_CPublishedFile_RefreshVotingQueue_Request
 * @property {number} [appid]
 * @property {number} [matching_file_type]
 * @property {string[]} tags
 * @property {boolean} [match_all_tags=true]
 * @property {string[]} excluded_tags
 * @property {number} [desired_queue_size]
 * @property {EPublishedFileRevision} [desired_revision]
 */

/**
 * @typedef {object} Proto_CPublishedFile_AddAppRelationship_Request
 * @property {string} [publishedfileid]
 * @property {number} [appid]
 * @property {number} [relationship]
 */

/**
 * @typedef {object} Proto_CPublishedFile_RemoveAppRelationship_Request
 * @property {string} [publishedfileid]
 * @property {number} [appid]
 * @property {number} [relationship]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetAppRelationships_Request
 * @property {string} [publishedfileid]
 */

/**
 * @typedef {object} Proto_CPublishedFile_StartPlaytimeTracking_Request
 * @property {number} [appid]
 * @property {string[]} publishedfileids
 */

/**
 * @typedef {object} Proto_CPublishedFile_StopPlaytimeTracking_Request
 * @property {number} [appid]
 * @property {string[]} publishedfileids
 */

/**
 * @typedef {object} Proto_CPublishedFile_StopPlaytimeTrackingForAllAppItems_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CPublishedFile_SetPlaytimeForControllerConfigs_Request
 * @property {number} [appid]
 * @property {Proto_CPublishedFile_SetPlaytimeForControllerConfigs_Request_ControllerConfigUsage[]} controller_config_usage
 */

/**
 * @typedef {object} Proto_CPublishedFile_SetPlaytimeForControllerConfigs_Request_ControllerConfigUsage
 * @property {string} [publishedfileid]
 * @property {number} [seconds_active]
 */

/**
 * @typedef {object} Proto_CPublishedFile_AddChild_Request
 * @property {string} [publishedfileid]
 * @property {string} [child_publishedfileid]
 */

/**
 * @typedef {object} Proto_CPublishedFile_RemoveChild_Request
 * @property {string} [publishedfileid]
 * @property {string} [child_publishedfileid]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetItemChanges_Request
 * @property {number} [appid]
 * @property {number} [last_time_updated]
 * @property {number} [num_items_max]
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetItemChanges_Response
 * @property {number} [update_time]
 * @property {Proto_CPublishedFile_GetItemChanges_Response_WorkshopItemInfo[]} workshop_items
 */

/**
 * @typedef {object} Proto_CPublishedFile_GetItemChanges_Response_WorkshopItemInfo
 * @property {string} [published_file_id]
 * @property {number} [time_updated]
 * @property {string} [manifest_id]
 */

///////////////////////////////////////////////
// steammessages_qms.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_GameSearchParam
 * @property {string} [key_name]
 * @property {string[]} value
 */

/**
 * @typedef {object} Proto_CQueuedMatchmaking_SearchForGame_Request
 * @property {number} [appid]
 * @property {EGameSearchAction} [action]
 * @property {Proto_GameSearchParam[]} params
 * @property {number} [player_min]
 * @property {number} [player_max]
 * @property {string} [steamidlobby]
 * @property {string} [searchid]
 */

/**
 * @typedef {object} Proto_CQueuedMatchmaking_SearchForGame_Response
 * @property {EGameSearchResult} [gamesearchresult]
 * @property {string} [searchid]
 * @property {number} [seconds_time_estimate]
 * @property {number} [poll_frequency]
 * @property {number} [count_searching]
 * @property {number} [players_in_match]
 * @property {number} [players_accepted]
 * @property {string} [connect_string]
 * @property {string} [steamidhost]
 * @property {number} [rtime_match_made]
 * @property {number} [rtime_now]
 * @property {string} [steamid_canceled_search]
 */

/**
 * @typedef {object} Proto_CQueuedMatchmakingGameHost_SearchForPlayers_Request
 * @property {number} [appid]
 * @property {EGameSearchAction} [action]
 * @property {Proto_GameSearchParam[]} params
 * @property {number} [player_min]
 * @property {number} [player_max]
 * @property {number} [player_max_team_size]
 * @property {string} [connection_string]
 * @property {string} [searchid]
 */

/**
 * @typedef {object} Proto_PlayerFound
 * @property {string} [steamid]
 * @property {EGameSearchAction} [action]
 * @property {Proto_GameSearchParam[]} params
 * @property {number} [team_number]
 */

/**
 * @typedef {object} Proto_CQueuedMatchmakingGameHost_SearchForPlayers_Response
 * @property {EGameSearchResult} [gamesearchresult]
 * @property {string} [searchid]
 * @property {number} [poll_frequency]
 * @property {string} [matchid]
 * @property {Proto_PlayerFound[]} players
 * @property {number} [rtime_match_made]
 * @property {number} [rtime_now]
 */

/**
 * @typedef {object} Proto_PlayerResult
 * @property {string} [steamid]
 * @property {number} [value]
 */

/**
 * @typedef {object} Proto_CQueuedMatchmakingGameHost_SubmitPlayerResult_Request
 * @property {number} [appid]
 * @property {string} [matchid]
 * @property {Proto_PlayerResult[]} player_results
 */

/**
 * @typedef {object} Proto_CQueuedMatchmakingGameHost_SubmitPlayerResult_Response
 */

/**
 * @typedef {object} Proto_CQueuedMatchmakingGameHost_EndGame_Request
 * @property {number} [appid]
 * @property {string} [matchid]
 */

/**
 * @typedef {object} Proto_CQueuedMatchmakingGameHost_EndGame_Response
 */

/**
 * @typedef {object} Proto_QueuedMatchmaking
 */

/**
 * @typedef {object} Proto_QueuedMatchmakingGameHost
 */

///////////////////////////////////////////////
// steammessages_remoteclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgRemoteClientStatus
 * @property {string} [client_id]
 * @property {string} [instance_id]
 * @property {Proto_CMsgRemoteClientBroadcastStatus} [status]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientAppStatus
 * @property {Proto_CMsgRemoteClientAppStatus_AppStatus[]} status_updates
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientAppStatus_AppUpdateInfo
 * @property {number} [time_update_start]
 * @property {string} [bytes_to_download]
 * @property {string} [bytes_downloaded]
 * @property {string} [bytes_to_process]
 * @property {string} [bytes_processed]
 * @property {number} [estimated_seconds_remaining=-1]
 * @property {number} [update_result]
 * @property {number} [update_state]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientAppStatus_ShortcutInfo
 * @property {string} [name]
 * @property {string} [icon]
 * @property {string[]} categories
 * @property {string} [exepath]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientAppStatus_AppStatus
 * @property {number} [app_id]
 * @property {number} [app_state]
 * @property {Proto_CMsgRemoteClientAppStatus_AppUpdateInfo} [update_info]
 * @property {Proto_CMsgRemoteClientAppStatus_ShortcutInfo} [shortcut_info]
 * @property {boolean} [launch_available=true]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientStartStream
 * @property {number} [app_id]
 * @property {number} [environment]
 * @property {number} [gamepad_count]
 * @property {number} [launch_option=-1]
 * @property {boolean} [lock_parental_lock=false]
 * @property {string} [unlock_parental_lock]
 * @property {number} [maximum_resolution_x]
 * @property {number} [maximum_resolution_y]
 * @property {Proto_CMsgRemoteClientStartStream_ReservedGamepad[]} gamepads
 * @property {number} [audio_channel_count=2]
 * @property {EStreamTransport[]} supported_transport
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientStartStream_ReservedGamepad
 * @property {number} [controller_type]
 * @property {number} [controller_subtype]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientStartStreamResponse
 * @property {number} [e_launch_result=2]
 * @property {number} [stream_port]
 * @property {number[]} launch_options
 * @property {Buffer} [auth_token]
 * @property {EStreamTransport} [transport]
 * @property {string} [relay_server]
 * @property {string} [launch_task]
 * @property {string} [launch_task_detail]
 * @property {number} [launch_tasks_done]
 * @property {number} [launch_tasks_total]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientPing
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientPingResponse
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientAcceptEULA
 * @property {number[]} app_id
 * @property {string[]} eula_id
 * @property {number[]} eula_version
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientGetControllerConfig
 * @property {number} [app_id]
 * @property {number} [controller_index]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientGetControllerConfigResponse
 * @property {EResult} [eresult=2]
 * @property {Buffer} [config_vdf]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientStreamingEnabled
 * @property {boolean} enabled
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientBroadcastHeader
 * @property {string} [client_id]
 * @property {ERemoteClientBroadcastMsg} [msg_type]
 * @property {string} [instance_id]
 * @property {string} [device_id]
 * @property {Buffer} [device_token]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientBroadcastStatus
 * @property {number} [version]
 * @property {number} [min_version]
 * @property {number} [connect_port]
 * @property {string} [hostname]
 * @property {number} [enabled_services]
 * @property {number} [ostype=0]
 * @property {boolean} [is64bit]
 * @property {Proto_CMsgRemoteClientBroadcastStatus_User[]} users
 * @property {number} [euniverse]
 * @property {number} [timestamp]
 * @property {boolean} [screen_locked]
 * @property {boolean} [games_running]
 * @property {string[]} mac_addresses
 * @property {number} [download_lan_peer_group]
 * @property {boolean} [broadcasting_active]
 * @property {boolean} [vr_active]
 * @property {number} [content_cache_port]
 * @property {string[]} ip_addresses
 * @property {string} [public_ip_address]
 * @property {boolean} [remoteplay_active]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientBroadcastStatus_User
 * @property {string} [steamid]
 * @property {number} [auth_key_id]
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientBroadcastDiscovery
 * @property {number} [seq_num]
 * @property {string[]} client_ids
 */

/**
 * @typedef {object} Proto_CMsgRemoteClientBroadcastClientIDDeconflict
 * @property {string[]} client_ids
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceAuthorizationRequest
 * @property {Buffer} device_token
 * @property {string} [device_name]
 * @property {Buffer} encrypted_request
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceAuthorizationRequest_CKeyEscrow_Ticket
 * @property {Buffer} [password]
 * @property {string} [identifier]
 * @property {Buffer} [payload]
 * @property {number} [timestamp]
 * @property {Proto_CMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsage} [usage]
 * @property {string} [device_name]
 * @property {string} [device_model]
 * @property {string} [device_serial]
 * @property {number} [device_provisioning_id]
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceAuthorizationCancelRequest
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceAuthorizationResponse
 * @property {ERemoteDeviceAuthorizationResult} result
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceStreamingRequest
 * @property {number} request_id
 * @property {number} [maximum_resolution_x]
 * @property {number} [maximum_resolution_y]
 * @property {number} [audio_channel_count=2]
 * @property {string} [device_version]
 * @property {boolean} [stream_desktop]
 * @property {Buffer} [device_token]
 * @property {Buffer} [pin]
 * @property {boolean} [enable_video_streaming=true]
 * @property {boolean} [enable_audio_streaming=true]
 * @property {boolean} [enable_input_streaming=true]
 * @property {boolean} [network_test]
 * @property {string} [client_id]
 * @property {EStreamTransport[]} supported_transport
 * @property {boolean} [restricted]
 * @property {EStreamDeviceFormFactor} [form_factor]
 * @property {number} [gamepad_count]
 * @property {Proto_CMsgRemoteDeviceStreamingRequest_ReservedGamepad[]} gamepads
 * @property {string} [gameid]
 * @property {EStreamInterface} [stream_interface]
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceStreamingRequest_ReservedGamepad
 * @property {number} [controller_type]
 * @property {number} [controller_subtype]
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceStreamingCancelRequest
 * @property {number} request_id
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceStreamingProgress
 * @property {number} request_id
 * @property {number} [progress]
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceStreamingResponse
 * @property {number} request_id
 * @property {ERemoteDeviceStreamingResult} result
 * @property {number} [port]
 * @property {Buffer} [encrypted_session_key]
 * @property {EStreamTransport} [transport]
 * @property {string} [relay_server]
 * @property {string} [cert]
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceProofRequest
 * @property {Buffer} challenge
 * @property {number} [request_id]
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceProofResponse
 * @property {Buffer} response
 * @property {number} [request_id]
 */

/**
 * @typedef {object} Proto_CMsgRemoteDeviceStreamTransportSignal
 * @property {Buffer} [token]
 * @property {Buffer} [payload]
 */

///////////////////////////////////////////////
// steammessages_remoteclient_discovery.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// steammessages_remoteclient_service.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_RemoteClient
 */

/**
 * @typedef {object} Proto_RemoteClientSteamClient
 */

/**
 * @typedef {object} Proto_CRemoteClient_CreateSession_Request
 */

/**
 * @typedef {object} Proto_CRemoteClient_CreateSession_Response
 * @property {string} [session_id]
 * @property {number} [euniverse]
 */

/**
 * @typedef {object} Proto_CRemoteClient_StartPairing_Request
 * @property {string} [session_id]
 */

/**
 * @typedef {object} Proto_CRemoteClient_StartPairing_Response
 * @property {number} [pin]
 */

/**
 * @typedef {object} Proto_CRemoteClient_SetPairingInfo_Request
 * @property {string} [session_id]
 * @property {string} [device_id]
 * @property {Buffer} [request]
 */

/**
 * @typedef {object} Proto_CRemoteClient_SetPairingInfo_Response
 */

/**
 * @typedef {object} Proto_CRemoteClient_GetPairingInfo_Request
 * @property {number} [pin]
 */

/**
 * @typedef {object} Proto_CRemoteClient_GetPairingInfo_Response
 * @property {string} [session_id]
 * @property {string} [device_id]
 * @property {Buffer} [request]
 */

/**
 * @typedef {object} Proto_CRemoteClient_CancelPairing_Request
 * @property {string} [session_id]
 */

/**
 * @typedef {object} Proto_CRemoteClient_CancelPairing_Response
 */

/**
 * @typedef {object} Proto_CRemoteClient_RegisterStatusUpdate_Notification
 * @property {string} [session_id]
 * @property {string} [steamid]
 * @property {string} [device_id]
 */

/**
 * @typedef {object} Proto_CRemoteClient_UnregisterStatusUpdate_Notification
 * @property {string} [session_id]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CRemoteClient_Online_Notification
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CRemoteClient_RemotePacket_Notification
 * @property {string} [session_id]
 * @property {string} [steamid]
 * @property {Buffer} [payload]
 */

/**
 * @typedef {object} Proto_CRemoteClient_ReplyPacket_Notification
 * @property {string} [session_id]
 * @property {Buffer} [payload]
 */

/**
 * @typedef {object} Proto_CRemoteClient_GetReplies_Request
 * @property {string} [session_id]
 */

/**
 * @typedef {object} Proto_CRemoteClient_GetReplies_Response
 * @property {Buffer[]} payload
 */

/**
 * @typedef {object} Proto_CRemoteClient_AllocateTURNServer_Request
 * @property {number} [cellid]
 * @property {string} [credentials]
 */

/**
 * @typedef {object} Proto_CRemoteClient_AllocateTURNServer_Response
 * @property {string} [turn_server]
 */

/**
 * @typedef {object} Proto_CRemoteClient_AllocateRelayServer_Request
 * @property {number} [cellid]
 * @property {string} [credentials]
 */

/**
 * @typedef {object} Proto_CRemoteClient_AllocateRelayServer_Response
 * @property {string} [relay_server]
 */

/**
 * @typedef {object} Proto_CRemoteClient_AllocateSDR_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CRemoteClient_AllocateSDR_Response
 */

/**
 * @typedef {object} Proto_CRemoteClient_SteamBroadcast_Notification
 * @property {string} [steamid]
 * @property {string} [clientid]
 * @property {Buffer} [payload]
 */

/**
 * @typedef {object} Proto_CRemoteClient_SteamToSteam_Notification
 * @property {string} [steamid]
 * @property {string} [src_clientid]
 * @property {string} [dst_clientid]
 * @property {number} [secretid]
 * @property {Buffer} [encrypted_payload]
 */

/**
 * @typedef {object} Proto_CRemotePlay_SessionStarted_Request
 * @property {number} [host_account_id]
 * @property {number} [client_account_id]
 * @property {number} [appid]
 * @property {number} [device_form_factor]
 * @property {boolean} [remote_play_together]
 * @property {boolean} [guest_session]
 */

/**
 * @typedef {object} Proto_CRemotePlay_SessionStarted_Response
 * @property {string} [record_id]
 */

/**
 * @typedef {object} Proto_CRemotePlay_SessionStopped_Notification
 * @property {string} [record_id]
 * @property {boolean} [used_x264]
 * @property {boolean} [used_h264]
 * @property {boolean} [used_hevc]
 */

/**
 * @typedef {object} Proto_CRemotePlayTogether_Notification
 * @property {string} [steamid]
 * @property {Proto_CRemotePlayTogether_Notification_GroupUpdated} [group_updated]
 */

/**
 * @typedef {object} Proto_CRemotePlayTogether_Notification_Player
 * @property {string} [steamid]
 * @property {number} [guestid]
 * @property {Buffer} [avatar_hash]
 * @property {boolean} [keyboard_enabled]
 * @property {boolean} [mouse_enabled]
 * @property {boolean} [controller_enabled]
 */

/**
 * @typedef {object} Proto_CRemotePlayTogether_Notification_ControllerSlot_obsolete
 * @property {number} [slotid]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CRemotePlayTogether_Notification_ControllerSlot
 * @property {number} [slotid]
 * @property {Proto_CRemotePlayTogether_Notification_Player} [player]
 */

/**
 * @typedef {object} Proto_CRemotePlayTogether_Notification_GroupUpdated
 * @property {string} [host_steamid]
 * @property {string} [host_clientid]
 * @property {string[]} players_obsolete
 * @property {string} [host_gameid]
 * @property {Proto_CRemotePlayTogether_Notification_ControllerSlot_obsolete[]} controller_slots_obsolete
 * @property {boolean} [has_new_players]
 * @property {Proto_CRemotePlayTogether_Notification_Player[]} player_slots
 * @property {Proto_CRemotePlayTogether_Notification_ControllerSlot[]} controller_slots
 */

/**
 * @typedef {object} Proto_CRemoteClient_CreateRemotePlayTogetherInvitation_Request
 * @property {number} [appid]
 * @property {string} [launch_parameters]
 */

/**
 * @typedef {object} Proto_CRemoteClient_CreateRemotePlayTogetherInvitation_Response
 * @property {string} [invitation_code]
 */

/**
 * @typedef {object} Proto_CRemoteClient_DeleteRemotePlayTogetherInvitation_Request
 * @property {string} [invitation_code]
 */

/**
 * @typedef {object} Proto_CRemoteClient_DeleteRemotePlayTogetherInvitation_Response
 */

/**
 * @typedef {object} Proto_CRemoteClient_LookupRemotePlayTogetherInvitation_Request
 * @property {string} [invitation_code]
 */

/**
 * @typedef {object} Proto_CRemoteClient_LookupRemotePlayTogetherInvitation_Response
 * @property {string} [invitation_url]
 */

///////////////////////////////////////////////
// steammessages_remoteclient_service_messages.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// steammessages_remoteplay.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CDiscoveryPingRequest
 * @property {number} [sequence]
 * @property {number} [packet_size_requested]
 */

/**
 * @typedef {object} Proto_CDiscoveryPingResponse
 * @property {number} [sequence]
 * @property {number} [packet_size_received]
 */

/**
 * @typedef {object} Proto_CStreamingClientHandshakeInfo
 * @property {number} [network_test]
 */

/**
 * @typedef {object} Proto_CClientHandshakeMsg
 * @property {Proto_CStreamingClientHandshakeInfo} info
 */

/**
 * @typedef {object} Proto_CStreamingServerHandshakeInfo
 * @property {number} [mtu]
 */

/**
 * @typedef {object} Proto_CServerHandshakeMsg
 * @property {Proto_CStreamingServerHandshakeInfo} info
 */

/**
 * @typedef {object} Proto_CAuthenticationRequestMsg
 * @property {Buffer} [token]
 * @property {EStreamVersion} [version]
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CAuthenticationResponseMsg
 * @property {Proto_CAuthenticationResponseMsg_AuthenticationResult} [result]
 * @property {EStreamVersion} [version]
 */

/**
 * @typedef {object} Proto_CKeepAliveMsg
 */

/**
 * @typedef {object} Proto_CStartNetworkTestMsg
 * @property {number} [frames]
 * @property {number} [framerate]
 * @property {number} [bitrate_kbps]
 * @property {number} [burst_bitrate_kbps]
 * @property {boolean} [bandwidth_test]
 */

/**
 * @typedef {object} Proto_CStreamVideoMode
 * @property {number} width
 * @property {number} height
 * @property {number} [refresh_rate]
 * @property {number} [refresh_rate_numerator]
 * @property {number} [refresh_rate_denominator]
 */

/**
 * @typedef {object} Proto_CStreamingClientCaps
 * @property {string} [system_info]
 * @property {boolean} [system_can_suspend]
 * @property {number} [maximum_decode_bitrate_kbps]
 * @property {number} [maximum_burst_bitrate_kbps]
 * @property {boolean} [supports_video_hevc]
 * @property {boolean} [disable_steam_store]
 * @property {boolean} [disable_client_cursor]
 * @property {boolean} [disable_intel_hardware_encoding]
 * @property {boolean} [disable_amd_hardware_encoding]
 * @property {boolean} [disable_nvidia_hardware_encoding]
 * @property {number} [form_factor]
 */

/**
 * @typedef {object} Proto_CStreamingClientConfig
 * @property {EStreamQualityPreference} [quality]
 * @property {number} [maximum_resolution_x]
 * @property {number} [maximum_resolution_y]
 * @property {number} [maximum_framerate_numerator]
 * @property {number} [maximum_framerate_denominator]
 * @property {number} [maximum_bitrate_kbps=-1]
 * @property {boolean} [enable_hardware_decoding=true]
 * @property {boolean} [enable_performance_overlay=false]
 * @property {boolean} [enable_video_streaming=true]
 * @property {boolean} [enable_audio_streaming=true]
 * @property {boolean} [enable_input_streaming=true]
 * @property {number} [audio_channels=2]
 * @property {boolean} [enable_video_hevc=false]
 * @property {boolean} [enable_performance_icons=true]
 * @property {boolean} [enable_microphone_streaming=false]
 * @property {string} [controller_overlay_hotkey]
 * @property {boolean} [enable_touch_controller=false]
 * @property {EStreamP2PScope} [p2p_scope]
 */

/**
 * @typedef {object} Proto_CStreamingServerConfig
 * @property {boolean} [change_desktop_resolution]
 * @property {boolean} [dynamically_adjust_resolution]
 * @property {boolean} [enable_capture_nvfbc]
 * @property {boolean} [enable_hardware_encoding_nvidia]
 * @property {boolean} [enable_hardware_encoding_amd]
 * @property {boolean} [enable_hardware_encoding_intel]
 * @property {number} [software_encoding_threads]
 * @property {boolean} [enable_traffic_priority]
 * @property {EStreamHostPlayAudioPreference} [host_play_audio]
 */

/**
 * @typedef {object} Proto_CNegotiatedConfig
 * @property {boolean} [reliable_data]
 * @property {EStreamAudioCodec} [selected_audio_codec]
 * @property {EStreamVideoCodec} [selected_video_codec]
 * @property {Proto_CStreamVideoMode[]} available_video_modes
 * @property {boolean} [enable_remote_hid]
 * @property {boolean} [enable_touch_input]
 */

/**
 * @typedef {object} Proto_CNegotiationInitMsg
 * @property {boolean} [reliable_data]
 * @property {EStreamAudioCodec[]} supported_audio_codecs
 * @property {EStreamVideoCodec[]} supported_video_codecs
 * @property {boolean} [supports_remote_hid]
 * @property {boolean} [supports_touch_input]
 */

/**
 * @typedef {object} Proto_CNegotiationSetConfigMsg
 * @property {Proto_CNegotiatedConfig} config
 * @property {Proto_CStreamingClientConfig} [streaming_client_config]
 * @property {Proto_CStreamingClientCaps} [streaming_client_caps]
 */

/**
 * @typedef {object} Proto_CNegotiationCompleteMsg
 */

/**
 * @typedef {object} Proto_CStartAudioDataMsg
 * @property {number} channel
 * @property {EStreamAudioCodec} [codec]
 * @property {Buffer} [codec_data]
 * @property {number} [frequency]
 * @property {number} [channels]
 */

/**
 * @typedef {object} Proto_CStopAudioDataMsg
 */

/**
 * @typedef {object} Proto_CStartVideoDataMsg
 * @property {number} channel
 * @property {EStreamVideoCodec} [codec]
 * @property {Buffer} [codec_data]
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef {object} Proto_CStopVideoDataMsg
 */

/**
 * @typedef {object} Proto_CRecordedInput
 * @property {EStreamControlMessage} [type]
 * @property {number} [timestamp]
 * @property {Proto_CInputTouchFingerDownMsg} [finger_down]
 * @property {Proto_CInputTouchFingerMotionMsg} [finger_motion]
 * @property {Proto_CInputTouchFingerUpMsg} [finger_up]
 * @property {Proto_CInputMouseMotionMsg} [mouse_motion]
 * @property {Proto_CInputMouseWheelMsg} [mouse_wheel]
 * @property {Proto_CInputMouseDownMsg} [mouse_down]
 * @property {Proto_CInputMouseUpMsg} [mouse_up]
 * @property {Proto_CInputKeyDownMsg} [key_down]
 * @property {Proto_CInputKeyUpMsg} [key_up]
 * @property {Proto_CInputTextMsg} [text]
 * @property {Proto_CRemoteHIDMsg} [hid]
 */

/**
 * @typedef {object} Proto_CRecordedInputStream
 * @property {Proto_CRecordedInput[]} entries
 */

/**
 * @typedef {object} Proto_CInputLatencyTestMsg
 * @property {number} input_mark
 * @property {number} [color]
 */

/**
 * @typedef {object} Proto_CInputTouchFingerDownMsg
 * @property {number} [input_mark]
 * @property {string} [fingerid]
 * @property {number} [x_normalized]
 * @property {number} [y_normalized]
 */

/**
 * @typedef {object} Proto_CInputTouchFingerMotionMsg
 * @property {number} [input_mark]
 * @property {string} [fingerid]
 * @property {number} [x_normalized]
 * @property {number} [y_normalized]
 */

/**
 * @typedef {object} Proto_CInputTouchFingerUpMsg
 * @property {number} [input_mark]
 * @property {string} [fingerid]
 * @property {number} [x_normalized]
 * @property {number} [y_normalized]
 */

/**
 * @typedef {object} Proto_CInputMouseMotionMsg
 * @property {number} [input_mark]
 * @property {number} [x_normalized]
 * @property {number} [y_normalized]
 * @property {number} [dx]
 * @property {number} [dy]
 */

/**
 * @typedef {object} Proto_CInputMouseWheelMsg
 * @property {number} [input_mark]
 * @property {EStreamMouseWheelDirection} direction
 */

/**
 * @typedef {object} Proto_CInputMouseDownMsg
 * @property {number} [input_mark]
 * @property {EStreamMouseButton} button
 */

/**
 * @typedef {object} Proto_CInputMouseUpMsg
 * @property {number} [input_mark]
 * @property {EStreamMouseButton} button
 */

/**
 * @typedef {object} Proto_CInputKeyDownMsg
 * @property {number} [input_mark]
 * @property {number} scancode
 */

/**
 * @typedef {object} Proto_CInputKeyUpMsg
 * @property {number} [input_mark]
 * @property {number} scancode
 */

/**
 * @typedef {object} Proto_CInputTextMsg
 * @property {number} [input_mark]
 * @property {string} text_utf8
 */

/**
 * @typedef {object} Proto_CSetTitleMsg
 * @property {string} [text]
 */

/**
 * @typedef {object} Proto_CSetCaptureSizeMsg
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef {object} Proto_CSetIconMsg
 * @property {number} [width]
 * @property {number} [height]
 * @property {Buffer} [image]
 */

/**
 * @typedef {object} Proto_CSetFlashStateMsg
 * @property {number} [flags]
 * @property {number} [count]
 * @property {number} [timeout_ms]
 */

/**
 * @typedef {object} Proto_CShowCursorMsg
 * @property {number} [x_normalized]
 * @property {number} [y_normalized]
 */

/**
 * @typedef {object} Proto_CHideCursorMsg
 */

/**
 * @typedef {object} Proto_CSetCursorMsg
 * @property {string} cursor_id
 */

/**
 * @typedef {object} Proto_CGetCursorImageMsg
 * @property {string} cursor_id
 */

/**
 * @typedef {object} Proto_CSetCursorImageMsg
 * @property {string} cursor_id
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [hot_x]
 * @property {number} [hot_y]
 * @property {Buffer} [image]
 */

/**
 * @typedef {object} Proto_CVideoDecoderInfoMsg
 * @property {string} [info]
 * @property {number} [threads]
 */

/**
 * @typedef {object} Proto_CVideoEncoderInfoMsg
 * @property {string} [info]
 */

/**
 * @typedef {object} Proto_CPauseMsg
 */

/**
 * @typedef {object} Proto_CResumeMsg
 */

/**
 * @typedef {object} Proto_CEnableHighResCaptureMsg
 */

/**
 * @typedef {object} Proto_CDisableHighResCaptureMsg
 */

/**
 * @typedef {object} Proto_CToggleMagnificationMsg
 */

/**
 * @typedef {object} Proto_CSetCapslockMsg
 * @property {boolean} [pressed]
 */

/**
 * @typedef {object} Proto_CStreamingKeymapEntry
 * @property {number} [scancode]
 * @property {number} [normal_keycode]
 * @property {number} [shift_keycode]
 * @property {number} [capslock_keycode]
 * @property {number} [shift_capslock_keycode]
 * @property {number} [altgr_keycode]
 * @property {number} [altgr_shift_keycode]
 * @property {number} [altgr_capslock_keycode]
 * @property {number} [altgr_shift_capslock_keycode]
 */

/**
 * @typedef {object} Proto_CStreamingKeymap
 * @property {Proto_CStreamingKeymapEntry[]} entries
 */

/**
 * @typedef {object} Proto_CSetKeymapMsg
 * @property {Proto_CStreamingKeymap} [keymap]
 */

/**
 * @typedef {object} Proto_CStopRequest
 */

/**
 * @typedef {object} Proto_CQuitRequest
 */

/**
 * @typedef {object} Proto_CDeleteCursorMsg
 * @property {string} cursor_id
 */

/**
 * @typedef {object} Proto_CSetStreamingClientConfig
 * @property {Proto_CStreamingClientConfig} config
 */

/**
 * @typedef {object} Proto_CSetQoSMsg
 * @property {boolean} use_qos
 */

/**
 * @typedef {object} Proto_CSetTargetFramerateMsg
 * @property {number} framerate
 * @property {number} [reasons]
 * @property {number} [framerate_numerator]
 * @property {number} [framerate_denominator]
 */

/**
 * @typedef {object} Proto_CSetTargetBitrateMsg
 * @property {number} bitrate
 */

/**
 * @typedef {object} Proto_COverlayEnabledMsg
 * @property {boolean} enabled
 */

/**
 * @typedef {object} Proto_CSetGammaRampMsg
 * @property {Buffer} [gamma_ramp]
 */

/**
 * @typedef {object} Proto_CSetActivityMsg
 * @property {EStreamActivity} [activity]
 * @property {number} [appid]
 * @property {string} [gameid]
 * @property {string} [game_name]
 */

/**
 * @typedef {object} Proto_CSystemSuspendMsg
 */

/**
 * @typedef {object} Proto_CVirtualHereRequestMsg
 * @property {string} [hostname]
 */

/**
 * @typedef {object} Proto_CVirtualHereReadyMsg
 * @property {number} [licensed_device_count]
 */

/**
 * @typedef {object} Proto_CVirtualHereShareDeviceMsg
 * @property {string} [device_address]
 */

/**
 * @typedef {object} Proto_CSetSpectatorModeMsg
 * @property {boolean} [enabled]
 */

/**
 * @typedef {object} Proto_CRemoteHIDMsg
 * @property {Buffer} [data]
 */

/**
 * @typedef {object} Proto_CTouchConfigActiveMsg
 * @property {number} [appid]
 * @property {number} [revision]
 * @property {string} [creator]
 */

/**
 * @typedef {object} Proto_CGetTouchConfigDataMsg
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CSetTouchConfigDataMsg
 * @property {number} [appid]
 * @property {number} [revision]
 * @property {Buffer} [data]
 * @property {Buffer} [layout]
 * @property {string} [creator]
 */

/**
 * @typedef {object} Proto_CSaveTouchConfigLayoutMsg
 * @property {number} [appid]
 * @property {Buffer} [layout]
 */

/**
 * @typedef {object} Proto_CTouchActionSetActiveMsg
 * @property {number} [appid]
 * @property {number} [actionset_id]
 */

/**
 * @typedef {object} Proto_CTouchActionSetLayerAddedMsg
 * @property {number} [appid]
 * @property {number} [actionset_id]
 */

/**
 * @typedef {object} Proto_CTouchActionSetLayerRemovedMsg
 * @property {number} [appid]
 * @property {number} [actionset_id]
 */

/**
 * @typedef {object} Proto_CGetTouchIconDataMsg
 * @property {number} [appid]
 * @property {string} [icon]
 */

/**
 * @typedef {object} Proto_CSetTouchIconDataMsg
 * @property {number} [appid]
 * @property {string} [icon]
 * @property {Buffer} [data]
 */

/**
 * @typedef {object} Proto_CRemotePlayTogetherGroupUpdateMsg
 * @property {Proto_CRemotePlayTogetherGroupUpdateMsg_Player[]} players
 * @property {number} [player_index]
 * @property {string} [miniprofile_location]
 * @property {string} [game_name]
 * @property {string} [avatar_location]
 */

/**
 * @typedef {object} Proto_CRemotePlayTogetherGroupUpdateMsg_Player
 * @property {number} [accountid]
 * @property {number} [guestid]
 * @property {boolean} [keyboard_enabled]
 * @property {boolean} [mouse_enabled]
 * @property {boolean} [controller_enabled]
 * @property {number[]} controller_slots
 * @property {Buffer} [avatar_hash]
 */

/**
 * @typedef {object} Proto_CSetInputTemporarilyDisabledMsg
 * @property {boolean} [disabled]
 */

/**
 * @typedef {object} Proto_CSetQualityOverrideMsg
 * @property {number} [value]
 */

/**
 * @typedef {object} Proto_CSetBitrateOverrideMsg
 * @property {number} [value]
 */

/**
 * @typedef {object} Proto_CStreamDataLostMsg
 * @property {number[]} packets
 */

/**
 * @typedef {object} Proto_CAudioFormat
 * @property {EAudioFormat} format
 * @property {number} [frequency]
 * @property {number} [channels]
 */

/**
 * @typedef {object} Proto_CVideoFormat
 * @property {EVideoFormat} format
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef {object} Proto_CFrameEvent
 * @property {EStreamFrameEvent} event_id
 * @property {number} timestamp
 */

/**
 * @typedef {object} Proto_CFrameStats
 * @property {number} frame_id
 * @property {number} [input_mark]
 * @property {Proto_CFrameEvent[]} events
 * @property {EStreamFrameResult} result
 * @property {number} [frame_start_delta]
 * @property {number} [frame_display_delta]
 * @property {number} [ping_time]
 * @property {number} [server_bitrate]
 * @property {number} [client_bitrate]
 * @property {number} [link_bandwidth]
 * @property {number} [packet_loss]
 * @property {number} [frame_size]
 */

/**
 * @typedef {object} Proto_CFrameStatAccumulatedValue
 * @property {EFrameAccumulatedStat} stat_type
 * @property {number} count
 * @property {number} average
 * @property {number} [stddev]
 */

/**
 * @typedef {object} Proto_CFrameStatsListMsg
 * @property {EStreamingDataType} data_type
 * @property {Proto_CFrameStats[]} stats
 * @property {Proto_CFrameStatAccumulatedValue[]} accumulated_stats
 * @property {number} latest_frame_id
 */

/**
 * @typedef {object} Proto_CStreamingSessionStats
 * @property {number} [frame_loss_percentage]
 * @property {number} [average_network_time_ms]
 * @property {number} [stddev_network_time_ms]
 */

/**
 * @typedef {object} Proto_CDebugDumpMsg
 * @property {Buffer} [screenshot]
 */

/**
 * @typedef {object} Proto_CLogMsg
 * @property {number} [type]
 * @property {string} [message]
 */

/**
 * @typedef {object} Proto_CLogUploadMsg
 * @property {ELogFileType} [type]
 * @property {Buffer} [data]
 */

/**
 * @typedef {object} Proto_CTransportSignalMsg
 * @property {Proto_CTransportSignalMsg_WebRTCMessage} [webrtc]
 * @property {Buffer[]} sdr
 */

/**
 * @typedef {object} Proto_CTransportSignalMsg_WebRTCMessage
 * @property {boolean} [greeting]
 * @property {string} [offer]
 * @property {string} [answer]
 * @property {Proto_CTransportSignalMsg_WebRTCMessage_Candidate} [candidate]
 */

/**
 * @typedef {object} Proto_CTransportSignalMsg_WebRTCMessage_Candidate
 * @property {string} [sdp_mid]
 * @property {number} [sdp_mline_index]
 * @property {string} [candidate]
 */

///////////////////////////////////////////////
// steammessages_secrets.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CKeyEscrow_Request
 * @property {Buffer} [rsa_oaep_sha_ticket]
 * @property {Buffer} [password]
 * @property {EKeyEscrowUsage} [usage]
 * @property {string} [device_name]
 */

/**
 * @typedef {object} Proto_CKeyEscrow_Ticket
 * @property {Buffer} [password]
 * @property {string} [identifier]
 * @property {Buffer} [payload]
 * @property {number} [timestamp]
 * @property {EKeyEscrowUsage} [usage]
 * @property {string} [device_name]
 * @property {string} [device_model]
 * @property {string} [device_serial]
 * @property {number} [device_provisioning_id]
 */

/**
 * @typedef {object} Proto_CKeyEscrow_Response
 * @property {Proto_CKeyEscrow_Ticket} [ticket]
 */

/**
 * @typedef {object} Proto_Secrets
 */

///////////////////////////////////////////////
// steammessages_shader.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CShader_RegisterShader_Request
 * @property {number} [appid]
 * @property {string} [gpu_desc]
 * @property {string} [driver_desc]
 * @property {Proto_CShader_RegisterShader_Request_Shader[]} shaders
 */

/**
 * @typedef {object} Proto_CShader_RegisterShader_Request_Shader
 * @property {Buffer} [cache_key_sha]
 * @property {Buffer} [shader_code_sha]
 */

/**
 * @typedef {object} Proto_CShader_RegisterShader_Response
 * @property {number[]} requested_codeids
 */

/**
 * @typedef {object} Proto_CShader_SendShader_Request
 * @property {number} [appid]
 * @property {Proto_CShader_SendShader_Request_ShaderCode[]} shaders
 */

/**
 * @typedef {object} Proto_CShader_SendShader_Request_ShaderCode
 * @property {Buffer} [shader_code_sha]
 * @property {Buffer} [shader_code]
 */

/**
 * @typedef {object} Proto_CShader_SendShader_Response
 */

/**
 * @typedef {object} Proto_CShader_GetBucketManifest_Request
 * @property {number} [appid]
 * @property {string} [gpu_desc]
 * @property {string} [driver_desc]
 */

/**
 * @typedef {object} Proto_CShader_GetBucketManifest_Response
 * @property {string} [manifestid]
 * @property {string} [depotsize]
 * @property {string} [bucketid]
 */

/**
 * @typedef {object} Proto_CShader_GetStaleBucket_Request
 * @property {string} [gpu_desc]
 * @property {string} [driver_desc]
 */

/**
 * @typedef {object} Proto_CShader_GetStaleBucket_Response
 * @property {string} [bucketid]
 * @property {number} [appid]
 * @property {string} [manifestid]
 */

/**
 * @typedef {object} Proto_CShader_ReportExternalBuild_Request
 * @property {number} [appid]
 * @property {string} [gpu_desc]
 * @property {string} [driver_desc]
 * @property {string} [manifestid]
 * @property {string} [source_gpu_desc]
 * @property {string} [source_driver_desc]
 * @property {string} [depotsize]
 */

/**
 * @typedef {object} Proto_CShader_ReportExternalBuild_Response
 */

/**
 * @typedef {object} Proto_Shader
 */

///////////////////////////////////////////////
// steammessages_sitelicenseclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgClientSiteInfo
 * @property {string} [site_id]
 * @property {string} [site_name]
 * @property {boolean} [allow_cached_credentials]
 */

/**
 * @typedef {object} Proto_CMsgClientSiteLicenseCheckout
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CMsgClientSiteLicenseCheckoutResponse
 * @property {EResult} [eresult=2]
 */

/**
 * @typedef {object} Proto_CMsgClientSiteLicenseGetAvailableSeats
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CMsgClientSiteLicenseGetAvailableSeatsResponse
 * @property {EResult} [eresult=2]
 * @property {number} [seats]
 */

/**
 * @typedef {object} Proto_CMsgClientSiteLicenseGetContentCacheInfo
 */

/**
 * @typedef {object} Proto_CMsgClientSiteLicenseGetContentCacheInfoResponse
 * @property {boolean} [use_cache]
 * @property {number} [ipv4_address]
 * @property {number} [port_number]
 * @property {number} [p2p_group]
 * @property {string} [ip_address]
 */

///////////////////////////////////////////////
// steammessages_siteserverui.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_SiteServerUI_Login_Request
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [steamguardcode]
 * @property {boolean} [remember_password]
 */

/**
 * @typedef {object} Proto_SiteServerUI_Login_Response
 * @property {number} [logon_state]
 * @property {number} [logon_eresult]
 */

/**
 * @typedef {object} Proto_SiteServerUI_LoginStatus_Request
 */

/**
 * @typedef {object} Proto_SiteServerUI_LoginStatus_Response
 * @property {string} [username]
 * @property {boolean} [cached_credentials]
 * @property {number} [logon_state]
 * @property {number} [logon_eresult]
 */

/**
 * @typedef {object} Proto_SiteServerUI_CancelLogin_Request
 */

/**
 * @typedef {object} Proto_SiteServerUI_CancelLogin_Response
 * @property {number} [logon_state]
 * @property {number} [logon_eresult]
 */

/**
 * @typedef {object} Proto_SiteServerUI_Logout_Request
 */

/**
 * @typedef {object} Proto_SiteServerUI_Logout_Response
 * @property {number} [logon_state]
 * @property {number} [logout_eresult]
 */

/**
 * @typedef {object} Proto_SiteServerUI_Quit_Request
 * @property {boolean} [restart]
 */

/**
 * @typedef {object} Proto_SiteServerUI_Quit_Response
 */

/**
 * @typedef {object} Proto_SiteServerUI_Status_Request
 */

/**
 * @typedef {object} Proto_SiteServerUI_Status_Response
 * @property {number} [logon_state]
 * @property {number} [logon_eresult]
 * @property {boolean} [connected]
 * @property {boolean} [cache_enabled]
 * @property {number} [acct_status]
 */

/**
 * @typedef {object} Proto_SiteServerUI_GetLanguage_Request
 */

/**
 * @typedef {object} Proto_SiteServerUI_GetLanguage_Response
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_SiteServerUI_SetLanguage_Request
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_SiteServerUI_SetLanguage_Response
 */

/**
 * @typedef {object} Proto_SiteServerUI_ClientStatus_Request
 */

/**
 * @typedef {object} Proto_SiteServerUI_ClientStatus_Response
 * @property {Proto_SiteServerUI_ClientStatus_Response_ClientInfo[]} clients
 * @property {Proto_SiteServerUI_ClientStatus_Response_Payment[]} payments
 */

/**
 * @typedef {object} Proto_SiteServerUI_ClientStatus_Response_ClientInfo
 * @property {number} [ip]
 * @property {string} [hostname]
 * @property {boolean} [connected]
 * @property {string} [instance_id]
 */

/**
 * @typedef {object} Proto_SiteServerUI_ClientStatus_Response_Payment
 * @property {string} [transid]
 * @property {string} [steamid]
 * @property {string} [amount]
 * @property {number} [time_created]
 * @property {number} [purchase_status]
 * @property {string} [hostname]
 * @property {string} [persona_name]
 * @property {string} [profile_url]
 * @property {string} [avatar_url]
 */

/**
 * @typedef {object} Proto_SiteServerUI_ContentCacheStatus_Request
 */

/**
 * @typedef {object} Proto_SiteServerUI_ContentCacheStatus_Response
 * @property {boolean} [enabled]
 * @property {number} [port]
 * @property {string} [cache_location]
 * @property {number} [max_size_gb]
 * @property {boolean} [p2p_enabled]
 * @property {string} [explicit_ip_address]
 * @property {boolean} [external_process]
 * @property {number} [current_size_gb]
 * @property {string} [current_bw]
 * @property {string} [total_bytes_served]
 */

/**
 * @typedef {object} Proto_SiteServerUI_ContentCacheConfig_Request
 * @property {boolean} [enabled]
 * @property {number} [port]
 * @property {string} [cache_location]
 * @property {number} [max_size_gb]
 * @property {boolean} [p2p_enabled]
 * @property {boolean} [external_process]
 * @property {string} [explicit_ip_address]
 */

/**
 * @typedef {object} Proto_SiteServerUI_ContentCacheConfig_Response
 */

///////////////////////////////////////////////
// steammessages_site_license.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CSiteManagerClient_IncomingClient_Request
 * @property {string} [site_instanceid]
 * @property {string} [client_steamid]
 * @property {number} [client_local_ip]
 * @property {Buffer} [connection_key]
 */

/**
 * @typedef {object} Proto_CSiteManagerClient_IncomingClient_Response
 */

/**
 * @typedef {object} Proto_CSiteLicense_ClientSeatCheckout_Notification
 * @property {number} [appid]
 * @property {EResult} [eresult]
 */

/**
 * @typedef {object} Proto_CSiteManagerClient_TrackedPayments_Notification
 * @property {string} [site_id]
 * @property {Proto_CSiteManagerClient_TrackedPayments_Notification_Payment[]} payments
 */

/**
 * @typedef {object} Proto_CSiteManagerClient_TrackedPayments_Notification_Payment
 * @property {string} [transid]
 * @property {string} [steamid]
 * @property {string} [amount]
 * @property {number} [ecurrency]
 * @property {number} [time_created]
 * @property {number} [purchase_status]
 * @property {string} [machine_name]
 * @property {string} [persona_name]
 * @property {string} [profile_url]
 * @property {string} [avatar_url]
 */

/**
 * @typedef {object} Proto_CSiteLicense_InitiateAssociation_Request
 * @property {string} [site_steamid]
 * @property {string} [site_instanceid]
 * @property {number} [client_local_ip]
 */

/**
 * @typedef {object} Proto_CSiteLicense_InitiateAssociation_Response
 * @property {Buffer} [connection_key]
 */

/**
 * @typedef {object} Proto_CSiteLicense_LCSAuthenticate_Request
 * @property {string} [instanceid]
 */

/**
 * @typedef {object} Proto_CSiteLicense_LCSAuthenticate_Response
 * @property {string} [site_id]
 * @property {string} [site_name]
 * @property {boolean} [new_session]
 * @property {boolean} [no_site_licenses]
 */

/**
 * @typedef {object} Proto_CSiteLicense_LCSAssociateUser_Request
 * @property {string} [steamid]
 * @property {number} [local_ip]
 * @property {string} [instanceid]
 * @property {string} [machine_name]
 */

/**
 * @typedef {object} Proto_CSiteLicense_LCSAssociateUser_Response
 */

/**
 * @typedef {object} Proto_CSiteLicense_ClientSeatCheckout_Request
 * @property {string} [steamid]
 * @property {string} [instanceid]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CSiteLicense_ClientSeatCheckout_Response
 */

/**
 * @typedef {object} Proto_CSiteLicense_ClientGetAvailableSeats_Request
 * @property {string} [steamid]
 * @property {string} [instanceid]
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CSiteLicense_ClientGetAvailableSeats_Response
 * @property {number} [available_seats]
 */

/**
 * @typedef {object} Proto_SiteManagerClient
 */

/**
 * @typedef {object} Proto_SiteLicense
 */

///////////////////////////////////////////////
// steammessages_star.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CSTAR_KeyValueQuery
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef {object} Proto_CSTAR_GlyphQueryParams
 * @property {string} [bundle_id]
 * @property {Proto_CSTAR_KeyValueQuery[]} queries
 */

/**
 * @typedef {object} Proto_CSTAR_ReadGlyphData_Request
 * @property {Proto_CSTAR_GlyphQueryParams} [query_params]
 * @property {string} [last_modified_time_lower_limit]
 */

/**
 * @typedef {object} Proto_CSTAR_GlyphData
 * @property {Buffer} [glyph_guid]
 * @property {string} [glyph_last_modified]
 * @property {string} [glyph_json_data]
 */

/**
 * @typedef {object} Proto_CSTAR_WriteGlyphData_Request
 * @property {string} [bundle_id]
 * @property {Proto_CSTAR_GlyphData[]} glyph_data
 */

/**
 * @typedef {object} Proto_CSTAR_Request
 * @property {Proto_CSTAR_ReadGlyphData_Request} [read_glyph_data]
 * @property {Proto_CSTAR_WriteGlyphData_Request} [write_glyph_data]
 */

/**
 * @typedef {object} Proto_CSTAR_ReadGlyphData_Response
 * @property {string} [bundle_id]
 * @property {Proto_CSTAR_GlyphData[]} glyph_data
 */

/**
 * @typedef {object} Proto_CSTAR_WriteGlyphData_Response
 * @property {E_STAR_GlyphWriteResult[]} result
 */

/**
 * @typedef {object} Proto_CSTAR_Response
 * @property {Proto_CSTAR_ReadGlyphData_Response} [read_glyph_data]
 * @property {Proto_CSTAR_WriteGlyphData_Response} [write_glyph_data]
 */

/**
 * @typedef {object} Proto_STAR
 */

///////////////////////////////////////////////
// steammessages_store.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CStore_GetMostPopularTags_Request
 * @property {string} [language]
 */

/**
 * @typedef {object} Proto_CStore_GetLocalizedNameForTags_Request
 * @property {string} [language]
 * @property {number[]} tagids
 */

///////////////////////////////////////////////
// steammessages_timedtrial.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CTimedTrial_GetTimeRemaining_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CTimedTrial_GetTimeRemaining_Response
 * @property {number} [seconds_played]
 * @property {number} [seconds_allowed]
 * @property {number} [packageid]
 * @property {number} [mastersub_appid]
 */

/**
 * @typedef {object} Proto_CTimedTrial_RecordPlaytime_Request
 * @property {number} [appid]
 * @property {number} [seconds_played]
 */

/**
 * @typedef {object} Proto_CTimedTrial_RecordPlaytime_Response
 * @property {number} [seconds_played]
 * @property {number} [seconds_allowed]
 */

/**
 * @typedef {object} Proto_CTimedTrial_ResetPlaytime_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CTimedTrial_ResetPlaytime_Response
 * @property {number} [seconds_played]
 * @property {number} [seconds_allowed]
 */

/**
 * @typedef {object} Proto_TimedTrial
 */

///////////////////////////////////////////////
// steammessages_twofactor.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CTwoFactor_Status_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CTwoFactor_Status_Response
 * @property {number} [state]
 * @property {number} [inactivation_reason]
 * @property {number} [authenticator_type]
 * @property {boolean} [authenticator_allowed]
 * @property {number} [steamguard_scheme]
 * @property {string} [token_gid]
 * @property {boolean} [email_validated]
 * @property {string} [device_identifier]
 * @property {number} [time_created]
 * @property {number} [revocation_attempts_remaining]
 * @property {string} [classified_agent]
 * @property {boolean} [allow_external_authenticator]
 * @property {number} [time_transferred]
 */

/**
 * @typedef {object} Proto_CTwoFactor_AddAuthenticator_Request
 * @property {string} [steamid]
 * @property {string} [authenticator_time]
 * @property {string} [serial_number]
 * @property {number} [authenticator_type]
 * @property {string} [device_identifier]
 * @property {string} [sms_phone_id]
 * @property {string[]} http_headers
 */

/**
 * @typedef {object} Proto_CTwoFactor_AddAuthenticator_Response
 * @property {Buffer} [shared_secret]
 * @property {string} [serial_number]
 * @property {string} [revocation_code]
 * @property {string} [uri]
 * @property {string} [server_time]
 * @property {string} [account_name]
 * @property {string} [token_gid]
 * @property {Buffer} [identity_secret]
 * @property {Buffer} [secret_1]
 * @property {number} [status]
 */

/**
 * @typedef {object} Proto_CTwoFactor_SendEmail_Request
 * @property {string} [steamid]
 * @property {number} [email_type]
 * @property {boolean} [include_activation_code]
 */

/**
 * @typedef {object} Proto_CTwoFactor_SendEmail_Response
 */

/**
 * @typedef {object} Proto_CTwoFactor_FinalizeAddAuthenticator_Request
 * @property {string} [steamid]
 * @property {string} [authenticator_code]
 * @property {string} [authenticator_time]
 * @property {string} [activation_code]
 * @property {string[]} http_headers
 */

/**
 * @typedef {object} Proto_CTwoFactor_FinalizeAddAuthenticator_Response
 * @property {boolean} [success]
 * @property {boolean} [want_more]
 * @property {string} [server_time]
 * @property {number} [status]
 */

/**
 * @typedef {object} Proto_CTwoFactor_RemoveAuthenticator_Request
 * @property {string} [revocation_code]
 * @property {number} [revocation_reason]
 * @property {number} [steamguard_scheme]
 * @property {boolean} [remove_all_steamguard_cookies]
 */

/**
 * @typedef {object} Proto_CTwoFactor_RemoveAuthenticator_Response
 * @property {boolean} [success]
 * @property {string} [server_time]
 * @property {number} [revocation_attempts_remaining]
 */

/**
 * @typedef {object} Proto_CTwoFactor_CreateEmergencyCodes_Request
 * @property {string} [code]
 */

/**
 * @typedef {object} Proto_CTwoFactor_CreateEmergencyCodes_Response
 * @property {string[]} codes
 */

/**
 * @typedef {object} Proto_CTwoFactor_DestroyEmergencyCodes_Request
 * @property {string} [steamid]
 */

/**
 * @typedef {object} Proto_CTwoFactor_DestroyEmergencyCodes_Response
 */

/**
 * @typedef {object} Proto_CTwoFactor_ValidateToken_Request
 * @property {string} [code]
 */

/**
 * @typedef {object} Proto_CTwoFactor_ValidateToken_Response
 * @property {boolean} [valid]
 */

/**
 * @typedef {object} Proto_TwoFactor
 */

///////////////////////////////////////////////
// steammessages_unified_base.steamclient.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// steammessages_unified_test.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgTest_MessageToClient_Request
 * @property {string} [some_text]
 */

/**
 * @typedef {object} Proto_CMsgTest_MessageToClient_Response
 * @property {string} [some_text]
 */

/**
 * @typedef {object} Proto_CMsgTest_NotifyClient_Notification
 * @property {string} [some_text]
 */

/**
 * @typedef {object} Proto_CMsgTest_MessageToServer_Request
 * @property {string} [some_text]
 */

/**
 * @typedef {object} Proto_CMsgTest_MessageToServer_Response
 * @property {string} [some_text]
 */

/**
 * @typedef {object} Proto_CMsgTest_NotifyServer_Notification
 * @property {string} [some_text]
 */

/**
 * @typedef {object} Proto_TestSteamClient
 */

/**
 * @typedef {object} Proto_TestServerFromClient
 */

///////////////////////////////////////////////
// steammessages_useraccount.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CUserAccount_GetAccountLinkStatus_Request
 */

/**
 * @typedef {object} Proto_CUserAccount_CreateFriendInviteToken_Request
 * @property {number} [invite_limit]
 * @property {number} [invite_duration]
 * @property {string} [invite_note]
 */

/**
 * @typedef {object} Proto_CUserAccount_GetFriendInviteTokens_Request
 */

/**
 * @typedef {object} Proto_CUserAccount_ViewFriendInviteToken_Request
 * @property {string} [steamid]
 * @property {string} [invite_token]
 */

/**
 * @typedef {object} Proto_CUserAccount_RedeemFriendInviteToken_Request
 * @property {string} [steamid]
 * @property {string} [invite_token]
 */

/**
 * @typedef {object} Proto_CUserAccount_RevokeFriendInviteToken_Request
 * @property {string} [invite_token]
 */

/**
 * @typedef {object} Proto_CUserAccount_RegisterCompatTool_Request
 * @property {number} [compat_tool]
 */

/**
 * @typedef {object} Proto_CAccountLinking_GetLinkedAccountInfo_Request
 * @property {EInternalAccountType} [account_type]
 * @property {string} [account_id]
 * @property {EExternalAccountType} [filter]
 * @property {boolean} [return_access_token]
 */

/**
 * @typedef {object} Proto_CEmbeddedClient_AuthorizeCurrentDevice_Request
 * @property {string} [steamid]
 * @property {number} [appid]
 * @property {string} [device_info]
 * @property {number} [deviceid]
 */

///////////////////////////////////////////////
// steammessages_vac.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CFileVerification_SignatureCheck_Request
 * @property {string} [steamid]
 * @property {number} [appid]
 * @property {string} [file_size]
 * @property {number} [file_timestamp]
 * @property {number} [file_timestamp2]
 * @property {number} [signature_result]
 * @property {string} [filename]
 * @property {number} [client_package_version]
 * @property {Buffer} [sha1hash]
 */

/**
 * @typedef {object} Proto_CFileVerification_SignatureCheck_Response
 * @property {boolean} [deny_operation]
 */

/**
 * @typedef {object} Proto_CFileVerification_SteamServiceCheck_Request
 * @property {number} [service_status]
 * @property {number} [client_package_version]
 * @property {number} [launcher_type]
 * @property {number} [os_type]
 * @property {number} [service_repair]
 */

/**
 * @typedef {object} Proto_CFileVerification_SteamServiceCheck_Response
 * @property {boolean} [attempt_repair]
 */

/**
 * @typedef {object} Proto_FileVerification
 */

///////////////////////////////////////////////
// steammessages_video.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CVideo_ClientGetVideoURL_Request
 * @property {string} [video_id]
 * @property {number} [client_cellid]
 */

/**
 * @typedef {object} Proto_CVideo_GetVideoBookmarks_Request
 * @property {number[]} appids
 * @property {number} [updated_since]
 */

/**
 * @typedef {object} Proto_CFovasVideo_ClientGetOPFSettings_Request
 * @property {number} [app_id]
 * @property {number} [client_cellid]
 */

///////////////////////////////////////////////
// steammessages_virtualcontroller.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CVirtualControllerElement
 * @property {EControllerElementType} [type]
 * @property {boolean} [visible]
 * @property {number} [x_position]
 * @property {number} [y_position]
 * @property {number} [x_scale=1]
 * @property {number} [y_scale=1]
 */

/**
 * @typedef {object} Proto_CVirtualControllerColor
 * @property {number} [r=1]
 * @property {number} [g=1]
 * @property {number} [b=1]
 * @property {number} [a=1]
 */

/**
 * @typedef {object} Proto_CVirtualControllerLayout
 * @property {number} [layout_version]
 * @property {number} [actionset_id]
 * @property {Proto_CVirtualControllerElement[]} elements
 * @property {Proto_CVirtualControllerColor} [color]
 */

/**
 * @typedef {object} Proto_CVirtualControllerLayouts
 * @property {Proto_CVirtualControllerLayout[]} layouts
 * @property {EInputMode} [input_mode]
 * @property {EMouseMode} [mouse_mode]
 * @property {number} [trackpad_sensitivity=1]
 * @property {boolean} [pinch_zoom_enabled=false]
 * @property {number} [pinch_zoom_x=0]
 * @property {number} [pinch_zoom_y=0]
 * @property {number} [pinch_zoom_scale=1]
 * @property {boolean} [shaken]
 * @property {boolean} [mouse_offscreen]
 */

/**
 * @typedef {object} Proto_CVirtualControllerConfig
 * @property {string} [name]
 * @property {Proto_CVirtualControllerConfig_ActionSet[]} actionsets
 * @property {EMouseMode} [default_mouse_mode]
 */

/**
 * @typedef {object} Proto_CVirtualControllerConfig_Control
 * @property {string} [name]
 * @property {string} [icon]
 * @property {number} [input_source]
 * @property {number} [input_mode]
 * @property {number} [input_element]
 * @property {number} [output_gamepad]
 * @property {number} [output_keyboard]
 * @property {number} [output_mouse]
 * @property {string} [icon_foreground]
 * @property {string} [icon_background]
 * @property {boolean} [input_toggle]
 * @property {number} [input_activate_stick_or_trackpad]
 * @property {number} [activation_type]
 * @property {number} [long_press_ms]
 * @property {number} [double_press_ms]
 */

/**
 * @typedef {object} Proto_CVirtualControllerConfig_ActionSet
 * @property {number} [id]
 * @property {number} [parent_id]
 * @property {string} [name]
 * @property {Proto_CVirtualControllerConfig_Control[]} controls
 */

/**
 * @typedef {object} Proto_CVirtualControllerLayoutPackage
 * @property {number} [appid]
 * @property {string} [creator]
 * @property {number} [initial_revision]
 * @property {number} [saved_revision]
 * @property {Proto_CVirtualControllerConfig} [config]
 * @property {Proto_CVirtualControllerLayouts} [layouts]
 */

/**
 * @typedef {object} Proto_CVirtualControllerGlobalConfig
 * @property {boolean} [feedback_enabled]
 * @property {boolean} [gyroscope_enabled=true]
 * @property {boolean} [auto_fade_enabled=true]
 * @property {boolean} [rumble_enabled=true]
 * @property {boolean} [shake_fade_enabled]
 */

///////////////////////////////////////////////
// steammessages_workshop.steamclient.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CWorkshop_GetEULAStatus_Request
 * @property {number} [appid]
 */

/**
 * @typedef {object} Proto_CWorkshop_GetEULAStatus_Response
 * @property {number} [version]
 * @property {number} [timestamp_action]
 * @property {boolean} [accepted]
 * @property {boolean} [needs_action]
 */

/**
 * @typedef {object} Proto_Workshop
 */

///////////////////////////////////////////////
// steamnetworkingsockets_messages.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// steamnetworkingsockets_messages_certs.proto
///////////////////////////////////////////////

///////////////////////////////////////////////
// steamnetworkingsockets_messages_udp.proto
///////////////////////////////////////////////

/**
 * @typedef {object} Proto_CMsgSteamSockets_UDP_ChallengeRequest
 * @property {number} [connection_id]
 * @property {string} [my_timestamp]
 * @property {number} [protocol_version]
 */

/**
 * @typedef {object} Proto_CMsgSteamSockets_UDP_ChallengeReply
 * @property {number} [connection_id]
 * @property {string} [challenge]
 * @property {string} [your_timestamp]
 * @property {number} [protocol_version]
 */

/**
 * @typedef {object} Proto_CMsgSteamSockets_UDP_ConnectRequest
 * @property {number} [client_connection_id]
 * @property {string} [challenge]
 * @property {string} [my_timestamp]
 * @property {number} [ping_est_ms]
 * @property {Proto_CMsgSteamDatagramSessionCryptInfoSigned} [crypt]
 * @property {Proto_CMsgSteamDatagramCertificateSigned} [cert]
 * @property {number} [legacy_protocol_version]
 * @property {string} [identity_string]
 * @property {string} [legacy_client_steam_id]
 * @property {Proto_CMsgSteamNetworkingIdentityLegacyBinary} [legacy_identity_binary]
 */

/**
 * @typedef {object} Proto_CMsgSteamSockets_UDP_ConnectOK
 * @property {number} [client_connection_id]
 * @property {number} [server_connection_id]
 * @property {string} [your_timestamp]
 * @property {number} [delay_time_usec]
 * @property {Proto_CMsgSteamDatagramSessionCryptInfoSigned} [crypt]
 * @property {Proto_CMsgSteamDatagramCertificateSigned} [cert]
 * @property {string} [identity_string]
 * @property {string} [legacy_server_steam_id]
 * @property {Proto_CMsgSteamNetworkingIdentityLegacyBinary} [legacy_identity_binary]
 */

/**
 * @typedef {object} Proto_CMsgSteamSockets_UDP_ConnectionClosed
 * @property {number} [to_connection_id]
 * @property {number} [from_connection_id]
 * @property {string} [debug]
 * @property {number} [reason_code]
 */

/**
 * @typedef {object} Proto_CMsgSteamSockets_UDP_NoConnection
 * @property {number} [from_connection_id]
 * @property {number} [to_connection_id]
 */

/**
 * @typedef {object} Proto_CMsgSteamSockets_UDP_Stats
 * @property {Proto_CMsgSteamDatagramConnectionQuality} [stats]
 * @property {number} [flags]
 */
