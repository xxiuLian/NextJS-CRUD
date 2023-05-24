//LoginBtn.tsx
export type Visible = boolean;

//index.tsx
export type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
};

//boardForm.tsx
export type SessionEmail = string;

export type BoardFormInput = {
  boardTitle: string | number;
  boardContent: string | number;
  userId: string;
  recaptchaResponse: string;
};

//update > [id].tsx
export type UpdateFormGetData = {
  boardCategoryNo: number;
  boardContent: string | number;
  boardHit: number;
  boardId: number;
  boardOrder: number;
  boardOriginFile: string;
  boardRegDate: string;
  boardTitle: string | number;
  boardUpdateFile: string;
  isDelete: string;
  userId: string;
};

//get > [id].tsx
export type GetFormData = {
  boardCategoryNo: number;
  boardContent: string | number;
  boardHit: number;
  boardId: number;
  boardOrder: number;
  boardOriginFile: string;
  boardRegDate: string;
  boardTitle: string | number;
  boardUpdateFile: string;
  isDelete: string;
  userId: string;
};
