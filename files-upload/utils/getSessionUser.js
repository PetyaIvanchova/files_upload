import { getServerSession } from "next-auth";

export const getSessionUser = async () => {
  try {
    const session = await getServerSession();

    if (!session || !session.user) {
      return null;
    }

    return {
      user: session.user,
      userId: session.user.id,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
