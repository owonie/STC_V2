// account data
export type User = {
  displayName: string;
  photoURL: string;
  accessToken: string;
  userUID: string;
};

// room data
export type CurrentRoomServer = {
  isInRoomServer: boolean;
};

export type RoomServer = {
  roomServerName: string;
  roomServerUID: string;
};
