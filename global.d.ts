type Messages = typeof import("./messages/en.json");

type Messages = UsersMessages & AuthMessages;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
declare interface IntlMessages extends Messages {}
