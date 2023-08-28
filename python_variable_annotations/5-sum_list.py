#!/usr/bin/env python3
"""  Complex types - list of floats """

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Calculate the sum of a list of floats.

    Function sum_list is annotated with types,
    and it accepts a list named input_list
    containing float numbers as an argument.
    It calculates and returns the sum of the numbers
    as a float
    Args:
        input_list (List[float]): The input list of floats.

    Returns:
        float: The sum of the floats in the list.
    """
    return sum(input_list)
