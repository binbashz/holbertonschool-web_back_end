#!/usr/bin/env python3
"""  Complex types - mixed list """

from typing import List, Union

"""
 'module, List, Union'
 with this you enable the variable to have several possible types.
 In this case, Union[int, float].
"""


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculate the sum of a list of integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): The input list of integers
        and floats.

    Returns:
        float: The sum of the integers and floats in the list.
    """
    return sum(mxd_lst)
