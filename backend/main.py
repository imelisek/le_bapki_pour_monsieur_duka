


class SalaryInfo:
    def __init__(self, salary, salary_clean, extra_hours):
        self.salary = salary
        self.salary_clean = salary_clean
        self.extra_hours = extra_hours


def get_salary(fix, course, hours_in_month, worked_hours, overtime=True):
    salary = fix * course * worked_hours / hours_in_month
    salary_clean = fix * course
    extra_hours = salary - salary_clean

    return SalaryInfo(salary, salary_clean, extra_hours)


if __name__ == '__main__':
    salary_info = get_salary(fix=4000,
                        course=2.5414,
                        hours_in_month=160,
                        worked_hours=171)

    # print(result)

    print(salary_info.salary)
    print(salary_info.salary_clean)
    print(salary_info.extra_hours)
