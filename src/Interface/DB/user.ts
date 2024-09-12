enum accessRole {
    client,
    admin,
    unknown
}

interface user {
    user_uuid: bigint;
    accessRole : accessRole;
    mail : string;
    o_name : string;
    name : string;
    user_id : string;
    user_pw : string;
    o_uuid : string;
}

export default user;