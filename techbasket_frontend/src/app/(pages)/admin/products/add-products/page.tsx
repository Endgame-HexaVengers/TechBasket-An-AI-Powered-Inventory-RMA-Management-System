// "use client";

import { ProductsInfoForm } from "./ProductsInfoForm";

// import { useEffect, useState } from "react";
// import { useForm, Controller, type Resolver } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardTitle,
//   TextField,
//   Label,
//   Input,
//   TextArea,
//   FieldError,
//   Description,
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectIndicator,
//   SelectPopover,
//   ListBox,
//   ListBoxItem,
//   RadioGroup,
//   Radio,
//   Button,
//   Chip,
//   Separator,
// } from "@heroui/react";
// import {
//   CloudArrowUpIn,
//   Picture,
//   CircleCheck,
//   CircleXmark,
//   Xmark,
//   ShieldCheck,
//   TrashBin,
// } from "@gravity-ui/icons";

// const COLORS = ["White", "Black", "Silver", "Blue", "Red", "Graphite"];
// const BRANDS = ["Logitech", "Razer", "Apple", "Dell", "HP", "Asus"];
// const CATEGORIES = ["Mouse", "Keyboard", "Monitor", "Laptop", "Headset"];
// const WARRANTY_UNITS = ["Days", "Months", "Years"] as const;

// const ACCEPTED_IMAGE_TYPES = [
//   "image/svg+xml",
//   "image/png",
//   "image/jpeg",
//   "image/gif",
// ];
// const MAX_IMAGE_BYTES = 2 * 1024 * 1024;

// const productSchema = z.object({
//   title: z
//     .string()
//     .trim()
//     .min(2, "Product title must be at least 2 characters")
//     .max(120, "Product title must be under 120 characters"),
//   color: z.string().min(1, "Select a color"),
//   sku: z
//     .string()
//     .trim()
//     .min(3, "SKU must be at least 3 characters")
//     .regex(
//       /^[A-Za-z0-9-]+$/,
//       "SKU can only contain letters, numbers, and hyphens",
//     ),
//   brand: z.string().min(1, "Select a brand"),
//   category: z.string().min(1, "Select a category"),
//   warrantyPeriod: z.coerce
//     .number({ message: "Enter a warranty period" })
//     .int("Whole numbers only")
//     .min(0, "Must be 0 or more")
//     .max(50, "That's a long warranty - check the number"),
//   warrantyUnit: z.enum(WARRANTY_UNITS),
//   description: z
//     .string()
//     .trim()
//     .max(500, "Keep the description under 500 characters")
//     .optional()
//     .or(z.literal("")),
//   image: z
//     .custom<FileList>()
//     .refine(
//       (files) =>
//         !files || files.length === 0 || files[0].size <= MAX_IMAGE_BYTES,
//       { message: "Image must be 2MB or smaller" },
//     )
//     .refine(
//       (files) =>
//         !files ||
//         files.length === 0 ||
//         ACCEPTED_IMAGE_TYPES.includes(files[0].type),
//       { message: "Use SVG, PNG, JPG, or GIF" },
//     )
//     .optional(),
//   status: z.enum(["active", "inactive"]),
// });

// type ProductFormValues = z.infer<typeof productSchema>;

// const defaultValues: ProductFormValues = {
//   title: "",
//   color: "",
//   sku: "",
//   brand: "",
//   category: "",
//   warrantyPeriod: 1,
//   warrantyUnit: "Years",
//   description: "",
//   image: undefined,
//   status: "active",
// };

// function useSkuAvailability(sku: string) {
//   const trimmed = sku.trim();
//   const active = trimmed.length >= 3;
//   const [result, setResult] = useState<
//     { for: string; status: "available" | "taken" } | undefined
//   >(undefined);

//   useEffect(() => {
//     if (!active) {
//       return;
//     }
//     const handle = setTimeout(() => {
//       setResult({
//         for: trimmed,
//         status: trimmed.toUpperCase().includes("TAKEN") ? "taken" : "available",
//       });
//     }, 450);
//     return () => clearTimeout(handle);
//   }, [trimmed, active]);

//   if (!active) {
//     return "idle";
//   }
//   if (!result || result.for !== trimmed) {
//     return "checking";
//   }
//   return result.status;
// }

export default function AddProductForm() {
  // const {
  //   register,
  //   control,
  //   handleSubmit,
  //   watch,
  //   setValue,
  //   formState: { errors, isSubmitting },
  // } = useForm<ProductFormValues>({
  //   resolver: zodResolver(
  //     productSchema,
  //   ) as unknown as Resolver<ProductFormValues>,
  //   defaultValues,
  //   mode: "onBlur",
  // });

  // const watched = watch();
  // const skuAvailability = useSkuAvailability(watched.sku);
  // const [imagePreview, setImagePreview] = useState<string | null>(null);

  // const imageRegister = register("image");

  // const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   imageRegister.onChange(e);
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const url = URL.createObjectURL(file);
  //     setImagePreview((prev) => {
  //       if (prev) URL.revokeObjectURL(prev);
  //       return url;
  //     });
  //   } else {
  //     setImagePreview(null);
  //   }
  // };

  // const clearImage = () => {
  //   setValue("image", undefined as unknown as FileList, {
  //     shouldValidate: true,
  //   });
  //   setImagePreview(null);
  // };

  // const onSubmit = async (values: ProductFormValues) => {
  //   await new Promise((r) => setTimeout(r, 600));
  //   console.log("Creating product:", values);
  // };

  // const onSaveDraft = handleSubmit(
  //   (values) => onSubmit({ ...values, status: "inactive" }),
  //   () => {},
  // );

  // const previewTitle = watched.title?.trim() || "Product title";
  // const skuDisplay = watched.sku?.trim() || "-";

  return (
    <div className="container mx-auto  gap-6 py-10 px-4  lg:px-0">
      <h1 className="text-4xl font-bold">Add Product</h1>
      <p>Create a new product in the TechBasket product catalog.</p>
      <ProductsInfoForm></ProductsInfoForm>
    </div>
  );
  // return (
  //   <form
  //     onSubmit={handleSubmit(onSubmit)}
  //     className="container mx-auto grid grid-cols-1 gap-6 py-10 px-4 lg:grid-cols-12 lg:px-0"
  //   >
  //     <main className="lg:col-span-8 xl:col-span-9 space-y-6">
  //       <div>
  //         <h1 className="text-2xl font-semibold">Add Product</h1>
  //         <p className="text-sm text-default-500">
  //           Create a new product in the TechBasket product catalog.
  //         </p>
  //       </div>

  //       <Card className="border border-default-200">
  //         <CardHeader className="flex-col items-start gap-1 px-6 pt-5">
  //           <CardTitle>Basic Product Information</CardTitle>
  //         </CardHeader>
  //         <Separator />
  //         <CardContent className="gap-5 px-6 py-6">
  //           <TextField isInvalid={!!errors.title} className="w-full">
  //             <Label>Product Title</Label>
  //             <Input
  //               {...register("title")}
  //               placeholder="e.g. Logitech B175 Mouse"
  //             />
  //             <Description>
  //               Enter the base product/model name. Do not include the color.
  //             </Description>
  //             <FieldError>{errors.title?.message}</FieldError>
  //           </TextField>

  //           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
  //             <Controller
  //               control={control}
  //               name="color"
  //               render={({ field, fieldState }) => (
  //                 <Select
  //                   className="w-full"
  //                   selectedKey={field.value || undefined}
  //                   onSelectionChange={(key) =>
  //                     field.onChange(String(key ?? ""))
  //                   }
  //                   isInvalid={!!fieldState.error}
  //                 >
  //                   <Label>Color</Label>
  //                   <SelectTrigger className="w-full">
  //                     <SelectValue>
  //                       {({ isPlaceholder }) =>
  //                         isPlaceholder ? "Select or search color" : undefined
  //                       }
  //                     </SelectValue>
  //                     <SelectIndicator />
  //                   </SelectTrigger>
  //                   <SelectPopover className="w-full">
  //                     <ListBox>
  //                       {COLORS.map((color) => (
  //                         <ListBoxItem key={color} id={color}>
  //                           {color}
  //                         </ListBoxItem>
  //                       ))}
  //                     </ListBox>
  //                   </SelectPopover>
  //                   <FieldError>{fieldState.error?.message}</FieldError>
  //                 </Select>
  //               )}
  //             />

  //             <TextField
  //               isInvalid={!!errors.sku || skuAvailability === "taken"}
  //               className="w-full"
  //             >
  //               <Label>SKU</Label>
  //               <Input {...register("sku")} placeholder="LOG-B175-WH" />
  //               <Description>
  //                 <span className="inline-flex items-center gap-1">
  //                   <span>SKU must be unique</span>
  //                   {skuAvailability === "checking" && (
  //                     <span className="text-default-400">- checking...</span>
  //                   )}
  //                   {skuAvailability === "available" && (
  //                     <span className="inline-flex items-center gap-1 text-success">
  //                       <CircleCheck width={12} height={12} /> SKU available
  //                     </span>
  //                   )}
  //                 </span>
  //               </Description>
  //               <FieldError>
  //                 {errors.sku?.message ??
  //                   (skuAvailability === "taken"
  //                     ? "This SKU is already in use"
  //                     : undefined)}
  //               </FieldError>
  //             </TextField>
  //           </div>

  //           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
  //             <Controller
  //               control={control}
  //               name="brand"
  //               render={({ field, fieldState }) => (
  //                 <Select
  //                   className="w-full"
  //                   selectedKey={field.value || undefined}
  //                   onSelectionChange={(key) =>
  //                     field.onChange(String(key ?? ""))
  //                   }
  //                   isInvalid={!!fieldState.error}
  //                 >
  //                   <Label>Brand</Label>
  //                   <SelectTrigger className="w-full">
  //                     <SelectValue>
  //                       {({ isPlaceholder }) =>
  //                         isPlaceholder ? "Select brand" : undefined
  //                       }
  //                     </SelectValue>
  //                     <SelectIndicator />
  //                   </SelectTrigger>
  //                   <SelectPopover className="w-full">
  //                     <ListBox>
  //                       {BRANDS.map((brand) => (
  //                         <ListBoxItem key={brand} id={brand}>
  //                           {brand}
  //                         </ListBoxItem>
  //                       ))}
  //                     </ListBox>
  //                   </SelectPopover>
  //                   <FieldError>{fieldState.error?.message}</FieldError>
  //                 </Select>
  //               )}
  //             />

  //             <Controller
  //               control={control}
  //               name="category"
  //               render={({ field, fieldState }) => (
  //                 <Select
  //                   className="w-full"
  //                   selectedKey={field.value || undefined}
  //                   onSelectionChange={(key) =>
  //                     field.onChange(String(key ?? ""))
  //                   }
  //                   isInvalid={!!fieldState.error}
  //                 >
  //                   <Label>Category</Label>
  //                   <SelectTrigger className="w-full">
  //                     <SelectValue>
  //                       {({ isPlaceholder }) =>
  //                         isPlaceholder ? "Select category" : undefined
  //                       }
  //                     </SelectValue>
  //                     <SelectIndicator />
  //                   </SelectTrigger>
  //                   <SelectPopover className="w-full">
  //                     <ListBox>
  //                       {CATEGORIES.map((category) => (
  //                         <ListBoxItem key={category} id={category}>
  //                           {category}
  //                         </ListBoxItem>
  //                       ))}
  //                     </ListBox>
  //                   </SelectPopover>
  //                   <FieldError>{fieldState.error?.message}</FieldError>
  //                 </Select>
  //               )}
  //             />
  //           </div>
  //         </CardContent>
  //       </Card>

  //       <Card className="border border-default-200">
  //         <CardHeader className="flex-col items-start gap-1 px-6 pt-5">
  //           <CardTitle>Warranty Information</CardTitle>
  //         </CardHeader>
  //         <Separator />
  //         <CardContent className="gap-5 px-6 py-6">
  //           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
  //             <TextField isInvalid={!!errors.warrantyPeriod} className="w-full">
  //               <Label>Warranty Period</Label>
  //               <Input {...register("warrantyPeriod")} type="number" min={0} />
  //               <FieldError>{errors.warrantyPeriod?.message}</FieldError>
  //             </TextField>

  //             <Controller
  //               control={control}
  //               name="warrantyUnit"
  //               render={({ field }) => (
  //                 <Select
  //                   className="w-full"
  //                   selectedKey={field.value}
  //                   onSelectionChange={(key) =>
  //                     field.onChange(String(key ?? "Years"))
  //                   }
  //                 >
  //                   <Label>Unit</Label>
  //                   <SelectTrigger className="w-full">
  //                     <SelectValue />
  //                     <SelectIndicator />
  //                   </SelectTrigger>
  //                   <SelectPopover className="w-full">
  //                     <ListBox>
  //                       {WARRANTY_UNITS.map((unit) => (
  //                         <ListBoxItem key={unit} id={unit}>
  //                           {unit}
  //                         </ListBoxItem>
  //                       ))}
  //                     </ListBox>
  //                   </SelectPopover>
  //                 </Select>
  //               )}
  //             />
  //           </div>
  //         </CardContent>
  //       </Card>

  //       <Card className="border border-default-200">
  //         <CardHeader className="flex-col items-start gap-1 px-6 pt-5">
  //           <CardTitle>Product Description</CardTitle>
  //         </CardHeader>
  //         <Separator />
  //         <CardContent className="px-6 py-6">
  //           <TextField isInvalid={!!errors.description} className="w-full">
  //             <Label>Short Description</Label>
  //             <TextArea
  //               {...register("description")}
  //               placeholder="Brief overview of the product..."
  //               rows={4}
  //             />
  //             <FieldError>{errors.description?.message}</FieldError>
  //           </TextField>
  //         </CardContent>
  //       </Card>

  //       <Card className="border border-default-200">
  //         <CardHeader className="flex-col items-start gap-1 px-6 pt-5">
  //           <CardTitle>Product Image</CardTitle>
  //         </CardHeader>
  //         <Separator />
  //         <CardContent className="px-6 py-6">
  //           <label
  //             htmlFor="product-image"
  //             className="group relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-large border-2 border-dashed border-default-300 bg-default-50 px-6 py-10 text-center transition-colors hover:border-primary hover:bg-primary-50"
  //           >
  //             {imagePreview ? (
  //               <>
  //                 <img
  //                   src={imagePreview}
  //                   alt="Product preview"
  //                   className="h-24 w-24 rounded-medium object-cover"
  //                 />
  //                 <Button
  //                   size="sm"
  //                   variant="danger"
  //                   onPress={clearImage}
  //                   className="mt-1"
  //                 >
  //                   <TrashBin width={14} height={14} /> Remove image
  //                 </Button>
  //               </>
  //             ) : (
  //               <>
  //                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary">
  //                   <CloudArrowUpIn width={20} height={20} />
  //                 </div>
  //                 <p className="text-sm text-default-600">
  //                   <span className="font-medium text-primary">
  //                     Click to upload
  //                   </span>{" "}
  //                   or drag and drop
  //                 </p>
  //                 <p className="text-xs text-default-400">
  //                   SVG, PNG, JPG, or GIF (max 2MB)
  //                 </p>
  //               </>
  //             )}
  //             <input
  //               id="product-image"
  //               type="file"
  //               accept={ACCEPTED_IMAGE_TYPES.join(",")}
  //               className="hidden"
  //               onChange={onImageChange}
  //             />
  //           </label>
  //           {errors.image && (
  //             <p className="mt-2 text-xs text-danger">
  //               {errors.image.message as string}
  //             </p>
  //           )}
  //         </CardContent>
  //       </Card>

  //       <Card className="border border-default-200">
  //         <CardHeader className="flex-col items-start gap-1 px-6 pt-5">
  //           <CardTitle>Product Status</CardTitle>
  //         </CardHeader>
  //         <Separator />
  //         <CardContent className="px-6 py-6">
  //           <Controller
  //             control={control}
  //             name="status"
  //             render={({ field }) => (
  //               <RadioGroup
  //                 orientation="horizontal"
  //                 value={field.value}
  //                 onChange={field.onChange}
  //               >
  //                 <Radio value="active">Active</Radio>
  //                 <Radio value="inactive">Inactive</Radio>
  //               </RadioGroup>
  //             )}
  //           />
  //         </CardContent>
  //       </Card>

  //       <div className="flex items-center justify-end gap-3 lg:hidden">
  //         <Button variant="ghost">Cancel</Button>
  //         <Button
  //           variant="outline"
  //           onPress={() => onSaveDraft()}
  //           isDisabled={isSubmitting}
  //         >
  //           Save as Draft
  //         </Button>
  //         <Button variant="primary" type="submit" isPending={isSubmitting}>
  //           Create Product
  //         </Button>
  //       </div>
  //     </main>

  //     <aside className="lg:col-span-4 xl:col-span-3">
  //       <div className="sticky top-6 space-y-4">
  //         <Card className="border border-default-200">
  //           <CardHeader className="px-6 pt-5">
  //             <CardTitle>Product Preview</CardTitle>
  //           </CardHeader>
  //           <Separator />
  //           <CardContent className="gap-4 px-6 py-6">
  //             <div className="flex h-40 w-full items-center justify-center rounded-large bg-default-100">
  //               {imagePreview ? (
  //                 <img
  //                   src={imagePreview}
  //                   alt="Product preview"
  //                   className="h-full w-full rounded-large object-contain p-4"
  //                 />
  //               ) : (
  //                 <Picture
  //                   width={28}
  //                   height={28}
  //                   className="text-default-300"
  //                 />
  //               )}
  //             </div>

  //             <div>
  //               <p className="text-xs font-medium uppercase tracking-wide text-default-400">
  //                 Title
  //               </p>
  //               <p className="text-sm font-semibold text-foreground">
  //                 {previewTitle}
  //               </p>
  //             </div>

  //             <div className="grid grid-cols-2 gap-4">
  //               <div>
  //                 <p className="text-xs font-medium uppercase tracking-wide text-default-400">
  //                   Brand
  //                 </p>
  //                 <p className="text-sm text-foreground">
  //                   {watched.brand || "-"}
  //                 </p>
  //               </div>
  //               <div>
  //                 <p className="text-xs font-medium uppercase tracking-wide text-default-400">
  //                   Category
  //                 </p>
  //                 <p className="text-sm text-foreground">
  //                   {watched.category || "-"}
  //                 </p>
  //               </div>
  //               <div>
  //                 <p className="text-xs font-medium uppercase tracking-wide text-default-400">
  //                   SKU
  //                 </p>
  //                 <p className="text-sm text-foreground">{skuDisplay}</p>
  //               </div>
  //               <div>
  //                 <p className="text-xs font-medium uppercase tracking-wide text-default-400">
  //                   Color
  //                 </p>
  //                 <div className="flex items-center gap-1.5">
  //                   {watched.color && (
  //                     <span
  //                       className="h-3 w-3 rounded-full"
  //                       style={{ backgroundColor: watched.color.toLowerCase() }}
  //                     />
  //                   )}
  //                   <p className="text-sm text-foreground">
  //                     {watched.color || "-"}
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>

  //             <Separator />

  //             <div className="flex items-center justify-between">
  //               <div className="flex items-center gap-1.5">
  //                 <ShieldCheck
  //                   width={14}
  //                   height={14}
  //                   className="text-default-400"
  //                 />
  //                 <p className="text-sm text-foreground">
  //                   {watched.warrantyPeriod ?? "-"} {watched.warrantyUnit}
  //                 </p>
  //               </div>
  //               <Chip
  //                 size="sm"
  //                 variant="soft"
  //                 color={watched.status === "active" ? "success" : "default"}
  //               >
  //                 {watched.status === "active" ? (
  //                   <span className="inline-flex items-center gap-1">
  //                     <CircleCheck width={12} height={12} /> Active
  //                   </span>
  //                 ) : (
  //                   <span className="inline-flex items-center gap-1">
  //                     <CircleXmark width={12} height={12} /> Inactive
  //                   </span>
  //                 )}
  //               </Chip>
  //             </div>
  //           </CardContent>
  //         </Card>
  //       </div>
  //     </aside>

  //     <div className="fixed inset-x-0 bottom-0 z-10 hidden border-t border-default-200 bg-background/95 backdrop-blur lg:block">
  //       <div className="container mx-auto flex items-center justify-end gap-3 px-4 py-3">
  //         <Button variant="ghost">
  //           <Xmark width={16} height={16} /> Cancel
  //         </Button>
  //         <Button
  //           variant="outline"
  //           onPress={() => onSaveDraft()}
  //           isDisabled={isSubmitting}
  //         >
  //           Save as Draft
  //         </Button>
  //         <Button variant="primary" type="submit" isPending={isSubmitting}>
  //           Create Product
  //         </Button>
  //       </div>
  //     </div>
  //   </form>
  // );
}
