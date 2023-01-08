import React from "react";
import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import axios from "axios";
import classnames from "classnames";

import classes from "./Addnewrecipe.module.css";

const Addnewrecipe = () => {
  const [countries, setCountries] = useState([]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ingredients: [{ quantity: "", ingredient: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit = (d) => {
    axios.post("http://localhost:3001/recipes", d).then((res) => {
      reset();
    });
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      const countries = res.data.map((item) => {
        return {
          name: item.name,
          flagurl: item.flag,
        };
      });

      setCountries(countries);
    });
  }, []);

  return (
    <div className={classes.addnewrecipes}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Add new recipe</legend>
          <div className={classes.m_5}>
            <label htmlFor="name" className={classes.form_label}>
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Recipe Name"
              className={classnames(
                classes.form_input,
                errors.name && errors.name.type === "required"
                  ? classes.form_error
                  : ""
              )}
              {...register("name", {
                required: true,
              })}
            />
          </div>

          <div className={classes.m_5}>
            <label htmlFor="author" className={classes.form_label}>
              {" "}
              Author{" "}
            </label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="author"
              className={classnames(
                classes.form_input,
                errors.author && errors.author.type === "required"
                  ? classes.form_error
                  : ""
              )}
              {...register("author", {
                required: true,
              })}
            />
          </div>

          <div className={classes.m_5}>
            <label htmlFor="country" className={classes.form_label}>
              {" "}
              Recipe is from:{" "}
            </label>
            <select
              id="country"
              name="country"
              {...register("countryFlagurl", {
                required: true,
              })}
              className={classnames(
                classes.form_input,
                errors.countryFlagurl &&
                  errors.countryFlagurl.type === "required"
                  ? classes.form_error
                  : ""
              )}
            >
              <option value="">--select country--</option>
              {countries.map((country) => (
                <option value={country.flagurl} key={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className={classes.m_5}>
            <label htmlFor="description" className={classes.form_label}>
              {" "}
              Description{" "}
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Description of the recipe"
              className={classnames(
                classes.form_input,
                errors.description && errors.description.type === "required"
                  ? classes.form_error
                  : ""
              )}
              {...register("description", {
                required: true,
              })}
            />
          </div>

          <div className={classes.m_5}>
            <label htmlFor="image" className={classes.form_label}>
              {" "}
              Image{" "}
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="image"
              className={classnames(
                classes.form_input,
                errors.image && errors.image.type === "required"
                  ? classes.form_error
                  : ""
              )}
              {...register("image", {
                required: true,
              })}
            />
          </div>

          <div className={classes.m_5}>
            <label className={classes.form_label}> Ingredients </label>
            {fields.map((item, index) => {
              return (
                <div key={item.id} className={classes.ingredient}>
                  <div className={classes.ingredient_quantity}>
                    <label
                      htmlFor={`quantity-${item.id}`}
                      className={classes.form_label}
                    >
                      {" "}
                      Quantity{" "}
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      placeholder="Quantity"
                      className={classnames(
                        classes.form_input,
                        errors.ingredients?.[index]?.quantity &&
                          errors.ingredients?.[index]?.quantity.type ===
                            "required"
                          ? classes.form_error
                          : ""
                      )}
                      {...register(`ingredients.${index}.quantity`, {
                        required: true,
                      })}
                    />
                  </div>

                  <div className={classes.ingredient_ingredient}>
                    <label
                      htmlFor={`ingredient-${item.id}`}
                      className={classes.form_label}
                    >
                      {" "}
                      Ingredient{" "}
                    </label>
                    <input
                      type="text"
                      name="ingredient"
                      id="ingredient"
                      placeholder="Ingredient"
                      className={classnames(
                        classes.form_input,
                        errors.ingredients?.[index]?.ingredient &&
                          errors.ingredients?.[index]?.ingredient.type ===
                            "required"
                          ? classes.form_error
                          : ""
                      )}
                      {...register(`ingredients.${index}.ingredient`, {
                        required: true,
                      })}
                    />
                  </div>
                  <div className={classes.ingredient_button}>
                    <button
                      className={classes.ingredient_button_btn}
                      type="button"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <section>
              <button
                type="button"
                className={classes.ingredient_button_btn}
                onClick={() => {
                  append({ quantity: "", ingredient: "" });
                }}
              >
                Add more
              </button>
            </section>
          </div>

          <div className={classes.m_5}>
            <label htmlFor="instructions" className={classes.form_label}>
              {" "}
              Instructions{" "}
            </label>
            <textarea
              id="instructions"
              name="instructions"
              placeholder="instructions of the recipe"
              className={classnames(
                classes.form_input,
                errors.instructions && errors.instructions.type === "required"
                  ? classes.form_error
                  : ""
              )}
              {...register("instructions", {
                required: true,
              })}
            />
          </div>

          <div className={classes.form_button}>
            <button className={classes.btn} type="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Addnewrecipe;
