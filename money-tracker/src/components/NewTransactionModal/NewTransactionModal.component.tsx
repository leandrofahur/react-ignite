import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./NewTransactionModal.styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/Transactions.context";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outgoing"]),
});

type NewTransactionsFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  const {createTransaction} = useContext(TransactionsContext);

  async function handleCreateNewTransaction(data: NewTransactionsFormInputs) {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // console.log(data);

    const {description,price,category,type} = data;

    await createTransaction({
      description,
      price,
      category,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X size={20} />
        </CloseButton>
        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Amount"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={(props) => {
              const { field } = props;
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Income
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outgoing" value="outgoing">
                    <ArrowCircleDown size={24} />
                    Outgoing
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
