import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { CHAMA_DAO_ADDRESS, CHAMA_DAO_ABI } from "../lib/contracts";
import { parseEther } from "viem";

// Hook to get total number of chamas
export function useTotalChamas() {
  return useReadContract({
    address: CHAMA_DAO_ADDRESS,
    abi: CHAMA_DAO_ABI,
    functionName: "chamaCounter",
  });
}

// Hook to get chama details by ID
export function useChamaDetails(chamaId: number) {
  return useReadContract({
    address: CHAMA_DAO_ADDRESS,
    abi: CHAMA_DAO_ABI,
    functionName: "chamas",
    args: [BigInt(chamaId)],
  });
}

// Hook to check if user is a member of a chama
export function useIsMember(chamaId: number, userAddress: `0x${string}` | undefined) {
  return useReadContract({
    address: CHAMA_DAO_ADDRESS,
    abi: CHAMA_DAO_ABI,
    functionName: "isMember",
    args: userAddress ? [BigInt(chamaId), userAddress] : undefined,
    query: {
      enabled: !!userAddress,
    },
  });
}

// Hook to get member details
export function useMemberDetails(chamaId: number, userAddress: `0x${string}` | undefined) {
  return useReadContract({
    address: CHAMA_DAO_ADDRESS,
    abi: CHAMA_DAO_ABI,
    functionName: "members",
    args: userAddress ? [BigInt(chamaId), userAddress] : undefined,
    query: {
      enabled: !!userAddress,
    },
  });
}

// Hook to create a chama
export function useCreateChama() {
  const { data: hash, writeContract, isPending, error } = useWriteContract();

  const createChama = (
    name: string,
    description: string,
    contributionAmount: string,
    contributionFrequency: number
  ) => {
    writeContract({
      address: CHAMA_DAO_ADDRESS,
      abi: CHAMA_DAO_ABI,
      functionName: "createChama",
      args: [name, description, parseEther(contributionAmount), BigInt(contributionFrequency)],
    });
  };

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  return {
    createChama,
    isPending,
    isConfirming,
    isSuccess,
    error,
    hash,
  };
}

// Hook to join a chama
export function useJoinChama() {
  const { data: hash, writeContract, isPending, error } = useWriteContract();

  const joinChama = (chamaId: number) => {
    writeContract({
      address: CHAMA_DAO_ADDRESS,
      abi: CHAMA_DAO_ABI,
      functionName: "joinChama",
      args: [BigInt(chamaId)],
    });
  };

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  return {
    joinChama,
    isPending,
    isConfirming,
    isSuccess,
    error,
    hash,
  };
}

// Hook to make a contribution
export function useContribute() {
  const { data: hash, writeContract, isPending, error } = useWriteContract();

  const contribute = (chamaId: number, amount: string) => {
    writeContract({
      address: CHAMA_DAO_ADDRESS,
      abi: CHAMA_DAO_ABI,
      functionName: "contribute",
      args: [BigInt(chamaId)],
      value: parseEther(amount),
    });
  };

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  return {
    contribute,
    isPending,
    isConfirming,
    isSuccess,
    error,
    hash,
  };
}

// Hook to request a loan
export function useRequestLoan() {
  const { data: hash, writeContract, isPending, error } = useWriteContract();

  const requestLoan = (chamaId: number, amount: string, purpose: string) => {
    writeContract({
      address: CHAMA_DAO_ADDRESS,
      abi: CHAMA_DAO_ABI,
      functionName: "requestLoan",
      args: [BigInt(chamaId), parseEther(amount), purpose],
    });
  };

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  return {
    requestLoan,
    isPending,
    isConfirming,
    isSuccess,
    error,
    hash,
  };
}

// Hook to vote on a loan
export function useVoteOnLoan() {
  const { data: hash, writeContract, isPending, error } = useWriteContract();

  const voteOnLoan = (chamaId: number, loanId: number, support: boolean) => {
    writeContract({
      address: CHAMA_DAO_ADDRESS,
      abi: CHAMA_DAO_ABI,
      functionName: "voteOnLoan",
      args: [BigInt(chamaId), BigInt(loanId), support],
    });
  };

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  return {
    voteOnLoan,
    isPending,
    isConfirming,
    isSuccess,
    error,
    hash,
  };
}
