"use client";

import {
  Form,
  InputGroup,
  Label,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  productTitle: string;
  exampleRequired: string;
  brand: string;
  category: string;
  color: string;
  sku: string;
};

const brandOptions = [
  { id: "logitech", textValue: "Logitech" },
  { id: "razer", textValue: "Razer" },
  { id: "apple", textValue: "Apple" },
  { id: "dell", textValue: "Dell" },
  { id: "hp", textValue: "HP" },
  { id: "asus", textValue: "Asus" },
];
const categoryOptions = [
  { id: "mouse", textValue: "Mouse" },
  { id: "keyboard", textValue: "Keyboard" },
  { id: "monitor", textValue: "Monitor" },
  { id: "laptop", textValue: "Laptop" },
  { id: "headphones", textValue: "Headphones" },
];
const colorOptions = [
  { id: "white", textValue: "White" },
  { id: "black", textValue: "Black" },
  { id: "silver", textValue: "Silver" },
  { id: "blue", textValue: "Blue" },
  { id: "red", textValue: "Red" },
  { id: "graphite", textValue: "Graphite" },
];

export function ProductsInfoForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Basic Product Information */}
      <div className="w-full rounded-xl border border-default-200 bg-background p-5 shadow-sm">
        {/* Section Header */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Basic Product Information
            </h2>
            <p className="mt-1 text-sm text-default-500">
              Add the essential information about your product.
            </p>
          </div>
        </div>

        <div className="border-t border-default-200 pt-5">
          {/* Product Title */}
          <TextField className="w-full">
            <Label className="mb-1.5 text-sm font-medium text-foreground">
              Product Title
            </Label>

            <InputGroup className="w-full">
              <InputGroup.Input
                {...register("productTitle")}
                className="h-11 w-full rounded-lg border border-default-300 bg-background px-3 text-sm outline-none transition-all placeholder:text-default-400 hover:border-default-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                placeholder="e.g. Logitech B175 Mouse"
              />
            </InputGroup>
          </TextField>

          {/* Color & SKU */}
          <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {/* Color */}
            <div className="flex w-full flex-col gap-1.5">
              <Controller
                name="color"
                control={control}
                rules={{
                  required: "Please select a color",
                }}
                render={({ field }) => (
                  <Select
                    className="w-full"
                    placeholder="Select color"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <Label className="mb-1.5 text-sm font-medium text-foreground">
                      Color
                    </Label>

                    <Select.Trigger className="h-11 w-full rounded-lg border border-default-300 bg-background px-3 transition-all hover:border-default-400 focus:border-primary focus:ring-2 focus:ring-primary/10">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        {colorOptions.map((option) => (
                          <ListBox.Item
                            key={option.id}
                            id={option.id}
                            textValue={option.textValue}
                          >
                            {option.textValue}
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>
                )}
              />

              {errors.color && (
                <p className="mt-0.5 text-xs font-medium text-danger">
                  {errors.color.message}
                </p>
              )}
            </div>

            {/* SKU */}
            <div className="flex w-full flex-col gap-1.5">
              <TextField className="w-full">
                <Label className="mb-1.5 text-sm font-medium text-foreground">
                  SKU
                </Label>

                <InputGroup className="w-full">
                  <InputGroup.Input
                    {...register("sku", {
                      required: "SKU is required",
                      pattern: {
                        value: /^[A-Za-z0-9-]+$/,
                        message:
                          "SKU can only contain letters, numbers, and hyphens",
                      },
                    })}
                    className="h-11 w-full rounded-lg border border-default-300 bg-background px-3 text-sm outline-none transition-all placeholder:text-default-400 hover:border-default-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                    placeholder="e.g. LOG-B175-WH"
                  />
                </InputGroup>

                {errors.sku && (
                  <p className="mt-1 text-xs font-medium text-danger">
                    {errors.sku.message}
                  </p>
                )}
              </TextField>
            </div>
          </div>

          {/* Brand & Category */}
          <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {/* Brand */}
            <div className="flex w-full flex-col gap-1.5">
              <Controller
                name="brand"
                control={control}
                rules={{
                  required: "Please select a brand",
                }}
                render={({ field }) => (
                  <Select
                    className="w-full"
                    placeholder="Select brand"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <Label className="mb-1.5 text-sm font-medium text-foreground">
                      Brand
                    </Label>

                    <Select.Trigger className="h-11 w-full rounded-lg border border-default-300 bg-background px-3 transition-all hover:border-default-400 focus:border-primary focus:ring-2 focus:ring-primary/10">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        {brandOptions.map((option) => (
                          <ListBox.Item
                            key={option.id}
                            id={option.id}
                            textValue={option.textValue}
                          >
                            {option.textValue}
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>
                )}
              />

              {errors.brand && (
                <p className="mt-0.5 text-xs font-medium text-danger">
                  {errors.brand.message}
                </p>
              )}
            </div>

            {/* Category */}
            <div className="flex w-full flex-col gap-1.5">
              <Controller
                name="category"
                control={control}
                rules={{
                  required: "Please select a category",
                }}
                render={({ field }) => (
                  <Select
                    className="w-full"
                    placeholder="Select category"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <Label className="mb-1.5 text-sm font-medium text-foreground">
                      Category
                    </Label>

                    <Select.Trigger className="h-11 w-full rounded-lg border border-default-300 bg-background px-3 transition-all hover:border-default-400 focus:border-primary focus:ring-2 focus:ring-primary/10">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        {categoryOptions.map((option) => (
                          <ListBox.Item
                            key={option.id}
                            id={option.id}
                            textValue={option.textValue}
                          >
                            {option.textValue}
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>
                )}
              />

              {errors.category && (
                <p className="mt-0.5 text-xs font-medium text-danger">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Form>

    // /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   {/* register your input into the hook by invoking the "register" function */}
    //   <input defaultValue="test" {...register("example")} />

    //   {/* include validation with required or other standard HTML validation rules */}
    //   <input {...register("exampleRequired", { required: true })} />
    //   {/* errors will return when field validation fails  */}
    //   {errors.exampleRequired && <span>This field is required</span>}

    //   <input type="submit" />
    // </form>
  );
}
