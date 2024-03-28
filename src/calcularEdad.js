function calculateAge(birthdayString) {
    const birthday = new Date(birthdayString);
    const now = new Date();

    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();

    if (now.getDate() < birthday.getDate()) {
        months--;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years: years,
        months: months
    };
}