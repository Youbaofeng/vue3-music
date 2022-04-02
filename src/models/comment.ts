export interface Comment {
    user: User;
    beReplied: any[];
    pendantData?: any;
    showFloorComment?: any;
    status: number;
    commentId: number;
    content: string;
    contentResource?: any;
    time: number;
    timeStr: string;
    needDisplayTime: boolean;
    likedCount: number;
    expressionUrl?: any;
    commentLocationType: number;
    parentCommentId: number;
    decoration: Decoration;
    repliedMark?: any;
    grade?: any;
    liked: boolean;
  }
  
  interface Decoration {
  }
  
  interface User {
    locationInfo?: any;
    liveInfo?: any;
    anonym: number;
    userId: number;
    avatarDetail?: any;
    userType: number;
    avatarUrl: string;
    authStatus: number;
    expertTags?: any;
    experts?: any;
    vipType: number;
    followed: boolean;
    mutual: boolean;
    remarkName?: any;
    vipRights: VipRights;
    nickname: string;
    commonIdentity?: any;
  }
  
  interface VipRights {
    associator: Associator;
    musicPackage?: any;
    redVipAnnualCount: number;
    redVipLevel: number;
  }
  
  interface Associator {
    vipCode: number;
    rights: boolean;
  }